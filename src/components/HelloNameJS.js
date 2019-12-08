import React from 'react';

const HelloNameJS = () =>{

    function updateMessage() {
        document.getElementById("message").innerText = "Hi " + document.getElementById("nameforJScomponent").value + "!";
    }

    return (
            <div>
                <label for="Name" >Name: </label>
                  {/*Below onClick event Handler is specific to react. In pure JS, we would use onchange="updateMessage()"*/}              
                <input type="text" id="nameforJScomponent" onChange={updateMessage} placeholder="Please enter your name" />
                <br/>
                <label id="message">Hi!</label>
            </div>
    )
}

export default HelloNameJS