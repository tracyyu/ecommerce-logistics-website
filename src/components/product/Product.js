import React, { Component } from 'react';
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
    card: {

    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200],
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
      super();

      this.handleCardActionClick = this.handleCardActionClick.bind(this);
    }

    handleCardActionClick() {

    }

    render(){
        const { classes } = this.props;

        return(
            <React.Fragment>
              {this.props.tiers.map( (tier,index) => (
                  // Enterprise card is full width at sm breakpoint
                  <Grid item key={tier.title} xs={12} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                      <CardActionArea onClick={this.handleCardActionClick}>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          className={classes.media}
                          height="140"
                          image="/static/images/cards/contemplative-reptile.jpg"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography variant="subtitle1" align="center" key={index}>
                          {tier.description}
                          </Typography>
                        </CardContent>
                        <hr />
                        <CardActions className={classes.cardActions}>
                        <Button fullWidth variant={tier.buttonVariant} color="primary">
                            Add to Cart
                        </Button>
                        </CardActions>
                      </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </React.Fragment>
        );
    }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Product);