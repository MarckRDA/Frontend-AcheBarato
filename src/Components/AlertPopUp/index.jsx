import React from "react";
import { Toast } from "react-bootstrap";
import styled from 'styled-components';

const AlertPopupBox = styled(Toast)`
 background-color: #ff6633;
`

const AlertPopup = ({ text }) => {
  return (
    <AlertPopupBox>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">AcheBarato</strong>
      </Toast.Header>
      <Toast.Body>{text}</Toast.Body>
    </AlertPopupBox>
  );
};

export default AlertPopup;