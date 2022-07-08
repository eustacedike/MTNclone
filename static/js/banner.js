import './App.css';
import chevronr from './chevronr.png';

const Banner = () => {
    return (
        <>
        <div className='banner' id='banner' onScroll={function () {
            
            var bann = document.getElementById('banner');
            var bannerWidth = bann.offsetWidth;
            if (bann.scrollLeft == bannerWidth) {
            document.getElementById('clickme').style.display = "none";}
            if (bann.scrollLeft == bannerWidth*2) {
              console.log(-bannerWidth);}
            if (bann.scrollLeft == bannerWidth*3) {
               document.getElementById('mob-btn').style.display = "none";}
            
            }}>

                              
              <div className='banner-4'>
                <div className='bannercap'>
                  <p>Momo <br></br>
                  <span className='banaspan'>Do More With Momo PSB</span>
                  </p>
                  <button className='btn-1' id='momomo' style={{width: '160px'}}><span>Discover More </span><img className='btnchev' id='whitechev' src={chevronr}/></button>
                </div>
                
              </div>

              <div className='banner-1'>
                <div className='bannercap'>
                  <p>Book an Appointment to <br></br>
                  <span className='banaspan'>Enrol for NIN or Upgrade to 4G</span>
                  </p>
                  <button className='btn-1' id='clickme'><span>Click Here </span><img className='btnchev' src={chevronr}/></button>
                </div>
                
              </div>

              <div className='banner-2'>
                <div className='bannercap'>
                  <p>Broadband <br></br>
                  <span className='banaspan'>Broadband Offer</span>
                  </p>
                  <button className='btn-1' id='clickme'><span>Get Started </span><img style={{marginLeft: 17}} className='btnchev' src={chevronr}/></button>
                </div>
                
              </div>

              <div className='banner-3'>
                <div className='bannercap'>
                  <p>Code of Ethics<br></br>
                  <span className='banaspan'>Report Fraud</span>
                  </p>
                  <button className='btn-1' id='clickme'><span>Get Started </span><img style={{marginLeft: 17}} className='btnchev' src={chevronr}/></button>
                </div>
                
              </div>
          </div>
        </>
        )
};
      
      export default Banner;