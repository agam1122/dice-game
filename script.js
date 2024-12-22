

// Check if the page was reloaded
if (performance.getEntriesByType("navigation")[0].type === 'reload') {

    var rand_num1 = Math.floor(Math.random() * 6) + 1;
    var image1 = document.getElementsByClassName('img1')[0].setAttribute('src', './images/dice' + rand_num1 + '.png');

    var rand_num2 = Math.floor(Math.random() * 6) + 1;
    var image2 = document.getElementsByClassName('img2')[0].setAttribute('src', './images/dice' + rand_num2 + '.png');

    heading = document.getElementsByTagName('h1')[0];

    if(rand_num1 > rand_num2){
        heading.innerText = "🚩 Player 1 wins!"
    }
    else if(rand_num1 < rand_num2){
        heading.innerText = "Player 2 wins! 🚩"
    }
    else{
        heading.innerText = "Draw!"
    }
}

