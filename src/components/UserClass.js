import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           userInfo:[]
        }
        console.log(this.props.name+" constructor");
    }
    async componentDidMount(){
        console.log(this.props.name+" componentDidMount");
       const data = await fetch("https://api.github.com/users/Rakibali3");
       const json = await data.json();
       this.setState({
        userInfo:json
       })
    }
    componentWillUnmount(){
        console.log(this.props.name+" componentWillUnmount");
    }
    render() {
        console.log(this.props.name+" rendered");
        const {name,location,company,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Company: {company}</h2>
            </div>
        )
    }
}
export default UserClass;