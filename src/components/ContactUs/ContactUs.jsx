import React from 'react';
import './ContactUs.scss';

const ContactUs = () => {
    return ( 
        <div className="contactus">
            <div className="contactus_text">
               <p className="contactus_text_header">Contact Us</p>
               <p className="contactus_text_para">Feel free to contact us, submit your phone number. we will necessarily call you back within half an hour</p>
            </div>
            <div className="contactus_form">
               <div className="contactus_form_fill">
                   <input className="contactus_form_fill_text" type="text" placeholder="Enter Phone Number" />
                   <button className="contactus_form_fill_button">Submit</button>
               </div>
               <div className="contactus_form_list">

                    <div className="contactus_form_list_details">
                        <img className="contactus_form_list_details_logo" alt="icon location" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEJUlEQVRogd2aUWiWVRjHf5M5cjpn5obCLoKaVmKlOLwR1orIJImNqWFX3Q4SvRilU5haF8rwzkJ0kBdSFFoYg1CJEYvJyilFRKYxEUErmk3T1dw+L57ndOzz+8573vc7x4/8w8cH2//9n/95zznPc85zPnhAUBFYbzbwCtACPAM8CszR/10DRoCzwJdAH3A9cPslYxHQC9wEcp6fv4CDQGMZ/N6DaqAHmEDMTQFDQBfQjHRwpn4W6d+2Ad8oNwf8A+wBHrrP3v9FI/C9mpkEDgOPpXj+ceBDbIcGgQWBPSZiKfCrGvgJWFaC1nLgnGpdAp4u2Z0nGrGdOA48HEBzLnAC25noI1ONnU7HgcqA2tOBk9hpFnXN9GCnU4iRyMdc4GdtY0cEfUCizgSysEtZE0loQgLADWB+jAZ6kTd1OIZ4Hj7Stt4LLTwbSWBT+IXYemAXcAZ5szeAYWAnUOfxfCN2VGZl8FsUG5A3NOTBbQfGKJ7R/wTaPHS+Vf76DH6L4oCKdiXw2rEJ7lMkk5vM/hzwGTaBtiZobVfu/qymC2FIRZsdnHrsSHQ6eG8p5xowz8FrUd6pVE4T8JuKLnRwdmFHIgnHSA6xC5Vz1dOjF/5W0RoH5yzJo2Zg3vawg1OjnHFPj164paKubHtdOT5Rxpgcc3CqlXPTx+A0HxISacAekgoh56kF9kDnesbsHEZ9BH07YsRci/OCfi/30DOc8w6OyTdBO2IafMrB+Vy/N3nobc57phAW6/c5Dz1vvItMg3ccnDpkCuaQEFsMW5QzCjzi4O1WXncao0lYp6InE3htSLLLISG2BVn8s4DnkREwCfHVBK0B5SbxUqFeGx9HookLrUiyK7ZFGfUwNwfZaU8AtZldF8GwGlntwZ2HJLvTSFgeQ/ZO3bink8FabWsgi9EkmMz9QQzxPBwhea1lxhPY3WvS9CoFtUgCnkIKfFFwGunM67EaAN7UNvojtkEHtjgQA5XAL9rGhkhtABJGTURqiqD/mmpfRqoqUbFXG/skgraZulsjaN+DBdjFuCSg7ovYA5drcxoU+wg/Kv1ErmcVQgO2qrIygF4r0onfiVP4c6Ibe8rz3UUXQhW2iN1Ruq30mIHcQOWAN0rQ6VSNHwhbS04FU++6ghTx0qIOG85fCugrNSqAr9VIT4bnD+mzrgPWfcNS5PrsNrAixXOrsHeJaW66omInYupH/O41aoCL+szGiL5Sowr4juTjsMH72PNGKREvCp5FptgkUucthlVI/hkHnoxvKxt2IG96hMLbjHqkBJrDr9pSNlQCXyFGj/LfX1ZMA77Q//UR/lcXwdGALXrffQ1hjspXiHSlFgNrkHUwCbyM/D5lEgnRL5TRVyZ0IyPwB1ICygFvl9NQVlQAH2PrWflr5n+FGuTGaZDAl5oPLO4Azh0nI57rcR4AAAAASUVORK5CYII="/>
                        <p className="contactus_form_list_details_text" >Katraj, Pune</p>
                    </div>

                    <div className="contactus_form_list_details">
                        <img className="contactus_form_list_details_logo" alt="icon message" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAB2UlEQVRoge3ZPWgUQRjG8V9iQFCMiIiF2giCYCFYBCwUFBsFy7SWtum0tbQTS7tgaStWYiEoCAoKgiAIggiCiBBBYhJ0LWYH53J7YW9v19uE+cPC7e37vvM8t/O1e2QymUxmCsygmLaINpidtoC2mEs+z0xNxWQU7KA7ko30jSoj22GsDGmsMvIS57vX0pgFPKu6UBhcS+L5QxzvXldtjuE+/qjWO2TkDtbL71ZxG/P/Q+kI5ksNq6WmdUFjZKQROIEHybVvWMKuTiUPMotr+JLoeIxTm+K2NBK5gNdJzDtcaV3yMBfxZlO7l0fE1jJC/V+mDZr0hNpGIntxy2BfvYdDDUWnHBDGwa+y9hruYn+N3LGNRI4anD2+4yZ2j1EjMofr+JroGHe2bGwksoDnSf57LI6Rfwlvk/xXONdAx8RGCCvsIj4mdZ7g9BY5J/Eoif8s3JWm26VWjET2CN3rR1nrt9D9DicxB4V+v1HG/BTGxb4J227VSOQIlgUjBVZwozxW/DO5XMa2QSdGImfwNKkdjxc423JbnRqJXMUHfBLWoi521gWK9OVDV9v3OC2vdVS/YPAtynZ4DqkiP7P3kmykb2QjfSMb6RvZSN/YMUbyP1aZTCaTyeAvOx2ezeSYdbgAAAAASUVORK5CYII="/>
                        <p className="contactus_form_list_details_text" >casadeco38@gmail.com</p>
                    </div>
                    

                    <div className="contactus_form_list_details">
                        <img className="contactus_form_list_details_logo" alt="icon phone" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADk0lEQVRoge3ZTYhVdRjH8c9NHaUoh3JKU4tGcCU04SItWjSImzCIqCCJaSQxyGoZraVVhVH0ItSmdhWNVvSykKJFbwNOQUTaIouKIB2zF5xe7LR4zvB3hnvu3HM692UxXzibe37/c37n3P/z/J//c1hkkZ5yMyYxg8+xtbd2yjOAp5HNO05hbQ99lWIlDgvjZ7AXq3Ao/+2t3llrn9X4TBj+AZvnnTuRn9vVfWvtcxGOCKNf4sommp35+V9wRfestc9yfCBMfoFLWmgn9PEUe0SY+xbrFtCuxslcP9ZhX6WZFsZubFN/V66fxppOmarCjDA2WGLMm/mYiY44qsjXwtSmEmPWiaDPcEcnTFVhNoB3lhy3Ox93tHZHFdkrDL1YctyqfNw/aNRtqgob8C9+xYUlxt0tHmSyA54qM1uW3NumfgWO68M0fLs035e2oX8410/hvA76Ks0SUZpk2LOA9lKczrXbOuyrErcKcz/i/Ba6A7nuUDdMVaGBT4TJRws0K/BbrrmnS74qcQ3+wlncUKB5QNpoXdUlX5XYJwV+synWwBu55tMCTV8wIPbomdjyNmNQSg4HRbLoS0bEVjfDeIFmA37ONQf0yerejHFp735tgWarFPz7u+SrEk9KKbmogzIq/XuPd8lXaZbhPWHyQ8WBvUNku0zsOPuSIXwjTL4tkkEzbpMeZr8+jZmN+EmYfFlxltohTbPnWuh6ytViEczwvOI3PiolgIOaT8clIplMicX3mChcu8Z1+N3Cgb1FSs2T5vbJtknr1PzjVVxWu+sCtuNP6WGK/plhadGcFlvj2YogE3E3Jnaau6WK+gTu7Jz9udwiPcwLimNhEK+b+9ZP4yFRgJ7LepFMZnUToo/WcbZL0+wVxdmsgftF3Dwr9jOt2CXF4knRR+s4159z03e0LiCXl7juWql3lokpeXlFj20zIqXmj9TbfRyTOqGnFJdKtbFRakZ8X/MN10hJYqrG6xYyhPfzG84orpqrcHF+3T9qvGZLluEpaW4/o56N14NSvddVxqXm+DGRFKqyRUr1N/1/a+UZkVbws3gMF5S8xrCUSJ6o1V1JBkQP4G9pX7NHe03AIXyVj3tXTNuesxkfS7FzVLRni3rN66Xy5kgLXU9oiCbg7FvOROP8JfFJY5P4PD6K76R027UisixLxcehw+IrQLMqOBOpfGVvLJZnGPfhNZHdzojqd59yJc0ii9TJf3jSBy2FrUYDAAAAAElFTkSuQmCC"/>
                        <p className="contactus_form_list_details_text" >+91 9665541943</p>
                    </div>

               </div>
            </div>
        </div>
     );
}
 
export default ContactUs;
