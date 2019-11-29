import React from 'react';

class ScreenSizeReactJS extends React.Component {

    constructor() {
        super()
        this.state = {
            height:window.innerHeight,
            width:window.innerWidth
        }
      
    }

    refreshSize = () => {

        this.setState( () =>
            { 
                return {
                    height:window.innerHeight,
                    width:window.innerWidth
                }
            }
        );
    }

    render() {

        return (
            <div>
                <label for="height" >{"Height: " + this.state.height}</label>
                &nbsp;
                <label for="width">{"Width: " + this.state.width}</label>
                <input type="button" onClick={this.refreshSize} value="Refresh"></input>
            </div>
            
            )       
    }

}

export default ScreenSizeReactJS