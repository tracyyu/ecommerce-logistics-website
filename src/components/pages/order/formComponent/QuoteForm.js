import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SelectState from '../formComponent/SelectState';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      paddingTop: theme.spacing.unit,
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
  });

  

const QuoteForm = props => {
    const { classes } = props;
    
    return(
        <React.Fragment className={classes.container}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                <TextField
                    required
                    id="comapanyRep"
                    name="companyRep"
                    label="Company Rep"
                    fullWidth
                    autoComplete="company rep"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id="comapanyName"
                    name="companyName"
                    label="Company Name"
                    fullWidth
                    autoComplete="company name"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="companyPhone"
                    name="companyPhone"
                    label="Company Phone"
                    fullWidth
                    autoComplete="company phone number"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="companyEmail"
                    name="companyEmail"
                    label="Company Email"
                    fullWidth
                    autoComplete="company email"
                />
                </Grid>
                <Grid container item xs={12} sm={6} spacing={12}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="subtitle1">
                        From:
                    </Typography>
                </Grid>
                    <Grid item xs={6}>
                        <SelectState />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        required
                        id="fromZip"
                        name="fromZip"
                        label="Zipcode:"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="fromAddress"
                        name="fromAddress"
                        label="Address:"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id="fromPickUp"
                        name="fromPickUp"
                        label="PickUp:"
                        type="date"
                        defaultValue="mm-dd-yyy"
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        className={classes.textField}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="fromPallet"
                        name="fromPallet"
                        label="How Many Pallets:"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="fromWeight"
                        name="fromWeight"
                        label="Weight: (Tons)"
                        fullWidth
                    />
                    </Grid>

                </Grid>
                <Grid container item xs={12} sm={6} spacing={12}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="subtitle1">
                            To:
                        </Typography>
                </Grid>
                    <Grid item xs={6}>
                        <SelectState />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        required
                        id="toZip"
                        name="ToZip"
                        label="Zipcode:"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="toAddress"
                        name="toAddress"
                        label="Address:"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        id="toDropOff"
                        name="toDropOff"
                        label="Drop Off:"
                        type="date"
                        defaultValue="mm-dd-yyy"
                        fullWidth
                        InputLabelProps={{
                        shrink: true,
                        }}
                        className={classes.textField}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="palletSize"
                        name="palletSize"
                        label="Pallet Size: (L x W x H)"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="insurance"
                        name="insurance"
                        label="Insurance"
                        fullWidth
                    />
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        id="commodity"
                        name="commodity"
                        label="Commodity:"
                        multiline
                        rows="10"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

QuoteForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(QuoteForm);