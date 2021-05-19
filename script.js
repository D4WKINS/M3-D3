


window.onload = ()=> {

//functions
hideBtn()
const getImages = async () =>{
let data = {}
await fetch("http://www.splashbase.co/api/v1/images/search?query=" +"laptops")
    .then( res =>  res.json() )
    .then( parsed => data = parsed)
return data.images

}



function hideBtn(){
const editBtn = document.querySelectorAll('.card-body button:nth-child(2)')
const cards = document.querySelectorAll(".col-md-4 .card")
for(let i = 0; i<editBtn.length;i++){
    editBtn[i].innerText="Hide"
    editBtn[i].addEventListener("click",()=>{
            cards[i].style.visibility ="hidden"
    })
}
}
}

//Dom elements
let loadImagesBtn = $('main .btn')[0]

// function assignments
loadImagesBtn.addEventListener( 'click', getImages )
