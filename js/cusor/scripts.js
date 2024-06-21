// this is cool
const cursor =document.querySelector(".cursor")
var timeout;
// cusrsor movement

document.addEventListener("mousemove",(e)=>{
    let x=e.pageX;
    let y=e.pageY;

    cursor.style.top=y+'px';
    cursor.style.left=x+'px';
    cursor.style.display='block';

    function mouseStopped(){
        cursor.style.display ='none';
    }
    //hide animation
    clearTimeout(timeout)
    timeout =setTimeout(mouseStopped,1000);

});

//stop animation of the screen

document.addEventListener("mouseout",()=>{
    cursor.style.display ='none';
})

const search=()=>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const storeItems =document.getElementById("product-list");
    const product =document.querySelectorAll(".product");
    const pname = storeItems.getElementsByTagName("h2");

    for(var i =0 ;i<pname.length;i++){
        let match =product[i].getElementsByTagName('h2')[0];

        if(match){
          let textvalue= match.textContent || match.innerHTML;

          if(textvalue.toUpperCase().indexOf(searchbox)>-1){
            product[i].style.display ="";
          }else{
            product[i].style.display ="none";
          }
        }
    }
}