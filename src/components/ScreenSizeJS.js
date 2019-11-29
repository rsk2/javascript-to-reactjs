import React from 'react';

const ScreenSizeJS = () => {

    function refreshSize() {
        document.getElementById("windowHeight").innerText = window.innerHeight;
        document.getElementById("windowWidth").innerText = window.innerWidth;
    }

    window.onload = refreshSize;
    
    return (
            <p>
                Height: <span id="windowHeight"></span>
                &nbsp;
                Width: <span id="windowWidth"></span>
                {/*Below onClick event Handler is specific to react. In pure JS, we would use onclick="refreshSize()"*/}
                <input type="button" value="Refresh" onClick={refreshSize}></input>
            </p>
    )
    

}

export default ScreenSizeJS