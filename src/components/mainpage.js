import React from 'react'
import phone from '../images/second-main-phone.png';

import quote1 from '../images/quote1.svg';
import quote2 from '../images/quote2.svg';
import testimonial1 from '../images/testimonial01.png';
import testimonial2 from '../images/testimonial02.png';
import testimonial3 from '../images/testimonial03.png';

class Mainpage extends React.Component{
    
    state = {
        selectedIndex: 1,
        testimonials: [
            {
                profileImage: testimonial1,
                words: "testimonial A",
                id: 0
            },
            {
                profileImage: testimonial2,
                words: "testimonial B",
                id: 1
            },
            {
                profileImage: testimonial3,
                words: "testimonial C",
                id: 2
            }
        ]
    }

    displayImages=()=>{
        return this.state.testimonials.map((testimonial)=>{
            if(testimonial.id === 1){
                return (<img key={testimonial.id} src={testimonial.profileImage} alt=""className={"opacity-100"}/>);  
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
    }
    
    render(){
        return(
            <>
            <div className="flex justify-center mt-12 mx-12 px-12"> 
                <div className="">
                    <img src={phone} alt="phone" className="max-w-xs"/>
                </div>
                <div className="flex flex-col ml-12 pt-20 px-8 leading-tight" style={{maxWidth: "35rem"}}>
                    <h2 className="text-5xl font-bold ">Funding at the speed of opportunity</h2>
                    <p className="my-8 text-bpGray" style={{color: "#757e8c"}}> With fast, reliable funding through BrightPoint, 
                        get the flexibility you need to take advantage of
                        whatever opportunities come your way.
                    </p>
                    <button 
                        className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 rounded-full max-w-1/4"
                        style={{backgroundColor: "#377ef9"}}
                        >
                        Apply now
                    </button>
                    <p className="mt-6">Applying will not affect  your credit score.</p>
                </div>
            </div>

            <div 
                className="w-100 h-auto flex flex-col justify-center py-16 px-40" 
                style={{backgroundColor:"#1e344c"}} >
                <h3 className="text-center text-5xl font-bold text-white mb-10">Meet some of our incredible customers</h3>
                <div className="flex justify-center" id="display-images">
                    {this.displayImages()}
                </div>

                <div>
                    {/* <p>{this.state.testimonials.filter(t=>t.id === this.state.selectedIndex)[0].words}</p>     */}
                    <p id='testimonial-text'>{this.state.testimonials[1].words}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center my-24">
                <h3 className="text-5xl font-bold mb-6">Speak to our loan specialist</h3>
                <h2 className="text-5xl font-bold mb-6" style={{color: "#377ef9"}}> 
                    (888) 567-8912
                </h2>
                <p className="text-xl">Monday - Friday  |  7am - 4pm PST</p>
                
                <div>
                    <h2> Single Item!</h2>     
                </div>
            </div>
            </>
        )
    }
}

export default Mainpage;