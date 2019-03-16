import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.props.onDecrementCounter("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter("sub", 5)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD" }),
    onSubtractCounter: () => dispatch({ type: "SUBTRACT" })
  };
};

//connect is a function that returns a higher order component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
