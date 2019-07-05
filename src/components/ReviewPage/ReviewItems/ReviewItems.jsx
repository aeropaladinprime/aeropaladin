import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ReviewItems.css'
import {Button, List} from 'semantic-ui-react';

const moment = require('moment');

class ReviewItems extends Component {
  
    editAircraft = () => {
        console.log('in edit Aircraft');
        this.props.history.push(`/apis/${1}`)
    }

    editCrew = () => {
        console.log('in edit Crew');
        this.props.history.push(`/apis/${2}`)
    }

    editPassenger = () => {
        console.log('in edit Passenger');
        this.props.history.push(`/apis/${3}`)
    }

    editFlightSegementOne = () => {
        console.log('in edit Flight Segement One');
        this.props.history.push(`/apis/${4}`)
    }

    editFlightSegementTwo = () => {
    console.log('in edit Flight Segement Two');
    this.props.history.push(`/apis/${5}`)
}


 render() {
    
    let crewToShow;
    let paxToShow;
    // console.log('HERES THAT THING', this.props.review.crewpaxpeople);
    // console.log('STUFF', Object.keys(this.props.review));
       
    //Conditional rendering to show only people with the type of crew (2)
     if (Object.keys(this.props.review).length) {
    
       //console.log('new thing here: ', this.props.review);
       
        crewToShow = (
      <>
        <ul>
            {this.props.review.crewpaxpeople.map(person => {  
              if(person.crew_paxPeopleType === 2) 
               // console.log('PERSON HEIRE: ', person);
                return <><li>{person.crew_paxFirstName}</li> <br/> </>
            })}
        </ul>
        </>    
    )}
    //Conditional rendering to show only people with the type of pax (1)
    if (Object.keys(this.props.review).length) {
    
       console.log('new thing here: ', this.props.review);
       
        paxToShow = (
      <>
        <ul>
            {this.props.review.crewpaxpeople.map(person => {  
              if(person.crew_paxPeopleType === 1) 
               // console.log('PERSON HEIRE: ', person);
                return  <>
                <li>{person.crew_paxFirstName}</li> <br/> </>
            })}
        </ul>
        </>    
    )}


    return (
     <>
     <div>
      <h2 className="ui header middle aligned center aligned grid">Review APIS</h2>
     </div>
     <div className="ui segments grid review div big">
        <List>
        {/* Aircraft Information */}
            
         <List.Item className="listItem">
            <div className="subHeadBtn">
            <List.Header>AirCraft</List.Header>
            <Button className="ui mini icon button green" onClick={this.editAircraft}><i className="edit icon"></i></Button>
            </div>
            <br/>
            <br/>
            Tail Number: {this.props.review.planetailnum}
            <br/>
            <br/>
            Owner: {this.props.review.ownerfirstname} {this.props.review.ownerlastname}
            <br/>
            <br/>
            Operator: {this.props.review.operatorfirstname} {this.props.review.operatorlastname}
         </List.Item>
    
        <List.Item className="listItem">
         <List.Header>Manifest</List.Header>
         
         <br/>
         Crew
         <Button className="ui mini icon button green" onClick={this.editCrew}><i className="edit icon"></i></Button>
            {crewToShow}
         
         Passengers
         <Button className="ui mini icon button green" onClick={this.editPassenger}><i className="edit icon"></i></Button>
            {paxToShow}
        </List.Item>
        {/* flight segment one */}
        <List.Item className="listItem">
         <List.Header>Flight Segment One</List.Header>
         Departure
         <br/>
         <Button className="ui mini icon button green" onClick={this.editFlightSegementOne}><i className="edit icon"></i></Button>
            <br/>
             Departure Airport: {this.props.review.departureairportcity}, {this.props.review.departureairportcntry}
            <br/>
            <br/>
             Departure Date: {moment(this.props.review.localdeparturetimeStamp).format("MM/DD/YYYY")} 
            <br/>
            <br/>
             Departure Time: {moment(this.props.review.localdeparturetimeStamp).format("LT")} 
        </List.Item>
        
        {/* flight segment two */}
        <List.Item className="listItem">
         <List.Header>Flight Segment Two</List.Header>
          Arrival 
          <br/>
             <Button className="ui mini icon button green" onClick={this.editFlightSegementTwo}><i className="edit icon"></i></Button>
             <br/>
             Arrival Airport: {this.props.review.arrivalairportcity}, {this.props.review.arrivalairportcntry}
             <br/>
             <br/>
             Arrival Date: {moment(this.props.review.localdeparturetimeStamp).format("MM/DD/YYYY")} 
             <br/>
             <br/>
             Arrival Time: {moment(this.props.review.localdeparturetimeStamp).format("LT")}
             
        </List.Item>
        </List>
     </div>
     
     </>



    )
 }
}

const mapStateToProps = (reduxState) => ({
    review: reduxState.reviewReducer
});

export default connect(mapStateToProps)( withRouter((ReviewItems)));