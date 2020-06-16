
console.log('blip or two')
const bodyElement = document.querySelector('body')
let makeMainElement = document.createElement('main')
bodyElement.append(makeMainElement)

const mainElement = document.querySelector('main')

//targetBody and create main tag
// let mainElement = document.querySelector('main')
// const bodyElement = document.querySelector('body')
// let kata1Info = document.createElement("div")
// let createMainElement = document.createElement("main");
const removebutton = document.createElement('button')
let buttonText = document.createTextNode("Remove.")
removebutton.appendChild(buttonText)
bodyElement.append(removebutton)
//append to the body
// bodyElement.append(createMainElement)
// bodyElement.append(mainElement)
// mainElement.append('<h3>ttttt</h3>')

//create button and image and append to main tag
const imageFromPlace = document.createElement('img')
imageFromPlace.src = "https://influencermarketinghub.com/wp-content/uploads/2019/06/Animated-GIF-with-Background.gif"
mainElement.append(imageFromPlace)

//website link
let newlink = document.createElement('a');
mainElement.append(newlink)
// const site = document.createElement('a href')
// let linkTextNode = document.createElement('h3')
newlink.href = "https://www.google.com"
newlink.append('take me to Google!!!!!')
// linkTextNode.append(site)
//create clickHandler for button
// mainElement.append('<button id="myBtn"></button>')
// document.main("myBtn").addEventListener("click", displayDate);

//
// .document.textNode = appendMessage
//
//  'if' clicked then remove 'main' tag
// const removeButton1 = document.createElement('button')
// mainElement.append(removeButton)

// let mainElement = document.querySelector("main")
// let heading1  = document.createElement("h1")


//create remove button
removebutton.addEventListener('click', function(){
    mainElement.remove(mainElement)
}
)






//--END OF LINE