import React, { useState, useEffect } from "react";
import MaterialButton from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function CategoryDetail({match}) {

    useEffect(() => {
   fetchCategoryData();
  }, []);
  const [categoryDetail,setCategoryDetail] = useState([]);

  //const [categoryList, setCategoryList] = useState([]);

  const fetchCategoryData = async () => {
    
    const data = await fetch(`http://localhost:8080/category/getCategoryById/${match.params.id}`);
    const categoryItem = await data.json();
    setCategoryDetail(categoryItem);
    console.log(categoryItem);
    
  };

  return (
    <div>
        <h3>Category Detail</h3>
  <h5>{categoryDetail.categoryName}</h5>
  <h5>{categoryDetail.parentCategory}</h5>
  
        </div>
  );
}

export default CategoryDetail;
