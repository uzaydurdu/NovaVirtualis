import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import data from '../../public/data/data';

const NetworkGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const nodes = data.nodes;
    const links = data.links;

    console.log('Node data:', nodes);

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id))
      .force('charge', d3.forceManyBody().strength(-250))
      .force('center', d3.forceCenter(width / 3, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.1)) // Constrain horizontal position
      .force('y', d3.forceY(height / 2).strength(0.1)); // Constrain vertical position

    const link = svg.selectAll('.link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .style('stroke', '#898989');

    const node = svg.selectAll('.node')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('r', 10)
      .style('fill', '#8BCB10');

    node.append('title').text(d => d.name);

    const drag = d3.drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag);

    node.on('mouseover', (event, d) => {
        node.transition().duration(200).style('opacity', 0.5);
        link.transition().duration(200).style('stroke-opacity', 0.2);
        d3.select(event.target).transition().duration(200).style('opacity', 1);

        link.filter(linkData => linkData.source === d || linkData.target === d)
        .transition().duration(200)
        .style('stroke-opacity', 1);
      });
  
      node.on('mouseout', () => {
        node.transition().duration(300).style('opacity', 1);
        link.transition().duration(300).style('stroke-opacity', 1);
      });

      simulation.on('tick', () => {
        // Apply constraints for each node
        node
          .attr('cx', d => Math.max(10, Math.min(width - 10, d.x))) // Ensure nodes stay within the SVG
          .attr('cy', d => Math.max(10, Math.min(height - 10, d.y)));
        
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);
      });
  
      simulation.restart();
    }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default NetworkGraph;
