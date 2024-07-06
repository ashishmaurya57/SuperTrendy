import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cloth_list } from '../../assets/assets';
import Footer from '../../components/footer/Footer';

import Product from '../../component2/product/Product';
import Recommended from '../../component2/recommended/Recommended';
import Slidebar from '../../component2/slidebar/Slidebar';
import Card from '../../component2/card/Card'; // Make sure you have a Card component

import './itemDetail.css';
import Navbar from '../../components/navbar/Navbar';

const ItemDetails = () => {
  const { itemName } = useParams();
  const item = cloth_list.find((cloth) => cloth.menu_name === itemName);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = item.col.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const filteredData = (items, selected, searchQuery) => {
    let filteredProducts = items;

    if (searchQuery) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(item.col, selectedCategory, query);
  let categories=[];
if(item.menu_name==="Women 's Ethenic Wear"){
  categories=["Cotton","Georgette","Chiffon","Dupatta","Jacket","Shrug"]
}
if(item.menu_name==="Casual wear"){
  categories=["Cotton","Denim","Top","Jeans"]
}
if(item.menu_name==="Men's Activewear"){
  categories=["Trackpant","T-Shirt","Shorts"]
}
if(item.menu_name==="Men's Footwear"){
  categories=["Sneakers","Flats","Sandals","Heels"]
}
let companies=[];
if(item.menu_name==="Women 's Ethenic Wear"){
  companies=["Top-Brands","SuperTrendy-Brands","Premium-Brands"]
}
if(item.menu_name==="Casual wear"){
  companies=["Top-Brands","SuperTrendy-Brands","Premium-Brands"]
}
if(item.menu_name==="Men's Activewear"){
  companies=["Jockey","Vimal Jonney","Us POLO","Van Heusen","Top clothes"]
}
if(item.menu_name==="Men's Footwear"){
  companies=["Nike","Puma","Adidas","Vans"]
}

  

  return (
    <div className='item1'>
    <div className='item2'>
      <Slidebar handleChange={handleChange}  categories={categories} className="item4"/>
   
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Recommended  handleClick={handleClick} companies={companies}  />
      <Product  result={result}/>
    </div>
   
    
   
    
    </div>
  );
};

export default ItemDetails;
