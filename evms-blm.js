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
function hideUnwantedElements(columnNumber) {
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
}
window.onload = function(){
    var numberOfColumns = 3;
    for(var i = 0; i < numberOfColumns; i++){
        sleep(hideUnwantedElements, i, this, 1000, 1000);
    }
}
//[end] - James Scott McDowell - 6/7/2020 - 1:57PM