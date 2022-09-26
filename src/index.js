// console.log(111111)
import './index.html';
import './style/scss/style.scss';
import {mult, sum} from './modules/calc';
import icon from "./public/img/icon.png"

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = icon;

imgWrap.append(img);
img.width = 300;

console.log(mult(2,4))
console.log(sum(2,4))