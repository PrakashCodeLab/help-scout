"use client"

import { TestimonialItems } from '@/constants/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  

  const [activeIndex, setActiveIndex] = useState(0);

  const handleRadioChange = (index:number) => {
    setActiveIndex(index);
  };


  useEffect(()=>{
       const interval = setInterval(()=>{
         setActiveIndex((preIndexx)=>(preIndexx+1)% TestimonialItems.length);
       },6000);

      return ()=>{
        clearInterval(interval);
      }


  },[]);

  return (
    <div className="testimonial-container mt-[3rem] mb-[3rem]">
      <div className="testimonial-carousel">
        {TestimonialItems.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="testimonial-card w-[] bg-white shadow-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <Image
          src={testimonial.img}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="text-lg font-bold">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.designations}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{testimonial.description}</p>
      <Image src={testimonial.companyLogo} alt="Company Logo" className="w-20" />
    </div>
          </div>
        ))}
      </div>

      <div className="testimonial-navigation mb-[1.5rem]">
        {TestimonialItems.map((_, index) => (
          <label key={index}>
            <input
              type="radio"
              name="testimonial-radio"
              checked={index === activeIndex}
              onChange={() => handleRadioChange(index)}
            />
          </label>
        ))}
      </div>

      <style jsx>{`
        .testimonial-container {
          width: 100%;
          height: auto;
          text-align: center;

          display:grid;
          place-items:center;
        }

        .testimonial-carousel {
          display: flex;
          flex-direction: column;
          
          width:400px;
          height: auto;
          overflow: hidden;
        }

        .testimonial {
          display: none;
        }

        .testimonial.active {
          display: block;
        }

        .testimonial-navigation {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .testimonial-navigation label {
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: #bbb;
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
        }

        .testimonial-navigation label:hover {
          background-color: #999;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
