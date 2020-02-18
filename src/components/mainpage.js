import React from 'react'
import phone from '../images/second-main-phone.png';

import quote1 from '../images/quote1.svg';
import quote2 from '../images/quote2.svg';
import quote1_1 from '../images/quote1-1.png';
import quote2_1 from '../images/quote2-1.png';
import testimonial1 from '../images/testimonial01.jpg';
import testimonial2 from '../images/testimonial02.jpg';
import testimonial3 from '../images/testimonial03.jpg';
import {BrowserView, MobileView} from 'react-device-detect';
import Slider from 'react-slick';

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
                return (<img 
                            key={testimonial.id} 
                            src={testimonial.profileImage} 
                            alt="testimonial profile"
                            className={"opacity-100 h-auto rounded-full border-white border-2 bg-white lg:w-auto w-2/6 lg:mx-4"}/>);  
            }
            else{
                return (<img 
                key={testimonial.id} 
                src={testimonial.profileImage} 
                alt="testimonial profile"
                className={"opacity-25 cursor-pointer rounded-full lg:w-auto w-2/6"} 
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
        const settings = {
            dots: true,
            intinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        }
        return(
            <>
            <div className="flex text-center justify-center flex-col mt-4 lg:text-left lg:flex-row-reverse lg:mt-12 lg:mx-12 lg:px-12"> 
                <div className="flex flex-col leading-tight px-6 lg:ml-12 lg:pt-20 lg:px-8" style={{maxWidth: "35rem"}}>
                    <h2 className="font-bold text-3xl text-left lg:text-5xl">Funding at the speed of opportunity</h2>
                    <p className="text-bpGray lg:text-lg lg:my-8 lg:flex hidden" style={{color: "#757e8c"}}> With fast, reliable funding through BrightPoint, 
                        get the flexibility you need to take advantage of
                        whatever opportunities come your way.
                    </p>
                    <button 
                        className="hover:bg-blue-700 text-white font-bold max-w-1/2 h-12 rounded-full mt-4 lg:mt-0 lg:py-2 lg:px-4 lg:h-10 lg:max-w-1/3"
                        style={{backgroundColor: "#377ef9"}}
                    >
                        Apply now
                    </button>
                    <p className="mt-6 text-left text-gray-600 text-base">Applying will not affect  your credit score.</p>
                </div>
                <div className="mt-10 lg:mt-0" style={{zIndex: "-1"}}>
                    <img src={phone} alt="phone" className="max-w-xs pr-8 lg:pr-0"/>
                </div>
            </div>

            <div 
                className="w-100 h-auto flex flex-col justify-center text-center py-10 -mt-64 lg:py-20 lg:px-40 lg:-mt-64" 
                style={{backgroundColor:"#1e344c"}} >
                <h3 className="justify-center text-3xl font-bold text-white mb-10 text-center lg:text-5xl">Meet some of our incredible customers</h3>
                
                <BrowserView>
                    <div className="flex justify-center w-full h-auto">
                        {this.displayImages()}
                    </div>
                    <div className="flex justify-center my-4 max-w-3xl mx-auto mt-10">
                        <div className="mb-auto w-1/2 mr-4 -mt-2" style={{maxWidth: "2rem"}}><img src={quote1_1} alt=""/></div>
                        <div className="w-1/2">
                            <p className="text-white text-left" id='testimonial-text'>{this.state.testimonials[1].words}</p>
                            <br />
                            <p className="text-white text-left" id="testimonial-info">{this.state.testimonials[1].info}</p>
                        </div>
                        <div className="mt-auto w-1/2" style={{maxWidth: "2rem"}}><img src={quote2_1} alt=""/></div>
                    </div>
                </BrowserView>
                <MobileView>
                    <Slider {...settings}>
                        <div className="flex flex-col justify-center text-center">
                            <img 
                            key={this.state.testimonials[0].id} 
                            src={this.state.testimonials[0].profileImage} 
                            alt="testimonial profile"
                            className={"opacity-100 h-auto rounded-full w-2/6 border-white border-2 mx-auto mb-4"}/>
                            <p className="text-left text-gray-500 px-8">{this.state.testimonials[0].words}</p>
                            <br />
                            <p className="text-left text-gray-500 px-8">{this.state.testimonials[0].info}</p>
                        </div>

                        <div className="flex flex-col justify-center text-center">
                            <img 
                                key={this.state.testimonials[1].id} 
                                src={this.state.testimonials[1].profileImage} 
                                alt="testimonial profile"
                                className={"opacity-100 h-auto rounded-full w-2/6 border-white border-2 mx-auto mb-4"}/>
                            <p className="text-left text-gray-500 px-8">{this.state.testimonials[1].words}</p>
                            <br />
                            <p className="text-left text-gray-500 px-8">{this.state.testimonials[1].info}</p>
                        </div>
                        
                        <div className="flex flex-col justify-center text-center">
                            <img 
                                key={this.state.testimonials[2].id} 
                                src={this.state.testimonials[2].profileImage} 
                                alt="testimonial profile"
                                className={"opacity-100 h-auto rounded-full w-2/6 border-white border-2 mx-auto mb-4"}/>
                            <p className="text-left text-gray-500 px-8">{this.state.testimonials[2].words}</p>
                            <br />
                            <p className="text-left text-gray-500 px-8">{this.state.testimonials[2].info}</p>
                        </div>
                    </Slider>
                </MobileView>

            </div>

            <div className="flex flex-col justify-center items-center leading-tight my-12 lg:my-24">
                <h3 className="font-bold text-3xl text-center mx-auto mb-6 px-16 lg:text-5xl">Speak to our loan specialist</h3>
                <h2 className="font-bold text-3xl h-14 mb-4 lg:text-4xl lg:mb-6" style={{color: "#377ef9"}}> 
                    (888) 567-8912
                </h2>
                <p className="lg:text-2xl text-xl text-gray-600">Monday - Friday  |  7am - 4pm PST</p>
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

