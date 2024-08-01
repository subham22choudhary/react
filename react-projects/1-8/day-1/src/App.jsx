import React, { useState } from 'react';
import Greeting from './components/Greeting';

const App = () => {

  const [message, setMessage] = useState('');

  const handleGreet = (name) => {
    setMessage(`Child ${name} says hello!`);
  };
  return (
    <div>
      <Greeting name="Alice" onGreet={handleGreet} />
      <Greeting name="Bob" onGreet={handleGreet} />
      <p>{message}</p>
    </div>
  );
};

export default App
