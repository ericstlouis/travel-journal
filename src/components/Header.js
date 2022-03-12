import React from 'react';
import world from '../images/world.png';

const Header = () => {
  return (
    <div className="bg-rose-400 flex justify-center items-center p-3">
      <img className="w-9 mr-2" src={world} alt="the world"/>
      <p className="text-white">my travel journal.</p>
    </div>
  )
}

export default Header
