import React, {useState} from 'react';
import OptionsList from './OptionsList';
import { nanoid } from 'nanoid';

const Options = ({
  item,
  handleSelectAnswer
}) => {

  return (
    <div>
      <p key={nanoid()}>{item.category}</p>
      <p key={nanoid()}>{item.question}</p>
      <OptionsList
        item={item}
        key={nanoid()}
        handleSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
};

export default Options