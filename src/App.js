import React, { Component } from 'react';
// Import routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { withAuthenticator} from 'aws-amaplify-react';

import './App.scss';
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