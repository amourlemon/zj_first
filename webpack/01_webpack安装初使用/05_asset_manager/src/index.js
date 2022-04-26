import helloWorld from "./Hello";
import modulePng from "./assets/module.png"
import headSvg from "./assets/head.svg"
import helloTxt from "./assets/hello.txt";
import jpgImg from "./assets/Snipaste_2022-04-25_16-27-09.jpg"
import hello from "./assets/hello.css"
import styleless from './assets/style.less'

helloWorld()

const moduleImg = document.createElement('img');
moduleImg.src = modulePng;
document.body.appendChild(moduleImg);

const svgImg = document.createElement('img');
svgImg.src = headSvg
svgImg.style.cssText = 'width: 200px; height: 200px'
document.body.appendChild(svgImg)

const helloDiv = document.createElement('div');
helloDiv.innerHTML = helloTxt;
helloDiv.style.cssText = 'width: 200px; height: 200px; background: pink'
document.body.appendChild(helloDiv)
helloDiv.classList.add('.bacImg')

const jpgHtml = document.createElement('img');
jpgHtml.src = jpgImg;
document.body.appendChild(jpgHtml)


// helloDiv.classList.add(hello)
// helloDiv.classList.add(styleless)