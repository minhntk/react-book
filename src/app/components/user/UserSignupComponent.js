import React from 'react';
import ReactDOM from 'react-dom';
import UserSignupView from './UserSignupView';


export default class UserSignupComponent extends  React.Component {
  constructor(props) {
    super(props);
  }



  render(){
    return(
      <UserSignupView props={...this.props} />
    );
  }
}