import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Search() {
  return (
    <div>
      <h2>Search</h2>
    </div>
  );
}

const SeachPage = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState("");

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Produto</Form.Label>
        <Form.Control
          type="produto"
          placeholder="Produto"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Categoria</Form.Label>
        <Form.Control
          type="categoria"
          placeholder="Categoria"
          value={product}
          onChange={(event) => setProduct(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Button variant="info" type="submit" color="primary" block>
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SeachPage;
