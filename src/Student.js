import React, { Component } from "react";

// const Student = props => {
//     return(
//     <div>
//         <h1>Hello, {props.name}</h1>
//         <h2>your Roll: {props.roll}</h2>
//     </div>
//     );
// };

class Student extends Component{
    render(){
        return(
            <div>
                <h1>I am  {this.props.name}</h1>
                <h2>father Name:  {this.props.id}</h2>
                <h2> My age:  {this.props.age}</h2>
            </div>
        )
    }
}
export default Student;