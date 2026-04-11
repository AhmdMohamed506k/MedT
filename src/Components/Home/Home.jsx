import React, { useEffect, useState } from 'react';

import style from "./Home.module.css";
import SplitText from "./SplitText/SplitText.jsx";
import { CgArrowTopRightO } from "react-icons/cg";
import HomeSearch from '../HomeSearch/HomeSearch.jsx';
import MainLoader from '../MainLoader/MainLoader.jsx';

export default function Home() {
  const [isExiting, setIsExiting] = useState(false); 
  const [showSearch, setShowSearch] = useState(false); 
  const searchInputOpened=localStorage.getItem("SearchInputOpened")
 


 useEffect(() => {
    const stored = localStorage.getItem("SearchInputOpened");
    if (stored === "true") {
      setShowSearch(true);
    }
  }, []);
  const handleStart = () => {
    setIsExiting(true); 

    setTimeout(() => {
      localStorage.setItem("SearchInputOpened", "true");
      setShowSearch(true);
      setIsExiting(false);
    }, 800);
  };

  return (
    





    <section className={style.HomeSection}>


      <MainLoader/>
      
      <video autoPlay muted loop playsInline preload="auto" className={style.video_bg}>
        <source src="https://res.cloudinary.com/ddpr0dmzh/video/upload/q_auto/f_auto/v1775944112/4KBlueBackGround_mvgiwr.mp4" type="video/mp4" />
      </video>

      <div className={style.contant}>
        {!showSearch  ? (
   
          <div className={`flex flex-col items-center  `}>
            <div className={`${style.HomeTitle}  animate__animated  ${isExiting ? "animate__fadeOut" : "animate__fadeIn"}`}>
              <SplitText className="mb-[-15px]" text="MedT Project" />
            </div>
            
            <p className={`${style.HomeParagraph1} animate__animated  ${isExiting ? "animate__fadeOut" : "animate__fadeIn"}`}>
              AI-Assisted Medical Terminology & Translation Platform
            </p>
            
            <p className={`${style.HomeParagraph2}  animate__animated  ${isExiting ? "animate__fadeOut" : "animate__fadeIn"}`}>
              Built for medical students, translators, and healthcare learners
            </p>
            
            <button  onClick={()=>{handleStart()}}  className={`mt-5 px-[80px] py-2 flex bg-white text-black font-semibold rounded-full cursor-pointer  transition-transform animate__animated  ${isExiting ? "animate__fadeOutDown" : "animate__fadeIn animate__delay-1s"} `} >
              Start <CgArrowTopRightO className='mt-[5px] ms-2' />
            </button>
          </div>
        ) : (
           
        <HomeSearch setShowSearch={setShowSearch} showSearch={showSearch} setIsExiting={setIsExiting}/>

        )}
      </div> 
    </section>
  );
}