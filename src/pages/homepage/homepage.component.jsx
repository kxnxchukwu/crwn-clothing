import React from 'react';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './hompage.styles';

const HomePage = () => (
  <HomePageContainer>
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </HomePageContainer>
);

export default HomePage;