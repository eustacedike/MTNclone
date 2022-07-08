import './App.css';



const Footer = () => {
  return (
    <>
    <div className='footer'>
            <svg viewBox={"0 0 500 25"} preserveAspectRatio={"none"} className="curve-5">
                  <g>
                      <path d="M0,25h250C166.7,25,83.3,16.7,0,0V25z"></path>
                      <path d="M250,25h250V0C416.7,16.7,333.3,25,250,25z"></path>
                  </g>
            </svg>
        <ul>
          <li>
            <div className="footerdrop">
              <button className="footerdropbtn">
                <span>Personal</span>
                <div id='bardiv' className='bardiv' onClick={()=>{document.getElementById("bardiv").classList.toggle('flat'); document.getElementById("footdown").classList.toggle("showfootdown")}}>
                  <div className='footbar-1'></div>
                  <div className='footbar-2'></div>
                </div>
              </button>
              <div id="footdown" className="footdown">
                <a href="#home">Services</a>
                <a href="#about">Data</a>
                <a href="#contact">Devices</a>
                <a href="#contact">Getting Started</a>
                <a href="#contact">myMTN App</a>
              </div>
            </div>
          </li>

          <li>
            <div className="footerdrop">
              <button className="footerdropbtn">
                <span>Business</span>
              </button>
            </div>
          </li>

          <li>
            <div className="footerdrop">
              <button className="footerdropbtn">
                <span>Investors</span>
                <div id='bardiv-2' className='bardiv' onClick={()=>{document.getElementById("bardiv-2").classList.toggle('flat'); document.getElementById("footdown-2").classList.toggle("showfootdown")}}>
                  <div className='footbar-1'></div>
                  <div className='footbar-2'></div>
                </div>
              </button>
              <div id="footdown-2" className="footdown">
                <a href="#home">More in Investors</a>
                <a href="#about">Shareholders</a>
                <a href="#contact">Financial Reporting</a>
                <a href="#contact">Announcements</a>
              </div>
            </div>
          </li>

          <li>
            <div className="footerdrop">
              <button className="footerdropbtn">
                <span>Foundation</span>
              </button>
            </div>
          </li>

          <li>
            <div className="footerdrop">
              <button className="footerdropbtn">
                <span>Events</span>
              </button>
            </div>
          </li>

          <li>
            <div className="footerdrop">
              <button className="footerdropbtn">
                <span>Support</span>
                <div id='bardiv-3' className='bardiv' onClick={()=>{document.getElementById("bardiv-3").classList.toggle('flat'); document.getElementById("footdown-3").classList.toggle("showfootdown")}}>
                  <div className='footbar-1'></div>
                  <div className='footbar-2'></div>
                </div>
              </button>
              <div id="footdown-3" className="footdown">
                <a href="#home">Help Center</a>
                <a href="#about">Community</a>
                <a href="#contact">JustForYou</a>
              </div>
            </div>
          </li>

          <li>
            <div className="footerdrop">
              <button className="footerdropbtn">
                <span>About Us</span>
                <div id='bardiv-4' className='bardiv' onClick={()=>{document.getElementById("bardiv-4").classList.toggle('flat'); document.getElementById("footdown-4").classList.toggle("showfootdown")}}>
                  <div className='footbar-1'></div>
                  <div className='footbar-2'></div>
                </div>
              </button>
              <div id="footdown-4" className="footdown">
                <a href="#home">Our Code of Ethics</a>
                <a href="#about">Privacy & Data Protection</a>
                <a href="#contact">Our Story</a>
               </div>
            </div>
          </li>

          <li>
            <div className="footerdrop">
              <button className="footerdropbtn">
                <span>Careers</span>
                <div id='bardiv-5' className='bardiv' onClick={()=>{document.getElementById("bardiv-5").classList.toggle('flat'); document.getElementById("footdown-5").classList.toggle("showfootdown")}}>
                  <div className='footbar-1'></div>
                  <div className='footbar-2'></div>
                </div>
              </button>
              <div id="footdown-5" className="footdown">
                <a href="#home">Apply for Jobs</a>
                <a href="#about">Frequently Asked Questions</a>
                <a href="#contact">y'ello Women</a>
              </div>
            </div>
          </li>

          <li>
            <div className="footerdrop">
              <button className="footerdropbtn">
                <span>Contact Us</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
  }

  export default Footer;