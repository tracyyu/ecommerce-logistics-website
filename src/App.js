import React, { Component } from 'react';
// Import routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import './scss/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import NavigationHeader from './components/base/navigationHeader/NavigationHeader';
import Footer from './components/base/footer/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './components/homepage/Homepage';
import Order from './components/pages/order/Order';
import AboutUs from './components/pages/whyus/aboutus/AboutUs';
import ContactUs from './components/pages/whyus/contactus/ContactUs';
import WholesalePage from './components/pages/order/wholesale/Wholesale';
import OurSpace from './components/pages/whyus/ourspace/OurSpace';
import QuotePage from './components/pages/order/quote/Quote';
import ServicePage from './components/pages/services/ServicePage';
import StoragePage from './components/pages/services/storage/Storage';
import FulfillmentPage from './components/pages/services/fulfillment/Fulfillment';
import ShipmentPage from './components/pages/services/shipment/Shipment';
import SignInPage from './components/pages/signin/Signin';
import CheckoutPage from './components/pages/order/checkout/Checkout';

import ProductPage from './components/product/productlist/ProductList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
    };

    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleMobileSearch = this.handleMobileSearch.bind(this);
    // this.handleCategory = this.handleCategory.bind(this);
    // this.handleAddToCart = this.handleAddToCart.bind(this);
    // this.sumTotalItems = this.sumTotalItems.bind(this);
    // this.sumTotalAmount = this.sumTotalAmount.bind(this);
    // this.checkProduct = this.checkProduct.bind(this);
    // this.updateQuantity = this.updateQuantity.bind(this);
    // this.handleRemoveProduct = this.handleRemoveProduct.bind(this);

  }

  // Fetch Initial Set of Products from external API
  getProducts() {
    let url =
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
    axios.get(url).then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  componentWillMount() {
    this.getProducts();
  }

  // // Search by Keyword
  // handleSearch(event) {
  //   this.setState({ term: event.target.value });
  // }
  // // Mobile Search Reset
  // handleMobileSearch() {
  //   this.setState({ term: "" });
  // }
  // // Filter by Category
  // handleCategory(event) {
  //   this.setState({ category: event.target.value });
  //   console.log(this.state.category);
  // }
  // // Add to Cart
  // handleAddToCart(selectedProducts) {
  //   let cartItem = this.state.cart;
  //   let productID = selectedProducts.id;
  //   let productQty = selectedProducts.quantity;
  //   if (this.checkProduct(productID)) {
  //     console.log("hi");
  //     let index = cartItem.findIndex(x => x.id == productID);
  //     cartItem[index].quantity =
  //       Number(cartItem[index].quantity) + Number(productQty);
  //     this.setState({
  //       cart: cartItem
  //     });
  //   } else {
  //     cartItem.push(selectedProducts);
  //   }
  //   this.setState({
  //     cart: cartItem,
  //     cartBounce: true
  //   });
  //   setTimeout(
  //     function() {
  //       this.setState({
  //         cartBounce: false,
  //         quantity: 1
  //       });
  //       console.log(this.state.quantity);
  //       console.log(this.state.cart);
  //     }.bind(this),
  //     1000
  //   );
  //   this.sumTotalItems(this.state.cart);
  //   this.sumTotalAmount(this.state.cart);
  // }
  // handleRemoveProduct(id, e) {
  //   let cart = this.state.cart;
  //   let index = cart.findIndex(x => x.id == id);
  //   cart.splice(index, 1);
  //   this.setState({
  //     cart: cart
  //   });
  //   this.sumTotalItems(this.state.cart);
  //   this.sumTotalAmount(this.state.cart);
  //   e.preventDefault();
  // }
  // checkProduct(productID) {
  //   let cart = this.state.cart;
  //   return cart.some(function(item) {
  //     return item.id === productID;
  //   });
  // }
  // sumTotalItems() {
  //   let total = 0;
  //   let cart = this.state.cart;
  //   total = cart.length;
  //   this.setState({
  //     totalItems: total
  //   });
  // }
  // sumTotalAmount() {
  //   let total = 0;
  //   let cart = this.state.cart;
  //   for (var i = 0; i < cart.length; i++) {
  //     total += cart[i].price * parseInt(cart[i].quantity);
  //   }
  //   this.setState({
  //     totalAmount: total
  //   });
  // }

  // //Reset Quantity
  // updateQuantity(qty) {
  //   console.log("quantity added...");
  //   this.setState({
  //     quantity: qty
  //   });
  // }

  render() {
    library.add(fab, faShoppingCart, faUser);
    return (
      <Router>
        <div className="App">
          <React.Fragment>
            <CssBaseline />
            <NavigationHeader />
            <div className="page-layout">
              
            <Route exact path="/" component={HomePage} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/ourspace" component={OurSpace} />
            <Route path="/contactus" component={ContactUs} />

            <Route path="/signin" component={SignInPage} />
            <Route path="/checkout" component={CheckoutPage} />
            
            <Route path="/order" component={Order} />
            <Route path="/wholesaleform" component={WholesalePage} />
            <Route path="/quoteform" component={QuotePage} />

            <Route path="/services" component={ServicePage} />
            <Route path="/storage" component={StoragePage} />
            <Route path="/shipment" component={ShipmentPage} />
            <Route path="/fulfillment" component={FulfillmentPage} />

            <Route path="/product" component={ProductPage} />
            
            </div>
            <Footer />
          </React.Fragment>
        </div>
      </Router>
    );
  }
}

export default App;