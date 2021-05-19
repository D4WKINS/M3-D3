

// window.onload =()=>{
// getImages()
// }

window.onload = ()=> {
const getImages = async () =>{
let data = await fetch("http://www.splashbase.co/api/v1/images/search?query=" +"laptops")
data =  data.json()
console.log(data)
}
const loadImages1 = () =>{

}
//load to UI
$('main .btn')[0].addEventListener(
'click', getImages
)

}