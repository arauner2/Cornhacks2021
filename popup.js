// Background Color
let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  console.log("BG COLOR");
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};

// Font Family
let changeFont = document.getElementById('changeFont');

chrome.storage.sync.get('font', function(data) {
  changeFont.style.fontFamily = data.font;
  changeFont.setAttribute('value', data.font);
});

changeFont.onclick = function(element) {
  console.log("FONT");
  let font = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.fontFamily = "' + font + '";'});
  });
};

//Background Image

let changeImage = document.getElementById('changeImage');

chrome.storage.sync.get('font', function(data) {
  changeImage.style.backgroundImage = data.image;
  changeImage.setAttribute('value', data.image);
});

changeColor.onclick = function(element) {
  console.log("IMAGE");
  let image = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.backgroundImage = "' + image + '";'});
  });
};

var colors = {
  '#FFFFFF': 'Default',
  '#000080': 'Blue',
  '#00FF00': 'Green', 
  '#DFFF00': 'Yellow',
  '#FF0000': 'Red',
  '#FF00FF': 'Fuchsia',
  '#C0C0C0': 'Maroon',
  '#00FFFF': 'Aqua', 
  '#000080': 'Navy', 
  '#808000': 'Olive',
  '#FF7F50': 'Peach'
}

var fonts = {
  'Helvetica': 'Helvetica',
  'Calibri': 'Calibri',
  'Arial': 'Arial',
  'Georgia': 'Georgia',
  'Garamond': 'Garamond',
  'Verdana': 'Verdana',
  'Tahoma': 'Tahoma',
  'Times New Roman': 'Times New Roman',
  'Courier New': 'Courier New'
}

var images = {
  'alien': 'images/alien.png',
  'basketball': 'images/basketball.png',
  'car': 'images/car.png',
  'dinosaur': 'images/dinosaur.png',
  'duck': 'images/duck.png',
  'guitar': 'images/guitar.png',
  'pokemon': 'images/pokemon.png',
  'skateboard': 'images/skateboard.png',
  'tree': 'images/tree.png',
  'unicorn': 'images/unicorn.png'
}

var assignments;
let level = 6;

let select = document.getElementById("changeColor");
for (i in colors[0,level]){
  select.options[select.options.length] = new Option(colors[i], i);
}

select = document.getElementById("changeFont");
for (i in fonts[0,level]){
  select.options[select.options.length] = new Option(fonts[i], i);
}

select = document.getElementById("changeImage");
for (i in images[0,level]){
  select.options[select.options.length] = new Option(images[i], i);
}
