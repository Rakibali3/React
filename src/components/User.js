import { useState } from "react";

const User = (props)=>{
    const [count]=useState(0);
    return (
        <div className="user-card">
            <h1>count : {count}</h1>
                <h2>Name: {props.name}</h2>
                <h2>Location: BVRM</h2>
                <h2>Occupation: Student</h2>
        </div>
    )
}
export default User;