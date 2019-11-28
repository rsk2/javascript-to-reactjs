import React from 'react';

const CounterJS = () =>{

    function incrementCounter() {
        document.getElementById("hitsCount").innerText = parseInt(document.getElementById("hitsCount").innerText) + 1
    }

    return (
        <div>
                <span id="hitsCount">0</span>
                <label for="hits" id="hitsLabel">&nbsp;hits</label>
                <input type="button" onClick={incrementCounter} value="Hit me"></input>
        </div>
    )
}

export default CounterJS