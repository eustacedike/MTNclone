import { Outlet, Link } from "react-router-dom";
import chevron from './chevrond.png'
import chevronr from './chevronr.png'
import './App.css';



const NavBar = () => {
  return (
    <>
        <div className="navbar">
                    
                    <nav>
                        <ul>
                            <li><a href="#"><Link to='/'><h2 className='logo'>MTN</h2></Link></a></li>
                            {/* <li>
                            <div className="dropdown">
                                <a href="#" className="dropbtn">Investors<i onClick={() => {document.getElementById("myDropdown").classList.toggle("show")}}>v</i></a>
                                <div id="myDropdown" className="dropdown-content">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                                </div>
                            </div>
                            </li> */}

                            <li>
                            <div className="dropdown">
                                <a href="#" className="dropbtn"><Link to='./investors'>Investors</Link><img className='dropchev' src={chevron}/></a>
                                <div id="myDropdown" className="dropdown-content">
                                <a href="#home">More in Investors</a>
                                <a href="#about">Shareholders</a>
                                <a href="#contact">Financial Reporting</a>
                                <a href="#contact">Announcement</a>
                                </div>
                            </div>
                            </li>

                            <li>
                            <div className="dropdown">
                                <a href="#" className="dropbtn"><Link to='./foundation'>Foundation</Link></a>
                                </div>
                            </li>

                            <li>
                            <div className="dropdown">
                                <a href="#" className="dropbtn">Events</a>
                                </div>
                            </li>

                            <li>
                            <div className="dropdown">
                                <a href="#" className="dropbtn">Support<img className='dropchev' src={chevron}/></a>
                                <div id="myDropdown" className="dropdown-content">
                                <a href="#home">Help Center</a>
                                <a href="#about">Community</a>
                                <a href="#contact">JustForYou</a>
                                </div>
                            </div>
                            </li>

                            <li>
                            <div className="dropdown">
                                <a href="#" className="dropbtn">About Us<img className='dropchev' src={chevron}/></a>
                                <div id="myDropdown" className="dropdown-content">
                                <a href="#home">Our Code of Ethics</a>
                                <a href="#about">Privacy & Data Protection</a>
                                <a href="#contact">Our Story</a>
                                </div>
                            </div>
                            </li>

                            <li>
                            <div className="dropdown">
                                <a href="#" className="dropbtn">Careers<img className='dropchev' src={chevron}/></a>
                                <div id="myDropdown" className="dropdown-content">
                                <a href="#home">Apply for Jobs</a>
                                <a href="#about">Recently Asked Questions</a>
                                <a href="#contact">Y'ello Women</a>
                                </div>
                            </div>
                            </li>

                            <li>
                            <div className="dropdown">
                                <a href="#" className="dropbtn">Contact Us</a>
                                </div>
                            </li>
                            
                            {/* <li><a href="#">Investors</a></li>
                            <li><a href="#">Foundation</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#" onClick={() => {document.getElementById("myDropdown").classList.toggle("show")}}>Contact Us</a></li>
                            <li>
                            <div className="dropdown">
                                <button className="dropbtn" onClick={() => {document.getElementById("myDropdownd").classList.toggle("show")}}>Dropdown</button>
                                <div id="myDropdownd" className="dropdown-content">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                                </div>
                            </div>
                            </li> */}
                        </ul>
                    </nav>
                    <span className="navButton">
                    <div className="menu" id="menu" onClick={()=>{document.getElementById("menu").classList.toggle('change'); document.getElementById("mobdrop").classList.toggle('showmob');}}>
                        <div className="bar1" id="bar1"></div>
                        <div className="bar2" id="bar2"></div>
                        <div className="bar3" id="bar3"></div>
                    </div>
                    </span> 
                <div className='searchBox'>
                <i className="mtn-icon mtn-icon-search"></i>
                <input className='search' type="text"placeholder='Search...'></input>
                </div>
                </div>
                        
                <div className='main-div1'>
                
                <div id="mobdrop" className='mobdrop'>
                <ul>
                <li>
                    <div className='mobdev'>
                    <button className="footerdropbtn">
                        <span>Investors</span>
                        <div id='bardiv-6' className='bardiv' onClick={()=>{document.getElementById("bardiv-6").classList.toggle('flat'); document.getElementById("footdown-6").classList.toggle("showfootdown")}}>
                        <div className='footbar-1'></div>
                        <div className='footbar-2'></div>
                        </div>
                    </button>
                    <div id="footdown-6" className="footdown">
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
                    <div className='mobdev'>
                    <button className="footerdropbtn">
                        <span>Support</span>
                        <div id='bardiv-7' className='bardiv' onClick={()=>{document.getElementById("bardiv-7").classList.toggle('flat'); document.getElementById("footdown-7").classList.toggle("showfootdown")}}>
                        <div className='footbar-1'></div>
                        <div className='footbar-2'></div>
                        </div>
                    </button>
                    <div id="footdown-7" className="footdown">
                        <a href="#home">Help Center</a>
                        <a href="#about">Community</a>
                        <a href="#contact">JustForYou</a>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='mobdev'>
                    <button className="footerdropbtn">
                        <span>About Us</span>
                        <div id='bardiv-8' className='bardiv' onClick={()=>{document.getElementById("bardiv-8").classList.toggle('flat'); document.getElementById("footdown-8").classList.toggle("showfootdown")}}>
                        <div className='footbar-1'></div>
                        <div className='footbar-2'></div>
                        </div>
                    </button>
                    <div id="footdown-8" className="footdown">
                        <a href="#home">Our Code of Ethics</a>
                        <a href="#about">Privacy & Data Protection</a>
                        <a href="#contact">Our Story</a>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='mobdev'>
                    <button className="footerdropbtn">
                        <span>Careers</span>
                        <div id='bardiv-9' className='bardiv' onClick={()=>{document.getElementById("bardiv-9").classList.toggle('flat'); document.getElementById("footdown-9").classList.toggle("showfootdown")}}>
                        <div className='footbar-1'></div>
                        <div className='footbar-2'></div>
                        </div>
                    </button>
                    <div id="footdown-9" className="footdown">
                        <a href="#home">Apply for Jobs</a>
                        <a href="#about">Recently Asked Questions</a>
                        <a href="#contact">Y'ello Women</a>
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

                <li>
                    <div className="footerdrop">
                    <button className="footerdropbtn">
                        <div className='mobsearch'>
                        <input type="text"placeholder='Search'></input>
                        <i className="mtn-icon mtn-icon-search"></i>
                        </div>
                    </button>
                    </div>
                </li>

                <li>
                    <div className="footerdrop">
                    <button className="footerdropbtn">
                        <select name='countries' className='countries'>
                            <option value={'Afghanistan'}>Afghanistan</option>
                            <option value={'Benin'}>Benin</option>
                            <option value={'Botswana'}>Botswana</option>
                            <option value={'Cameroon'}>Cameroon</option>
                            <option value={'Congo'}>Congo</option>
                            <option value={'Ghana'}>Ghana</option>
                            <option value={'Guinea Bissau'}>Guinea Bissau</option>
                            <option value={'Guinea Conakry'}>Guinea Conakry</option>
                            <option value={'Iran'}>Iran</option>
                            <option value={'Ivory Coast'}>Ivory Coast</option>
                            <option value={'Liberia'}>Liberia</option>
                            <option value={'Namibia'}>Namibia</option>
                            <option value={'Nigeria'} selected>Nigeria</option>
                            <option value={'Rwanda'}>Rwanda</option>
                            <option value={'South Africa'}>South Africa</option>
                            <option value={'South Sudan'}>South Sudan</option>
                            <option value={'Sudan'}>Sudan</option>
                            <option value={'Swaziland'}>Swaziland</option>
                            <option value={'Syria'}>Syria</option>
                            <option value={'Uganda'}>Uganda</option>
                            <option value={'Yemen'}>Yemen</option>
                            <option value={'Zambia'}>Zambia</option>
                        </select>
                    </button>
                    </div>
                </li>
                </ul>
                </div>
                </div>
    </>
        )
};
      
      export default NavBar;