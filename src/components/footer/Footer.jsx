import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Add a scroll event listener to check whether the user has scrolled down
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      // Scroll to the top of the page when the button is clicked
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // for a smooth scrolling effect
      });
    };

  return (
    <div className='cokkk'>
        <div className="footer">
            <div className="container-fluid">
                <div className="row text-light">
                    <div className="col-md-3">
                        <div className="f-col">
                            <img src="images/logo.png" alt="footer-logo" />
                            <p>Subscribe to our Newsletter</p>
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>     
                            <div className='btn btn-outline-light'>Submit</div>

                            <br /><br />
                            <p className='text-light'>Stakeholders</p>
                            <p><Link to='#' onClick={scrollToTop}>NUC</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Ministry of Education</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>TETFund</Link></p>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="f-col">
                            <p className='text-light'>General Information</p>
                            <p><Link to='/about' onClick={scrollToTop}>About Us</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>International Collaboration</Link></p>
                            <p><Link to='/contact' onClick={scrollToTop}>Contact Us</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Scholarship</Link></p>

                            
                            <br /><br />
                            <p className='text-light'>Careers</p>
                            <p><Link to='#' onClick={scrollToTop}>Vacancies</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Recuitments</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Awards</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Events</Link></p>                       
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="f-col">
                            <p className='text-light'>Students</p>
                            <p><Link to='#' onClick={scrollToTop}>Course Information</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Academic Calender</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Technical Services</Link></p>                        
                            <p><Link to='#' onClick={scrollToTop}>Portal</Link></p>
                            
                            <br /><br />
                            <p className='text-light'>News</p>
                            <p><Link to='#' onClick={scrollToTop}>Media Highlights</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Stories</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Institution Based Research</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>National Research Fund</Link></p>  
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="f-col">
                            <p className='text-light'>Contacts</p>
                            <div className='foot-aside'>
                                <i class="bi bi-geo-alt text-danger"></i>
                                <p>OFEME-OHUHU, PMB 7324, umuahia north LGA, Abia state, Nigeria.</p>
                            </div>
                            <div className='foot-aside'>
                                <i class="bi bi-telephone text-danger"></i>
                                <p>0800000000</p>
                            </div>
                            <div className='foot-aside'>
                                <i class="bi bi-envelope text-danger"></i>
                                <p>info@fceofemeohuhu.edu.ng</p>    
                            </div>

                            <br /><br />
                            <p className='text-light'>Alumni</p>
                            <p><Link to='#' onClick={scrollToTop}>i-Transcript</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Campus Life</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Alumni Update</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Health Services</Link></p>  
                        </div>
                    </div>
                    {isVisible && (
                        <div onClick={scrollToTop} className="scroll-to-top-btn">
                            <i className="bi bi-arrow-up-circle-fill text-light"></i>
                        </div>
                    )}
                    <hr/>
                    <div className="col-md-12"><hr className='bg-secondary'/>
                        <div className='copy'>Copyright 2025 &copy; Federal College of Education, Ofeme Ohuhu. All rights reserved. &nbsp;&nbsp;| &nbsp;&nbsp; Powered by <span><a href="https://expertmediasolution.com/" target='_blank'>Expert Media Solutions</a></span></div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}
