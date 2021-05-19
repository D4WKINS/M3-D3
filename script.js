


window.onload = ()=> {
//init

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
//EX 3
    //3) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view
    // a function that remove img from  .modal-body add an img with url passed as arg
    // we need to select all cards-btn
    // append to onclick properties a closure containing our modalImg func,
    // parametrized with url of buttons' cointaining card
    // we need to activate the modal appending "show" class to modal element

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
//Dom elements
let btns = $('main .btn')
let loadImages1Btn = btns[0]
let loadImages2Btn = btns[1]

// function assignments

loadImages1Btn.addEventListener( 'click', loadImages1 )
loadImages2Btn.addEventListener( 'click', loadImages2 )
hideBtn()
}
