import React, { useState } from 'react';
import { BsCheck } from "react-icons/bs";
import './App.css';
import ProgressBar from './Accord';
import CustomizedSlider from './p';
import One from './One';

function App() {
  const [accordOne, setAccordOne] = useState(true);
  const [accordTwo, setAccordTwo] = useState(false);
  const [accordThree, setAccordThree] = useState(false);
  const [accordFour, setAccordFour] = useState(false);
  const [accordResult, setAccordResult] = useState(false);

  const [fbg, setFbg] = useState(false);
  const [gbg, setgb] = useState(false);
  const [bg, setBg] = useState(true);
  const [bgt, setBgt] = useState(false);
  const [tbg, settbg] = useState(false);
  const [hbg, sethbg] = useState(false);
  const [ibg, setibg] = useState(false);



  const handleAccordOne = () => {
    setAccordOne(true);
    setAccordTwo(false);
    setAccordResult(false);
    setAccordThree(false);
    setAccordFour(false);
    setBgt(false);
    setBg(true);
    settbg(false);
    setgb(false);
    setFbg(false);
    sethbg(false);
    setibg(false);
  };

  const handleAccordTwo = () => {
    setAccordOne(false);
    setAccordTwo(true);
    setAccordResult(false);
    setAccordThree(false);
    setAccordFour(false);
    setBg(true);
    setBgt(false);
    settbg(true);
    setgb(false);
    setFbg(false);
    sethbg(false);
    setibg(false);
  };


  const handleAccordThree = () => {
    setAccordOne(false);
    setAccordTwo(false);
    setAccordResult(false);
    setAccordThree(true);
    setAccordFour(false);
    setBg(true);
    setBgt(true);
    settbg(true);
    setgb(true);
    setFbg(false);
    sethbg(false);
    setibg(false);
  }





  const handleAccordFour = () => {
    setAccordOne(false);
    setAccordTwo(false);
    setAccordResult(false);
    setAccordThree(false);
    setAccordFour(true);
    setFbg(true);
    sethbg(false);
    setibg(true);


  }

  const handleAccordResult = () => {
    setAccordOne(false);
    setAccordTwo(false);
    setAccordThree(false);
    setAccordFour(false);
    setAccordResult(true);
    sethbg(true);
  };




  return (
    <div className="flex rounded  bg-white px-9 py-6 m-4  main-shadow">
      <div className="space-y-6 w-full border-l  border-solid">

        {/* 1st div */}
        <div className="relative pb-6">
          <div className={`${bg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-2  z-10 -ml-[20px] w-10 h-10 rounded-full bg-emerald-900  border-8  border-white flex items-center justify-center`}>
            <span className="text-white text-sm font-bold">{accordOne ? '1' : <BsCheck className='text-xl' />}</span>
          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Frontend Development.</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all  duration-500 ${accordOne && 'max-h-screen opacity-100'}`}>

              <form class="bg-[#EEEEEE] py-8 px-3 rounded-md ">
                <div class="select-wrapper">
                  <select id="countries" class="border-b border-[#00000061] hover:border-black w-full focus:border-3 focus:focus-line focus:border-b-2 outline-none">
                    <option selected class=""></option>
                    <option value="US" class="">Heating - New</option>
                    <option value="CA" class=""><p>Heating - Old</p></option>
                    <option value="FR" class="">UFH Full</option>
                    <option value="DE" class="">UFH</option>
                  </select>
                  <div class="focus-line"></div>
                </div>
              </form>
              <One/>

              {/* <input type="text" id="animatedInput" placeholder="Type something..." />
<span class="focus-line"></span> */}

              <button className='continue-btn mt-12' onClick={handleAccordTwo}>CONTINUE</button>
            </div>
          </div>
        </div>

        {/* 2nd div */}
        <div className="relative pb-6">
          <div className={`${tbg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-2 z-10 -ml-[20px] w-10 h-10 rounded-full bg-emerald-900  border-8 border-white flex items-center justify-center`}>
            <span className="text-white text-sm">{bgt ? <BsCheck className='text-xl' /> : '2'}</span>
          </div>
          <div className={`ml-6 ${tbg ? "animate-slide-down" : ""} `}>
            <h4 className={`tracking-wide ${accordOne ? 'text-[#00000061]' : 'text-black'}`}>System temperature</h4>

            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-500 ${accordTwo && 'max-h-screen opacity-100'}`}>

              {/* <ProgressBar /> */}
              <CustomizedSlider />

              <div className='mt-12'>
                <button className='continue-btn' onClick={handleAccordThree}>CONTINUE</button>
                <button onClick={handleAccordOne}>BACK</button>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd div */}
        <div className="relative pb-6">
          <div className={`${gbg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-2 z-10 -ml-[20px] w-10 h-10 rounded-full bg-emerald-900  border-8  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">{fbg ? <BsCheck /> : "3"}</span>
          </div>
          <div className="ml-6">
            <h4 className="tracking-wide">System volume</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-500 ${accordThree && 'max-h-screen opacity-100'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button className='continue-btn' onClick={handleAccordFour}>CONTINUE</button>
              <button onClick={handleAccordTwo}>BACK</button>
            </div>
          </div>
        </div>
        {/* 4th div */}
        <div className="relative pb-6">
          <div className={`${ibg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-2 z-10 -ml-[20px] w-10 h-10 rounded-full bg-emerald-900  border-8  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">{hbg ? <BsCheck /> : "4"}</span>
          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Graphic Design.</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-300 ${accordFour && 'max-h-screen opacity-100'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button className='continue-btn' onClick={handleAccordResult}>CONFIGURE YOUR X-POT @</button>
              <button onClick={handleAccordThree}>BACK</button>
            </div>
          </div>
        </div>

        {/* 5th div */}
        <div className="relative">
          <div className={`${accordResult ? "bg-emerald-900" : "bg-gray-400"} absolute -top-2 z-10 -ml-[20px] w-10 h-10 rounded-full bg-emerald-900  border-8  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">5</span>
          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Result</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-500 ${accordResult && 'max-h-screen opacity-100'}`}>



              {/* table   */}
              <div className='bg-[#EEEEEE] rounded p-1'>
                <div>
                  System requirement ts
                </div>
                <div className='bg-white  rounded-md'>
                  <div className='flex items-center border-b p-3'>
                    <div className='w-1/2'>
                      Type
                    </div>
                    <div>
                      Chiled - New
                    </div>
                  </div>
                  <div className='flex items-center border-b p-3'>
                    <div className='w-1/2'>
                      Type
                    </div>
                    <div>
                      Chiled - New
                    </div>
                  </div>
                  <div className='flex items-center p-3'>
                    <div className='w-1/2'>
                      MInimum pipework Size
                    </div>
                    <div>
                      1/2 "
                    </div>
                  </div>
                </div>
              </div>

              {/* table  */}



              <button className='continue-btn' onClick={handleAccordOne}>START AGAIN</button>
              <button onClick={handleAccordFour}>BACK</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
