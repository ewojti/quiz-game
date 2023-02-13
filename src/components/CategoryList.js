import React from 'react';
import { nanoid } from 'nanoid';

const CategoryList = ({ categoryList, pickCategory }) => {
  return (
    <div>
      {categoryList.map((item) => (
        <button key={nanoid()} value={item.id} onClick={(e) => pickCategory(e)}>
          {item.name}
        </button>
      ))}
      <button>RANDOM CATEGORY</button>
    </div>
  );
};

export default CategoryList