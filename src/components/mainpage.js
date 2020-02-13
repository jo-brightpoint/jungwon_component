import React from 'react'
import phone from '../images/second-main-phone.png';
import testimonial1 from '../images/girl-testimonial.png';
import testimonial2 from '../images/man-testimonial.png';
import testimonial3 from '../images/man-testimonial2.png';
import quote1 from '../images/quote1.svg';
import quote2 from '../images/quote2.svg';

class Mainpage extends React.Component{
    
    state = {
        isSelected: true
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
                    <img src={testimonial1} alt="testimonial1" id="image1" className={`mx-2 w-40 cursor-pointer `} value="1" onClick={this.imageHandler(this.value)}/>
                    <img src={testimonial2} alt="testimonial2" id="image2" className={`mx-2 w-40 cursor-pointer `} value="2" onClick={this.imageHandler(this.value)}/>
                    <img src={testimonial3} alt="testimonial3" id="image3" className={`mx-2 w-40 cursor-pointer `} value="3" onClick={this.imageHandler(this.value)}/>
                </div>
                <div className="flex justify-center">
                    <img src={quote2} alt="quote1" className="pb-48"/>
                        <p className="text-white pt-2 px-10" style={{maxWidth: "43rem"}}>
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

            <div className="flex flex-col justify-center items-center my-24">
                <h3 className="text-5xl font-bold mb-6">Speak to our loan specialist</h3>
                <h2 className="text-5xl font-bold mb-6" style={{color: "#377ef9"}}> 
                    (888) 567-8912
                </h2>
                <p className="text-xl">Monday - Friday  |  7am - 4pm PST</p>
            </div>
            
            </>
        )
    }
}

export default Mainpage;