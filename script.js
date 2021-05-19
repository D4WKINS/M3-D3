


window.onload = ()=> {

//functions
const getImages = async () =>{
let data = {}
await fetch("http://www.splashbase.co/api/v1/images/search?query=" +"laptops")
    .then( res =>  res.json() )
    .then( parsed => data = parsed)
return data.images
}
const loadImages1 = () =>{

}

//Dom elements
let loadImagesBtn = $('main .btn')[0]

// function assignments
loadImagesBtn.addEventListener( 'click', getImages )

}