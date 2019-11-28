import React from 'react';

class CounterReactJS extends React.Component {

    constructor() {
        super()
        this.state = {
            hits:0
        }
      
    }

    incrementCounter = () => {

        this.setState( (prevState) =>
            { 
                return {
                hits: prevState.hits + 1
                }
            }
        );
    }

    render() {

        return (
            <div>
                <label for="hitsCount" >{this.state.hits + " hits"}</label>
                <input type="button" onClick={this.incrementCounter} value="Hit me"></input>
            </div>
            
            )       
    }

}

export default CounterReactJS