import React from 'react';
import './People.scss';
import people1 from './people1.jpg';
import people2 from './people2.jpg';

const people_list = [
      {
        name: "Kshitija Kshatriya",
        photo: people2,
        position : "Cofounder and CEO",
        job: "Interior Designer",
        phone : "+91 8237441642",
        mail : "kshatriyashitija@gmail.com",
            social : {
            instagram : "https://www.instagram.com/kshitijakshatriya/",
            facebook : "https://www.facebook.com/kshitija.kshatriya.92",
            youtube : "https://www.youtube.com/channel/UCJNEe2p6fvcPYdV2BlnHCzw",
            } 
        },
        {
            name: "Swapnil Jadhav",
            photo: people1,
            position : "Cofounder and CEO",
            job: "Interior Designer",
            phone : "+91 9665541943",
            mail : "swapniljhadav@gmail.com",
            social : {
             instagram : "https://www.instagram.com/swapniljadhav7097/",
             facebook : "https://www.facebook.com/profile.php?id=100004223562640",
             youtube : "https://www.youtube.com/channel/UCJNEe2p6fvcPYdV2BlnHCzw",
            } 
        },

    
]; 

const People = () => {
   
    return ( 
        <div className="people">
            
         <div className="people_card">
                <img  className="people_card_img" src={people2} alt="photo2" width="200px" />
                <p className="people_card_name">{people_list[0].name}</p>
                <p className="people_card_position">{people_list[0].position}</p>
                <div className="people_card_social">
                    <a href={people_list[0].social.facebook}>
                        <img className="people_card_social_icon" alt="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFEklEQVRoge2ZW2gcVRjH/2c22SQ1aZLNRXNraFATvKFs0QdfTPTFiKCIQUwFwZQYkqIY8cELrKLFF2+0G4yVgpBgm4q0oO2DJvpgVUICKohtUFuSzcZoLrK7uezOzPn7kLRddmZ2ZjJJfGg+WHZ2zjnf/P7nfOc7c84CO7Zj17aJTfEyRF/TSvxuAM0SCIJsAlFFsJAECCQoGQVwgeQ4wZFL04FRhIT0+mhPAm77dLlO12Q3yf0kawCAJEgAWPte+xAmZRFKDug5Ijx9oCyyrQJuHIpX+JN4k8DTJPwWgNng0+4jBfKY7lNfi3ZWz225gFsHEk9KicMQDGQHdASfXmeeFD3RnorjWyIg2M/c1cJEn5SiwwjiGf5qHaB/JrfyIDqFumkCgv3ctXLd0mckHtxS+Kvtz/jy5ePRzuplOzbFAXzuNsMDQKu2itMI/er3LGC1MNG3zfBrZVI8UF5S+oEdX9YQumUw0U6JAS/wCoiWej/urc5FfbGCkjwFKZ1QdSKWIn6MpvDxTyuW7SX5xEJvzQnXApo+iZUJRTkPsHyj8HdW+vBecyH2FvssO+lcJIXHPl+08E0AWEhRNMZfNE+xliGkKOKQF/i7Kn0Yenh3Vvh0yxJ2gRzK1y05zW7eMbBcu75IbQjeJ4jD9xfB73OWpR3MmY7St6N7HAtQKXvoYYVtbchDbZFtfkgTkBUeJP1S0bvM2uYY7oSokIl2L9mmuS7XFHQypqN3OI5f/lavkKuSdvBrzyCfwhBfRZvQswpo2hu/h0TtRuFJ4PYKY78AwAvDcXw3lbRtb7FC1+y+GAnGgNF0n2bj3OwFniTKC4xu/1qSOLdReF7+LVsy/ZoJ2Od1kSryGyfvZEwHPcADACWCtgIkebMXeJJQTJJPPCm9wRMgZGOmX0OwkqjyAr9+aTBJR9kmax1SVGX6NQmh9W3ghuEtFMArPACwKNOj2Qi4cvzD/oAh5s1C6L76PEw8e73h/snfVvDS14tO4E1H15jviATJgBN4ACjOE6aTNtNyFaAk3zjg0bjmGJ5kPLO92SSecQpPsy5xaRPzmlN4CGDGVgCICa8T1o39vqA6ggcACVywFUBwzFW28ACvSeDPRc0R/Pr1WKYP4yQGR4zA1pP6ua9iyLncDetlRx8qMWw0fp5V8f5o/EodAFjViKQmncKDCkZsBVyaDozuqVqYAllnB08CZ/9YNZR9xBKIDAWzSzpOnV92M2EzO29SlQ3jmbzGORASEpKDTuCtyqzMAzwADJodRZq+tOs5Ikwi5eWVejPhCSZTqhY282sqYPpAWQTksc2CB4x1HMOTkMRRvNU47VgAANDvf4XknFv47CHkHp7EvC50d3tiAIh0FC+Q4qBbeLvFzSU8CHYh1Gh56Jt14xrtqThOoP9/hA/rb9x0MptP2533TGVlN8FTTuEtRbiEB/ClrkSet+OzPzpoE7ovT7aDPOPi4Wb8zuHJLzRlVxtCzZp3AQCindXLswU3PELBD+3h3Wei9PYEw5ov8ihC9ifTgNnrtJV1CnUO6Aq8M/2tAhyRRPlGFrIs8P8Q7LaL+Uxzfvq0bgu9NSeSSTaR7AOQdLMWWC1SEjiiKckmt/CAmxFIs/jLtfMAusvenTqkaegB2E6iziX8FIABVdXDVouUE9ucv1lDVHYXRPaRsoUSwe+fqWoN5Iv80gKfIgTw74qUwxeXFztOz31DcowCI6psGN+Mv1l3bMeudfsPP8EkRZOLDr8AAAAASUVORK5CYII="/>
                    </a>
                    <a href={people_list[0].social.instagram}>
                        <img className="people_card_social_icon" alt="social" src="data:image/png;base64,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"/>
                    </a>
                    <a href={people_list[0].social.instagram}>
                        <img className="people_card_social_icon" alt="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC4ElEQVRoge2YT0hUQRzHP/PyX1rmJgbSqhhBB7sVGFFRFIR06GKH6GTdN7p4ibAg6hKRREiUBWFFdYkIi7oESZkgXYQoqGjdg6fN1t6qqPvr4Jrre7P5dmffpvA+MPD4zcxvft/9zc6b94OAgICAgIBVjPI6UA5SyzRhoBFFE9AAbAZC6VaTbhXpKWsznqeAyYznn8B4usURYljESBEFoswxqt4TNxIgYLGXUwjHUbQClV7FFogkwgcUD3hLrwLRDdIKkBbK2Mgz4LCvIXpF8QKbo2qYGWeXpZ0Q4hIrJXgAoY1KLuq6XBmQ/VQwxxiwwffAciNBkno1TDLT6M7ALLtYecEDVLOOVqdRt4W2FCGY/Eix1WnSCWguQij54kmAWQauvobmFiMXWREvAhRho0V2HoLejxDphqoC/5Us94+ry8B644VKSqE9Ao++QvtpsPSndR7UOQ06z1WFWo3qWohcg5tDsH23uT+hThxHv24LFU7AAtt2wI0BuPAYNjWYeCqjjbJMg1uA+CAAQCk4cAz6PkHHeSgtz89PnCUT/d1COiqqoKML7o3MC8qVNX9vuEC2u1AxEIHpyeXHObGWXuhKNENs5u/1/jBlw8Mr0HcZZqZznS3Uk8g0uAUobMQHASLwqg96OiE+lq+X3+oJc5kGtwDBztd7Vj4PQ3cERt6ZevrlNGTbQoUhPgZ3uuD5bUilzP0J406TTsCE8UKzM/C0B3rPgZ1YfrxXlJcMCDHvn/oaBvvh+hkY/WLgJAvCD6dJl4FvRot0HjGavgyu2HTvge9+RmCIKzadALMM+IuHDJQwiOa4WgEkmGTIaXQJUG+YAm4VJaRcUPQ4KxKQ7S4U5yzw0u+YcqAfm3O6jn+VFhX7OEmKE/+ttAiDCPcZ4G5OpUUdsocQFmFSNKEIowgjNKKoIUUNEEJRzeInaTmLopPAws1tIt0yC7yjCDEgiiLKLDGvxd2AgICAgIBVzR8UibLdyBYx4AAAAABJRU5ErkJggg=="/>
                    </a> 
                </div>
                <p className="people_card_phone">{people_list[0].phone}</p>
                <p className="people_card_mail">{people_list[0].mail}</p>
                <p className="people_card_job">{people_list[0].job}</p> 
         </div>

            <div className="people_card">
                <img  className="people_card_img" src={people1} alt="photo2" width="200px" />
                <p className="people_card_name">{people_list[1].name}</p>
                <p className="people_card_position">{people_list[1].position}</p>
                <div className="people_card_social">
                    <a href={people_list[1].social.facebook}>
                        <img className="people_card_social_icon" alt="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFEklEQVRoge2ZW2gcVRjH/2c22SQ1aZLNRXNraFATvKFs0QdfTPTFiKCIQUwFwZQYkqIY8cELrKLFF2+0G4yVgpBgm4q0oO2DJvpgVUICKohtUFuSzcZoLrK7uezOzPn7kLRddmZ2ZjJJfGg+WHZ2zjnf/P7nfOc7c84CO7Zj17aJTfEyRF/TSvxuAM0SCIJsAlFFsJAECCQoGQVwgeQ4wZFL04FRhIT0+mhPAm77dLlO12Q3yf0kawCAJEgAWPte+xAmZRFKDug5Ijx9oCyyrQJuHIpX+JN4k8DTJPwWgNng0+4jBfKY7lNfi3ZWz225gFsHEk9KicMQDGQHdASfXmeeFD3RnorjWyIg2M/c1cJEn5SiwwjiGf5qHaB/JrfyIDqFumkCgv3ctXLd0mckHtxS+Kvtz/jy5ePRzuplOzbFAXzuNsMDQKu2itMI/er3LGC1MNG3zfBrZVI8UF5S+oEdX9YQumUw0U6JAS/wCoiWej/urc5FfbGCkjwFKZ1QdSKWIn6MpvDxTyuW7SX5xEJvzQnXApo+iZUJRTkPsHyj8HdW+vBecyH2FvssO+lcJIXHPl+08E0AWEhRNMZfNE+xliGkKOKQF/i7Kn0Yenh3Vvh0yxJ2gRzK1y05zW7eMbBcu75IbQjeJ4jD9xfB73OWpR3MmY7St6N7HAtQKXvoYYVtbchDbZFtfkgTkBUeJP1S0bvM2uYY7oSokIl2L9mmuS7XFHQypqN3OI5f/lavkKuSdvBrzyCfwhBfRZvQswpo2hu/h0TtRuFJ4PYKY78AwAvDcXw3lbRtb7FC1+y+GAnGgNF0n2bj3OwFniTKC4xu/1qSOLdReF7+LVsy/ZoJ2Od1kSryGyfvZEwHPcADACWCtgIkebMXeJJQTJJPPCm9wRMgZGOmX0OwkqjyAr9+aTBJR9kmax1SVGX6NQmh9W3ghuEtFMArPACwKNOj2Qi4cvzD/oAh5s1C6L76PEw8e73h/snfVvDS14tO4E1H15jviATJgBN4ACjOE6aTNtNyFaAk3zjg0bjmGJ5kPLO92SSecQpPsy5xaRPzmlN4CGDGVgCICa8T1o39vqA6ggcACVywFUBwzFW28ACvSeDPRc0R/Pr1WKYP4yQGR4zA1pP6ua9iyLncDetlRx8qMWw0fp5V8f5o/EodAFjViKQmncKDCkZsBVyaDozuqVqYAllnB08CZ/9YNZR9xBKIDAWzSzpOnV92M2EzO29SlQ3jmbzGORASEpKDTuCtyqzMAzwADJodRZq+tOs5Ikwi5eWVejPhCSZTqhY282sqYPpAWQTksc2CB4x1HMOTkMRRvNU47VgAANDvf4XknFv47CHkHp7EvC50d3tiAIh0FC+Q4qBbeLvFzSU8CHYh1Gh56Jt14xrtqThOoP9/hA/rb9x0MptP2533TGVlN8FTTuEtRbiEB/ClrkSet+OzPzpoE7ovT7aDPOPi4Wb8zuHJLzRlVxtCzZp3AQCindXLswU3PELBD+3h3Wei9PYEw5ov8ihC9ifTgNnrtJV1CnUO6Aq8M/2tAhyRRPlGFrIs8P8Q7LaL+Uxzfvq0bgu9NSeSSTaR7AOQdLMWWC1SEjiiKckmt/CAmxFIs/jLtfMAusvenTqkaegB2E6iziX8FIABVdXDVouUE9ucv1lDVHYXRPaRsoUSwe+fqWoN5Iv80gKfIgTw74qUwxeXFztOz31DcowCI6psGN+Mv1l3bMeudfsPP8EkRZOLDr8AAAAASUVORK5CYII="/>
                    </a>
                    <a href={people_list[1].social.instagram}>
                        <img className="people_card_social_icon" alt="social" src="data:image/png;base64,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"/>
                    </a>
                    <a href={people_list[1].social.instagram}>
                        <img className="people_card_social_icon" alt="social" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC4ElEQVRoge2YT0hUQRzHP/PyX1rmJgbSqhhBB7sVGFFRFIR06GKH6GTdN7p4ibAg6hKRREiUBWFFdYkIi7oESZkgXYQoqGjdg6fN1t6qqPvr4Jrre7P5dmffpvA+MPD4zcxvft/9zc6b94OAgICAgIBVjPI6UA5SyzRhoBFFE9AAbAZC6VaTbhXpKWsznqeAyYznn8B4usURYljESBEFoswxqt4TNxIgYLGXUwjHUbQClV7FFogkwgcUD3hLrwLRDdIKkBbK2Mgz4LCvIXpF8QKbo2qYGWeXpZ0Q4hIrJXgAoY1KLuq6XBmQ/VQwxxiwwffAciNBkno1TDLT6M7ALLtYecEDVLOOVqdRt4W2FCGY/Eix1WnSCWguQij54kmAWQauvobmFiMXWREvAhRho0V2HoLejxDphqoC/5Us94+ry8B644VKSqE9Ao++QvtpsPSndR7UOQ06z1WFWo3qWohcg5tDsH23uT+hThxHv24LFU7AAtt2wI0BuPAYNjWYeCqjjbJMg1uA+CAAQCk4cAz6PkHHeSgtz89PnCUT/d1COiqqoKML7o3MC8qVNX9vuEC2u1AxEIHpyeXHObGWXuhKNENs5u/1/jBlw8Mr0HcZZqZznS3Uk8g0uAUobMQHASLwqg96OiE+lq+X3+oJc5kGtwDBztd7Vj4PQ3cERt6ZevrlNGTbQoUhPgZ3uuD5bUilzP0J406TTsCE8UKzM/C0B3rPgZ1YfrxXlJcMCDHvn/oaBvvh+hkY/WLgJAvCD6dJl4FvRot0HjGavgyu2HTvge9+RmCIKzadALMM+IuHDJQwiOa4WgEkmGTIaXQJUG+YAm4VJaRcUPQ4KxKQ7S4U5yzw0u+YcqAfm3O6jn+VFhX7OEmKE/+ttAiDCPcZ4G5OpUUdsocQFmFSNKEIowgjNKKoIUUNEEJRzeInaTmLopPAws1tIt0yC7yjCDEgiiLKLDGvxd2AgICAgIBVzR8UibLdyBYx4AAAAABJRU5ErkJggg=="/>
                    </a> 
                </div>
                <p className="people_card_phone">{people_list[1].phone}</p>
                <p className="people_card_mail">{people_list[1].mail}</p>
                <p className="people_card_job">{people_list[1].job}</p> 
            </div>
        </div>

        
     );
}
 
export default People;
