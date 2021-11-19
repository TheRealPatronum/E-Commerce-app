import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  );
};
export default ShopPage;

// <Routes>
//   <Route exact path='shop' element={<CollectionsOverview />} />
//   <Route path='' element={<CategoryPage />} />
// </Routes>;
