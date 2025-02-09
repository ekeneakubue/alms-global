import React from 'react'
import './About.css'

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
              <div className="about-us-mobile">
                <h2>About us</h2>
                <p className='text-justify' data-aos="fade-up" data-aos-duration="2000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel laborum consectetur deserunt veritatis officia libero? Minima consequuntur quis voluptatem numquam ex neque aut cum, voluptates, ut quasi beatae quaerat deleniti facere laborum! Eaque iste, vitae, officiis quos doloremque optio iure eligendi deleniti ipsum voluptatum inventore! Veniam, error quae! Accusantium?</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-us">
                <img src="./images/11.jfif" alt="canada" className='img-fluid' />
              </div>
              <div className="about-us-mobile">
                <img src="images/11.jfif" alt="canada" className='img-fluid' data-aos="fade-up" data-aos-duration="2000"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="whyus" data-aos="fade-up" data-aos-duration="2000">
                <i class="bi bi-cursor-fill text-danger"></i>
                <h4>Our Vision</h4> 
                <p>
                  Our vision is to develop well-rounded, confident and responsible 
                  individuals who aspire to achieve their full potentials. We will 
                  do this by providing a welcoming, happy, safe and supportive learning 
                  environment in which everyone is equal and all achievements are celebrated.
                </p>  
              </div> 
            </div>
            <div className="col-md-6">
              <div className="whyus" data-aos="fade-up" data-aos-duration="2000">
                <i class="bi bi-award text-danger"></i>
                <h4>Our Mission</h4> 
                <p>
                  Our mission is to be a leading teacher educational institution where 
                  our teaching is rooted in competence, research and exemplary character 
                  of our staff so students can enter the workforce with innovative skills, 
                  knowledge and confidence in their chosen fields.  
                </p> 
              </div>
            </div>            
          </div>
        </div>
    </div>
  )
}
