import './App.css';
import chevron from './chevrond.png'
import chevronr from './chevronr.png'

function Investors () {
    return (

<div className='invest-main'>
    <div className='banner'>
        <div id='banner-investors' className='banner-1'>
            <div className='bannercap'>
                <p><br></br>
                    <span className='banaspan'>INVESTORS</span>
                </p>
            </div>
            <svg viewBox={"0 0 500 25"} preserveAspectRatio={"none"} className="curve-investors">
                  <g>
                      <path d="M0,25h250C166.7,25,83.3,16.7,0,0V25z"></path>
                      <path d="M250,25h250V0C416.7,16.7,333.3,25,250,25z"></path>
                  </g>
            </svg>
        </div>
    </div>

<div className='content'>
        <h4>Download latest Annual Report</h4>
        <div className='report-body'>
            <div className='report'>
                <div>
                    <span>MTN Nigeria Annual Report 2021</span> <br></br>
                    <span>PDF - 7 MB</span>
                </div>
                <div className='download'><i class="mdi mdi-download"></i></div>
            </div>
            <div className='report'>
                <div>
                    <span>MTN Nigeria Annual Report 2020</span> <br></br>
                    <span>PDF - 11.1 MB</span>
                </div>
                <div className='download'><i class="mdi mdi-download"></i></div>
            </div>
            <div className='report'>
                <div>
                    <span>MTN Nigeria Sustainability Report 2020</span> <br></br>
                    <span>PDF - 13 MB</span>
                </div>
                <div className='download'><i class="mdi mdi-download"></i></div>
            </div>
        </div>
</div>

</div>

);
    }

    export default Investors;