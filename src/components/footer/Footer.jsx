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
    <div className='container-fluid bg-dark'>
        <div className="footer">
            <div className="container">
                <div className="row text-light">
                    <div className="col-md-4">
                        <div className="f-col">
                            <img src="images/ALMS-logo.png" alt="footer-logo" />
                            <p>Subscribe to our Newsletter</p>
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>     
                            <div className='btn btn-outline-light'>Submit</div>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="f-col">
                            <p className='text-light'>Company</p>
                            <p><Link to='/' onClick={scrollToTop}>Home</Link></p>
                            <p><Link to='/about' onClick={scrollToTop}>About Us</Link></p>
                            <p><Link to='/services' onClick={scrollToTop}>Our Services</Link></p>
                            <p><Link to='/contact' onClick={scrollToTop}>Our Contacts</Link></p>                         
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="f-col">
                            <p className='text-light'>Community</p>
                            <p><Link to='#' onClick={scrollToTop}>News</Link></p>
                            <p><Link to='#' onClick={scrollToTop}>Blog</Link></p>
                            <p><Link to='/contact' onClick={scrollToTop}>Our Offices</Link></p>                        
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="f-col">
                            <p className='text-light'>Contacts</p>
                            <div className='foot-aside'>
                                <i class="bi bi-geo-alt text-danger"></i>
                                <p>50 Crowther Ln Suite 140 Fredericton, NB E3C 0J1, Canada</p>
                            </div>
                            <div className='foot-aside'>
                                <i class="bi bi-telephone text-danger"></i>
                                <p>+1 506 897 0363</p>
                            </div>
                            <div className='foot-aside'>
                                <i class="bi bi-envelope text-danger"></i>
                                <p>almsglobalimmigration9@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {isVisible && (
                        <div onClick={scrollToTop} className="scroll-to-top-btn">
                            <i className="bi bi-arrow-up-circle-fill text-light"></i>
                        </div>
                    )}
                    <hr/>
                    <div className="col-md-12"><hr className='bg-secondary'/>
                        <div className='copy'>Copyright 2023 &copy; ALMS Global Immigration Consultant Inc. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}
