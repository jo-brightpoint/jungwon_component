import React from 'react'
import phone from '../images/second-main-phone.png';

import quote1 from '../images/quote1.svg';
import quote2 from '../images/quote2.svg';
import quote1_1 from '../images/quote1-1.png';
import quote2_1 from '../images/quote2-1.png';
import testimonial1 from '../images/testimonial01.png';
import testimonial2 from '../images/testimonial02.png';
import testimonial3 from '../images/testimonial03.png';

class Mainpage extends React.Component{
    
    state = {
        selectedIndex: 1,
        testimonials: [
            {
                profileImage: testimonial1,
                words: 
                "Running a business like ours when we need the capital, we need it immediately." + 
                "Timing is of the essence for us and BrightPoint always delivered what we needed." + 
                "Our revenue jumped more than 300% and grew from 4 employees to over 20 in just two years.",
                info:
                "Evelyn J  |  Contractors  |  $150,000",
                id: 0
            },
            {
                profileImage: testimonial2,
                words: 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " + 
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
                "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" + 
                "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint" + 
                "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                info: 
                "John Doe  |  Contractors  |  $250,000",
                id: 1
            },
            {
                profileImage: testimonial3,
                words: 
                "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, " + 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " + 
                "augue velit cursus nunc.",
                info: "Gabe J  |  Contractors  |  $150,000",
                id: 2
            }
        ]
    }

    displayImages=()=>{
        return this.state.testimonials.map((testimonial)=>{
            if(testimonial.id === 1){
                return (<img key={testimonial.id} src={testimonial.profileImage} alt=""className={"opacity-100 mx-6 rounded-full w-auto border-white border-2"}/>);  
            }
            else{
                return (<img 
                key={testimonial.id} 
                src={testimonial.profileImage} 
                alt=""
                className={"opacity-25 cursor-pointer"} 
                onClick={(e) => this.imageClickHandler(e, testimonial)}
                />
                )}
        })
    }

    imageClickHandler = (e, position) => {
        e.preventDefault();
        e.persist();
        
        // when first image clicked
        if(position.id === 0){
            // swap [0] and [1] in testimonials array
            [this.state.testimonials[0], this.state.testimonials[1]] = [this.state.testimonials[1], this.state.testimonials[0]];

            // update the target image and the next image
            e.currentTarget.src = this.state.testimonials[0].profileImage;
            e.currentTarget.nextElementSibling.src = this.state.testimonials[1].profileImage;
        }
        
        // when thrid image clicked
        if(position.id === 2){
            // swap [1] and [2] in testimonials array
            [this.state.testimonials[1], this.state.testimonials[2]] = [this.state.testimonials[2], this.state.testimonials[1]];

            // update the target image and the next image
            e.currentTarget.src = this.state.testimonials[2].profileImage;
            e.currentTarget.previousElementSibling.src = this.state.testimonials[1].profileImage;
        }
        
        document.getElementById('testimonial-text').innerHTML = this.state.testimonials[1].words;  
        document.getElementById('testimonial-info').innerHTML = this.state.testimonials[1].info;  
    }
    
    render(){
        return(
            <>
            <div className="flex justify-center mt-12 mx-12 px-12"> 
                <div className="" style={{zIndex: "-1"}}>
                    <img src={phone} alt="phone" className="max-w-xs"/>
                </div>
                <div className="flex flex-col ml-12 pt-20 px-8 leading-tight" style={{maxWidth: "35rem"}}>
                    <h2 className="text-5xl font-bold ">Funding at the speed of opportunity</h2>
                    <p className="my-8 text-bpGray text-lg" style={{color: "#757e8c"}}> With fast, reliable funding through BrightPoint, 
                        get the flexibility you need to take advantage of
                        whatever opportunities come your way.
                    </p>
                    <button 
                        className="hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 rounded-full max-w-1/3"
                        style={{backgroundColor: "#377ef9", maxWidth: "33%"}}
                    >
                        Apply now
                    </button>
                    <p className="mt-6 text-gray-600 text-base">Applying will not affect  your credit score.</p>
                </div>
            </div>

            <div 
                className="w-100 h-auto flex flex-col justify-center text-center py-20 px-40 -mt-64" 
                style={{backgroundColor:"#1e344c"}} >
                <h3 className="text-center text-5xl font-bold text-white mb-10">Meet some of our incredible customers</h3>
                <div className="flex justify-center">
                    {this.displayImages()}
                </div>
                <div className="flex justify-center my-4 max-w-3xl ml-auto mr-auto mt-10">
                    {/* <p>{this.state.testimonials.filter(t=>t.id === this.state.selectedIndex)[0].words}</p> */}
                    <div className="mb-auto w-1/2 mr-4 -mt-2" style={{maxWidth: "2rem"}}><img src={quote1_1} alt=""/></div>
                    <div className="w-1/2">
                        <p className="text-white text-left" id='testimonial-text'>{this.state.testimonials[1].words}</p>
                        <br />
                        <p className="text-white text-left" id="testimonial-info">{this.state.testimonials[1].info}</p>
                    </div>
                    <div className="mt-auto w-1/2" style={{maxWidth: "2rem"}}><img src={quote2_1} alt=""/></div>
                </div>

            </div>

            <div className="flex flex-col justify-center items-center my-24">
                <h3 className="text-5xl font-bold mb-6">Speak to our loan specialist</h3>
                <h2 className="text-4xl font-bold mb-6 h-14" style={{color: "#377ef9"}}> 
                    (888) 567-8912
                </h2>
                <p className="text-2xl text-gray-600">Monday - Friday  |  7am - 4pm PST</p>
                <button 
                    className="hover:bg-blue-700 text-white font-bold px-10 h-12 rounded-full mt-10"
                    style={{backgroundColor: "#377ef9"}}
                >
                    Let's get started
                </button>    
            
            </div>
            </>
        )
    }
}

export default Mainpage;

// module.exports = {
//     important: true,
//     theme: {
//       extend: {},
//       maxWidth: {
//         '1/4': '25%',
//         '1/2': '50%',
//         '3/4': '75%',
//       },
//       colors: {
//         bpBlue:{
//           primary: ''
//         }
//       },
//       backgroundColor: theme => ({
//         'primary': '#377ef9',
//       }),
//       textColor: {
//         'bpGray': '#757e8c',
//         'bpNavy': '#1e344c',
//         // 'secondary': '#ffed4a',
//         // 'danger': '#e3342f',
//       }
//     },
    
//     variants: {
//       opacity: ['responsive', 'hover']
//     },
//     plugins: [],
//   }
  