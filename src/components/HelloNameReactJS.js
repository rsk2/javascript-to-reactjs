import React from 'react';

class HelloNameReactJS extends React.Component {

    constructor() {
        super()
        this.state = {
            message: "Hi!"
        }
      
    }

    updateMessage = (event) => {
        // var name = event.target.value;
        // alert(name)
        this.setState(() => 
            { 
               // if(name != "")
                    return {message: event.target.value}//"Hi " + event.target.value + "!"}
                
            }
        )
    }

    render() {

        return (
            <div>
                <label for="Name" >Name: </label>
                <input type="text" id="name" onChange={this.updateMessage} />
                <label for="Display">{this.state.message}!</label>
            </div>
            
            )       
    }

}

export default HelloNameReactJS