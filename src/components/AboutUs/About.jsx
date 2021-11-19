import React from 'react';
import './AboutUs.scss';
import aboutus_img from './aboutus_img.jpg';

const AboutUs = () => {
    return ( 
        <div className="aboutus">
           <div className="aboutus_text">
              <p className="aboutus_text_header">About Us</p>
              <p className="aboutus_text_para">
              CASA DECO presents gorgeous Kitchens with stylish appliances that are built with design innovation in mind. Created with exquisite craftsmanship. CASA DECO products aim to give a customized experience that enriches lives for years to come. CASA DECO kitchens come with a 10 year warranty on plywood & 3 year free servicing. The most common reason to have a meeting is to discuss requirements face to face. & door to door. Our design experts will understand your requirement and suggest you new ideas, a new options. 
              </p>
           </div>
          
              <img  className="aboutus_img" src={aboutus_img} alt="aboutus img" />
           
        </div>
     );
}
 
export default AboutUs;
