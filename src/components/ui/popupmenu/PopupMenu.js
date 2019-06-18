import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ScrollBar from "../cartscrollbar/CartScrollBar";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  item: {
    fontSize: '14px',
    textTransform: 'uppercase'
  },
});

class PopupMenu extends Component { 

  constructor(props){
    super(props);
    this.state = {
      category: "",
      name: "",
      labelWidth: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.onsetFilters = this.onsetFilters.bind(this);
  }

  componentDidMount() {
    //this.setState({ category: this.props.category });
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    console.log(event.target.value);
  };

  onsetFilters(e){
    console.log(e.target.value);
    // this.setState({ category: e.target.value });
    // if(this.props.category === 'Item'){
    //   this.props.onSetCategoryFilter(e.target.value);
    // }else if(this.props.category === 'Color'){
    //   this.props.onSetColorFilter(e.target.value)
    // }else if(this.props.category === 'Pricing'){
    //   this.props.onSetPriceFilter(e.target.value)
    // }
    // this.props.onSetCategoryFilter();
    // this.props.onSetColorFilter();
    // this.props.onSetPriceFilter();
  }

  render(){
    const { classes } = this.props;
    return (
      // <PopupState variant="popover" popupId="demo-popup-menu">
      //   {popupState => (
      //     <React.Fragment>
      //       <Button variant="contained" {...bindTrigger(popupState)} className="result-filters__button">
      //         {this.state.category}
      //       </Button>
      //       <Menu {...bindMenu(popupState)}>
      //         <ScrollBar width={this.props.width} height={this.props.height}>
      //         {this.props.filtersItem.map((item) => (
      //             <MenuItem onClick={popupState.close} className={classes.item} key={item} value={item}>{item}</MenuItem>
      //           )
      //         )}
      //         </ScrollBar>
      //       </Menu>
      //     </React.Fragment>
      //   )}
      // </PopupState>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
          >
            {this.props.category}
          </InputLabel>
          <Select
            native
            value={this.state.category}
            onChange={this.handleChange("category")}
            input={
              <OutlinedInput
                name="category"
                labelWidth={this.state.labelWidth}
                id="outlined-age-native-simple"
              />
            }
          >
            <option value="" />
            {this.props.filtersItem.map((item) => (
              <option key={item} value={item}>{item}</option>
              )
            )}
          </Select>
        </FormControl>
      </div>
    );
  }
}

PopupMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return{
    currCategory: state.filters.currCategory,
    currColor: state.filters.currColor,
    currPriceRange: state.filters.currPriceRange,
    currSortBy: state.filters.currSortBy
  };
};

const mapDispatchToProps = dispatch => ({
  onSetCategoryFilter: category => {dispatch({type: 'SET_CATEGORY_FILTERS', category})},
  onSetColorFilter: color => {dispatch({type: 'SET_COLOR_FILTERS', color})},
  onSetPriceFilter: price => {dispatch({type: 'SET_COLOR_FILTERS', price})},
  onSetSort: selection => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PopupMenu));