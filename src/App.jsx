import React, { useState } from 'react';
import { BsCheck } from "react-icons/bs";
import './App.css';
import ProgressBar from './Accord';
import CustomizedSlider from './p';
import One from './One';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Boxfour from './BoxFour';

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
            <h4 className="tracking-wide">Frontend Development.</h4>
            <div className={`overflow-hidden h-auto max-h-0 items-center transition-all duration-500 ${accordOne ? 'max-h-screen' : ''}`}>

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

              <div className='mt-12'>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#0B453C',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0f5c50',
                      },
                    }}
                    onClick={handleAccordTwo}
                  >
                    Continue
                  </Button>

                </Stack>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd div */}
        <div className="relative pb-6">
          <div className={`${tbg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-2 z-10 -ml-[20px] w-10 h-10 rounded-full bg-emerald-900  border-8 border-white flex items-center justify-center`}>
            <span className="text-white text-sm">{bgt ? <BsCheck className='text-xl' /> : '2'}</span>
          </div>
          <div className={`ml-6 ${tbg ? "animate-slide-down" : ""} `}>
            <p className={`tracking-wide ${accordOne ? 'text-[#00000061]' : 'text-black'}`}>System temperature</p>

            <div className={`overflow-hidden h-auto items-center transition-all duration-500 ${accordTwo ? 'max-h-screen' : 'max-h-0'}`}>



              {/* <ProgressBar /> */}
              <CustomizedSlider />

              <div className='mt-12'>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#0B453C',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0f5c50',
                      },
                    }}
                    onClick={handleAccordThree}
                  >
                    Continue
                  </Button>
                  <Button onClick={handleAccordOne} variant="text" style={{ color: 'black' }}>
                    BACK
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd div */}
        <div className="relative pb-6">
          <div className={`${gbg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-2 z-10 -ml-[20px] w-10 h-10 rounded-full bg-emerald-900  border-8  border-white flex items-center justify-center`}>
            <span className="text-white text-sm">{fbg ? <BsCheck className='text-xl' /> : "3"}</span>
          </div>
          <div className="ml-6">
            <p className={`tracking-wide ${bgt ? 'text-black' : 'text-[#00000061]'}`}>System volume</p>
            <div className={`overflow-hidden h-auto items-center transition-all duration-500 ${accordThree ? 'max-h-screen' : 'max-h-0'}`}>


              <div className="bg-[#EEEEEE] py-8 px-3 rounded-md ">
                <p className='text-[14px] text-[#00000099]'>Total System Volume</p>
                <div id="" className=" relative flex items-center border-b border-[#00000061] hover:border-black focus:border-3 focus:focus-line focus:border-b-2">
                  <input className=" outline-none bg-transparent  w-full" type="number" id="" />
                  <span>gal</span>
                </div>
                <p className='font-semibold text-[14px] p-2'>If you don’t know the Total System Volume, use this quick ‘Rule of Thumb’ calculation based on the BTUH used in the system. Set the BTUH rating of your system below.</p>

                <p className='text-[14px] text-[#00000099]'>System BTUH</p>
                <div id="" className=" relative flex items-center border-b border-[#00000061] hover:border-black focus:border-3 focus:focus-line focus:border-b-2">
                  <input className=" outline-none bg-transparent  w-full" type="number" id="" />
                  <span>BTUH</span>
                </div>
              </div>

              <div className='mt-12'>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#0B453C',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0f5c50',
                      },
                    }}
                    onClick={handleAccordFour}
                  >
                    Continue
                  </Button>
                  <Button onClick={handleAccordTwo} variant="text" style={{ color: 'black' }}>
                    BACK
                  </Button>
                </Stack>
              </div>





            </div>
          </div>
        </div>
        {/* 4th div */}
        <div className="relative pb-6">
          <div className={`${ibg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-2 z-10 -ml-[20px] w-10 h-10 rounded-full bg-emerald-900  border-8  border-white flex items-center justify-center`}>
            <span className="text-white text-sm">{hbg ? <BsCheck className='text-xl' /> : "4"}</span>
          </div>
          <div className="ml-6">
            <p className={`tracking-wide ${fbg ? 'text-black' : 'text-[#00000061]'}`}>System pressure</p>
            <div className={`overflow-hidden h-auto items-center transition-all duration-500 ${accordFour ? 'max-h-screen' : 'max-h-0'}`}>


              <div className="bg-[#EEEEEE] py-8 px-3 rounded-md ">
                <p className='text-[14px] text-[#00000099]'>Maximum System Pressure</p>
                {/* <Boxfour/> */}
                <div id="" className=" relative flex items-center border-b border-[#00000061] hover:border-black focus:border-3  focus:border-b-2">
                  <input className=" outline-none bg-transparent  w-full" type="number" id="" />
                  <span>PSI</span>
                </div>
                <div className='flex items-center -ms-2.5 mt-3'>
                  <One />
                  <span className='text-[16px] text-[#00000099]'>Prefabricated Unit Required</span>
                </div>
              </div>

              <div className='mt-12'>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#0B453C',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0f5c50',
                      },
                    }}
                    onClick={handleAccordResult}
                  >
                    CONFIGURE YOUR X-POT
                  </Button>
                  <Button onClick={handleAccordThree} variant="text" style={{ color: 'black' }}>
                    BACK
                  </Button>
                </Stack>
              </div>

            </div>
          </div>
        </div>

        {/* 5th div */}
        <div className="relative">
          <div className={`${accordResult ? "bg-emerald-900" : "bg-gray-400"} absolute -top-2 z-10 -ml-[20px] w-10 h-10 rounded-full bg-emerald-900  border-8  border-white flex items-center justify-center`}>
            <span className="text-white text-sm">5</span>
          </div>
          <div className="ml-6">
            <p className={`tracking-wide ${hbg ? 'text-black' : 'text-[#00000061]'}`}>Results</p>
            <div className={`overflow-hidden h-auto items-center transition-all duration-500 ${accordResult ? 'max-h-screen' : 'max-h-0'}`}>



              {/* table   */}
              <div className='bg-[#EEEEEE] rounded p-1'>
                <p className='text-[20px] p-4 text-[#000000DE]'>
                  System requirement ts
                </p>
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
              <div className='mt-12'>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#0B453C',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#0f5c50',
                      },
                    }}
                    onClick={handleAccordOne}
                  >
                    start again
                  </Button>
                  <Button onClick={handleAccordFour} variant="text" style={{ color: 'black' }}>
                    BACK
                  </Button>
                </Stack>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
