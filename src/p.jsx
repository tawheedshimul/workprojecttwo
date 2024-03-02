import React, { useState } from 'react';
import { BsCheck } from "react-icons/bs";
import './App.css';

function App() {
  const [showFrontend, setShowFrontend] = useState(true);
  const [showGraphicDesign, setShowGraphicDesign] = useState(false);
  const [toggleResult, setToggleResult] = useState(false);


  const toggleFrontend = () => {
    setShowFrontend(true);
    setShowGraphicDesign(false);
    setToggleResult(false);
    setThird(false);
    setFour(false)

    setBgt(false);
    setBg(true);
    settbg(false);
  };

  const toggleGraphicDesign = () => {
    setShowFrontend(false);
    setShowGraphicDesign(true);
    setToggleResult(false);
    setThird(false);
    setFour(false)


    setBg(true);
    setBgt(false);
    settbg(true);


  };

  const [third, setThird] = useState(false)
 

  const handleThird = () => {
    setShowFrontend(false);
    setShowGraphicDesign(false);
    setToggleResult(false);
    setThird(true);
    setFour(false);

    setBg(true);
    setBgt(true);
    settbg(true);
   

  }


  const [fbg, setFbg] = useState(false);

  const [four, setFour] = useState(false);
  const handleFour = () => {
    setShowFrontend(false);
    setShowGraphicDesign(false);
    setToggleResult(false);
    setThird(false);
    setFour(true);
    setFbg(true);


  }

  const handleToggleResult = () => {
    setShowFrontend(false);
    setShowGraphicDesign(false);
    setThird(false);
    setFour(false);
    setToggleResult(true);
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
            <span className="text-white text-xl font-bold">{showFrontend ? '1' : <BsCheck />}</span>

          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Frontend Development.</h4>
            <div className={`${showFrontend ? 'block' : 'hidden'}`}>


              <form class="max-w-sm mx-auto">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected class="text-gray-900 dark:text-white">Choose a country</option>
                  <option value="US" class="text-gray-900 dark:text-white">United States</option>
                  <option value="CA" class="text-gray-900 dark:text-white">Canada</option>
                  <option value="FR" class="text-gray-900 dark:text-white">France</option>
                  <option value="DE" class="text-gray-900 dark:text-white">Germany</option>
                </select>
              </form>


              <button onClick={toggleGraphicDesign}>Next</button>
            </div>
          </div>
        </div>

        {/* 2nd div */}
        <div className="relative">
          <div className={`${tbg ? "bg-emerald-900" : "bg-gray-400"} absolute -top-0.5 z-10 -ml-3.5 w-7 h-7  rounded-full border-2  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">{bgt ? <BsCheck /> : '2'}</span>
          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Graphic Design.</h4>
            <div className={`${showGraphicDesign ? 'block' : 'hidden'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button onClick={handleThird}>Next</button>
              <button onClick={toggleFrontend}>Back</button>
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
            <div className={`${third ? 'block' : 'hidden'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button onClick={handleFour}>Next</button>
              <button onClick={toggleGraphicDesign}>Back</button>
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
            <div className={`${four ? 'block' : 'hidden'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button onClick={handleToggleResult}>Next</button>
              <button onClick={handleThird}>Back</button>
            </div>
          </div>
        </div>

        {/* 5th div */}
        <div className="relative">
          <div className={`${toggleResult ? "bg-emerald-900" : "bg-gray-400"} absolute -top-0.5 z-10 -ml-3.5 w-7 h-7  rounded-full  border-2  border-white flex items-center justify-center`}>
            <span className="text-white text-xl font-bold">5</span>
          </div>
          <div className="ml-6">
            <h4 className="font-bold text-emerald-900">Result</h4>
            <div className={`${toggleResult ? 'block' : 'hidden'}`}>
              <p className={`mt-2 max-w-screen-sm text-sm text-gray-500`}>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
              <button onClick={toggleFrontend}>Toggle Graphic Design</button>
              <button>Start Again</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
