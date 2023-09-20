import React from 'react'
import { Carousel } from './Banner/Carousel';
import DataGrid from "./DataGrid/DataGrid";
import SearchForm from './SearchForm/SearchForm';

import { slides } from "./Banner/CarouselData";
const Home = () => {
    return (
        <div>
            <Carousel data={slides} />
            <SearchForm />
            <DataGrid />
        </div>
    )
}

export default Home