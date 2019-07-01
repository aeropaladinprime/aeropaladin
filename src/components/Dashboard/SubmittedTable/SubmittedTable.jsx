import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const moment = require('moment');

class SubmittedTable extends Component {

    handleArchive = (event) => {
        console.log('in handleArchive');
        
    }
    render() {
        
        //conditional rending for table data
        console.log('FLIGHT STATUS HERE', this.props.apisTrips[0]);

        return (

            <div>
                <Table className="submittedTable" celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell singleLine>FROM</Table.HeaderCell>
                            <Table.HeaderCell>TO</Table.HeaderCell>
                            <Table.HeaderCell>DATE</Table.HeaderCell>
                            <Table.HeaderCell>ARCHIVE</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>


                    {this.props.apisTrips.map(trip => {
                        console.log('flight STUFF: ', trip);

                        return ((trip.flight_status == 3) ?
                            <Table.Body key={trip.flight_id}>
                                <Table.Row>
                                    <Table.Cell className={"departureInfoCell"}>
                                        {trip.departureairportcity}, {trip.departurecountrycode} Description: ({trip.departureairportdesc})
                    </Table.Cell>
                                    <Table.Cell className={"inboundInfoCell"}>
                                        {trip.inboundairportcity}, {trip.inboundcountrycode} Description: ({trip.inboundaiportdesc})
                    </Table.Cell>
                                    <Table.Cell className={"timeCell"}>
                                        {moment(trip.localarrivaltimestamp).format("MM/DD/YY")} at {moment(trip.arrivaltimestamp).format('LT')}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <button onClick={() => this.handleArchive(trip.flight_id)}>Archive</button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body> : <p></p>)
                    })}
                </Table>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    apisTrips: state.dashboardReducer,
    user: state.user,
    login: state.loginModeReducer
})

export default withRouter(connect(mapStateToProps)(SubmittedTable));