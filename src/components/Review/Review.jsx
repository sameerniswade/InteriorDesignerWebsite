import React,{Component} from 'react';
import './Review.scss';

//import More_review from '../More_review/More_review';
import review1 from './review1.png';
import review2 from './review2.png';
import review3 from './review3.png';
import review_photo1 from './review_photo1.jpg';
import review_photo2 from './review_photo2.jpg';
import review_photo3 from './review_photo3.jpg';


class Review extends Component {

    render () {
        return ( 
            <div className="review">
               <p className="review_header" >Reviews</p>
               <div className="review_list">             
                 <div className="review_list_main">
                     <img className="review_list_main_photo" src={review_photo1} alt="" />
                     <img className="review_list_main_review" src={review1} alt="review" />
                 </div> 
                 <div className="review_list_main">
                     <img className="review_list_main_photo" src={review_photo3} alt="" />
                     <img className="review_list_main_review" src={review2} alt="review" />
                 </div> 
                 <div className="review_list_main">
                     <img className="review_list_main_photo" src={review_photo2} alt="" />
                     <img className="review_list_main_review" src={review3} alt="review" />
                 </div>                     
               </div>
               <button onClick={()=>this.props.onRouteChange("review")} 
                       className="review_more_button">
                        More
               </button>
            </div>
        );

    }
}
 
export default Review;
