import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '1' };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    // this.setState(
    //   prevState => ({
    //     value: Number(prevState.value) + 1
    //   }),
    //   function() {
    //     this.props.updateQuantity(this.state.value);
    //   }
    // );
    let updateQuantity = this.props.productQuantity + 1;
    this.props.getProductQuantity(updateQuantity);
  }

  decrement() {
    // if (this.state.value > 1) {
    //   this.setState(
    //     prevState => ({
    //       value: Number(prevState.value) - 1
    //     }),
    //     function() {
    //       this.props.updateQuantity(this.state.value);
    //     }
    //   );
    // }
    let updateQuantity = this.props.productQuantity;
    if(this.props.productQuantity > 1){
      updateQuantity -= 1;
    }
    this.props.getProductQuantity(updateQuantity);
  }

  feed(e) {
    this.setState(
      {
        value: this.refs.feedQty.value
      },
      // function() {
      //   this.props.updateQuantity(this.state.value);
      // }
    );
  }

  render() {
    return (
      <div className="stepper-input">
        <button className="decrement" onClick={this.decrement}>
          –
        </button>
        <input
          ref="feedQty"
          type="text"
          className="quantity"
          value={this.props.productQuantity}
          onChange={this.feed.bind(this)}
        />
        <button className="increment" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};

const mapStateToProps = state => {
  return {
    ctr : state.product.quantity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT_QUANTITY'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT_QUANTITY'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);