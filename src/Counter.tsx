import React, { useState, useRef, useEffect } from 'react';

// 71. useRefのより実践的な使い方とOptional ChaningとNon-Null Assertion Operatorの紹介

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current++;
  });

  // Non-Null Assertion Operator
  const ref = useRef<HTMLInputElement>(null!);

  const focusRef = () => {
    // 1. basic
    // const current = ref.current;
    // if (current != null) current.focus();

    // 2. Optinal Chaning
    // ref.current?.focus();

    // 3. Non-Null Assertion Operator
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type='text' />
      <button onClick={focusRef}>Click Me!</button>
    </div>
  );
};

export default Counter;
