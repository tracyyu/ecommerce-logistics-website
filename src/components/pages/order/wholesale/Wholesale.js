import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CompanyInfo from '../formComponent/CompanyInfo';
import ShippingAddress from '../formComponent/ShippingAddress';
import PaymentForm from '../formComponent/PaymentForm';
import ReviewForm from '../formComponent/ReviewForm';
import './Wholesale.scss';

const styles = theme => ({
    paper: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 6,
        padding: theme.spacing.unit * 3,
      },
      fontSize: '12px'
    },
    stepper: {
      padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`, fontSize: '12px'
    },
    stepperlabel: {
        iconColor: '#D78796', fontSize: '12px'
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
      color: 'white',
      fontSize: '14px',
      letterSpacing: '2px'
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit,
      backgroundColor: '#D78796',
      color: 'white',
      fontSize: '14px',
      letterSpacing: '2px'
    },
  });

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ShippingAddress />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <ReviewForm />;
    default:
      throw new Error('Unknown step');
  }
}

class Wholesale extends Component {
    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            value: '',
            activeStep: 0
        };
    }

    handleNext = () => {
        this.setState(state => ({
          activeStep: state.activeStep + 1,
        }));
      };
    
      handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
      };
    
      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };
    
    render(){
        const { classes } = this.props;
        const { activeStep } = this.state; 

        return(
            <div class="main-container">
                <form>
                    <h1>WHOLESALE FORM</h1>
                    <hr />
                    <p>Wholesale Terms: Opening order minimum of $500, reorder minimum of $350. Visa, Mastercard, American Express, HSBC, 
                        Company Check or Net 30 terms (as established). First order must be prepaid via cc or check. FOB Chino, CA.
                    </p>
                    <p>Orders of less than $500 ship within 3 business days via FedEx Ground service. Complimentary shipping within the U.S.
                        on orders of $400.
                    </p>
                    <hr />
                    <Paper className={classes.paper}>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map(label => (
                            <Step className={classes.stepperlabel} key={label}>
                            <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed your order confirmation, and will
                                send you an update when your order has shipped.
                                </Typography>
                            </React.Fragment>
                            ) : (
                            <React.Fragment>
                                {activeStep === 0 && (<CompanyInfo />)}
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                {activeStep !== 0 && (
                                    <Button variant="contained"
                                            onClick={this.handleBack} 
                                            className={classes.button}
                                    >
                                    Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    onClick={this.handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                                </div>
                            </React.Fragment>
                            )}
                        </React.Fragment>
                    </Paper>
                </form>
            </div>
        );
    }
};


Wholesale.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Wholesale);
  