import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Company's Information
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="comapanyName"
            name="companyName"
            label="Company Name"
            fullWidth
            autoComplete="company name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="comapanyRep"
            name="companyRep"
            label="Company Rep"
            fullWidth
            autoComplete="company rep"
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
        <Grid item xs={12}>
          <TextField
            required
            id="resaleTaxId"
            name="resaleTaxId"
            label="Resale / Tax ID #"
            fullWidth
            autoComplete="resale / tax id"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
