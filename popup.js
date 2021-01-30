// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// window.onload = function(){
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id,
//       {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };
// }
console.log("yooooo before function");
function getAssignments() {
  const assignments = document.getElementsByClassName("Xzp3fc")[0].getElementsByTagNmae('li');
  
  
};

//getAssignments();x
window.addEventListener("load", getAssignments);