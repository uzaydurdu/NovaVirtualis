import React, { useState } from "react";
import { Carousel, Assets, Unity, NetworkGraph } from '../components';
import '../styles/services.css';


const items = [
    "metaverse",
    "assets",
    "data",
]

const Services = () => {

  const [work, setWork] = useState("metaverse");

    return (
        <div className="section" id='assets'>
          <div className="container">
            <div className="left">
              <ul className="list">
                {items.map((item, index) => (
                  <li className="list-item" data-text={item} key={index} onClick={() => setWork(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="right">
            {work === "metaverse" ? (
            <Unity />
          ) : work === "assets" ? (
            <Assets />
          ) : (
            <NetworkGraph />
          )}
            </div>
          </div>
        </div>
      );
      
    };
    export default Services;