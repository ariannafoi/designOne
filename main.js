// Function that displays an image in full view

function fullImageView(ImgLink){
    document.querySelector("#fullImage").src = ImgLink;
    document.querySelector("#fullImageView").style.display = 'block';
}

function closeFullView(){
    document.querySelector('#fullImageView').style.display = 'none';
}