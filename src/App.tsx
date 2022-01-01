import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

// こちらの型制約が主流
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

// デフォルト値
App.defaultProps = {
  message: 'Hello, defaultProps!',
};

export default App;
