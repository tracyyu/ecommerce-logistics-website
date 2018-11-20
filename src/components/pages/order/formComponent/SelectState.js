import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        
        minWidth: '130px',
    },
  });

class SelectState extends Component {

    state = {
        location: '',
        labelWidth: 0,
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
        const { classes } = this.props;

        return(
            <FormControl className={classes.formControl}>
                <InputLabel>State</InputLabel>
                <Select
                value={this.state.location}
                onChange={this.handleChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"AL"}>Alabama (AL)</MenuItem>
                <MenuItem value={"AK"}>Alaska (AK)</MenuItem>
                <MenuItem value={"AZ"}>Arizona (AZ)</MenuItem>
                <MenuItem value={"CA"}>California (CA)</MenuItem>
                <MenuItem value={"CO"}>Colorado (CO)</MenuItem>
                <MenuItem value={"CT"}>Connecticut (CT)</MenuItem>
                <MenuItem value={"DE"}>Delaware (DE)</MenuItem>
                <MenuItem value={"DC"}>District Of Columbia (DC)</MenuItem>
                <MenuItem value={"GA"}>Georgia (GA)</MenuItem>
                <MenuItem value={"HI"}>Hawaii (HI)</MenuItem>
                <MenuItem value={"ID"}>Idaho (ID)</MenuItem>
                <MenuItem value={"IL"}>Illinois (IL)</MenuItem>
                <MenuItem value={"IN"}>Indiana (IN)</MenuItem>
                <MenuItem value={"IA"}>Iowa (IA)</MenuItem>
                <MenuItem value={"KS"}>Kansas (KS)</MenuItem>
                <MenuItem value={"KY"}>Kentucky (KY)</MenuItem>
                <MenuItem value={"LA"}>Louisiana (LA)</MenuItem>
                <MenuItem value={"ME"}>Maine (ME)</MenuItem>
                <MenuItem value={"MD"}>Maryland (MD)</MenuItem>
                <MenuItem value={"MA"}>Massachusetts (MA)</MenuItem>
                <MenuItem value={"MI"}>Michigan (MI)</MenuItem>
                <MenuItem value={"MN"}>Minnesota (MN)</MenuItem>
                <MenuItem value={"MS"}>Mississippi (MS)</MenuItem>
                <MenuItem value={"MO"}>Missouri (MO)</MenuItem>
                <MenuItem value={"MT"}>Montana (MT)</MenuItem>
                <MenuItem value={"NE"}>Nebraska (NE)</MenuItem>
                <MenuItem value={"NV"}>Nevada (NV)</MenuItem>
                <MenuItem value={"NH"}>New Hampshire (NH)</MenuItem>
                <MenuItem value={"NJ"}>New Jersey (NJ)</MenuItem>
                <MenuItem value={"NM"}>New Mexico (NM)</MenuItem>
                <MenuItem value={"NY"}>New York (NY)</MenuItem>
                <MenuItem value={"NC"}>North Carolina (NC)</MenuItem>
                <MenuItem value={"ND"}>North Dakota (ND)</MenuItem>
                <MenuItem value={"OH"}>Ohio (OH)</MenuItem>
                <MenuItem value={"OK"}>Oklahoma (OK)</MenuItem>
                <MenuItem value={"OR"}>Oregon (OR)</MenuItem>
                <MenuItem value={"PA"}>Pennsylvania (PA)</MenuItem>
                <MenuItem value={"RI"}>Rhode Island (RI)</MenuItem>
                <MenuItem value={"SC"}>South Carolina (SC)</MenuItem>
                <MenuItem value={"SD"}>South Dakota (SD)</MenuItem>
                <MenuItem value={"TN"}>Tennessee (TN)</MenuItem>
                <MenuItem value={"TX"}>Texas (TX)</MenuItem>
                <MenuItem value={"UT"}>Utah (UT)</MenuItem>
                <MenuItem value={"VT"}>Vermont (VT)</MenuItem>
                <MenuItem value={"VA"}>Virginia (VA)</MenuItem>
                <MenuItem value={"WA"}>Washington (WA)</MenuItem>
                <MenuItem value={"WV"}>West Virginia (WV)</MenuItem>
                <MenuItem value={"WI"}>Wisconsin (WI)</MenuItem>
                <MenuItem value={"WY"}>Wyoming (WY)</MenuItem>
                </Select>
            </FormControl>
        );
    }
};

export default withStyles(styles)(SelectState);