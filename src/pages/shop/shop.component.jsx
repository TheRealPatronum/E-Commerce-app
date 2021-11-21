import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      <Routes>
        <Route exact path='/' element={<CollectionsOverview />} />
        <Route path='shop/:categoryId' element={<CollectionPage />} />;
      </Routes>
      ;
    </div>
  );
};
export default ShopPage;

// <Route path='' element={<CategoryPage />} />;
