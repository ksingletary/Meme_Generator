// Keith Singletary
// Springboard Meme Generator

// Description: This is js code for my meme generator. This generator takes an input img url, 
// text for the top of the Image, and text for the bottom, and creates a meme out of these inputs. 
// You have the option to delete the meme, or add more! 

function submitMyMeme(){
    const myUrl = document.getElementById('submitter');
    myUrl.addEventListener('submit', function(evt){
        evt.preventDefault();
        let theImg = document.createElement('img');
        let theUrl = document.getElementById('imgURL').value;
        let myBod = document.querySelector('body')
        theImg.setAttribute('src', theUrl);
        myBod.append(theImg);
    })
}
submitMyMeme();

