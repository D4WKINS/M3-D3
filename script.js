


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
    let targets = [...$('.card svg')].length > 0 ? [...$('.card svg')] : [...$('.card img')]
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
const loadImages2 = () =>{
        let targets = [...$('.card svg')].length > 0 ? [...$('.card svg')] : [...$('.card img')]
        getImages("phones").then(
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
let btns = $('main .btn')
let loadImages1Btn = btns[0]
let loadImages2Btn = btns[1]

// function assignments
loadImages1Btn.addEventListener( 'click', loadImages1 )
loadImages2Btn.addEventListener( 'click', loadImages2 )
}