import React from 'react';
import Ping from '../images/Fill.png';

const Place = ({item}) => {
  return (
    <div>
      {/* arrow function parenthesis () directly returns while the curly braces {} you have to state returns  */}
      {item.map((region) => {
        console.log(region)
        return (
          <div className="flex mx-20 my-12" key={region.id}>
            <div className="mr-7 min-w-fit">
              <img
                className="w-64 h-80 rounded-lg"
                src={region.image}
                alt="the location"
              />
            </div>

            <div className="mt-10">
              <div className="flex items-center">
                <img
                  className="w-3 h-6 mr-2"
                  src={Ping}
                  alt="the location icon"
                />
                <p className="text-lg">{region.country}</p>
                <a className="ml-2 text-gray-500"  href={region.map} target="_blank" rel="noreferrer">
                  {' '}
                  View on Google Maps
                </a>
              </div>
              <h1 className="text-5xl font-bold">{region.name}</h1>
              <div className="mt-10">
                <h3 className="text-2xl font-bold">{region.date}</h3>
                <p className="text-2xl font-normal">{region.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Place