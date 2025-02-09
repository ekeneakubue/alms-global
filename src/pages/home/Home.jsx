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
          <h2 data-aos="fade-up" data-aos-duration="2000">Welcome to Federal College of Education, Ofeme Ohuhu</h2>
          <p id="p-block"data-aos="fade-up" data-aos-duration="2000">
          <i class="bi bi-award-fill text-success"></i> To Educate to Liberate the Mind &nbsp;&nbsp;&nbsp;&nbsp;
          <i class="bi bi-award-fill text-success"></i> Committed to Excellence in Teacher Education
          </p>
          <p id="p-none" data-aos="fade-up" data-aos-duration="2000">
          <i class="bi bi-award-fill text-success"></i> To Educate To Liberate the Mind <br />
          <i class="bi bi-award-fill text-success"></i> Committed to Excellence in Teacher Education
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
