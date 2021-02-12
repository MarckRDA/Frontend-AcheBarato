import React from "react";
import CarouselProdutos from "../../Components/CarouselProducts/CarouselProducts";
import CarouselMainPage from '../../Components/CarouselMainPage/CarouselMainPage';
import SearchBar from "../../Components/SearchBar/SearchBar.jsx"
import Footer from '../../Components/Footer/Footer.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import { FormatSize } from "@material-ui/icons";
import { Form, Col, Navbar, Nav, FormControl } from 'react-bootstrap';
import { Button } from "../../UI/Button/index";
import MenuSearchBar from "../../Components/MenuSearchBar/index";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function MainPageProfile() {
  const classes = useStyles();

  return (
    <>
      <MenuSearchBar />
      <Form style={{ margin: 74 }}>
        <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange}>
          {/* <p>Olá {user.name.split(" ")[0][0]}</p> */}
        </Avatar>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail"   >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email do usuario" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password usuario" />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress1" style={{ width: 400 }}>
          <Form.Label>Celular</Form.Label>
          <Form.Control type="text" placeholder="Celular do usuario" />
        </Form.Group>

        <div class="buttonsubmit" style={{margin:80}}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>

      </Form>
    </>
  );
}