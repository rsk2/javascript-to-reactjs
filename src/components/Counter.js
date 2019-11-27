import React from 'react';
import { ReactComponent } from '*.svg';

class Counter extends ReactComponent {
state = {
    hits:0
}

    incrementCounter() {

        this.setState( 
            { 
                hits: hits + 1
            }
        );
    }

    render() {

        return (
        
            <div>
                <input type="label" value={this.state.hits}></input>
                <input type="button" onClick={this.incrementCounter}></input>
            </div>
            
            )
        
    }

}

export default Counter