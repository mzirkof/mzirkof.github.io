
// The body Tag Element of the web Page
let body=document.getElementsByTagName('body')[0]

// Root Folder of The windows Code
const rootLocation='./scripts/Windows/'
const parentId='windows'


const cssFile=`<link rel="stylesheet" href="${rootLocation}styles/windows_styles.css">`

let cssSet=false


function setLocalWindow(name,content,icon='') {

    // name=name.toLowerCase(name)

    
    // Adding the css file to DOM tree
    addNodeChild(parentId,cssFile)
    // if(!cssSet) {
    //     addNodeChild(parentId,cssFile)
    //     cssSet=true
    // }

    let n=''
    for (let index = 0; index < name.length; index++) {
        const element = name[index];
        n+=(element===' ')? '_':element
    }
    const child=`<section id='${n}'></section>`
    addNodeChild(parentId,child)
    let windowContainer = document.getElementById(n)
    showWindow(windowContainer,name,content)
    
}



let windowBtn= document.getElementById('p0')
windowBtn.style.backgroundImage="url('./../images/Snapshoot\ Portfolio.svg')"

windowBtn.addEventListener('click',()=>{
    setLocalWindow('Project name',siteB)
})



let windowBtn1= document.getElementById('p1')
// windowBtn1.style.backgroundImage="url('./../images/Snapshoot\ Portfolio.svg')"
windowBtn1.style.backgroundImage="url('./../images/Icons/ttt.png')"
          
// const ttt = `<div class="section_container" id="mainTttGame"></div>`
windowBtn1.addEventListener('click',()=>{
    setLocalWindow('TicTacToe Game',tttGame)
})

