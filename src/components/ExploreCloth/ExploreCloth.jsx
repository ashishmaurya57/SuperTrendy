// src/components/exploreCloth/ExploreCloth.js

import React from 'react';
import './ExploreCloth.css';
import { cloth_list } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const ExploreCloth = () => {
  const navigate = useNavigate();

  return (
    <div className='menu' id='explore-menu'>
      <h1><b>SHOP BY CATEGORY</b></h1>
      <div className='menu-list'>
        {cloth_list.map((item, index) => (
          <div
            key={index}
            className='menu-list-item'
            onClick={() => navigate('/' + item.menu_name)}
          >
            <img src={item.menu_image} alt='' />
            <p>
              {item.menu_name}
              <br />
              {item.menu_dec}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCloth;
