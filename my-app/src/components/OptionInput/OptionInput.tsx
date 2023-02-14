import React, { FC, useEffect, useRef, useState } from 'react';

const OptionInput: FC<OptionInputProps> = ({
  option,
  haveMultipleOptions,
  onChangeOptionName,
  onChangeOptionValues,
  onDeleteOption,
}) => {
  const inputValueRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        type="text"
        placeholder="옵션명"
        defaultValue={option.name}
        onBlur={(e) => {
          onChangeOptionName(e.target.value);
        }}
      />
      {option.values.map((value, index) => (
        <span key={index} style={{ marginRight: 4 }}>
          {value}
        </span>
      ))}
      <input
        ref={inputValueRef}
        type="text"
        placeholder="엔터를 누르세요."
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            if (!inputValueRef.current) return;
            onChangeOptionValues(inputValueRef.current.value);
            inputValueRef.current.value = '';
          }
        }}
      />
      {haveMultipleOptions && (
        <span>
          <button
            onClick={() => {
              onDeleteOption();
            }}
          >
            삭제하기
          </button>
        </span>
      )}
    </div>
  );
};

export default OptionInput;

type OptionInputProps = {
  option: Option;
  haveMultipleOptions: boolean;
  onChangeOptionName: (name: string) => void;
  onChangeOptionValues: (value: string) => void;
  onDeleteOption: () => void;
};

type Option = {
  name: string;
  values: string[];
};
