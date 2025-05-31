import React from "react"

// this is just an demo of class based component
class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: "akash",
            age: 12,
        }

    }
    
    componentDidUpdate() {
        console.log("component updated")
    }
    
    render(){
        
        const increment = ()=> {
            this.setState({
                age: this.state.age + 1,
            })
        }
        // console.log(this.props, "inside class")
        return (
            <>
            <div>class based components</div>
            <div>name: {this.state.name}</div>
            <div>age: {this.state.age}</div>
            <button onClick={increment}>click</button>
            </>
        )
    }
}

export default UserClass