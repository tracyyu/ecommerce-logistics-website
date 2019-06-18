import React, { Component } from 'react';
import {connect} from 'react-redux';
// Import routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import ScrollBar from "../../ui/cartscrollbar/CartScrollBar";
import Counter from "../../product/counter/Counter";
import EmptyCart from "../../emptystate/EmptyCart";
import CSSTransitionGroup from "react-transition-group";
import { findDOMNode } from "react-dom";

import  ShopImg  from '../../../assets/img/decoration-3.jpg';
import  NewImg  from '../../../assets/img/product4.jpg';
import  ServiceImg  from '../../../assets/img/warehouse.jpg';
import  EventImg  from '../../../assets/img/tradeshow1.jpg';
import  OrderImg  from '../../../assets/img/about-us2.jpg';

class NavigationHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showCart: false,
          mobileSearch: false
        };
    }

    handleCart(e) {
        e.preventDefault();
        this.setState({
          showCart: !this.state.showCart
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleMobileSearch(e) {
        e.preventDefault();
        this.setState({
            mobileSearch: true
        });
    }

    handleSearchNav(e) {
        e.preventDefault();
        this.setState(
            {
            mobileSearch: false
            },
            function() {
            this.refs.searchBox.value = "";
            this.props.handleMobileSearch();
            }
        );
    }

    handleClickOutside(event) {
        const cartNode = findDOMNode(this.refs.cartPreview);
        const buttonNode = findDOMNode(this.refs.cartButton);
        if (cartNode.classList.contains("active")) {
            if (!cartNode || !cartNode.contains(event.target)) {
            this.setState({
                showCart: false
            });
            event.stopPropagation();
            }
        }
    }

    removeProduct(id, quantity, price) {
        // let cart = this.props.cart;
        // let index = cart.findIndex(x => x.id == id);
        // cart.splice(index, 1);
        // this.setState({
        //   cart: cart
        // });
        // this.sumTotalItems(this.state.cart);
        // this.sumTotalAmount(this.state.cart);
        // e.preventDefault();
        this.props.onRemoveToCart(id);
        this.props.subtractTotalAmount(quantity, price);
        this.props.subtractTotalQuantity(quantity);
      }

    componentDidMount() {
        document.addEventListener(
            "click",
            this.handleClickOutside.bind(this),
            true
        );
    }

    componentWillUnmount() {
        document.removeEventListener(
            "click",
            this.handleClickOutside.bind(this),
            true
        );
    }

    render() {
        library.add(fab, faShoppingCart, faUser);

        console.log(this.props.cart);

        let cartItems;
        cartItems = this.props.cart.map(product => {
          return (
            <li className="cart-item" key={product.name}>
              <img className="product-image" src={product.image} alt={product.name}/>
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">
                Qty: {" "} {product.quantity} 
                </p>
                <p className="amount">{product.quantity * product.price}</p>
              </div>
              <button
                className="product-remove"
                href="#"
                onClick={this.removeProduct.bind(this, product.id, product.quantity, product.price)}
              >
                ×
              </button>
            </li>
          );
        });

        let view;
        if (cartItems.length <= 0) {
          view = <EmptyCart />;
        } else {
          view = (
            <ul className="cart-items">
              {cartItems}
            </ul>
          );
        }



        return(
            <div className="page-header">
                <div className="page-header__wrapper">
                    <h1><Link to="/">Rose Edition - Jacsonic</Link></h1>
                </div>
                <hr />
                <div className="page-header__contact">
                    <div className="contact-nav">
                        <ul className="contact-nav__nav-menu">
                            <li className="contact-nav__menu-item">
                                <Link className="contact-nav__item-node" to="/contactus">CONTACT</Link>
                            </li>
                            <li className="contact-nav__menu-item">
                                <a className="contact-nav__item-node" href="#">USD - $</a>
                            </li>
                            <li className="contact-nav__menu-item">
                                <p>(909) 627 1580</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-header__actions">
                    <div className="utility-nav">
                        <ul className="utility-nav__nav-menu">
                            <li className="utility-nav__menu-item">
                                <Link className="utility-nav__item-node" to="/signin">ACCOUNT <FontAwesomeIcon icon="user" /></Link>
                            </li>
                            <li className="utility-nav__menu-item">
                                <div className="cart">
                                    <div className="cart-info">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>No. of items</td>
                                            <td>:</td>
                                            <td>
                                            <strong>{this.props.totalItems}</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sub Total</td>
                                            <td>:</td>
                                            <td>
                                            <strong>${this.props.totalAmount}</strong>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    <a
                                    className="cart-icon"
                                    href="#"
                                    onClick={this.handleCart.bind(this)}
                                    ref="cartButton"
                                    >
                                    <img
                                        className={this.props.cartBounce ? "tada" : " "}
                                        src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                                        alt="Cart"
                                    />
                                    {this.props.totalItems ? (
                                        <span className="cart-count">{this.props.totalItems}</span>
                                    ) : (
                                        ""
                                    )}
                                    </a>
                                    <div
                                    className={
                                        this.state.showCart ? "cart-preview active" : "cart-preview"
                                    }
                                    ref="cartPreview"
                                    >
                                    <ScrollBar width={360} height={320}>{view}</ScrollBar>
                                    <div className="action-block">
                                        <Link className="utility-nav__item-node" to="/checkout">
                                            <button
                                            type="button"
                                            className={this.props.totalItems > 0 ? " " : "disabled"}
                                            >
                                            PROCEED TO CHECKOUT
                                            </button>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-header__primary-nav">
                    <div className="primary-nav">
                        <ul className="primary-nav__nav-menu">
                            <li className="primary-nav__menu-item">
                                <Link className="primary-nav__item-node" to="/aboutus">WHY US</Link>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><Link to="/aboutus">Our Story</Link></li>
                                                    <li><Link to="/ourspace">Our Space</Link></li>
                                                    <li><Link to="/contactus">Contact</Link></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory">
                                                <img src={ShopImg} alt="Shop" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <a className="primary-nav__item-node" href="#">WHAT'S NEW</a>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="">2018 New Fall Collections</a></li>
                                                    <li><a href="">Recommended Products</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="">View All</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory">
                                                <img src={NewImg} alt="New" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <Link className="primary-nav__item-node" to="/product">SHOP</Link>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><Link to="/product">View All</Link></li>
                                                    <li><a href="">Home Decor</a></li>
                                                    <li><a href="">Stationery</a></li>
                                                    <li><a href="">Paper Floral Stick On</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="">Accessory Bags</a></li>
                                                    <li><a href="">Corsages/ Hair Pins</a></li>
                                                    <li><a href="">Flower Embellishments</a></li>
                                                    <li><a href="">Mulberry Paper Floral Brooch</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="">Gift Packaging</a></li>
                                                    <li><a href="">Magnet</a></li>
                                                    <li><a href="">Party Decor</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <img src={ShopImg} alt="Shop" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <Link className="primary-nav__item-node" to="/services">SERVICES</Link>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><Link to="/services">OverView</Link></li>
                                                    <li><Link to="/storage">Storage</Link></li>
                                                    <li><Link to="/shipment">Packaging/Return</Link></li>
                                                    <li><Link to="/fulfillment">Fufillment</Link></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory">
                                                <img src={ServiceImg} alt="Service" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <a className="primary-nav__item-node" href="#">TRADE SHOW & EVENTS</a>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="http://www.creativationshow.org/">Creativation 2018</a></li>
                                                    <li><a href="http://www.internationalgiftsandcraftsshows.com/">Las Vegas International Trade Show 2018</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="https://www.nynow.com/">NY NOW Week 2017</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="https://www.asdonline.com/">ASD Market Week 2016</a></li>
                                                    <li><a href="https://paperworldchina.hk.messefrankfurt.com/shanghai/en/visitors/welcome.html?nc">PaperWorld China 2016</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <img src={EventImg} alt="Events" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <Link className="primary-nav__item-node" to="/order">ORDER</Link>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><Link to="/order">Order Policy</Link></li>
                                                    <li><Link to="/wholesaleform">Whole Sale Form</Link></li>
                                                    <li><Link to="/quoteform">Get Logistic Quote</Link></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory">
                                                <img src={OrderImg} alt="Order" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        cart: state.cart.cartItems,
        cartBounce: state.cart.cartBounce,
        totalItems: state.cart.totalItems,
        totalAmount: state.cart.totalAmount
    };
};

const mapDispatchToProps = dispatch => ({
    onRemoveToCart: id => dispatch({type: 'REMOVE_ITEM_FROM_CART', id}),
    subtractTotalQuantity: quantity => dispatch({type: 'SUBTRACT_TOTAL_QUANTITY', quantity}),
    subtractTotalAmount: (quantity, price) => dispatch({type: 'SUBTRACT_TOTAL_AMOUNT', quantity, price})
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader);