// Background Color
let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

let getPoints = document.getElementById("getPoints");
getPoints.addEventListener('click', () => {

  function modifyDOM() {
      //You can play with your DOM here or check URL against your regex
      return document.body.innerHTML;
  }

  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.executeScript({
      code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
  }, (results) => {
      const numOfCompletedAss = results[0].split("oC328b").length - 1;
      document.getElementById("points").innerText = "Points: " + numOfCompletedAss*10;
  });
});

changeColor.addEventListener('change', function(element) {
  console.log("BG COLOR");
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
}, false);

// Font Family
let changeFont = document.getElementById('changeFont');
// chrome.storage.sync.get('font', function(data) {
//   changeFont.style.fontFamily = data.font;
//   changeFont.setAttribute('value', data.font);
// });
changeFont.addEventListener('change', function(element) {
  console.log("FONT");
  let font = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.fontFamily = "' + font + '";'});
  });
}, false);

//Background Image

let changeImage = document.getElementById('changeImage');

// chrome.storage.sync.get('font', function(data) {
//   changeImage.style.backgroundImage = data.image;
//   changeImage.setAttribute('value', data.image);
// });

changeImage.addEventListener('change', function(element) {
  console.log("IMAGE");
  let image = element.target.value;
  let code = 'document.body.style.backgroundImage = "' + "url('" + chrome.runtime.getURL(image) + "')\";"
  console.log(code);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: code});
  });
}, false);


var colors = [
  ['#FFFFFF', 'Default'],
  ['#000080', 'Blue'],
  ['#00FF00', 'Green'], 
  ['#DFFF00', 'Yellow'],
  ['#FF0000', 'Red'],
  ['#FF00FF', 'Fuchsia'],
  ['#C0C0C0', 'Maroon'],
  ['#00FFFF', 'Aqua'], 
  ['#000080', 'Navy'], 
  ['#808000', 'Olive'],
  ['#FF7F50', 'Peach']
]

var fonts = [
  ['Helvetica', 'Helvetica'],
  ['Calibri', 'Calibri'],
  ['Arial', 'Arial'],
  ['Georgia', 'Georgia'],
  ['Garamond', 'Garamond'],
  ['Verdana', 'Verdana'],
  ['Tahoma', 'Tahoma'],
  ['Times New Roman', 'Times New Roman'],
  ['Courier New', 'Courier New']
  ]
var images = [
  ['Alien', 'images/alien.png'],
  ['Basketball', 'images/basketball.png'],
  ['Car', 'images/car.png'],
  ['Dinosaur', 'images/dinosaur.png'],
  ['Duck', 'images/duck.png'],
  ['Guitar', 'images/guitar.png'],
  ['Pokemon', 'images/pokemon.png'],
  ['Skateboard', 'images/skateboard.png'],
  ['Tree', 'images/tree.png'],
  ['Unicorn', 'images/unicorn.png']
]

var assignments;
let level = 6;

for (let i = 0; i < level; i++){
  //Color
  changeColor.options[changeColor.options.length] = new Option(colors[i][1], colors[i][0]);
  //Font
  changeFont.options[changeFont.options.length] = new Option(fonts[i][1], fonts[i][0]);
  //Image
  changeImage.options[changeImage.options.length] = new Option(images[i][0], images[i][1]);
}
console.log(changeColor, changeFont, changeImage);
