import React, { useEffect, useState } from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import SeaLayout from '../structural/SeaLayout';
import SeaNoMatch from '../pages/SeaNoMatch';
import SeaHome from '../pages/SeaHome';
import SeaCreatureDetails from '../pages/SeaCreatureDetails';
import SeaCreatureFinder from '../pages/SeaCreatureFinder';

function SeaApp() {

  const [creatures, setCreatures] = useState([]);
  const [aquariums, setAquariums] = useState([]);


  useEffect(() => {
    fetch("https://cs571api.cs.wisc.edu/rest/su25/bucket/creatures",
      {
        headers: {
          "X-CS571-ID": CS571.getBadgerId()
        }
      }
    )
      .then(res => res.json())
      .then(data => setCreatures(data.results));
    fetch("https://cs571api.cs.wisc.edu/rest/su25/bucket/aquariums",
      {
        headers: {
          "X-CS571-ID": CS571.getBadgerId()
        }
      }
    )
      .then(res => res.json())
      .then(data => setAquariums(data.results));
  }, [])

  function handleVote(id) {
    let creaturesCpy = JSON.parse(JSON.stringify(creatures));
    creaturesCpy[id].votes++;
    setCreatures(creaturesCpy)
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SeaLayout />}>
          <Route index element={<SeaHome creatures={creatures} handleVote={handleVote} />}></Route>
          {Object.entries(creatures).map(c => {
            console.log(`details/${c[1].name}`)
            return <Route key={c[1].name} path={`details/${c[1].name}`} element={<SeaCreatureDetails {...c} />}></Route>
          })}
          <Route path="finder" element={<SeaCreatureFinder creatures={creatures} aquariums={aquariums} />}></Route>
          <Route path="*" element={<SeaNoMatch />}></Route>

        </Route>
      </Routes>
    </HashRouter >)
}

export default SeaApp
