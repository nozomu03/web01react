import React, {Component} from 'react';
import './counter.scss'
import Delta from "./Delta";
import Delta2 from "./Delta2";

class Index extends Component {
    state={
        value : 0,
        delta: 0,
        delta2: 0
    }
    render() {
        let {value, delta, delta2} = this.state;
        return (
            <div className='counter'>
                <div>{value}</div>
                <div>수1 수2: {delta} {delta2}</div>
                <Delta delta={delta} handleCharge={this.handleCharge}/>
                <Delta2 delta2={delta2} handleCharge2={this.handleCharge2} handlePlus={this.handlePlus} handleMinus={this.handleMinus} handleMultiple={this.handleMultiple} handleDivide={this.handleDivide}/>
            </div>
        );
    }

    handleCharge = event => this.setState({
        delta: parseInt(event.target.value)
    });

    handleCharge2 = event => this.setState({
        delta2: parseInt(event.target.value)
    });


    handlePlus = () => {
        this.setState({
           value: this.state.delta+this.state.delta2
        });
    }

    handleMinus = () => {
        this.setState({
            value: this.state.delta-this.state.delta2
        });
    }

    handleMultiple = () => {
        this.setState({
            value: this.state.delta*this.state.delta2
        });
    }

    handleDivide = () => {
        this.setState({
            value: this.state.delta/this.state.delta2
        });
    }

}

export default Index;