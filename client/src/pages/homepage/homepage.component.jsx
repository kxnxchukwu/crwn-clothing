import React from 'react';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './hompage.styles';
import { useLocation } from 'react-router-dom';

// custom hook to get the current pathname in React

const usePathname = () => {
  const location = useLocation();
  console.log(location.pathname);
}

const HomePage = () => {
  usePathname()
  return(
  <HomePageContainer>
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </HomePageContainer>
  );
};

export default HomePage;