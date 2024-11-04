// makeMaximizeButton.js

function makeMaximizeButton(whichMenuId)
{
    let maximizeButton = ce("button");
    maximizeButton.style.position = "absolute";
    maximizeButton.style.top = "0px";
    maximizeButton.style.right = "0px";
    maximizeButton.textContent = 'O';
    maximizeButton.style.cursor = 'pointer';
    maximizeButton.style.fontSize = '10px';
    maximizeButton.onmouseover = function()
    {
        hoverSound();
    };
    maximizeButton.onclick = function()
    {
        clickSound();
        ge(whichMenuId).style.height = 190 + 'px';
    };

    return maximizeButton; 
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

