import React, { useEffect } from "react";

export default function Blob(props) {
  useEffect(() => {
    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
    var width = (canvas.width = window.innerWidth / 2),
      height = (canvas.height = window.innerHeight / 1.5);

    window.addEventListener("resize", function () {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const blob = document.querySelectorAll(".blob-circle");
    if (props.name == "1") {
      blob[0].appendChild(canvas);
      
    }
    if (props.name == "2") {
      blob[1].appendChild(canvas);
    }
    if (props.name == "3") {
      blob[2].appendChild(canvas);
    }
    if (props.name == "4") {
      blob[3].appendChild(canvas);
    }
    if (props.name == "5") {
      blob[4].appendChild(canvas);
    }
    if (props.name == "6") {
      blob[5].appendChild(canvas);
    }
    if (props.name == "7") {
      blob[6].appendChild(canvas);
    }

    var circ = (4 * (Math.sqrt(2) - 1)) / 3;
    var c = circ;

    var count = Math.PI;

    function drawBezierCircle(cx, cy, r) {
      var c;
      var offsetX = 20 * Math.sin(count);
      var offsetY = 15 * Math.cos(count * 2);
      r = r / 2;

      count += 0.01;

      ctx.translate(cx, cy); // translate to centerpoint

      ctx.beginPath();

      // top right
      c = circ + 0.2 * Math.sin(count);
      ctx.moveTo(offsetX + 0, offsetY + -r);
      ctx.bezierCurveTo(
        offsetX + c * r,
        offsetY + -r,
        offsetX + r,
        offsetY + -c * r,
        offsetX + r,
        offsetY + 0
      );

      // bottom right
      c = circ + 0.2 * Math.cos(count);
      ctx.bezierCurveTo(
        offsetX + r,
        offsetY + c * r,
        offsetX + c * r,
        offsetY + r,
        offsetX + 0,
        offsetY + r
      );

      // bottom left
      c = circ + 0.2 * Math.sin(count * 2);
      ctx.bezierCurveTo(
        offsetX + -c * r,
        offsetY + r,
        offsetX + -r,
        offsetY + c * r,
        offsetX + -r,
        offsetY + 0
      );

      // top left
      c = circ + 0.2 * Math.cos(count + 1);
      ctx.bezierCurveTo(
        offsetX + -r,
        offsetY + -c * r,
        offsetX + -c * r,
        offsetY + -r,
        offsetX + 0,
        offsetY + -r
      );

      ctx.fill();
    }

    /*
function drawBezierCircle(cx,cy,r){
  r = r / 2;

  ctx.translate(cx,cy); // translate to centerpoint

  ctx.beginPath();

  ctx.moveTo(0,-r);
  ctx.bezierCurveTo(
    c*r,-r, 
    r,-c*r, 
    r,0
  );
  ctx.strokeStyle='red';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(r,0);
  ctx.bezierCurveTo(
    r,c*r, 
    c*r,r, 
    0,r
  );
  ctx.strokeStyle='green';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0,r);
  ctx.bezierCurveTo(
    -c*r,r, 
    -r,c*r, 
    -r,0
  );
  ctx.strokeStyle='blue';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-r,0);
  ctx.bezierCurveTo(
    -r,-c*r, 
    -c*r,-r, 
    0,-r
  );
  ctx.strokeStyle='gold';
  ctx.stroke();
}*/

    function render() {
      requestAnimationFrame(render);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, width, height);

      drawBezierCircle(width / 2, height / 2, 300);
    }

    render();
  });

  return <div className="blob-circle"></div>;
}
