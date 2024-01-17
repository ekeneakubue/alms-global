import React, { useEffect }  from 'react'
import './Home.css'
import Services from '../../components/services/Service'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
    });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);

  return (
    <div>
      <div className="hero-section">
        <div className="hero-text">
          <h2 data-aos="fade-right" data-aos-duration="2000">Welcome to Global Immigration Consultant Inc</h2>
          <p data-aos="fade-right" data-aos-duration="2000">
            Study/Work Permit 
            &nbsp;<span className='vert'>|</span>&nbsp;
            Visitor/Travel Visas 
            &nbsp;<span className='vert'>|</span>&nbsp;
            TFW  
            &nbsp;<span className='vert'>|</span>&nbsp;
            IMP
            &nbsp;<span className='vert'>|</span>&nbsp;
            LMIA                                    
            &nbsp;<span className='vert'>|</span>&nbsp;
            PGWP<br/>            
            Express Entry  
            &nbsp;<span className='vert'>|</span>&nbsp;
            Provincial Nominee/Skilled Worker/Business Programs
            <br/>
            PR
            &nbsp;<span className='vert'>|</span>&nbsp;
            Citizenship
            &nbsp;<span className='vert'>|</span>&nbsp;
            Naturalization
            &nbsp;<span className='vert'>|</span>&nbsp;
            AIP
            &nbsp;<span className='vert'>|</span>&nbsp;
            Family/Spousal Sponsorship
            <br/>
            H & C Refugee/Protected Person
          </p>
        </div>
      </div>
      <div className="container">
        <div className="home">          
          <Services/>
        </div>
      </div>
    </div>
  )
}
