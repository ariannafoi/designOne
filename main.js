// Function that displays an image in full view

function fullImageView(ImgLink){
    document.querySelector("#fullImage").src = ImgLink;
    
    document.querySelector("#fullImageView").style.display = 'flex';
    document.querySelector("#fullImageView").style.alignItems = 'center';
    document.querySelector("#fullImageView").style.justifyContent = 'center';
}

function closeFullView(){
    document.querySelector('#fullImageView').style.display = 'none';
}