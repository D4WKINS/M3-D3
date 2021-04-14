

let loadImagesBtn = document.querySelector("body > main > section > div > p:nth-child(3) > a.btn.btn-primary.my-2")


const loadImages = () => {

    fetch("http://www.splashbase.co/api/v1/images/latest")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(json.images);

        let images = document.querySelectorAll(".col-md-4 .shadow-sm")
        console.log(images);

        for (i = 0; i < images.length; i++) {

            let img = document.createElement("img")
            img.innerHTML =  `<img src=${json.images[i].url}>`

            images[i].firstChild.innerHTML =  `<img src=${json.images[i].url}>`

        }


    })

}
loadImagesBtn.addEventListener("click", loadImages)



//   <!--
//   PICTURE ALBUM EXERCISE

//   Starting from the current "base" bootstrap layout, implement the following exercise:

//   1) When pressing on Load Images button, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your query

// let loadImagesBtn = document.querySelector("body > main > section > div > p:nth-child(3) > a.btn.btn-primary.my-2")


// const loadImages = () => {

//     fetch("http://www.splashbase.co/api/v1/images/latest")
//     .then(response => response.json())
//     .then(payload => {
//         console.log(payload);
//         console.log(payload.images);

//         let svgs = document.querySelectorAll("svg")

//         console.log(svgs);
        
//         for (i = 1; i < svgs.length; i++) {
           

//             svgs[i].outerHTML = `<img class="firstImage" height="150" src="${payload.images[i].url}"  alt="">`
            
//         }
//     })

// }

// loadImagesBtn.addEventListener("click", loadImages);



// //   2) When pressing on Load Seconday Images, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your secondary query

// let loadSecondaryBtn = document.querySelector("body > main > section > div > p:nth-child(3) > a.btn.btn-secondary.my-2")


// const loadSecondary = () => {

//     fetch("http://www.splashbase.co/api/v1/images/search?query=laptop")
//     .then(response => response.json())
//     .then(payload => {
//         console.log(payload);
//         console.log(payload.images);

//         let svgs = document.querySelectorAll(".firstImage")

//         console.log(svgs);
        
//         for (i = 0; i < svgs.length; i++) {
//             svgs[i].outerHTML = `<img height="150" src="${payload.images[i].url}"  alt="">`
            
//         }
//     })

   
// }


// loadSecondaryBtn.addEventListener("click", loadSecondary)

//   3) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view



//   4) The Edit button should be replace with a "Hide" button. 
//   5) When the hide button is pressed, the whole picture card disappears.
//   6) Replace the "9 mins" string in the card template with the ID of the Image
  
//   [EXTRA]
//   7) Add in the "jumbotron" a search field. If there is a value there and the user press "Load Seconday Image" the API call should use the specified query as query
//   8) After every button is pressed, display in an alert for 5 seconds the result of the operation (es.: 20 images loaded)
//   9) Handle API error gracefully using alert components with the message inside
//   10) Add at the bottom of the page a carousel with "forest" images loaded by another API call

//   [EVEN MORE EXTRA]
//   11) Use the map method to create from your splashbase response object an array containing just the url strings
//   12) Use filter to modify the "forest" api call to receive only images from a source different than "unsplash"
//   13) Use the reduce method on the results array to sum up all the id numbers in a single one

//   [HINT]
//   You can replace the images src for making your pictures appear on button click or you can use template literals to re-create all the cards from scratch.
//   Use arrow functions to make some practice with them

//   API Docs: http://www.splashbase.co/api
// -->