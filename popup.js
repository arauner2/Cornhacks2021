// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//   console.log(document.getElementsByClassName("Xzp3fc")[0].getElementsByTagName('li'));  
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//       tabs[0].id,
//       {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };

// // chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
// //   if (msg.text === 'text'){
// //     sendResponse(document.getElementsByTagName('li'));
// //   }
// // });

document.getElementById("test").addEventListener('click', () => {
  console.log("Popup DOM fully loaded and parsed");

  function modifyDOM() {
      //You can play with your DOM here or check URL against your regex
      console.log('Tab script:');
      console.log(document.body);
      return document.body.innerHTML;
  }

  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.executeScript({
      code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
  }, (results) => {
      const numOfOverallAss = results[0].split("</li>").length - 2;
      const numOfCompletedAss = results[0].split("oC328b").length - 1;
      console.log(numOfOverallAss);
      console.log(numOfCompletedAss);
  });
});