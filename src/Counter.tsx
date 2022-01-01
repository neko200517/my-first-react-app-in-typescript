<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';

// 71. useRefのより実践的な使い方とOptional ChaningとNon-Null Assertion Operatorの紹介
=======
import React, { useEffect, useRef, useState } from 'react';

// 72. useReducerとオーバーロードを用いたその型定義について
>>>>>>> useReducer

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

<<<<<<< HEAD
  const focusRef = () => {
=======
  const focusInput = () => {
>>>>>>> useReducer
    // 1. basic
    // const current = ref.current;
    // if (current != null) current.focus();

<<<<<<< HEAD
    // 2. Optinal Chaning
=======
    // 2. Optional Chaning
>>>>>>> useReducer
    // ref.current?.focus();

    // 3. Non-Null Assertion Operator
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
<<<<<<< HEAD
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type='text' />
      <button onClick={focusRef}>Click Me!</button>
=======
      <div>This Componnet was re-redered {renderTimes.current} times!</div>

      <input ref={ref} type='text' />
      <button onClick={focusInput}>Click Me</button>
>>>>>>> useReducer
    </div>
  );
};

export default Counter;
