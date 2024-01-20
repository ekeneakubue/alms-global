import React from 'react'
import './Service.css'

export default function Service() {
  return (
    <div className='service'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className='service-title'>Our Services</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 service-col-light" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-light">
                        <i class="bi bi-bank2 text-danger"></i>
                        <div>Study<br/>Work Permits</div>
                    </div>
                </div>
                <div className="col-md-4 service-col-white" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-white">
                        <i class="bi bi-airplane-engines-fill text-danger"></i>
                        <div>Visitor<br/>Travel Visas</div>
                    </div>                    
                </div>
                <div className="col-md-4 service-col-light" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-light">
                        <i class="bi bi-amd text-danger"></i>
                        <div>Refugee<br/>Protected Person</div>
                    </div>
                </div>               
                <div className="col-md-4 service-col-white" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-white">
                        <i class="bi bi-people-fill text-danger"></i>
                        <div>Family<br/>Spousal Sponsorship</div>
                    </div>                    
                </div>                
                <div className="col-md-4 service-col-light" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-light">
                        <i class="bi bi-unity text-danger"></i>
                        <div>Express Entry</div>
                    </div>
                </div>
                <div className="col-md-4 service-col-white" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-white">
                        <i class="bi bi-ticket-detailed-fill text-danger"></i>
                        <div>PR Citizenship</div>
                    </div>
                </div>

                <div className="col-md-4 service-col-light" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-light">
                        <i class="bi bi-tools text-danger"></i>
                        <div>Worker<br/>Business Programs</div>
                    </div>                    
                </div>
                <div className="col-md-4 service-col-white" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-white">
                        <i class="bi bi-steam text-danger"></i>
                        <div>Provincial Nominee<br/>Skilled Worker</div>  
                    </div>                                      
                </div>
                <div className="col-md-4 service-col-light" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-light" data-aos="fade-up" data-aos-duration="2000">
                        <i class="bi bi-tencent-qq text-danger"></i>
                        <div>TFW</div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}
