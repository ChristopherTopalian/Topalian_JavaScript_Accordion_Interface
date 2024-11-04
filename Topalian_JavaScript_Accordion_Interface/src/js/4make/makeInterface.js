// makeInterface.js

function makeInterface(whichArray)
{
    let menuId = 'accordionMainDiv';

    if (ge(menuId))
    {
        removeElement(menuId);
    }

    //-//

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.style.position = "absolute";
    mainDiv.style.left = 35 + 'px';
    mainDiv.style.top = 35 + 'px';
    mainDiv.style.height = 190 +'px';
    mainDiv.style.paddingLeft = "20px";
    mainDiv.style.paddingRight = "20px";
    mainDiv.style.paddingTop = "15px";
    mainDiv.style.paddingBottom = "15px";
    mainDiv.style.zIndex = "1004";
    mainDiv.style.background = "black";
    mainDiv.style.borderStyle = "solid";
    mainDiv.style.borderWidth = "2px";
    mainDiv.style.borderColor = "rgba(100,100,255,1.0)";
    mainDiv.style.borderRadius= "10px";
    mainDiv.style.fontFamily = "arial";
    mainDiv.style.fontWeight = "bold";
    mainDiv.style.fontSize = "large";
    mainDiv.style.color = "white";
    mainDiv.style.textAlign = "left";
    mainDiv.style.overflowY = 'scroll';
    mainDiv.style.resize = 'both';
    ba(mainDiv);

    //-//

    makeElementDraggable(mainDiv);

    //-//

    let theMenu = ce("div");
    theMenu.style.marginBottom = 4 + 'px';
    theMenu.style.width = '200px';
    mainDiv.append(theMenu);

    //-//

    // minimize button
    mainDiv.append(makeMinimizeButton(menuId));

    //-//

    // maximize button
    mainDiv.append(makeMaximizeButton(menuId));

    //-//

    for(let x = 0; x < whichArray.length; x++)
    {
        let theDetails = ce("details");
        theDetails.innerHTML = whichArray[x].name.bold();
        theDetails.className = "details2";
        theDetails.style.padding = "5px 5px 5px 5px";
        theDetails.style.fontSize = 22 + 'px';
        mainDiv.append(theDetails);

        //-//

        let theSummary = ce("summary");
        theSummary.innerHTML = whichArray[x].abbreviation;
        theSummary.className = "summary2";
        theSummary.onmouseover = function()
        {
            hoverSound();
        };
        theSummary.onclick = function()
        {
            clickSound();
        };
        theDetails.append(theSummary);

        //-//

        let theUrl = ce("div");
        theUrl.innerHTML = whichArray[x].url;
        theDetails.append(theUrl);

        //-//

        let theDescription = ce("div");
        theDescription.innerHTML = whichArray[x].description;
        theDetails.append(theDescription);
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

