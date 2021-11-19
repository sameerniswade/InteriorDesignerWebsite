import React from 'react';
import './ImageGallery.scss';

const ImageGallery = ({onRouteChange,onCategoryChange}) => {
    return ( 
        <div className="imagegallery">
            
              <div onClick={()=>{
                                onCategoryChange("furniture");
                                onRouteChange("gallery")} }
                           
                   
                   className="imagegallery_furniture gallery_flex" >
                 <p className=" gallery_text">
                     Furniture
                 </p>
              </div>
            
              <div  onClick={()=>onCategoryChange("wardrobes")}
                    onClick={()=>onRouteChange("gallery")}
                    className="imagegallery_wardrobes gallery_flex" >
                 <p className=" gallery_text">
                     Wardrobes
                 </p>
              </div>

              <div  onClick={()=>onCategoryChange("sofa")}
                    onClick={()=>onRouteChange("gallery")}
                    className="imagegallery_sofa gallery_flex" >
                 <p className=" gallery_text">
                     Sofa
                 </p>
              </div>

              <div  onClick={()=>onCategoryChange("kitchen")}
                    onClick={()=>onRouteChange("gallery")}
                    className="imagegallery_modularkitchen gallery_flex" >
                 <p className="gallery_text">
                     Modular Kitchen
                 </p>
              </div>

              <div  onClick={()=>onCategoryChange("bed")}
                    onClick={()=>onRouteChange("gallery")}
                    className="imagegallery_bed gallery_flex" >
                 <p className=" gallery_text">
                     Bed
                 </p>
              </div>

              <div  onClick={()=>onCategoryChange("onside")}
                    onClick={()=>onRouteChange("gallery")}
                    className="imagegallery_site gallery_flex" >
                 <p className=" gallery_text">
                     On Site Images
                 </p>
              </div>

              <div  onClick={()=>onCategoryChange("tv")}
                    onClick={()=>onRouteChange("gallery")}
                    className="imagegallery_tvunit gallery_flex" >
                 <p className=" gallery_text">
                     TV Unit
                 </p>
              </div>

              <div   onClick={()=>onCategoryChange("kitchen")}
                     className="imagegallery_morework gallery_flex" >
                 <p  onClick={()=>onRouteChange("gallery")}
                     className=" gallery_text imagegallery_morework_ul">
                     See More Work
                 </p>
              </div>


        </div>
     );
}
 
export default ImageGallery;
