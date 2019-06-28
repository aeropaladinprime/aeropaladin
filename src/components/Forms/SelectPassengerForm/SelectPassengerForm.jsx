import React, { Component } from 'react';
import { Select, Grid, Label, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';

import '../../FormInputs/FormInputs.css'

class SelectPassengerForm extends Component {

    state = {
        currentPassenger: 0,
        passengers:[
            
         ],
        passengerId: ''
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_PASSENGER' });
        console.log("this.props.passenger:", this.props.passengers);
    }

    onSelectChange = (event, { name, value }) => {
        console.log("sex change:", value);
        this.setState({
            ...this.state,
            passenger: {
                ...this.state.passenger
            }
            passengerId: value,
            
        })
        // this.props.handleChange(this.props.stateType, name, { target: { value: value } })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("doing a submit", this.state);
        this.props.dispatch({ type: 'SET_APIS_PASSENGER', payload: this.state })
    }

    getPassenger = () => {
        let options = []
        for (let i of this.props.passengers) {
            options.push(
                { key: i.id, value: i.id, text: `${i.firstname} ${i.lastname}` }
            );
        }
        console.log('options after population:', options);
        return options;
        // {key: 'blah', value:'blah', text:'blah'}
    }

    addPassenger = (passengerId, ) => {
        this.setState({
            ...this.state,
            passenger: {
                ...this.state.passenger,
                [passengerId]: 
            }
        })
    }

    render(){
        console.log('this.state:', this.state);
        console.log('current passengers:', this.props.passengers);
        return(

            <div className="formInputs"> 
                <form className="addForm" onSubmit={this.handleSubmit}>                                   
                    <h2>Passengers</h2>
                    <Label className="formInputLabel">
                        <Select className="formAltInput"
                            value={this.state.passengerValue}
                            placeholder="select your passenger"
                            name="passenger"
                            options={this.getPassenger()}
                            onChange={this.onSelectChange}
                        />
                        <span>
                            Choose Passenger
                    </span>
                    </Label>
                    <div className="formButtons">
                        <Grid columns='equal'>                            
                                <Grid.Column width={12}></Grid.Column>
                                <Grid.Column width={3}>
                                    <Button
                                        type="button"
                                        primary
                                        className="formButton"
                                    >
                                       ADD
                                </Button>
                                </Grid.Column>                                                     
                        </Grid>
                    </div>
                    <div className="formButtons">
                        <Grid columns='equal'>                            
                                <Grid.Column width={12}></Grid.Column>
                                <Grid.Column width={3}>
                                    <Button
                                        type="submit"
                                        primary
                                        className="formButton"
                                    >
                                        Next
                                </Button>
                                </Grid.Column>                                                     
                        </Grid>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        passengers: reduxState.passengerReducer
    }
}

export default connect(mapStateToProps)(SelectPassengerForm);