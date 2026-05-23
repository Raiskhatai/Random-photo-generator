let img_container = document.querySelector(".image-container");
let loadbtn=document.querySelector(".btn");

loadbtn.addEventListener("click",function(){
   
     num_of_images=10;
    call_images();
})


function call_images(){

      for(i=0;i<num_of_images;i++)
    {
         let image=document.createElement("img");
    image.src=`https://picsum.photos/300/300?random=${Math.floor(Math.random()*2000)}`;
    console.log(image,image.src);
    img_container.append(image);
    }
    
}
