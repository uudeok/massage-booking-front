import React, { useState } from "react";

const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.target.value 는 항상 문자열 타입
    // 그러나 value 은 T 타입일 수 있다.
    setValue(event.target.value as unknown as T);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
