import React from 'react';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
}

// こちらの型制約が主流
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

// デフォルト値
App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
