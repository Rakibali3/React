import React from 'react'
import UserClass from './UserClass';
import User from './User';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>
          Aboout us page !!
        </h1>
        <UserClass name={"First"} />
      </div>
    )
  }
}

export default About
