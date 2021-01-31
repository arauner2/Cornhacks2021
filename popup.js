let level = 0;
function getLevels(score) {
  if (score < 10) {
    return 0;
  } else if (score >= 10 && score < 50) {
    return 1;
  } else if (score >= 50 && score < 100) {
    return 2;
  } else if (score >= 100 && score < 150) {
    return 3;
  } else if (score >= 150 && score < 200) {
    return 4;
  } else if (score >= 200 && score < 250) {
    return 5;
  } else if (score >= 250 && score < 300) {
    return 6;
  } else if (score >= 300 && score < 350) {
    return 7;
  } else if (score >= 400 && score < 450) {
    return 8;
  } else if (Score >= 450 && score < 500) {
    return 9;
  } else if (score >= 500) {
    return 10;
  }
  return 0;
}


window.onload = function () {
  chrome.storage.sync.get("points", function (result) {
    if(result.points) document.getElementById("points").innerText = "Points: " + result.points || "";
  });
  chrome.storage.sync.get("level", function (result) {
    if (result.level) {
      document.getElementById("level").innerText = "Level: " + result.level || "";
      let level = result.level;
      for (let i = 0; i <= level; i++) {
        //Color
        changeColor.options[changeColor.options.length] = new Option(
          colors[i][1],
          colors[i][0]
        );
        //Font
        changeFont.options[changeFont.options.length] = new Option(
          fonts[i][1],
          fonts[i][0]
        );
        //Image
        changeImage.options[changeImage.options.length] = new Option(
          images[i][0],
          images[i][1]
        );
      }
    }
  });
};

// Background Color

Color = document.getElementById("changeColor");
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

let getPoints = document.getElementById("getPoints");
getPoints.addEventListener("click", () => {
  function modifyDOM() {
    //You can play with your DOM here or check URL against your regex
    return document.body.innerHTML;
  }

  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.executeScript(
    {
      code: "(" + modifyDOM + ")();", //argument here is a string but function.toString() returns function's code
    },
    (results) => {
      const numOfCompletedAss = (results[0].split("oC328b").length - 1) * 10;
      document.getElementById("points").innerText =
        "Points: " + numOfCompletedAss;
      chrome.storage.sync.set({ "points": numOfCompletedAss });
      let level = getLevels(numOfCompletedAss);
      document.getElementById("level").innerText =
        "Level: " + level;
      chrome.storage.sync.set({ "level": level });
      for (let i = 0; i <= level; i++) {
        //Color
        changeColor.options[changeColor.options.length] = new Option(
          colors[i][1],
          colors[i][0]
        );
        //Font
        changeFont.options[changeFont.options.length] = new Option(
          fonts[i][1],
          fonts[i][0]
        );
        //Image
        changeImage.options[changeImage.options.length] = new Option(
          images[i][0],
          images[i][1]
        );
      }
    }
  );
});

changeColor.addEventListener(
  "change",
  function (element) {
    console.log("BG COLOR");
    let color = element.target.value;
    let code2 = "document.body.style.color =" + "'white';";
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.body.style.backgroundColor = "' + color + '";',
      });
      chrome.tabs.executeScript(tabs[0].id, { code: code2 });
    });
  },
  false
);

// Font Family
let changeFont = document.getElementById("changeFont");
// chrome.storage.sync.get('font', function(data) {
//   changeFont.style.fontFamily = data.font;
//   changeFont.setAttribute('value', data.font);
// });
changeFont.addEventListener(
  "change",
  function (element) {
    console.log("FONT");
    let font = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.body.style.fontFamily = "' + font + '";',
      });
    });
  },
  false
);

//Background Image

let changeImage = document.getElementById("changeImage");

// chrome.storage.sync.get('font', function(data) {
//   changeImage.style.backgroundImage = data.image;
//   changeImage.setAttribute('value', data.image);
// });

changeImage.addEventListener(
  "change",
  function (element) {
    console.log("IMAGE");
    let image = element.target.value;
    let code =
      'document.body.style.backgroundImage = "' +
      "url('" +
      chrome.runtime.getURL(image) +
      "')\";";
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, { code: code });
    });
  },
  false
);

var colors = [
  ['#FFFFFF', 'Default'],
  ['#40E0D0', 'Blue'],
  ['#B2FFB2', 'Green'], 
  ['#FFD700', 'Yellow'],
  ['#B22222', 'Red' ],
  ['#DA70D6', 'Purple'],
  ['#800000', 'Dark Red'],
  ['#C0C0C0', 'Silver'], 
  ['#FFB6C1', 'Light Pink'], 
  ['#D2691E', 'Chocolate'],
  ['#FF7F50', 'Peach']
];

var fonts = [
  ["Tahoma", "Tahoma"],
  ["Brush Script MT", "Brush Script MT"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["Garamond", "Garamond"],
  ["Verdana", "Verdana"],
  ["Tahoma", "Tahoma"],
  ["Times New Roman", "Times New Roman"],
  ["Arial", "Arial"],
];
var images = [
  ['Corn', 'images/corn.png'],
  ['Pikachu', 'images/pikachu.png'],
  ['Guitar', 'images/guitar.png'],
  ['Dog', 'images/dog.png'],
  ['Duck', 'images/duck.png'],
  ['Dinosaur', 'images/dinosaur.png'],
  ['Tree', 'images/tree.png'],
  ['Alien', 'images/alien.png'],
  ['Car', 'images/car.png'],
  ['Pokemon', 'images/pokemon.png'],
  ['Skateboard', 'images/skateboard.png'],
  ['Tree', 'images/tree.png'],
  ['Unicorn', 'images/unicorn.png']
]

