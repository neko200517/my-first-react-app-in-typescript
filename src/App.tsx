import React from 'react';

interface AppProps {
  message: string;
  name: string;
}

const App = ({ message, name }: AppProps) => {
  return (
    <div>
      {message} {name}
    </div>
  );
};

export default App;
