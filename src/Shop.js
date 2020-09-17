import React, { useState, useEffect } from "react";
import MaterialButton from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchCategoryData();
  }, []);

  const [categoryList, setCategoryList] = useState([]);

  const fetchCategoryData = async () => {
    const data = await fetch("http://localhost:8080/category/getAllCategories");
    //const data = await fetch("https://fortnite-api.com/v1/banners");
    const list = await data.json();
    setCategoryList(list);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      <MaterialButton
        variant="contained"
        color="primary"
        onClick={fetchCategoryData}
      >
        Click here to fetch data{" "}
      </MaterialButton>

      <ul>
        {categoryList.map((category) => (
          <li key={category.categoryId}>
            <Link to={`/shop/${category.categoryId}`}>
              {category.categoryName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
