import React from "react";
import { nanoid } from "nanoid";

const CategoryList = ({
  categoryList,
  pickCategory,
  threeRandomCat,
  category,
}) => {


  return (
    <div>
      {threeRandomCat.map((cat) => (
        <button key={nanoid()} value={cat.id} onClick={(e) => pickCategory(e)}>
          {cat.name}
        </button>
      ))}
      {/* {categoryList.map((cat) => (
        <button key={nanoid()} value={cat.id} onClick={(e) => pickCategory(e)}>
          {cat.name}
        </button>
      ))} */}
    </div>
  );
};

export default CategoryList;
