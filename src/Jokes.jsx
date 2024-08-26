import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jokes = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then((response) => {
        const { setup, punchline } = response.data;
        setJoke(`${setup} : ${punchline}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{joke}</h1>
        <button className="button" onClick={fetchJoke}>
          <span>GIVE ME A JOKE!</span>
        </button>
      </div>
    </div>
  );
};

export default Jokes;
