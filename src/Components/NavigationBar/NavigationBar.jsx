import Styled from "styled-components";
import BrandButton from '../BrandButton/BrandButton';
import {Navbar} from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar'

const NavigationStyled = Styled(Navbar)`
    background: darkorange;
`;

const NavigationBar = ({...props}) => {
  return (
    <NavigationStyled>
      <BrandButton options={props.optionsMenu}/>
      <SearchBar/>
    </NavigationStyled>
  );
};
export default NavigationBar;
