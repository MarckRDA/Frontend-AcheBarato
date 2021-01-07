import Styled from "styled-components";
import BrandButton from '../BrandButton/BrandButton';
import { Navbar } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar'






const NavigationBar = ({ ...props }) => {
  return (
    <Navbar>
      <BrandButton options={props.optionsMenu} />
      <SearchBar />
    </Navbar>
  );
};
export default NavigationBar;
