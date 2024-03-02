import React, { useState } from 'react';
import { BsCheck } from "react-icons/bs";
import './App.css';

function App() {
  const [accordOne, setAccordOne] = useState(true);
  const [accordTwo, setAccordTwo] = useState(false);
  const [accordThree, setAccordThree] = useState(false);
  const [accordFour, setAccordFour] = useState(false);
  const [accordResult, setAccordResult] = useState(false);



  const handleAccordOne = () => {
    setAccordOne(true);
    setAccordTwo(false);
    setAccordResult(false);
    setAccordThree(false);
    setAccordFour(false)

    setBgt(false);
    setBg(true);
    settbg(false);
  };

  const handleAccordTwo = () => {
    setAccordOne(false);
    setAccordTwo(true);
    setAccordResult(false);
    setAccordThree(false);
    setAccordFour(false)


    setBg(true);
    setBgt(false);
    settbg(true);


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


  }


  const [fbg, setFbg] = useState(false);


  const handleAccordFour = () => {
    setAccordOne(false);
    setAccordTwo(false);
    setAccordResult(false);
    setAccordThree(false);
    setAccordFour(true);
    setFbg(true);


  }

  const handleAccordResult = () => {
    setAccordOne(false);
    setAccordTwo(false);
    setAccordThree(false);
    setAccordFour(false);
    setAccordResult(true);
  };

  const [bg, setBg] = useState(true);
  const [bgt, setBgt] = useState(false);
  const [tbg, settbg] = useState(false);


  return (
    <div className="flex container bg-white p-6 mt-10 m-auto  shadow-md">
      <div className="space-y-6 border-l  border-solid">

        {/* 1st div */}
        <div className="relative">
          <div className={`${bg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-0.5 z-10 -ml-3.5 w-7 h-7 rounded-full bg-emerald-900  border-2  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">{accordOne ? '1' : <BsCheck />}</span>

          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Frontend Development.</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all  duration-300 ${accordOne && 'max-h-screen opacity-100'}`}>


              <form class=" bg-[#EEEEEE] py-8 px-3 rounded-md">
                <select id="countries" className=" border-b border-black w-full  focus:ring-b-3 outline-none ">
                  <option selected class=""></option>
                  <option value="US" class="">United States</option>
                  <option value="CA" class="">Canada</option>
                  <option value="FR" class="">France</option>
                  <option value="DE" class="">Germany</option>
                </select>
              </form>


              <button className='continue-btn' onClick={handleAccordTwo}>CONTINUE</button>
            </div>
          </div>
        </div>

        {/* 2nd div */}
        <div className="relative">
          <div className={`${tbg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-0.5 z-10 -ml-3.5 w-7 h-7  rounded-full border-2  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">{bgt ? <BsCheck /> : '2'}</span>
          </div>
          <div className={`ml-6 ${tbg ? "animate-slide-down" : ""} `}>
            <h4 className="font-bold text-emerald-900">Graphic Design.</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-300 ${accordTwo && 'max-h-screen opacity-100'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button className='continue-btn' onClick={handleAccordThree}>CONTINUE</button>
              <button onClick={handleAccordOne}>BACK</button>
            </div>
          </div>
        </div>
        {/* 3rd div */}
        <div className="relative">
          <div className={`${fbg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-0.5 z-10 -ml-3.5 w-7 h-7  rounded-full border-2  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">{fbg ? <BsCheck /> : "3"}</span>
          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Graphic Design.</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-300 ${accordThree && 'max-h-screen opacity-100'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button className='continue-btn' onClick={handleAccordFour}>CONTINUE</button>
              <button onClick={handleAccordTwo}>BACK</button>
            </div>
          </div>
        </div>
        {/* 4th div */}
        <div className="relative">
          <div className={`${bgt ? "bg-emerald-900" : "bg-gray-400"} absolute -top-0.5 z-10 -ml-3.5 w-7 h-7  rounded-full border-2  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">{bgt ? <BsCheck /> : "4"}</span>
          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Graphic Design.</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-300 ${accordFour && 'max-h-screen opacity-100'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button className='continue-btn' onClick={handleAccordResult}>CONTINUE</button>
              <button onClick={handleAccordThree}>BACK</button>
            </div>
          </div>
        </div>

        {/* 5th div */}
        <div className="relative">
          <div className={`${accordResult ? "bg-emerald-900" : "bg-gray-400"} absolute -top-0.5 z-10 -ml-3.5 w-7 h-7  rounded-full  border-2  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">5</span>
          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Result</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center opacity-0 transition-all duration-300 ${accordResult && 'max-h-screen opacity-100'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button className='continue-btn' onClick={handleAccordOne}>Start Again</button>
              <button onClick={handleAccordFour}>BACK</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
