import React from 'react';
import './More_review.scss';

const More_review = ({onRouteChange, reviewImg}) => {
   return (
       <div className="more_review">
          <div className="more_review_top">
            <p className="more_review_top_header">
              Casa Deco
            </p>
            <img onClick={()=>onRouteChange("")}
                 className="more_review_top_cancle" 
                 alt="icon cancle" 
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACeElEQVRoge2aT2saQRiHfzPs2qDgPxryBYqn5FJCe+8hIvQqyOphT34oT3txEfwAJemt9NKaQ0tJoaFfQEjTpAfJGp3tZS1rQGfXnZmVzjwXcdjx/T26rjPvChgMBoPBYMgLkuSgVqv1rF6vn9q2feV53p3sUGlwHKdGKT22LGvied4D73jKO8B13YNarTYJw/DjfD6/dhznlZio2YmyXDPGPgRBMHFd94A3hyscBMEpgJPo6SGA832QjjKcA3gOAISQ4yjrVrjCi8XiO4BfsaEqcpaOyVZjwzeEkCveXK7weDy+pZSeAbiNDVcBXHQ6nddpw2al1+u9BPAO67L3jLG3vu//5s1PdNFaFWKMvQdQf1KoORqNPiVOnAERGRILiyq4K6JqpxIWWTivmqmFRQdQXWsnYRlBVNXYWVhWINmvnUlYVjCZb2RmYUBsQNlfFSHCgJigKq4LwoSBbIFVXfmFCgO7BVf5MydcGEgnoHohI0UYSCaSx6pNmjCwXciyrMc81uVShYF/e9cLAJXY8H30+HTszPf9zzLzSBcGNn7ScZRtM5UIA1ulle6puR2P/w1zSotm3y5aUk/pWMNtTYwx1qSUvsF6Y7ACBY1Bs/AQgVZLS602D1ptD7VqAGjV4tGqiadVm1arRrxWt1q0upmm1e1SrW6I74OsqCxc4Xa7XbFt+weAo9jwHYCm7L3rJjb8qWVKCGkMh8M/2+Zy98OFQqGBPZIFgKh2M8qy4mi5XDZ4c7nCpVLpC4DL6OkUOcuuiElPo6HLcrn8lTcv0Xe43+/bs9nsJAzDn7xTRjXdbrdMCHlRLBa/DQaDx7zzGAwGg8Fg2Mxft0JP92KYuWMAAAAASUVORK5CYII=" />
          </div> 
          <div className="more_review_images" >
               {
                  reviewImg.map( (item)=> {
                    return <img 
                                
                                
                                className="more_review_images_img" 
                                key={item.id} 
                                src={item.urls.regular} />
                  })
               }
          </div>
       </div>
   )
}

export default More_review