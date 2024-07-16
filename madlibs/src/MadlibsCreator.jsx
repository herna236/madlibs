// src/components/MadLib.js

import React, { useState } from 'react';
import madlibStories from './Stories';
import InputField from './InputField'; 

//create set state for user inputs 
const MadLib = () => {
  const [userInputs, setUserInputs] = useState({
    verb: '',
    noun: '',
    adjective: ''
  });

  //set up state for random stories and is submitted
  const [selectedStory, setSelectedStory] = useState(getRandomStory());
  const [submitted, setSubmitted] = useState(false);

  function getRandomStory() {
    const randomIndex = Math.floor(Math.random() * madlibStories.length); //use rando index to select a random story from the story array
    return madlibStories[randomIndex];
  }

  const handleInputChange = (e) => {
    // Destructuring the 'name' and 'value' properties from the event target (input element)
    const { name, value } = e.target;
  
    // Updating the 'userInputs' state using the 'setUserInputs' function
    // Spread operator (...) is used to copy the existing 'userInputs' state
    // and then override the property specified by [name] with the new 'value'
    setUserInputs({
      ...userInputs,  // Spread the previous state of userInputs
      [name]: value   // Update the property specified by 'name' with 'value'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (refreshing the page)
  
    // Create an updatedStory object by spreading the properties of selectedStory
    // and replacing placeholders ([verb], [noun], [adjective]) in the story text
    const updatedStory = {
      ...selectedStory,  // Spread operator copies all properties from selectedStory
      story: selectedStory.story
        .replace('[verb]', userInputs.verb)         // Replace '[verb]' with userInputs.verb
        .replace('[noun]', userInputs.noun)         // Replace '[noun]' with userInputs.noun
        .replace('[adjective]', userInputs.adjective) // Replace '[adjective]' with userInputs.adjective
    };
  
    // Update the state with the updatedStory
    setSelectedStory(updatedStory);
  
    // Set submitted flag to true after form submission
    setSubmitted(true);
  };
  
   //resets the user inputs and gets a new random story and puts it in state and sets submitted to false
  const handleGenerateAnotherStory = () => {
    setUserInputs({
      verb: '',
      noun: '',
      adjective: ''
    });
    setSelectedStory(getRandomStory());
    setSubmitted(false);
  };

  return (
    <div>
      <h2>{selectedStory.title}</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <InputField
            label="Verb"
            name="verb"
            value={userInputs.verb}
            onChange={handleInputChange}
            required
          />
          <br />
          <InputField
            label="Noun"
            name="noun"
            value={userInputs.noun}
            onChange={handleInputChange}
            required
          />
          <br />
          <InputField
            label="Adjective"
            name="adjective"
            value={userInputs.adjective}
            onChange={handleInputChange}
            required
          />
          <br />
          <button type="submit">Generate Story</button>
        </form>
      ) : (
        <div>
          <p>{selectedStory.story}</p>
          <button onClick={handleGenerateAnotherStory}>Generate Another Story</button>
        </div>
      )}
    </div>
  );
};

export default MadLib;
