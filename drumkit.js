var numberOfButtons = document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
    .addEventListener("click", function() {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
  });
}


document.addEventListener("keypress", function(event) {
    sound(event.key);
  });

  function sound(key) {
    switch (key) {
        case "Snare":
        var sound1 = new Audio("Snare-Drum-Hit-Level-3a-www.fesliyanstudios.com.mp3");
        sound1.play();
        break;
    
        case "Hi-Hat":
        var sound2 = new Audio("Hi-Hat-Closed-Hit-E1-www.fesliyanstudios.com.mp3");
        sound2.play();
        break;
    
        case "CrashCymbal":
        var sound3 = new Audio('Crash-Cymbal-Hit-C-www.fesliyanstudios.com.mp3');
        sound3.play();
        break;
    
        case "HTom":
        var sound4 = new Audio('Medium-Tom-Drum-Hit-Level-6A-www.fesliyanstudios.com.mp3');
        sound4.play();
        break;

        case "Base":
        var sound5 = new Audio('Bass-Drum-Hit-Level-6a-www.fesliyanstudios.com.mp3');
        sound5.play();
        break;
    
        case "LTom":
        var sound6 = new Audio('Small-Tom-Drum-Hit-Level-5B-www.fesliyanstudios.com.mp3');
        sound6.play();
        break;
    
        case "RideCymbal":
        var sound7 = new Audio('Ride-Cymbal-Crash-Hit-B-www.fesliyanstudios.com.mp3');
        sound7.play();
        break;
    
        case "FTom":
        var sound8 = new Audio('Floor-Tom-Drum-Hit-Level-7B-www.fesliyanstudios.com.mp3');
        sound8.play();
        break;
    
        default: console.log(key);
    }
    }

