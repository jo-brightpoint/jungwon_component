import React from 'react'
import phone from '../images/second-main-phone.png';

import quote1 from '../images/quote1.svg';
import quote2 from '../images/quote2.svg';
import testimonial1 from '../images/testimonial01.png';
import testimonial2 from '../images/testimonial02.png';
import testimonial3 from '../images/testimonial03.png';

class Mainpage extends React.Component{
    
    state = {
        isSelected: -1,
        testimonials: [
            {
                profileImage: testimonial1,
                words: "Running a business like ours when we need the capital, we need it immediately.",
                id: 0
            },
            {
                profileImage: testimonial2,
                words: "testimonial 2",
                id: 1
            },
            {
                profileImage: testimonial3,
                words: "testimonial 3",
                id: 2
            }
        ]
    }
    
    imageHandler = (e, testimonial) => {
        e.preventDefault();
        e.persist();

        // first image
        if(testimonial.id === 0){
            e.currentTarget.nextElementSibling.style.opacity = "1";
            e.currentTarget.style.opacity = "0.25";
            const currentTargetImage = e.currentTarget.src;
            const nextTargetImage = e.currentTarget.nextElementSibling.src;

            e.currentTarget.src = nextTargetImage;
            e.currentTarget.nextElementSibling.src = currentTargetImage;

        }

        // last image
        if(testimonial.id === 2){
            e.currentTarget.previousElementSibling.style.opacity = "1";
            e.currentTarget.style.opacity = "0.25";
            const currentTargetImage = e.currentTarget.src;
            const previousTargetImage = e.currentTarget.previousElementSibling.src;

            console.log(e.currentTarget.src);
            console.log(currentTargetImage);
            e.currentTarget.src = previousTargetImage;
            e.currentTarget.previousElementSibling.src = currentTargetImage;
        }

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
                <div className="flex justify-center mb-10">
                    {/* <img src={testimonial1} alt="testimonial1" id="image1" className={"mx-2 w-40 cursor-pointer opacity-50"} value="1" onClick={this.imageHandler}/>
                    <img src={testimonial2} alt="testimonial2" id="image2" className={"mx-2 w-40 cursor-pointer opacity-50"} value="2" onClick={this.imageHandler}/>
                    <img src={testimonial3} alt="testimonial3" id="image3" className={"mx-2 w-40 cursor-pointer opacity-50"} value="3" onClick={this.imageHandler}/> */}
                </div>

                <div className="flex justify-center" id="arrayImages">
                    {
                        this.state.testimonials.map((testimonial)=>{
                            if(testimonial.id === 1){
                                return <img 
                                        key={testimonial.profileImage} 
                                        src={testimonial.profileImage} 
                                        alt=""
                                        className={"opacity-100"} 
                                        />  
                            }
                            else{
                                return <img 
                                key={testimonial.profileImage} 
                                src={testimonial.profileImage} 
                                alt=""
                                className={"opacity-25 cursor-pointer"} 
                                onClick={(e) => this.imageHandler(e, testimonial)}
                                />
                            }
                        })
                    }
                </div>

                {/* <p>{this.state.testimonials.filter(t=>t.id === this.state.index)[0].msg}</p> */}
    {/* <p>{this.state.testimonials.filter(t => t.id === this.state.index)[0].msg}</p> */}

                {/* <div className="flex flex-col justify-center" ref={this.testimonial1}>
                    <img src={testimonial1} alt="testimonial1" id="image1" className={"mx-2 w-40 cursor-pointer opacity-50"} value="1" onClick={this.imageHandler}/>
                    <div className="flex justify-center">
                        <img src={quote2} alt="quote1" className="pb-48"/>
                        <p style={{maxWidth: "43rem", color:"white", padding: "0.5rem 2.5rem 0"}}>
                            Running a business like ours when we need the capital, we need it immediately. 
                            Timing is of the essence for us and BrightPoint always delivered what we needed. 
                            Our revenue jumped more than 300% and grew from 4 employees to over 20 in just two years.
                            <br />
                            <br />
                            Evelyn J  |  Contractors  |  $150,000
                        </p>
                        <img src={quote1} alt="quote2" className="pt-xl"/>
                    </div>
                </div>


                <div className="flex flex-col justify-center" ref={this.testimonial2}>
                    <img src={testimonial2} alt="testimonial1" id="image2" className={"mx-2 w-40 cursor-pointer opacity-50"} value="12" onClick={this.imageHandler}/>
                    <div className="flex justify-center">
                        <img src={quote2} alt="quote2" className="pb-48"/>
                        <p style={{maxWidth: "43rem", color:"white", padding: "0.5rem 2.5rem 0"}}>
                            Running a business like ours when we need the capital, we need it immediately. 
                            Timing is of the essence for us and BrightPoint always delivered what we needed. 
                            Our revenue jumped more than 300% and grew from 4 employees to over 20 in just two years.
                            <br />
                            <br />
                            Evelyn J  |  Contractors  |  $150,000
                        </p>
                        <img src={quote1} alt="quote1" className="pt-xl"/>
                    </div>
                </div>

                <div className="flex flex-col justify-center" ref={this.testimonial3}>
                    <img src={testimonial3} alt="testimonial1" id="image3" className={"mx-2 w-40 cursor-pointer opacity-50"} value="12" onClick={this.imageHandler}/>
                    <div className="flex justify-center">
                        <img src={quote2} alt="quote2" className="pb-48"/>
                        <p style={{maxWidth: "43rem", color:"white", padding: "0.5rem 2.5rem 0"}}>
                            Running a business like ours when we need the capital, we need it immediately. 
                            Timing is of the essence for us and BrightPoint always delivered what we needed. 
                            Our revenue jumped more than 300% and grew from 4 employees to over 20 in just two years.
                            <br />
                            <br />
                            Evelyn J  |  Contractors  |  $150,000
                        </p>
                        <img src={quote1} alt="quote1" className="pt-xl"/>
                    </div>
                </div> */}

                {/* <div>
                    <img src={require(`../images/testimonial01.png`)} alt="testimonial"/>
                </div>
                <div>
                    <img src={require("../images/testimonial02.png")} alt="testimonial"/>
                </div>
                <div>
                    <img src={require("../images/testimonial03.png")} alt="testimonial"/>
                </div> */}
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