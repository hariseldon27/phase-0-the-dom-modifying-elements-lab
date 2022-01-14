// Write your code here!
const mainDiv = document.getElementById("main");
mainDiv.remove()

const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.innerHTML = 'is the champion';
document.body.append(newHeader);

// this isn't any thing`