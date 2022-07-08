import './App.css';
import Banner from './banner';
import chevron from './chevrond.png'
import chevronr from './chevronr.png'

function Foundation () {
    return (
        <>
        <div className='desk'>
          <div><div className='desktop-person'><i id='desk-port' class="mtn-icon mtn-icon-mtn-business text-c-black btn-icon"></i></div><span>About Us</span></div>
          <div><div className='desktop-person'><i id='desk-port' class="mtn-icon mtn-icon-receipt-bill btn-icon"></i></div><span>Reports</span></div>
          <div><div className='desktop-person'><i id='desk-port' class="mtn-icon mtn-icon-comms btn-icon"></i></div><span>News</span></div>
          <div><div className='desktop-person'><i id='desk-port' class="mtn-icon mtn-icon-support btn-icon"></i></div><span>Contact Us</span></div>
      </div>
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
            <button id= 'mob-btn' className='btn-1'><i id='port' class="mtn-icon mtn-icon-mtn-business text-c-black btn-icon"></i><span>About Us</span></button>
            <button id= 'mob-btn' className='btn-1'><i id='port' class="mtn-icon mtn-icon-receipt-bill btn-icon"></i><span>Reports</span></button>
            <button id= 'mob-btn' className='btn-1'><i id='port' class="mtn-icon mtn-icon-comms btn-icon"></i><span>News</span></button>
            <button id= 'mob-btn' className='btn-1'><i id='port' class="mtn-icon mtn-icon-support btn-icon"></i><span>Contact Us</span></button>
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
        </>
    )
    }

    export default Foundation;