import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { change_screen_value, change_operation, set_operand, set_operator, clear } from '../action_creator/ActionCreators';

class Button extends Component {
    constructor(props) {
        super(props);
        let { label, type } = this.props;
        this.label = label;
        this.type = type;
        this.change_display.bind(this)
    };

    change_display() {
        let { label, type, display_value, operation, operand, operator } = this.props;
        let output;
        let isDisplayZero = display_value === 0 && label !== 0 ? true : false;
        const operations = {
            '−': (operand, operator) => Number(operand) - Number(operator),
            'x': (operand, operator) => Number(operand) * Number(operator),
            '÷': (operand, operator) => Number(operand) / Number(operator),
            '+': (operand, operator) => Number(operand) + Number(operator)
        }
        switch (type) {
            case 'number':
                if (display_value === 0 && label === 0) {
                    output = 0;
                } else if (!operator && operation && operand) {
                    output = label;
                    this.props.set_operator(output);
                } else if (operator && operation && operand) {
                    output = "" + display_value + label;
                    this.props.set_operator(output);
                } else if (isDisplayZero) {
                    output = label;
                } else {
                    output = "" + display_value + label;
                }
                return this.props.change_screen_value(output);
            case 'clear':
                if (!isDisplayZero)
                    return this.props.clear();
                break;
            case 'toggle':
                if (!isDisplayZero) {
                    output = display_value * -1;
                    return this.props.change_screen_value(output);
                }
                break;
            case 'square':
                if (!isDisplayZero) {
                    output = Math.pow(display_value, 2);
                    return this.props.change_screen_value(output);
                }
                break;
            case 'square_root':
                if (!isDisplayZero) {
                    output = Math.sqrt(display_value);
                    return this.props.change_screen_value(output);
                }
                break;
            case 'operation':
                if (!isDisplayZero && !operand && label !== '=') {
                    this.props.set_operand(display_value);
                    this.props.change_operation(label);
                } else if (operand && !operator && display_value === operand && label !== "=") {
                    this.props.change_operation(label);
                } else if (label === '=' || operand && !isDisplayZero) {
                    let current_operation = label === '=' ? operation : label;
                    let evaluation = operations[operation](operand, operator);
                    this.props.change_screen_value(evaluation);
                    this.props.set_operand(evaluation);
                    this.props.set_operator(0);
                    this.props.change_operation(current_operation);
                }

                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className={this.props.dark_mode ? 'button_dark' : 'button_light'} onClick={() => this.change_display()}>
                {this.label}
            </div>
        )
    }
}

export default connect(
    state => ({
        display_value: state.display_value,
        operation: state.operation,
        operator: state.operator,
        operand: state.operand,
        dark_mode: state.dark_mode
    }),
    dispatch => ({
        change_screen_value: bindActionCreators(change_screen_value, dispatch),
        change_operation: bindActionCreators(change_operation, dispatch),
        set_operand: bindActionCreators(set_operand, dispatch),
        set_operator: bindActionCreators(set_operator, dispatch),
        clear: bindActionCreators(clear, dispatch)
    }))(Button);