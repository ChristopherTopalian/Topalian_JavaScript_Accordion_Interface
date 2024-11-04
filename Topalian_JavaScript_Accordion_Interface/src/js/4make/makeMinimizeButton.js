// makeMinimizeButton.js

function makeMinimizeButton(whichMenuId)
{
    let minimizeButton = ce("button");
    minimizeButton.style.marginRight = '10px';
    minimizeButton.style.position = "absolute";
    minimizeButton.style.top = "0px";
    minimizeButton.style.right = "15px";
    minimizeButton.textContent = '_';
    minimizeButton.style.cursor = 'pointer';
    minimizeButton.style.fontSize = '10px';
    minimizeButton.onmouseover = function()
    {
        hoverSound();
    };
    minimizeButton.onclick = function()
    {
        clickSound();
        ge(whichMenuId).style.height = 0 + 'px';
    };

    return minimizeButton; 
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

