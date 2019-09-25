import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';
import Switch from "react-switch";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { set_dark_mode } from '../action_creator/ActionCreators';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { scientific: false, title: 'Scientific', checked: false };
        this.toggleScientificMode = this.toggleScientificMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    toggleScientificMode = () => {
        const { scientific } = this.state;
        this.setState({ scientific: !scientific })
        if (this.state.scientific === false) {
            this.setState({ title: 'Standard' })
        }
        else {
            this.setState({ title: 'Scientific' })
        }
    }

    handleChange = () => {
        const { checked } = this.state;
        this.setState({ checked: !checked })
        this.props.set_dark_mode(!this.props.dark_mode)
        if(checked){
            document.getElementById('root').style = 'background: #fff;';
        }
        else{
            document.getElementById('root').style = 'background: #000;';
        }
    }

    render() {
        return (
            <div className="calculator_area">
                <div className="board">
                    <div className="menu_button" onClick={() => this.toggleScientificMode()}>
                        {this.state.title}
                    </div>
                    <label className={this.props.dark_mode ? 'toggle_menu_button_dark' : 'toggle_menu_button_light'}>
                        <span style={{marginRight:'10px'}}>Light Mode</span>
                        <Switch
                            checked={this.state.checked}
                            onChange={this.handleChange}
                            onColor="#000"
                            onHandleColor="#fff"
                            handleDiameter={20}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            className="react-switch"
                            id="material-switch"
                        />
                        <span style={{marginLeft:'10px'}}>Dark Mode</span>
                    </label>

                    <Screen />
                    {this.state.scientific && <Button label="±" type="toggle" />}
                    {this.state.scientific && <Button label="√" type="square_root" />}
                    {this.state.scientific && <Button label="x^2" type="square" />}
                    {this.state.scientific && <Button label="" type="" />}
                    <Button label="1" type="number" />
                    <Button label="2" type="number" />
                    <Button label="3" type="number" />
                    <Button label="+" type="operation" />
                    <Button label="4" type="number" />
                    <Button label="5" type="number" />
                    <Button label="6" type="number" />
                    <Button label="−" type="operation" />
                    <Button label="7" type="number" />
                    <Button label="8" type="number" />
                    <Button label="9" type="number" />
                    <Button label="x" type="operation" />
                    <Button label="C" type="clear" />
                    <Button label="0" type="number" />
                    <Button label="=" type="operation" />
                    <Button label="÷" type="operation" />
                </div>
            </div>)
    }
}


export default connect(
    state => ({
        dark_mode: state.dark_mode
    }),
    dispatch => ({
        set_dark_mode: bindActionCreators(set_dark_mode, dispatch)
    })
)(Dashboard);
