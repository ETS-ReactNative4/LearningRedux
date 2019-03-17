import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";

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
        <hr />

        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () =>
      dispatch({
        type: actionTypes.INCREMENT
      }),
    onDecrementCounter: () =>
      dispatch({
        type: actionTypes.DECREMENT
      }),
    onAddCounter: () => dispatch({ type: "ADD", value: 10 }),
    onSubtractCounter: () =>
      dispatch({
        type: actionTypes.SUBTRACT,
        value: 15
      }),
    onStoreResult: () =>
      dispatch({
        type: actionTypes.STORE_RESULT
      }),
    onDeleteResult: id =>
      dispatch({
        type: actionTypes.DELETE_RESULT,
        resultElementId: id
      })
  };
};

//connect is a function that returns a higher order component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
