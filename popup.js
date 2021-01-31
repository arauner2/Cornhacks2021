// Background Color
let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

changeColor.addEventListener('change', function(element) {
  console.log("BG COLOR");
  let color = element.target.value;
  let code2 = 'document.body.style.color =' +"'white';"
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "' + color + '";'});
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: code2});
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
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: code});
  });
}, false);


var colors = [
  ['#FFFFFF', 'Default'],
  ['#40E0D0', 'Blue'],
  ['#6B8E23', 'Green'], 
  ['#FFD700', 'Yellow'],
  ['#B22222', 'Red' ],
  ['#DA70D6', 'Purple'],
  ['#800000', 'Dark Red'],
  ['#C0C0C0', 'Silver'], 
  ['#FFB6C1', 'Light Pink'], 
  ['#D2691E', 'Chocolate'],
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