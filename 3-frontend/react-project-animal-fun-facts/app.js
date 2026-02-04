import React from 'react';
import { createRoot } from 'react-dom/client';
import { animals } from "./animals";

// container + root
const container = document.getElementById("app");
const root = createRoot(container);

// background element
const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;
const showBackground = true;

// display facts about animals
const displayFact = (e) => {
    console.log('display fact');
    const animalname = e.target.alt;
    const animalFacts = animals[animalname].facts;
    const randIndex = Math.floor(Math.random() * animalFacts.length);
    const fact = animalFacts[randIndex];
    document.getElementById('fact').innerHTML = fact;
}

// images
const images = Object.entries(animals).map(([nom, animal]) => (
    <img key={nom} aria-label={nom} role="button" className="animal" src={animal.image} alt={nom} onClick={displayFact} />
));

// title
const title = "";

// scene + render
const animalFacts = (
    <div>
        {showBackground && background}
        <p id="fact"></p>
        <div className="animals">
            {images}
        </div>
        <h1>{title || 'Click an animal for a fun fact'}</h1>
    </div>
);
root.render(animalFacts);



