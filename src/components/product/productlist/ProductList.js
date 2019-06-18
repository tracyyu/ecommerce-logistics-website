import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';
import Product from '../Product';
import LoadingProducts from "../../loader/Products";
import PopUpMenu from "../../ui/popupmenu/PopupMenu";
import NoResults from "../../emptystate/NoResults";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { withStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { fetchProducts } from "../../../js/actions/productsActions";
import { getCategoryFilter, getProducts, productsWithCategory } from '../../../js/selectors/productSelector';
import { productsWithMultiFilters } from '../../../js/selectors/productSelector';

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
});

class ProductList extends Component {

    constructor(props){
        super();

        this.state = {
            category : [
                'Home Decor',
                'Stationery',
                'Paper Floral Stick On',
                'Accessory Bags',
                'Corsages/ Hair Pins',
                'Flower Embellishments',
                'Mulberry Paper Floral Brooch',
                'Gift Packaging',
                'Magnet',
                'Party Decor'],
            color : ['black', 'blue', 'brown', 'green', 'orange', 'pink', 'purple', 'red', 'yellow', 'white', 'multi-color'],
            priceRange : [10, 25, 50, 100, 150, 250, 500],
            sortBy : ['New Arrivals', 'Price', 'Alphabetical']
        }
        
    }

    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }

    render(){
        const { classes, error, loading, products } = this.props;

        let productsData;
        let term = this.props.searchTerm;
        let x;

        function searchingFor(term) {
            return function(x) {
              return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
            };
        }

        //console.log(this.props.filteredProducts(this.props.all));
        //console.log(productsWithCategory(this.props.all));
        // console.log(getProducts(this.props.all));
        // console.log(getCategoryFilter(this.props.all));
        console.log(productsWithMultiFilters(this.props.all));

        productsData = products
            //.filter(searchingFor(term))
            .map(product => {
                return (
                    <Product 
                    className="product"
                    key = {product.id}
                    image = {product.image}
                    name = {product.name}
                    description = {product.description}
                    price = {product.price}
                    id = {product.id}
                    quantity = {product.quantity}
                    addToCart={this.props.addToCart}
                    productQuantity={this.props.productQuantity}
                    updateQuantity={this.props.updateQuantity}
                    />
                );
            });

        // Empty and Loading States
        let view;
        if (!error && productsData.length <= 0 && !term) {
            view = <LoadingProducts />;
        } else if (error && productsData.length <= 0 && term) {
            view = <NoResults />;
        } else {
            view = productsData;
        }

        return(
            <div className="product-list-page-content">
                <section className="product-list-page-content__hero-banner">
                    <div className="product-list-page-content__hero-banner-overlay">
                        <div className="hero-banner__title">
                            <h1>Shop All</h1>
                            <p>
                                Browse through our collections of flower designs, home decor, accessories, and crafts
                                to see what best fits your needs.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="product-list__main">
                    <section className="browsing-controls">
                        <div className="browsing-controls__column browsing-controls__column-filters">
                            <div className="result-filters" id="category-results-filters">
                                <div className="result-filters__heading">FILTER BY:</div>
                                <div className="result-filters__groups">
                                    <div className="result-filters__group result-filters__group--item">
                                        <PopUpMenu 
                                            width={270}
                                            height={300}
                                            category="Item"
                                            filtersItem={this.state.category}
                                        ></PopUpMenu>
                                    </div>
                                    <div className="result-filters__group result-filters__group--color">
                                        <PopUpMenu 
                                            width={150}
                                            height={300}
                                            category="Color"
                                            filtersItem={this.state.color}
                                        ></PopUpMenu>
                                    </div>
                                    <div className="result-filters__group result-filters__group--pricing">
                                        <PopUpMenu 
                                            width={150}
                                            height={190}
                                            category="Pricing"
                                            filtersItem={this.state.priceRange}
                                        ></PopUpMenu>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="browsing-controls__column browsing-controls__column-sort">
                            <div className="sort">
                                <div className="sort__heading">SORT BY:</div>
                                    <PopUpMenu 
                                    width={150}
                                    height={190}
                                    category="Featured"
                                    filtersItem={this.state.sortBy}
                                    ></PopUpMenu>
                            </div>
                        </div>
                    </section>
                    <section className="pagination-results">
                        <React.Fragment>
                        <CssBaseline />
                        <main className={classes.layout}>
                            <Grid container spacing={40} alignItems="flex-end" className="product-wrapper">
                                { view }
                            </Grid>
                        </main>
                        </React.Fragment>
                    </section>
                </div>
            </div>
        );
    }
};


ProductList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    all: state,
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error,
    term: state.filters.term,
    category: state.filters.category,
    color: state.filters.color,
    priceRange: state.filters.priceRange,
    sortBy: state.filters.sortBy,
    currCategory: state.filters.currCategory,
    currColor: state.filters.currColor,
    currPriceRange: state.filters.currPriceRange,
    currSortBy: state.filters.currSortBy,
    //filteredProducts: productsWithMultiFilters(state)
});
  
export default connect(mapStateToProps)(withStyles(styles)(ProductList));

