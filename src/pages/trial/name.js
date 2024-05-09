import { useState } from 'react';

const TextDialogue = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setOutputText(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Type something and press Enter..."
      />
      {outputText && (
        <div className="dialogue-box">
          <p>{outputText}</p>
        </div>
      )}
    </div>
  );
};

export default TextDialogue;
