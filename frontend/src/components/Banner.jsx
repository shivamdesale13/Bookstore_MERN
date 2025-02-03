import React from 'react'
import Banner2 from "../../src/Banner3.png"

function Banner() {
  const handleMailto = () => {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value;
    
    if (email) {
      // Redirect to the mailto link
      window.location.href = `mailto:mikeborsee@gmail.com?subject=Inquiry&body=Hello, I am interested! My email is ${email}`;
    } else {
      alert("Please enter your email first.");
    }
  };

  return <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 pax-4 flex flex-col md:flex-row my-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold"> 
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl">
            Discover your next favorite book! 📚✨ 
            Explore a vast collection of stories, knowledge, and adventure—all just a click away. 
            Shop now and let the pages take you on a journey!
          </p>

          {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              id="emailInput"
              type="email"
              className="grow"
              placeholder="Email"
            />
          </label>
        </div>
        
        {/* Let's Go Button */}
        <button className="btn mt-6 btn-secondary" onClick={handleMailto}>
          Let's Go!
        </button>
      </div>

      {/* Image Section */}
      <div className="order-1 w-full md:w-1/2 ml-4 bg-transparent">
        <img 
          src={Banner2} 
          className="w-full h-auto object-contain" 
          alt="Banner"
          style={{ backgroundColor: 'transparent' }} 
        />
      </div>
    </div>
  </>
}

export default Banner;
