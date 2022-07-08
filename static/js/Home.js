// import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import chevron from './chevrond.png';
import chevronr from './chevronr.png';
import Banner from './banner.js';

// function fret() {
//   document.getElementById("myDropdown").classList.toggle("show");
// };

function Home() {
  return (
    <div className="App" id="app">
      <div className='desk'>
          <div><div className='desktop-person'><i id='desk-port' class="mtn-icon mtn-icon-mymtn text-c-yellow btn-icon"></i></div><span>Personal</span></div>
          <div><div className='desktop-person'><i id='desk-port' class="mtn-icon mtn-icon-mtn-business text-c-black btn-icon"></i></div><span>Business</span></div>
          <div><div className='desktop-person'><i id='desk-port' class="mtn-icon mtn-icon-mtn-play text-c-play btn-icon"></i></div><span>Play</span></div>
          <div><div className='desktop-person'><i id='desk-port' class="mtn-icon mtn-icon-mtn-momo text-c-momo btn-icon"></i></div><span>Momo</span></div>
      </div>
      <div className='header'>
        <div className='main-div1'>

          

          <Banner/>
          <div className='caroucircles'>
                  <span className='dots'></span>
                  <span className='dots'></span>
                  <span className='dots'></span>
                  <span className='dots'></span>
          </div>
          <svg viewBox={"0 0 500 25"} preserveAspectRatio={"none"} className="curve-1">
                  <g>
                      <path d="M0,25h250C166.7,25,83.3,16.7,0,0V25z"></path>
                      <path d="M250,25h250V0C416.7,16.7,333.3,25,250,25z"></path>
                  </g>
          </svg>
        </div>
          <div className='links'>
            <button id= 'mob-btn' className='btn-1'><i id='port' class="mtn-icon mtn-icon-mymtn text-c-yellow btn-icon"></i><span>Personal</span></button>
            <button id= 'mob-btn' className='btn-1'><i id='port' class="mtn-icon mtn-icon-mtn-business text-c-black btn-icon"></i><span>Business</span></button>
            <button id= 'mob-btn' className='btn-1'><i id='port' class="mtn-icon mtn-icon-mtn-play text-c-play btn-icon"></i><span>Play</span></button>
            <button id= 'mob-btn' className='btn-1'><i id='port' class="mtn-icon mtn-icon-mtn-momo text-c-momo btn-icon"></i><span>Momo</span></button>
            <button className='btn-2'><span>Login to myMTN</span><img className='btnchev' src={chevronr}/></button>
            <button className='btn-2'><span>Link your NIN</span><img className='btnchev' src={chevronr}/></button>
          </div>
          <div>
            <svg viewBox={"0 0 500 25"} preserveAspectRatio={"none"} className="curve-2">
                  <g>
                      <path d="M0,25h250C166.7,25,83.3,16.7,0,0V25z"></path>
                      <path d="M250,25h250V0C416.7,16.7,333.3,25,250,25z"></path>
                  </g>
            </svg>
          </div>
        

        {/* Personal */}
        <div className='personal '>
          <div className='personhead'>
            <div className='personcaption' >
              <h1><i className="mtn-icon mtn-icon-mymtn-badge text-c-yellow"></i></h1><h3>Personal</h3>
            </div>
            <img className='personchev' src={chevronr}/>
          </div>
          <div className="gallery js-flickity" id='mycarou' data-flickity-options={'{"wrapAround": true}'}>
            <div className="gallery-cell" id='person1'>
              <div class="mtn-card__content">
	              <div class="mtn-tag mtn-tag--yellow">Roaming</div>
                  <h3 class="mtn-card__header mtn-h2">Stay connected to home while abroad</h3>
                  <button className='btn-1' id='learnmo'><span>Learn More </span><img className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='person2'>
              <div class="mtn-card__content">
	              <div class="mtn-tag mtn-tag--yellow">Broadband</div>
                  <h3 class="mtn-card__header mtn-h2">Broadband Services</h3>
                  <button className='btn-1' id='learnmo'><span>Learn More </span><img className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='person3'>
              <div class="mtn-card__content">
	              <div class="mtn-tag mtn-tag--yellow">Data Plans</div>
                  <h3 class="mtn-card__header mtn-h2">Choosing a Mobile data plan has never been this simple</h3>
                  <button className='btn-1' id='learnmo'><span>Learn More </span><img className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='person4'>
              <div class="mtn-card__content">
	              <div class="mtn-tag mtn-tag--yellow">Personal</div>
                  <h3 class="mtn-card__header mtn-h2">4G LTE</h3>
                  <button className='btn-1' id='learnmo'><span>Learn More </span><img className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='person5'>
              <div class="mtn-card__content">
	              <div class="mtn-tag mtn-tag--yellow">Pulse</div>
                  <h3 class="mtn-card__header mtn-h2">#DoYou</h3>
                  <button className='btn-1' id='learnmo'><span>Learn More </span><img className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='person6'>
              <div class="mtn-card__content">
	              <div class="mtn-tag mtn-tag--yellow">Tariff Plan</div>
                  <h3 class="mtn-card__header mtn-h2">XtraValue bundle covers voice calss and data</h3>
                  <button className='btn-1' id='learnmo'><span>Learn More </span><img className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>

          </div>
      </div>

      {/* Business */}
      <div id='business' className='personal '>
      <svg viewBox={"0 0 500 25"} preserveAspectRatio={"none"} className="curve-3">
                  <g>
                      <path d="M0,25h250C166.7,25,83.3,16.7,0,0V25z"></path>
                      <path d="M250,25h250V0C416.7,16.7,333.3,25,250,25z"></path>
                  </g>
            </svg>
          <div className='personhead'>
            <div className='personcaption' >
              <h1><i className="mtn-icon mtn-icon-mtn-business-badge text-c-black"></i></h1><h3>Business</h3>
            </div>
            <img id='businesschev' className='personchev' src={chevronr}/>
          </div>
          <div className="gallery js-flickity" id='mycarou' style={{backgroundColor: '#f2f2f2'}} data-flickity-options={'{"wrapAround": true}'}>
            <div className="gallery-cell" id='business1'>
              <div class="mtn-card__content">
	              <div id='businesstag' class="mtn-tag mtn-tag--yellow">HynetFlex</div>
                  <h3 class="mtn-card__header mtn-h2">Affordability. Courage. Speed</h3>
                  <button className='btn-1' id='businessmo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='business2'>
              <div class="mtn-card__content">
	              <div id='businesstag' class="mtn-tag mtn-tag--yellow">Productivity & Collaboration</div>
                  <h3 class="mtn-card__header mtn-h2">HynetFlex offers you amazing internet experience</h3>
                  <button className='btn-1' id='businessmo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='business3'>
              <div class="mtn-card__content">
	              <div id='businesstag' class="mtn-tag mtn-tag--yellow">Productivity & Collaboration</div>
                  <h3 class="mtn-card__header mtn-h2">Automatically configure the management calls from a single number for your business</h3>
                  <button className='btn-1' id='businessmo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='business4'>
              <div class="mtn-card__content">
	              <div id='businesstag' class="mtn-tag mtn-tag--yellow">Mobility Solutions</div>
                  <h3 class="mtn-card__header mtn-h2">Access data services without impacting on your data plans</h3>
                  <button className='btn-1' id='businessmo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            
          </div>
      </div>

      {/* Play */}
      <div id='play' className='personal'>
          <svg viewBox={"0 0 500 25"} preserveAspectRatio={"none"} className="curve-4">
                  <g>
                      <path d="M0,25h250C166.7,25,83.3,16.7,0,0V25z"></path>
                      <path d="M250,25h250V0C416.7,16.7,333.3,25,250,25z"></path>
                  </g>
          </svg>
          <div className='personhead'>
            <div className='personcaption' >
              <h1><i className="mtn-icon mtn-icon-mtn-play-badge text-c-play"></i></h1><h3>Play</h3>
            </div>
            <img id='playchev' className='personchev' src={chevronr}/>
          </div>
          <div className="gallery js-flickity" id='mycarou' data-flickity-options={'{"wrapAround": true}'}>
            <div className="gallery-cell" id='play1'>
              <div class="mtn-card__content">
	              <div id='playtag' class="mtn-tag mtn-tag--yellow">Play</div>
                  <h3 class="mtn-card__header mtn-h2">Audapp</h3>
                  <button className='btn-1' id='playmo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='play2'>
              <div class="mtn-card__content">
	              <div id='playtag' class="mtn-tag mtn-tag--yellow">Play</div>
                  <h3 class="mtn-card__header mtn-h2">ayoba</h3>
                  <button className='btn-1' id='playmo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='play3'>
              <div class="mtn-card__content">
	              <div id='playtag' class="mtn-tag mtn-tag--yellow">Play</div>
                  <h3 class="mtn-card__header mtn-h2">Mdundo</h3>
                  <button className='btn-1' id='playmo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='play4'>
              <div class="mtn-card__content">
	              
                  <button style={{marginTop: 90}} className='btn-1' id='playmo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='play5'>
              <div class="mtn-card__content">
	              <div id='playtag' class="mtn-tag mtn-tag--yellow">Play</div>
                  <h3 class="mtn-card__header mtn-h2">Let your callers feel you before they speak</h3>
                  <button className='btn-1' id='playmo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            
          </div>
      </div>

      {/* Momo */}
      <div id='momo' className='personal '>
            <svg viewBox={"0 0 500 25"} preserveAspectRatio={"none"} className="curve-3">
                  <g>
                      <path d="M0,25h250C166.7,25,83.3,16.7,0,0V25z"></path>
                      <path d="M250,25h250V0C416.7,16.7,333.3,25,250,25z"></path>
                  </g>
            </svg>
          <div className='personhead'>
            <div className='personcaption' >
              <h1><i className="mtn-icon mtn-icon-mtn-momo-badge text-c-momo"></i></h1><h3>Momo</h3>
            </div>
            <img id='momochev' className='personchev' src={chevronr}/>
          </div>
          <div className="gallery js-flickity" id='mycarou' style={{backgroundColor: '#f2f2f2'}} data-flickity-options={'{"wrapAround": true}'}>
            <div className="gallery-cell" id='momo1'>
              <div class="mtn-card__content">
	              <div id='momotag' class="mtn-tag mtn-tag--yellow">Momo</div>
                  <h3 class="mtn-card__header mtn-h2">Send/Receive Money</h3>
                  <button className='btn-1' id='momomo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='momo2'>
              <div class="mtn-card__content">
	              <div id='momotag' class="mtn-tag mtn-tag--yellow">Momo</div>
                  <h3 class="mtn-card__header mtn-h2">Agents</h3>
                  <button className='btn-1' id='momomo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='momo3'>
              <div class="mtn-card__content">
	              <div id='momotag' class="mtn-tag mtn-tag--yellow">Momo</div>
                  <h3 class="mtn-card__header mtn-h2">Frequently Asked Questions</h3>
                  <button className='btn-1' id='momomo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            <div className="gallery-cell" id='momo4'>
              <div class="mtn-card__content">
	              <div id='momotag' class="mtn-tag mtn-tag--yellow">Momo</div>
                  <h3 class="mtn-card__header mtn-h2">Become an Agent</h3>
                  <button className='btn-1' id='momomo'><span>Learn More </span><img id='whitechev' className='btnchev' src={chevronr} style={{marginLeft: 26}}/></button>
              </div>
            </div>
            
          </div>
      </div>
      
      
    </div>



      
    </div>
  );
}


export default Home;



