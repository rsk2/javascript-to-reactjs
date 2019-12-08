import React from 'react';

class HelloNameReactJS extends React.Component {

    constructor() {
        super()
        this.state = {
            message: "Hi"
        }
      
    }

    updateMessage = (event) => {
        var name = event.target.value;
        this.setState(() => 
            { 
                    return {message: `Hi ${name}`}   
            }
        )
    }

    render() {

        return (
            <div>
                <label for="Name" >Name: </label>
                <input type="text" id="name" onChange={this.updateMessage} placeholder="Please enter your name" />
                <br/>
                <label>{this.state.message}!</label>
            </div>
            
            )       
    }

}

export default HelloNameReactJS