var gradient = document.getElementById("gradient");
var css = document.querySelector("p");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var linear = document.getElementById("linear");
var radial = document.getElementById("radial");
var range= document.querySelector("range");


function Gradient() {
    
    
      if (toright.checked == true) {
        gradient.style.background = "linear-gradient(to right ," + color1.value + "," + color2.value + ")";
        css.textContent = gradient.style.background;
    }
    else if (toleft.checked == true) {
        gradient.style.background = "linear-gradient(to left ," + color1.value + "," + color2.value + ")";
        css.textContent = gradient.style.background;
    }
    else if (totop.checked == true) {
        gradient.style.background = "linear-gradient(to top ," + color1.value + "," + color2.value + ")";
        css.textContent = gradient.style.background;
    }
    else if (tobright.checked == true ) {
        gradient.style.background = "linear-gradient(to bottom right ," + color1.value + "," + color2.value + ")";
        css.textContent = gradient.style.background;
    }
    else if (tobleft.checked == true ) {
        gradient.style.background = "linear-gradient(to bottom left ," + color1.value + "," + color2.value + ")";
        css.textContent = gradient.style.background;
    }
    else if (totright.checked == true ) {
        gradient.style.background = "linear-gradient(to top right ," + color1.value + "," + color2.value + ")";
        css.textContent = gradient.style.background;
    }
    else if (totleft.checked == true) {
        gradient.style.background = "linear-gradient(to top left ," + color1.value + "," + color2.value + ")";
        css.textContent = gradient.style.background;
    }

    else{
        gradient.style.background = "radial-gradient(circle," + color1.value + "," + color2.value + ")";
        css.textContent = gradient.style.background;
    }
}

color1.addEventListener("input", Gradient);
color2.addEventListener("input", Gradient);

    function copy() {
        let text = css.innerText;
        let input = document.createElement('input');
        input.setAttribute('value', text);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        
        alert('Copied: ' + text);
       }

