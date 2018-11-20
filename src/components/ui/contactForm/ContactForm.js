import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

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

const  ContactForm = (props) => {
    const { classes } = props;

    return (
        <React.Fragment>
        <Grid container spacing={24}>
            <Grid item xs={12}>
            <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="fname"
                InputProps={{
                    classes: {
                      input: classes.text,
                    },
                  }}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="lname"
                InputProps={{
                    classes: {
                      input: classes.text,
                    },
                  }}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="companyName"
                name="companyName"
                label="Company Name"
                fullWidth
                autoComplete="company name"
                InputProps={{
                    classes: {
                      input: classes.text,
                    },
                  }}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
                InputProps={{
                    classes: {
                      input: classes.text,
                    },
                  }}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                autoComplete="phone number"
                InputProps={{
                    classes: {
                      input: classes.text,
                    },
                  }}
            />
            </Grid>
            <Grid item xs={12} >
            <TextField
                id="message"
                name="message"
                label="Message"
                multiline
                rows="10"
                fullWidth
                autoComplete="message"
                InputProps={{
                    classes: {
                      input: classes.text,
                    },
                  }}
            />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="mailingList" value="yes" />}
                label="Please keep me updated on sales, events, information about Rose Edition"
                className={classes.text}
            />
            </Grid>
            <Button
                variant="contained"
                className={classes.button}
            >
            SUBMIT
            </Button>
        </Grid>
        </React.Fragment>
    );
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ContactForm);