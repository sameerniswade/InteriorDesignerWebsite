import React from 'react';
import './Service.scss';

//const service_list = ["Home Decor", "Modular Kitchen", "Expert Solution", "Modular Furniture", "Free Design", "Free Quotation", "Free Site Visit", "Personal Visit"];

const Service = () => {
    return ( 
        <div className="service">
           <div className="service_header">
             <p className="service_header_p1">Our Services</p>
             <p className="service_header_p2">We make successful products that turn great idea into user friendly solution for consumers and business.</p>
           </div>
           <div className="service_list">
             <ul>
                 <li>Home Decor</li>
                 <li>Modular Kitchen</li>
                 <li>Expert Solution</li>
                 <li>Modular Furniture</li>
                 <li>Free Design</li>
                 <li>Free Quotation</li>
                 <li>Free Site Visit</li>
                 <li>Personal Visit</li>
             </ul>   
           </div> 
        </div>
     );
}
 
export default Service;
