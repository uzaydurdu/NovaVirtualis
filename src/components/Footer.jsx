import React from 'react';
import styled from 'styled-components';
import '../styles/footer.css';
import x from '../../public/assets/x.png';
import dc from '../../public/assets/dc.png';
import yt from '../../public/assets/yt.png';
import un from '../../public/assets/un.png';
import novaLogo from '../../public/assets/novaLogo2.png';
import git from '../../public/assets/git.png';
import gg from '../../public/assets/gg.png'

const Line = styled.div`
  width: 220px;
  height: 8px;
  background: var(--gradient-bar-portfolio);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 4rem;
  margin-top: 0.8rem;
`

const handleIconClick = (url, event) => {
  event.preventDefault();
  window.open(url, "_blank");
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="novavr__footer section__padding">
        <div className="novavr__footer-links">
        <div className="novavr__footer-links-div">
              <Line />
              <img src={novaLogo} alt="novaLogo" className="novaLogo" />
             
          </div>
          <div className="novavr__footer-links-div">
            <h4>Asset Store</h4>
            <a href="https://assetstore.unity.com/" class="image-link" onClick={(e) => handleIconClick("https://assetstore.unity.com/", e)}>

              <img src={un} alt="Unity Asset Store" />
              <span className="text">Check Assets</span>
            </a>
          </div>
          <div className="novavr__footer-links-div">
            <h4>Follow Us</h4>
            <div className="socialmedias">
              <div className="socialmedia">

                <a href="https://www.youtube.com/@NovaVirtualis" class="image-link" onClick={(e) => handleIconClick("https://www.youtube.com/@NovaVirtualis", e)}>
                  <img src={yt} alt="YouTube" />
                  <span className="text">On YouTube</span>
                </a>
              </div>
              <div className="socialmedia">

                <a href="https://github.com/uzaydurdu" class="image-link" onClick={(e) => handleIconClick("https://github.com/uzaydurdu", e)}>
                  <img src={git} alt="Github" />
                  
                  <span className="text">On Github</span>
                </a>
              </div>
              <div className="socialmedia">

                <a href="https://twitter.com/NVirtualis" class="image-link" onClick={(e) => handleIconClick("https://twitter.com/NVirtualis", e)}>
                  <img src={x} alt="X" />
                  <span className="text">On Twitter</span>
                </a>
              </div>
              
            </div>
          </div>
          <div className="novavr__footer-links-div">
            <h4>Contact</h4>

            <div className="contact">
              <a href="/discord" class="image-link"><img src={gg} alt="discord" /><span className="text">novavirtualis@gmail.com</span></a>
              <a href="https://discord.gg/58VPK54u" class="image-link"><img src={dc} alt="discord" /><span className="text">Jump To Our Channel</span></a>

            </div>

          </div>

        </div>
      </div>

      <hr />

      <div className="novavr__footer-below">
        <div className="novavr__footer-copyright">
          <p>
            {new Date().getFullYear()} @ NovaVirtualis Devs. &copy; All rights reserved.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Footer