// Keith Singletary
// Springboard Meme Generator

// Description: This is js code for my meme generator. This generator takes an input img url, 
// text for the top of the Image, and text for the bottom, and creates a meme out of these inputs. 
// You have the option to delete the meme, or add more! 

const myUrl = document.getElementById('submitter'); //form submission
const button = document.querySelector('button');
let mainDiv = document.getElementById('container');


function submitMyMeme() {
    myUrl.addEventListener('submit', function(evt){
        evt.preventDefault();                                   // submit event by default refreshes 

        const myMeme = document.createElement('div')
        myMeme.classList.add('meme');                                //creating the image and setting url
        let theImg = document.createElement('img');                  //to the srf           
        let theUrl = document.getElementById('imgURL').value;        // we are going to add all to a div
        theImg.setAttribute('src', theUrl);

        myMeme.append(theImg);                             //added to div

        const topText = document.createElement('div');
        topText.classList.add("top");                                   //creating divs for the top text
        topText.innerText = document.getElementById("top").value;

        const bottomText = document.createElement('div');
        bottomText.classList.add("bottom");                             //creating divs for bottom text
        bottomText.innerText = document.getElementById("bottom").value;

        myMeme.appendChild(topText);
        myMeme.appendChild(bottomText);                                 //appending top and bottom text to main meme div
        mainDiv.appendChild(myMeme);

        document.getElementById('imgURL').value = "";
        document.getElementById('top').value = "";                      //resetting input values
        document.getElementById('bottom').value = "";

        const delDiv = document.createElement('div');               //creating delete image
        const delImg = document.createElement('img');
        delImg.classList.add('delimg');
        delImg.setAttribute('src', 'https://lh3.googleusercontent.com/pw/AIL4fc_0DM4voyTSwrryRZ7m0lkyBaPXVP8cYCIeOeba2nTdhc9Z6NCQpU-T_u8lUNayivzTsRyMIX1C-iJKSg9STItsVp-mNv54TQBP7NI5F4jW62o9BqY=w1920-h1080')
        delDiv.append(delImg)
        myMeme.append(delDiv);

        function mouseOver(e){
            delImg.style.filter='brightness(50%)';              //mouseover functions for del
            myMeme.style.position='relative';
            delImg.style.transition='filter 2s';
        }
    
        function mouseOut(e){
            delImg.style.filter='none';
        }

        myMeme.addEventListener('mouseover', mouseOver);
        myMeme.addEventListener('mouseout', mouseOut);
        myMeme.addEventListener('click', function(evt){
            myMeme.remove();                                            //if clicked, delete it from page
        })
       
    })
}

submitMyMeme();
        

