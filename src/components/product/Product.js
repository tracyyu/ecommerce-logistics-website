import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from "./counter/Counter";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
    button: {
      fontSize: '12px',
      color: '#D78796',
      border: '1px solid #D78796',
      '&:hover': {
        color: 'white',
        border: '1px solid #D78796',
        backgroundColor: '#D78796'
      }
    },
    card: {
      maxHeight: '400px'
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardContent: {
      padding: '0'
    },
    media: {
      height: '200px',
      width: '200px',
      margin: '0 auto'
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing.unit * 2,
      },
    },
  });

class Product extends Component{

    constructor(props){
      super(props);

      this.state = {
        isAdded: false,
        quantity: 1
      };

      this.getQuantity = this.getQuantity.bind(this);
      this.addToCart = this.addToCart.bind(this);
    }

    getQuantity(productQuantity){
      this.setState({quantity: productQuantity});
    }

    addToCart(image, name, price, id, quantity) {
      let prod = {image: image, name: name, price: price, id: id, quantity: this.state.quantity};
      this.props.onAddToCart(prod);
      this.props.addToTotalAmount(prod.quantity, prod.price);
      this.props.addToTotalQuantity(prod.quantity);
      this.setState(
        {
          isAdded: true
        },
        function() {
          setTimeout(() => {
            this.setState({
              isAdded: false,
            });
          }, 3500);
        }
      );
    }

    render(){
        const { classes } = this.props;

        let image = this.props.image;
        let name = this.props.name;
        let description = this.props.description;
        let price = this.props.price;
        let id = this.props.id;
        let quantity = this.state.quantity;

        return(
            <React.Fragment>
                  <Grid item key={name} xs={6} sm={4} md={3} lg={3}>
                  <Card className={classes.card}>
                      
                        <CardMedia
                          component="img"
                          alt={name}
                          className={classes.media}
                          image={image}
                          title={name}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h4">
                            {name}
                          </Typography>
                          <Typography variant="h5" align="center">
                          ${price}
                          </Typography>
                        </CardContent>
                        <hr />
                        <Counter
                          getProductQuantity={this.getQuantity}
                          productQuantity={this.state.quantity}

                        />
                        <CardActions className={classes.cardActions}>
                        <Button fullWidth 
                                variant="outlined"
                                className={classes.button}
                                onClick={() => this.addToCart(
                                  image,
                                  name,
                                  price,
                                  id,
                                  this.state.quantity
                                )}>
                        {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
                        </Button>
                        </CardActions>
                      
                  </Card>
                </Grid>
            </React.Fragment>
        );
    }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
  cart: state.cart.cartItems,
  cartBounce: state.cart.cartBounce,
  totalItems: state.cart.totalItems,
  totalAmount: state.cart.totalAmount
});

const mapDispatchToProps = dispatch => ({
  onAddToCart: product => dispatch({type: 'ADD_ITEM_TO_CART', product}),
  addToTotalQuantity: quantity => dispatch({type: 'ADD_TOTAL_QUANTITY', quantity}),
  addToTotalAmount: (quantity, price) => dispatch({type: 'ADD_TOTAL_AMOUNT', quantity, price})
});
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Product));