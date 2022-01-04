// Getting elements from DOM
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Getting the window width & height
let cw = window.innerWidth;
let ch = window.innerHeight;

// Setting the alphabets array
let charArr = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]; 

// Setting the variables
let maxCharCount = 1000;
let fallingCharArr = [];
let fontsize = 15;
let maxColumns = cw / fontsize;

// setting canvas (width & height)
canvas.width = cw;
canvas.height = ch;
let frames = 0;

// Set the class of the falling character
class FallingChar {
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
    }

    draw() 
    {
        this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))];
        this.speed = Math.random() * fontsize * 3/4 + fontsize * 3/4;

        ctx.fillStyle = "rgba(0, 255, 0)";
        ctx.font = fontsize + "px sans-serif";
        ctx.fillText(this.value, this.x, this.y)
        this.y += this.speed;
    }
    
}

let update = () => {
    if(fallingCharArr.length < maxCharCount)
    {
        let fallingChar = new FallingChar(Math.floor(Math.random() * maxColumns)
        * fontsize, Math.random() * ch/2 - 50);
        // Pushing the new falling character to fallingCharArr
        fallingCharArr.push(fallingChar);
    }
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0,0,cw,ch);

    // Iterating through the falling character array
    for(let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
        // For each falling character we draw it 
        fallingCharArr[i].draw();
    }

    requestAnimationFrame(update);
    frames++;
}

update();