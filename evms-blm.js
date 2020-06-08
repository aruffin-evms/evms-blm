/*
const firstName = document.getElementById('field93569054-first');
const lastName = document.getElementById('field93569054-last');
const email = document.getElementById('field93569057');
const messageBox = document.getElementById('field93569061');
const submitButton = document.getElementById('fsSubmitButton3910490');

firstName.placeholder = 'First name';
lastName.placeholder = 'Last name';
email.placeholder = 'Email';
messageBox.placeholder = 'Type your message';

submitButton.value = "Add your message";
*/
//[start] - James Scott McDowell - 6/7/2020 - 1:57PM
function sleep(auxiliaryFunction, columnNumber, element, range, wait){
    var i = 0.00;
    (function loop () {
        setTimeout(function () {
            if (i < range) {          // If i > 0, keep going
                i = i + wait;
                loop();       // Call the loop again, and pass it the current value of i
            }
            else{
                auxiliaryFunction(columnNumber);
            }
        }, wait);
    })();
}
function popTextNodes(element){
    var children = [];
    for(var i=0; i<element.children.length; i++) {
        children.push(element.children[i]);
    }

    element.innerHTML = "";
    children.forEach(function(item) {
        element.appendChild(item);
    });
}
function hideUnwantedElements(columnNumber) {
    var feed = document.querySelector('.j-stacker');
    var feedColumn = feed.children[columnNumber];

    for(var j = 0; j < feedColumn.children.length; j++){
        var feedCell = feedColumn.children[j];
        var jText = feedCell.children[1];
        var jMessage = jText.children[0];

        var imageContainer = jMessage.children[1];
        popTextNodes(imageContainer);
        var imageAnchor = imageContainer.children[0];
        var imageURL = imageAnchor.href;
        var tempImg = document.createElement("img");
        tempImg.src = imageURL;

        var formalName = jMessage.children[2];
        formalName.innerHTML = "";

        var roleAtEVMS = jMessage.children[3];
        roleAtEVMS.innerHTML = roleAtEVMS.innerHTML.replace("Role at EVMS: ", "");

        var message = jMessage.children[4];
        message.innerHTML = message.innerHTML.replace("Message: ", "");

        jMessage.insertBefore(tempImg, jMessage.children[0]);
        imageContainer.innerHTML = "";
    }
}
/*
    var feed = document.querySelector('.j-stacker');
    var feedColumn = feed.children[columnNumber];
    for(var j = 0; j < feedColumn.children.length; j++){
        var feedCell = feedColumn.children[j];
        var feedText = feedCell.children[1];  
        var feedMessage = feedText.children[0];
        var feedMessageText = feedMessage.children[3];
        feedMessageText.innerHTML = feedMessageText.innerHTML.replace("Message: ", "");

        var feedMessageChildren = feedMessage.childNodes;
        var paragraphCount = 0;
        for(var i = 0; i < feedMessageChildren.length; i++){
            if(feedMessageChildren[i].nodeName == "P"){
                paragraphCount++;
            }
        }
        if(paragraphCount == 4){
            var feedImageContainer = feedMessage.children[4];
            var feedImageLink = feedImageContainer.children[0];
            var img = document.createElement("img");
            img.src = feedImageLink.href;
            feedMessage.appendChild(img);
            feedImageContainer.innerHTML = "";
        }
    }
*/
function hideUnwantedElementsInModal(number){
    var jOverlay = document.body.lastChild;
    var jOverlayContent = jOverlay.children[0];
    var jPostOverlay = jOverlayContent.children[1];
    var jOverlayText = jPostOverlay.children[1];
    var jMessage = jOverlayText.children[1];

    var imageContainer = jMessage.children[1];
    popTextNodes(imageContainer);
    var imageAnchor = imageContainer.children[0];
    var imageURL = imageAnchor.href;
    var tempImg = document.createElement("img");
    tempImg.src = imageURL;

    var formalName = jMessage.children[2];
    formalName.innerHTML = "";

    var roleAtEVMS = jMessage.children[3];
    roleAtEVMS.innerHTML = roleAtEVMS.innerHTML.replace("Role at EVMS: ", "");

    var message = jMessage.children[4];
    message.innerHTML = message.innerHTML.replace("Message: ", "");

    jMessage.insertBefore(tempImg, jMessage.children[0]);
    imageContainer.innerHTML = "";
}
function hideUnwantedElements2(index) {
    if(index == 0){
        hideUnwantedElementsInModal(index);
    }
}
window.onload = function(){
    var numberOfColumns = document.getElementsByClassName("j-stacker")[0].children.length;
    for(var i = 0; i < numberOfColumns; i++){
        sleep(hideUnwantedElements, i, this, 500, 500);
    }
    var j = 0;
    var checkExist = setInterval(function() {
        if ($('.j-overlay').length) {
           hideUnwantedElements2(j);
           j += 1;
        }
        else if($('.j-overlay').length == 0){
            j = 0;
        }
     }, 100); // check every 100ms
}
//[end] - James Scott McDowell - 6/7/2020 - 1:57PM