import React, { useEffect, useState } from 'react'
import style from "./TremDetails.module.css"

import { useParams } from 'react-router-dom';
import PNG from "../../../public/TalkPng.png"
import ProgressLine from "../ProgressLine/ProgressLine.jsx"
import TextType from "../Home/TextType/TextType.jsx"
import axios from 'axios';
import {  Riple } from 'react-loading-indicators';






export default function TremDetails() {



  const [TremData, SetTremData] = useState(null)
  const [AI_AccuracyCount, SetAI_AccuracyCount] = useState(null)

  const { id } = useParams();










  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);


      utterance.lang = 'en-US'; // language
      utterance.rate = 0.9;     // speek speed
      utterance.pitch = 1;      // حدة الصوت


      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith('en-'));
      if (englishVoice) utterance.voice = englishVoice;

      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech.");
    }
  };




   




  useEffect(() => {

    const getTremDetails = async () => {

      try {

        const TremDetails = await axios.get(`https://medt-api.vercel.app/MedTApi/api/v1/GetTerm/${id}`)
        SetTremData(TremDetails.data.SpecificTerm)
        SetAI_AccuracyCount(TremDetails.data.SpecificTerm.details.AI_Accuracy)
      } catch (err) {

        console.log("===>", err);

      }





    }







    getTremDetails()
   

  }, [id])







   






  return (<>
    <section className={style.TremDetailSection}>
      <video autoPlay muted loop playsInline preload="auto" className={style.video_bg}>
        <source src={`https://res.cloudinary.com/ddpr0dmzh/video/upload/q_auto/f_auto/v1775944112/4KBlueBackGround_mvgiwr.mp4`} type="video/mp4" />
      </video>




      <div className={style.contant}>
        <div className={`${style.container}   w-full px-9`}>

          {TremData ? <>




            <div className={`${style.FirstBox} flex flex-col gap-3 mt-50 pb-5 animate__animated  animate__fadeInUp`}>
              <div className='flex gap-3'>
                <h2>{TremData.EnglishTerm}</h2>
                <p>-</p>
                <p>{TremData.ArabicTerm}</p>
              </div>
              <div className='flex gap-3 text-[#747a85]'>
                <img src={PNG} className={`${style.speakerIcon} w-5 cursor-pointer`} alt="Speak" onClick={() => handleSpeak(TremData.EnglishTerm)}
                />
                <p className='text-[#757b86]  font-semibold '>{TremData.Pronnucation}</p>
              </div>
            </div>



            <div className={`${style.secondBox} flex flex-col flex-wrap gap-6 py-10  animate__animated animate__fadeInUp `}>


              <div className={`${style.box}  text-start`}>
                <p className='ms-2 mb-1'>Definition in English</p>
                <div className=' bg-white text-center rounded-[11px] text-[#747a85] border-2 border-[#747a851a] p-2'>
                  <span>{TremData.details.EnglishDefinition}</span>


                </div>
              </div>


              <div className={`${style.box}  text-start`}>
                <p className='ms-2 mb-1'>Definition in Arabic</p>
                <div className=' bg-white text-center rounded-[11px] text-[#747a85] border-2 border-[#747a851a] p-2'>
                  <span>{TremData.details.ArabicDefinition}</span>


                </div>


              </div>


              <div className={`${style.box}  text-start`}>
                <p className='ms-2 mb-1'>AI Explanation</p>
                <div className=' bg-white text-center rounded-[11px] text-[#747a85] border-2 border-[#747a851a] p-2'>
                  <span>{TremData.details.AI_Explanation}</span>


                </div>
              </div>


              <div className={`${style.box}  text-start`}>
                <p className='ms-2 mb-1'>Examples</p>
                <div className=' bg-white text-center rounded-[11px] text-[#747a85] border-2 border-[#747a851a] p-2'>

                  {TremData?.details?.Examples?.map((EX, index) => (
                    <span key={index}>{EX?.ExampleSentence}</span>
                  ))}


                </div>
              </div>

            </div>


            <div className={`${style.ThirdBox} pb-10 animate__animated animate__fadeIn animate__delay-1s`}>


              <div className={`${style.box}  text-start`}>
                <p className='ms-2 mb-1'>3D Image (url)</p>
                <div className=' bg-white text-center rounded-3xl text-[#747a85] border-2 border-[#747a8507] p-2'>


                  <TextType
                    text={TremData?.details?.Definition3dImageUrl == "" ? ["Sorry url is not available", "Please try again later"] : [`${TremData?.details?.Definition3dImageUrl}`]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"

                    deletingSpeed={50}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                  />


                </div>
              </div>

            </div>



            <div className={`${style.LastBox} animate__animated animate__fadeIn animate__delay-1s`}>


              <div className={`${style.box}  text-start`}>
                <span className='ms-2 '>AI Accuracy</span>
                <ProgressLine
                  backgroundColor="#ffffff3f"

                  visualParts={[
                    {
                      percentage: AI_AccuracyCount == null || AI_AccuracyCount == "" ? "0" + "%" : AI_AccuracyCount + "%"  ,
                      color: "white"
                    }
                  ]}
                />
              </div>

            </div>


          </> : <Riple color="#1171f0" size="small" text="" textColor="" />}






        </div>
      </div>





    </section>


  </>)

}