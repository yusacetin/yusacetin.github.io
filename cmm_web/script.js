/*
This file is part of Circular Modular Multiplication Web.

Circular Modular Multiplication Web is free software: you can redistribute it
and/or modify it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or (at your option)
any later version.

Circular Modular Multiplication Web is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Circular Modular 
Multiplication Web. If not, see <https://www.gnu.org/licenses/>.
*/

window.onload = function loaded(){init()};
class Point{
    constructor(setx, sety){
        this.x = setx;
        this.y = sety;
    }
}

var canvas;
var cx;

var mouseDown;
var mouseNow;
var moving = false;

var circleCenter;
var dx = 0;
var dy = 0;

var r = 350;
var dotR = 1;
var noOfPts = 180;
var mul = 19;
var lineSize = 0.05;
var circumWidth = 3;
const zoomCoef = 10;
var zoomC = r/zoomCoef;

let ptsinput = document.getElementById("no-of-pts-input");
let mulinput = document.getElementById("mul-input");
let linwidthinput = document.getElementById("line-width-input");

var angle;
var aboveCenter;

let rotation = 0;

function init(){
    initObjects();
    initCanvas();
    setFirstR();
    initVars();
    
    drawAll(circleCenter);
}

function polar2cartesian(center, polar_pos){
    let dx = polar_pos.x * Math.cos(polar_pos.y);
    let dy = polar_pos.x * Math.sin(polar_pos.y);
    let x = center.x + dx;
    let y = center.y + dy;
    return new Point(x, y);
}

function get_cart_pos(index, da){
    let azimuth = index * da + rotation;
    let polar_pos = new Point(r, azimuth);
    let cart_pos = polar2cartesian(circleCenter, polar_pos);
    return cart_pos;
}

function setFirstR(){
    var base = (canvas.width > canvas.height) ? canvas.height : canvas.width;
    r = (base/2)*(9/10);
    circleCenter = new Point(canvas.width/2,canvas.height/2);
}

function initCanvas() {
    canvas.setAttribute("width",window.innerWidth);
    canvas.setAttribute("height",window.innerHeight);
    document.defaultView.addEventListener('resize', resizeCanvas);
}

function initObjects(){
    canvas = document.getElementById("canvas");
    cx = canvas.getContext("2d");
    canvas.addEventListener('mousedown', e=>{downListener(e)});
    canvas.addEventListener('mousemove', e=>{moveListener(e)})
    canvas.addEventListener('mouseup', e=>{upListener(e)});
    canvas.addEventListener("wheel", e=>{wheel(e)});
    ptsinput = document.getElementById("no-of-pts-input");
    mulinput = document.getElementById("mul-input");
    linwidthinput = document.getElementById("line-width-input");
    ptsinput.value = noOfPts;
    mulinput.value = mul;
    linwidthinput.value = lineSize;
    ptsinput.addEventListener("change", updateCircle);
    mulinput.addEventListener("change", updateCircle);
    linwidthinput.addEventListener("change", updateCircle);
}

function wheel(e){
    let oldr = r;
    r += e.deltaY*-0.01*zoomC;
    zoomC = r/zoomCoef;

    let cx = e.clientX; let cy = e.clientY;
    let olddx = Math.abs(cx-circleCenter.x);
    let olddy = Math.abs(cy - circleCenter.y);

    let distx = r*olddx/oldr-olddx;
    let disty = r*olddy/oldr-olddy;
    
    if (cx > circleCenter.x){
        circleCenter.x -= distx;
    }else{
        circleCenter.x += distx;
    }
    if (cy > circleCenter.y){
        circleCenter.y -= disty;
    }else{
        circleCenter.y += disty;
    }

    drawAll(circleCenter);
}

function rotate(c){
    var pangle = 3/2*Math.PI;
    var bangle = (2*Math.PI/noOfPts); // + ((2*Math.PI)%dotc);
    var dangle = bangle*c + pangle;

    var newx = r * Math.cos(dangle);
    var newy = r * Math.sin(dangle);
    return new Point((newx), (newy));
}

function initVars(){
    cx.strokeStyle = "#F0F0F0";
    cx.fillStyle = "#F0F0F0";
    cx.lineWidth = lineSize;
    
    angle = 2*Math.PI/noOfPts;
    aboveCenter = new Point(circleCenter.x, circleCenter.y-r);
}

function downListener(e){
    cx.strokeStyle = "#F0F0F0";
    mouseDown = new Point(e.clientX, e.clientY);
    moving = true;
}

function moveListener(e){
    if (!moving){
        return;
    }
    mouseNow = new Point(e.clientX, e.clientY);
    takeCareOfDrag();
    mouseDown = new Point(e.clientX, e.clientY);
}

function upListener(e){
    moving = false;
}

function takeCareOfDrag(){
    dx += mouseNow.x - mouseDown.x;
    dy += mouseNow.y - mouseDown.y;
    circleCenter.x += mouseNow.x - mouseDown.x;
    circleCenter.y += mouseNow.y - mouseDown.y;
    drawAll(circleCenter);
}

function resizeCanvas(){
    console.log("canvas resized")
    canvas.setAttribute("width", window.innerWidth);
    canvas.setAttribute("height", window.innerHeight);
    initVars();
    drawAll(circleCenter);
}

function clearCanvas(){
    cx.clearRect(0, 0, canvas.width, canvas.height);
    cx.beginPath();
}

function drawCirclesAroundCircumference(center){
    for (let i=0; i<noOfPts; i++){
        cx.beginPath();
        let da = 2*Math.PI/noOfPts;
        let cart_pos = get_cart_pos(i, da);
        cx.arc(cart_pos.x, cart_pos.y, dotR, 0, 2*Math.PI, false);
        cx.fill();
        cx.stroke();
    } 
}

function drawCircumferece(center){
    cx.lineWidth = circumWidth;
    cx.beginPath();
    cx.arc(center.x, center.y, r, 2*Math.PI, false);
    cx.stroke();
    cx.lineWidth = lineSize;
}

function drawAll(center){
    clearCanvas();
    drawLines();
    drawCirclesAroundCircumference(center);
    drawCircumferece(center);
}

function resetValues(){
    initVars();
}

function updateCircle(){
    if (document.getElementById("autorefreshbox").checked){
        buttonUpdateCircle();
    }
}

function buttonUpdateCircle(){
    noOfPts = ptsinput.value;
    mul = mulinput.value;
    lineSize = linwidthinput.value;
    resetValues();
    drawAll(circleCenter);
}

function drawLines(){
    let da = 2*Math.PI/noOfPts;
    for (let i=0; i<noOfPts; i++){
        let origin = get_cart_pos(i, da);
        let target = get_cart_pos((i*mul)%noOfPts, da);
        drawALine(origin, target);
    }
}

function drawALine(origin, target){
    cx.moveTo(origin.x,origin.y);
    cx.lineTo(target.x,target.y);
    cx.stroke();
}
