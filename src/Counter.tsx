import React, { useEffect, useRef, useState } from 'react';

// 72. useReducerとオーバーロードを用いたその型定義について

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

  const focusInput = () => {
    // 1. basic
    // const current = ref.current;
    // if (current != null) current.focus();

    // 2. Optional Chaning
    // ref.current?.focus();

    // 3. Non-Null Assertion Operator
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This Componnet was re-redered {renderTimes.current} times!</div>

      <input ref={ref} type='text' />
      <button onClick={focusInput}>Click Me</button>
    </div>
  );
};

export default Counter;
