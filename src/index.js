import _ from 'lodash';
import './style.css';
import img from './iphone-x-pic.jpg';
import printMe from './print.js';
function component(){
	var element = document.createElement('div');
	element.innerHTML = _.join(['hello', 'webpack!!'], ' ');
	element.classList.add('hello');
	var myImg = new Image();
	myImg.src = img;
	element.appendChild(myImg);
	var btn = document.createElement('button');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);
	return element;
}
document.body.appendChild(component());
