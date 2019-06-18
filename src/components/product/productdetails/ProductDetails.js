import React, { Component } from "react";
import { findDOMNode } from "react-dom";
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
});

class ProductDetails extends Component{
    constructor(props){
        super(props);

        this.state = {

        };
    }


    render(){
        return(
            <div className="product-details-page-content">
                <div className="product-detail__container">
                    <div className="product-details">
                        <div className="product-details__name"></div>
                        <div className="product-details__media">
                            <div className="product-details__priamry-image"></div>
                            <div className="product-deetails__alternate-image-group"></div>
                        </div>
                        <div className="product-details__info"></div>
                        <div className="product-details__description"></div>
                    </div>
                </div>
            </div>
        );
    }

}


ProductDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ProductDetails);