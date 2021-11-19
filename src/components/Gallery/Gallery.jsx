import React, { Component } from 'react';
import './Gallery.scss';
import ImageGallery from '../ImageGallery/ImageGallery';

class Gallery extends Component {
    
    render() {
     
    console.log(this.props.images);
        
     return (
         <div className="gallery">
                <div className="gallery_top">
                    <p className="gallery_top_logo">Casa Deco</p>
                    <img onClick={()=>this.props.onRouteChange("")}
                         className="gallery_top_cancle" 
                         alt="icon cancle" 
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACeElEQVRoge2aT2saQRiHfzPs2qDgPxryBYqn5FJCe+8hIvQqyOphT34oT3txEfwAJemt9NKaQ0tJoaFfQEjTpAfJGp3tZS1rQGfXnZmVzjwXcdjx/T26rjPvChgMBoPBYMgLkuSgVqv1rF6vn9q2feV53p3sUGlwHKdGKT22LGvied4D73jKO8B13YNarTYJw/DjfD6/dhznlZio2YmyXDPGPgRBMHFd94A3hyscBMEpgJPo6SGA832QjjKcA3gOAISQ4yjrVrjCi8XiO4BfsaEqcpaOyVZjwzeEkCveXK7weDy+pZSeAbiNDVcBXHQ6nddpw2al1+u9BPAO67L3jLG3vu//5s1PdNFaFWKMvQdQf1KoORqNPiVOnAERGRILiyq4K6JqpxIWWTivmqmFRQdQXWsnYRlBVNXYWVhWINmvnUlYVjCZb2RmYUBsQNlfFSHCgJigKq4LwoSBbIFVXfmFCgO7BVf5MydcGEgnoHohI0UYSCaSx6pNmjCwXciyrMc81uVShYF/e9cLAJXY8H30+HTszPf9zzLzSBcGNn7ScZRtM5UIA1ulle6puR2P/w1zSotm3y5aUk/pWMNtTYwx1qSUvsF6Y7ACBY1Bs/AQgVZLS602D1ptD7VqAGjV4tGqiadVm1arRrxWt1q0upmm1e1SrW6I74OsqCxc4Xa7XbFt+weAo9jwHYCm7L3rJjb8qWVKCGkMh8M/2+Zy98OFQqGBPZIFgKh2M8qy4mi5XDZ4c7nCpVLpC4DL6OkUOcuuiElPo6HLcrn8lTcv0Xe43+/bs9nsJAzDn7xTRjXdbrdMCHlRLBa/DQaDx7zzGAwGg8Fg2Mxft0JP92KYuWMAAAAASUVORK5CYII=" />
                </div>  
                <nav className="gallery_nav">
                    <div className="gallery_nav_scroll">
                        <p className="gallery_nav_scroll_item">Moduler Kitchen</p>
                        <p className="gallery_nav_scroll_item">Wardrobes</p>
                        <p className="gallery_nav_scroll_item">Bed Unit</p>
                        <p className="gallery_nav_scroll_item">TV Unit</p>
                        <p className="gallery_nav_scroll_item">Sofa</p>
                        <p className="gallery_nav_scroll_item">Furniture</p>
                        <p className="gallery_nav_scroll_item">On Side Images</p>
                    </div>
                </nav>
                <div className="gallery_images">
                      {
                          this.props.images.map( (image)=> {
                              
                            return <img className="image" src={image} alt="images" />
                          })
                      }  
                </div>
         </div>
    )
 }
}

export default Gallery