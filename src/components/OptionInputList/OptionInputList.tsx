import React, { useEffect, useState } from 'react';
import OptionInput from '../OptionInput/OptionInput';

const OptionInputList = () => {
  const [options, setOptions] = useState<Option[]>([
    {
      name: '',
      values: [],
    },
  ]);

  const handleChangeOptionName = (optionIndex: number, value: string) => {
    setOptions((prevOptions) => {
      const options = prevOptions.map((option, index) =>
        index === optionIndex
          ? {
              name: value,
              values: option.values,
            }
          : option
      );

      return options;
    });
  };

  const handleChangeOptionValues = (optionIndex: number, value: string) => {
    setOptions((prevOptions) => {
      const options = prevOptions.map((option, index) =>
        index === optionIndex
          ? {
              name: option.name,
              values: [...option.values, value],
            }
          : option
      );

      return options;
    });
  };

  const handleDeleteOption = (optionIndex: number) => {
    setOptions((prevOptions) => {
      const options = prevOptions.filter(
        (option, index) => index !== optionIndex
      );
      return options;
    });
  };

  return (
    <div>
      {options.map((option, index) => (
        <OptionInput
          key={index}
          option={option}
          haveMultipleOptions={options.length > 1 ? true : false}
          onChangeOptionName={(name) => {
            handleChangeOptionName(index, name);
          }}
          onChangeOptionValues={(value) => {
            handleChangeOptionValues(index, value);
          }}
          onDeleteOption={() => {
            handleDeleteOption(index);
          }}
        />
      ))}
      <div>
        <button
          onClick={() => {
            setOptions((prevOptions) => {
              const options = [...prevOptions, { name: '', values: [] }];
              return options;
            });
          }}
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default OptionInputList;

type Option = {
  name: string;
  values: string[];
};
