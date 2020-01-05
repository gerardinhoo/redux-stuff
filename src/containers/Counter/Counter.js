import React, { Component } from 'react';
import { connect } from "react-redux"
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionsTypes from "../../store/actions"

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 8" clicked={this.props.onSubstractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults.map(strResult => (
                            <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actionsTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionsTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionsTypes.ADD, value: 10 }),
        onSubstractCounter: () => dispatch({ type: actionsTypes.SUBSTRACT, value: 8 }),
        onStoreResult: (result) => dispatch({ type: actionsTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionsTypes.DELETE_RESULT, resultElId: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);