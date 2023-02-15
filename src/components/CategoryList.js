import React from "react";
import { nanoid } from "nanoid";

const CategoryList = ({
  categorList,
  pickCategory,
  threeRandomCat,
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
