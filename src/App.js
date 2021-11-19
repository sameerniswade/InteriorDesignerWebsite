import React from 'react';
import AboutUs from './components/AboutUs/About';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import ImageGallery from './components/ImageGallery/ImageGallery';
import People from './components/People/People';
import Review from './components/Review/Review';
import Service from './components/Service/Service';
import Video from './components/Video/Video';

import Gallery from './components/Gallery/Gallery';
import More_review from './components/More_review/More_review';

import './App.scss';

import  { projectFirestore, projectStorageRef, projectStorage, } from './firebase/config';


class App extends React.Component {

   constructor(props) {
       super(props);
       this.state ={ 
           route:"home",
           category:"kitchen",
           images:[],
        }
   }



   onRouteChange = (route) => {
      this.setState({route});

   }

   onCategoryChange = (category) => {
     
     this.setState({category});
     let img = [];
     category = "kitchen"; 
     projectStorageRef.child(`${category}/`).listAll()
     .then(res => res.items.forEach((imageRef)=>{
                              imageRef.getDownloadURL()
                              .then( (url) =>{
                                console.log(url)
                                // img.push(url)
                              })
                            } 
                      ))
      this.setState({images : img})                
   }
    
    routeChanger = () => {
        if(this.state.route === "review") {
            return (
              <div className="container">
                  <More_review  onRouteChange={this.onRouteChange} 
                                reviewImg={this.state.reviewImg} />
              </div>  
            )
        }else if(this.state.route === "gallery") {
                    return (
                      <div className="container">
                          <Gallery images={this.state.images} 
                                   onRouteChange={this.onRouteChange} />
                      </div>  
                    )
              }else {
                  return (
                   <div className="container">
                       <Home/>
                       <Service/>
                       <AboutUs/>
                       <ImageGallery onCategoryChange={this.onCategoryChange} 
                                     onRouteChange={this.onRouteChange}/>
                       <Video/>
                       <People/>
                       <Review  onRouteChange={this.onRouteChange}/>
                       <ContactUs/>
                   </div> 
                  )
              }
    } 


   render() {
  
        // console.log(this.state.images)
                    
       return(
          this.routeChanger() 
       )
   }
}

export default App;

