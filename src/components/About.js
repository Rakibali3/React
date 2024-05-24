import React from 'react'
import UserClass from './UserClass';
import userContext from '../utils/UserContext';

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
        <userContext.Consumer>
           {({userInfo})=><h1 className='font-bold'>{userInfo}</h1>}
          </userContext.Consumer>
      </div>
    )
  }
}

export default About
