import React, { useEffect, useRef, useState } from 'react';

// 71. useRefのより実践的な使い方とOptinal ChainingとNon-Null Assertion Operator

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
  // null!にするとnullでないことを明示できる
  const ref = useRef<HTMLInputElement>(null!);

  const focusInput = () => {
    // 1. Nullを否定した標準的な書き方
    // const current = ref.current;
    // if (current != null) current.focus();

    // 2. Optional Chaning
    // 上記はこのように書き換えられる(!null)
    // ref.current?.focus();

    // 3. Non-Null Assertion Operatorを使用することによりnullが否定され、シンプルに実装するこができる
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
