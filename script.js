const imageurl=["https://cdn.pixabay.com/photo/2019/08/06/23/52/elephant-4389434_960_720.jpg","https://cdn.pixabay.com/photo/2020/02/24/06/15/castle-4875322_960_720.jpg", "https://cdn.pixabay.com/photo/2020/02/20/20/27/portugal-4865786_960_720.jpg", "https://cdn.pixabay.com/photo/2020/02/24/06/15/castle-4875322_960_720.jpg", "https://cdn.pixabay.com/photo/2019/06/29/04/00/fisherman-4305368_960_720.jpg"];

let img = document.getElementById('gallery');
var index=0;

function swapImage(){
  if(index==imageurl.length-1){
    img.setAttribute("src",imageurl[index])
    index=0;
  }
  else{
    img.setAttribute("src",imageurl[index]);
    index++;
  }
  
}
setInterval(swapImage,1000);
