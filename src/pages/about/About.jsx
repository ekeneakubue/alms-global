import React from 'react'
import './About.css'
import CANADA from '../../assets/images/canda.jpg';

export default function About() {
  return (
    <div className='container'>
        <div className="about">
          <div className="row">
            <div className="col-md-6">
              <div className="about-us">
                <h2>About us</h2>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel laborum consectetur deserunt veritatis officia libero? Minima consequuntur quis voluptatem numquam ex neque aut cum, voluptates, ut quasi beatae quaerat deleniti facere laborum! Eaque iste, vitae, officiis quos doloremque optio iure eligendi deleniti ipsum voluptatum inventore! Veniam, error quae! Accusantium?</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-us">
                <img src={CANADA} alt="canada" className='img-fluid' />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="whyus" data-aos="fade-right" data-aos-duration="2000">
                <i class="bi bi-cursor-fill text-danger"></i>
                <h4>Our Vision</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.</p>  
              </div> 
            </div>
            <div className="col-md-4">
              <div className="whyus">
                <i class="bi bi-award text-danger"></i>
                <h4>Our Mission</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.</p> 
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left" data-aos-duration="2000">
              <div className='whyus'>                
                <i class="bi bi-card-checklist text-danger"></i>
                <h4>Our Core Values</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste.</p> 
              </div>              
            </div>
          </div>
        </div>
    </div>
  )
}
