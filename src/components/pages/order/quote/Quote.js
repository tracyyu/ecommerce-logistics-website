import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import QuoteForm from '../formComponent/QuoteForm';

const styles = theme => ({
    button: {
        margin: '0 auto',
        marginTop: '10px',
        fontSize: '16px',
        letterSpacing: '1px',
        width: '250px',
        color: 'white',
        backgroundColor: '#fe889c'
    },
    text: {
        fontSize: '18px',
        letterSpacing: '1px'
    }
 });

class Quote extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    
    render(){
        const { classes } = this.props;

        return(
            <div>
                <div className="background-img"></div>
                <div class="main-container">
                    <form>
                        <h1>QUOTE FORM</h1>
                        <hr />
                        <p>Please fill out this form as accurately as possible, and we
                            will get back to you as soon as possible.
                        </p>
                        <QuoteForm />
                        <br />
                        <Button
                            variant="contained"
                            className={classes.button}
                        >
                        SUBMIT
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
};

Quote.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(Quote);