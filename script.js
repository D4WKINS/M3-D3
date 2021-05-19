


window.onload = ()=> {

//functions
const getImages = async ( query) =>{
let data = {}
await fetch("http://www.splashbase.co/api/v1/images/search?query=" + query )
    .then( res =>  res.json() )
    .then( parsed => data = parsed)

    let imgUrlsArr = []
    data.images.forEach(  el => imgUrlsArr.push(el.url) )
    console.log( imgUrlsArr )
return imgUrlsArr
}

const loadImages1 = () =>{
    let targets = [...$('.card svg')]
    getImages("laptops").then(
        ( imgUrlsArr ) =>{
            imgUrlsArr.forEach(
                ( el , i ,arr) =>{
                   let imgNode = document.createElement('img');
                   imgNode.setAttribute("src", el )
                   try {
                       targets[i].outerHTML = imgNode.outerHTML
                   }catch (e) {}
                }
            )

        }
    )
}

//Dom elements
let loadImagesBtn = $('main .btn')[0]

// function assignments
loadImagesBtn.addEventListener( 'click', loadImages1 )

}