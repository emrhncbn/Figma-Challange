import React from 'react';

const App = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-red-500 p-8 rounded-lg shadow-lg flex relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-white transform -skew-x-12 origin-top-left"></div>
        
        <div className="w-[300px] flex flex-col justify-center relative z-10">
          <p className="text-red-500 text-opacity-80 inline-block mb-4 font-bold text-xl">LOGIN</p>
          <input
            type="text"
            placeholder="Username"
            className="w-full h-[60px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 mt-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[60px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 mt-4"
          />
          <button className="w-[220px] h-[50px] mt-4 bg-red-500 text-white py-2 px-4 rounded-md font-bold text-opacity-80">LOGIN</button>
          <div className="w-full flex justify-between mt-4">
            <a href="#" className="text-black opacity-50 font-bold">Forgot Password?</a>
            <a href="#" className="text-black opacity-50 font-bold">Register</a>
          </div>
        </div>
        
        <div className="relative w-[350px] h-[350px] flex items-center justify-center ml-8 z-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/8b2d/275f/f3939e425f731abddabce269ac4e4780?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XgnrfEg18PHaHS4lpca8aHF6Qci3YrCPwEDB7Rg1wc0qeW4s-XUdRvUkZutFTsAhiqvLwxNW6D1idUfwr4gDna9rF9Or8YKuUoMcQ2SVchl0~dgokEEQz86b8j9I4M3TfHqFIsjZuQtCxNk0276~BhiAJdmrPYTohcjJktIezTEjuRWkGL-d6Zls2gu~82Nym06RHhKImc3NeGlBRWQLgWMMIiIywgj9RWXdMeTiaAEuRN5PcVdqx61SRukYZ6js1IATZlM~vFZobYDq6An~xFm9Z~YzLPtnbMKIlhTiTthSu6DfL60xTBQc3lchMEdYAWKDBzaXdFxYDLz1BLnYHg__"
            alt="Hamburger"
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
