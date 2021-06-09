import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import Message from "../components/message";
import { addToCart } from "../actions/cartActions";

// Get location.search to get the query string for the qty

const CartScreen = ({ match, location, history }) => {
  // get product id from URL
  const productId = match.params.id;

  // location.search = "?qty=i". I need the quantity only so the string is split at "=" and I get the value of the index of 1
  // qty won't be a number datatype so the Number constructor is used
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
