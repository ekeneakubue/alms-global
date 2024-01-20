import './footer.css';

export default function Footer() {
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
                            <p>About Us</p>
                            <p>Our Services</p>
                            <p>Goals & Vision</p>                      
                            <p>Partners & Clients</p>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="f-col">
                            <p className='text-light'>Community</p>
                            <p>News</p>
                            <p>Blog</p>
                            <p>Our Offices</p>                        
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
