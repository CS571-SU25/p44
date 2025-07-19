import React, { useState } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import SeaLayout from '../structural/SeaLayout';
import SeaNoMatch from '../pages/SeaNoMatch';
import SeaHome from '../pages/SeaHome';
import SeaCreatureDetails from '../pages/SeaCreatureDetails';


function SeaApp() {

  const creatures = [
    {
      name: "Whale Shark",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Similan_Dive_Center_-_great_whale_shark.jpg",
      id: 1,
      aquariums: ["Georgia Aquarium"]
    },
    {
      name: "American Lobster",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Nur01521_-_Flickr_-_NOAA_Photo_Library.jpg",
      id: 2,
      aquariums: ["Shedd Aquarium"]
    }]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeaLayout />}>
          <Route index element={<SeaHome creatures={creatures} />}></Route>
          {creatures.map(c => {
            console.log(`details/${c.name}`)
            return <Route key={c.name} path={`details/${c.name}`} element={<SeaCreatureDetails {...c} />}></Route>
          })}
          <Route path="*" element={<SeaNoMatch />}></Route>

        </Route>
      </Routes>
    </BrowserRouter >)
}

export default SeaApp
