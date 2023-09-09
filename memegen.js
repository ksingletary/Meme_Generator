// Keith Singletary
// Springboard Meme Generator

// Description: This is js code for my meme generator. This generator takes an input img url, 
// text for the top of the Image, and text for the bottom, and creates a meme out of these inputs. 
// You have the option to delete the meme, or add more! 

const myUrl = document.getElementById('submitter'); //form submission
const button = document.querySelector('button');
let mainDiv = document.getElementById('container');
const myMeme = document.createElement('div')


function submitMyMeme() {
    myUrl.addEventListener('submit', function(evt){
        evt.preventDefault(); // submit event by default refreshes 
        myMeme.classList.add('meme');
        let theImg = document.createElement('img');
        let theUrl = document.getElementById('imgURL').value;
        theImg.setAttribute('src', theUrl);

        myMeme.append(theImg);

        const topText = document.createElement('div');
        topText.classList.add("top");
        topText.innerText = document.getElementById("top").value;

        const bottomText = document.createElement('div');
        bottomText.classList.add("bottom");
        bottomText.innerText = document.getElementById("bottom").value;

        myMeme.appendChild(topText);
        myMeme.appendChild(bottomText);
        mainDiv.appendChild(myMeme);

        document.getElementById('imgURL').value = "";
        document.getElementById('top').value = "";
        document.getElementById('bottom').value = "";
    })
}

submitMyMeme();
        
function removeMeme() {
    let newBtn = document.createElement('button');
    let myImgs = document.querySelectorAll('img');
    newBtn.appendChild(myImgs);
    newBtn.addEventListener('click', function(evt){

    })
}

