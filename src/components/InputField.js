import React, { useState } from 'react';

const InputField = ({ onInputChange }) => {
  const [inputText, setInputText] = useState('');
  const [productIdea, setProductIdea] = useState('');

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    setProductIdea(newText);
    // onInputChange(newText);
  };

  const handleSubmit = () => {
    // Check if input is not empty before submitting
    if (inputText.trim() !== '') {
    //   onSubmit();
        console.log("onsubmit");
        console.log(productIdea);
        setInputText('');
    }
    // Handle the case when input is empty
    else {
      alert('Please enter a product idea before submitting.');
    }
  };

  return (
    <div>
      <label>Enter Product Idea:</label>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit Product Idea</button>
      <br />
      <p>
        "{productIdea}"
      </p>
    </div>
  );
};

export default InputField;
