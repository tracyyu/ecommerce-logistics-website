import React, { Component } from 'react';
import './ProductList.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Product from '../Product';
import { withStyles } from '@material-ui/core/styles';

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
            category: ['Home Decor', 'Stationery', 'Paper Floral Stick On', 
                        'Accessory Bags', 'Hair Accessories', 'Flower Embellishments',
                        'Mulberry Paper Floral Brooch', 'Gift Packaging', 'Magnet', 'Party Decor'],
            items: [
                {
                    title: 'Free',
                    price: '0',
                    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
                    buttonText: 'Sign up for free',
                    buttonVariant: 'outlined',
                    category: ''
                },{
                    title: 'Free',
                    price: '0',
                    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
                    buttonText: 'Sign up for free',
                    buttonVariant: 'outlined',
                },{
                    title: 'Free',
                    price: '0',
                    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
                    buttonText: 'Sign up for free',
                    buttonVariant: 'outlined',
                },
                {
                    title: 'Free',
                    price: '0',
                    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
                    buttonText: 'Sign up for free',
                    buttonVariant: 'outlined',
                },{
                    title: 'Free',
                    price: '0',
                    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
                    buttonText: 'Sign up for free',
                    buttonVariant: 'outlined',
                }

            ]
        }
    }

    render(){
        const { classes } = this.props;

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
                                        <button class="result-filters__button"><span>Item</span></button>
                                    </div>
                                    <div className="result-filters__group result-filters__group--color">
                                        <button class="result-filters__button"><span>Color</span></button>
                                    </div>
                                    <div className="result-filters__group result-filters__group--pricing">
                                        <button class="result-filters__button"><span>Pricing</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="browsing-controls__column browsing-controls__column-sort">
                            <div className="sort">
                                <div className="sort__heading">SORT BY:</div>
                                <div className="sort__form">Featured</div>
                            </div>
                        </div>
                    </section>
                    <section className="pagination-results">
                        <React.Fragment>
                        <CssBaseline />
                        <main className={classes.layout}>
                            <Grid container spacing={40} alignItems="flex-end">
                                <Product tiers={this.state.items}/>
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
  
export default withStyles(styles)(ProductList);

