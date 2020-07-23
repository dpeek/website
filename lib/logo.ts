const RAD = Math.PI * 2;

var cells = 40;
var deltaHue = 120;

var startLight = 40;
var deltaLight = 20;

var thickness = 28;
var thickness2 = thickness * 0.5;
var radius = 44;
var saturation = 100;
var shadowSize = 18;

function drawRadial(
  scratch: HTMLCanvasElement,
  startHue: number,
  endHue: number,
  startLight: number,
  endLight: number,
  startAngle: number,
  endAngle: number
) {
  var size = (radius + thickness2) * 2;
  scratch.width = scratch.height = size;
  var size2 = size * 0.5;
  var ctx = scratch.getContext("2d");
  var deltaHue = endHue - startHue;
  var deltaLight = endLight - startLight;
  var res = Math.ceil(size / cells);
  var res2 = res * 0.5;

  var start = size2 - res * (cells * 0.5);

  ctx.clearRect(0, 0, size, size);
  ctx.globalCompositeOperation = "source-over";

  for (var y = start; y <= size; y += res) {
    for (var x = start; x <= size; x += res) {
      var dx = x - size2;
      var dy = y - size2;
      var angle = Math.atan2(dy + res2, dx + res2);
      if (dy < 0) {
        angle += RAD;
      }

      angle = angle - startAngle;
      angle = angle > RAD ? angle - RAD : angle < 0 ? angle + RAD : angle;
      angle *= RAD / Math.abs(endAngle - startAngle);
      angle /= RAD;

      var hue = startHue + angle * deltaHue;
      var light = startLight + angle * deltaLight;
      ctx.fillStyle = "hsl(" + hue + "," + saturation + "%," + light + "%)";
      ctx.fillRect(x, y, res, res);
    }
  }

  var innerRadius = radius - thickness2;
  var outerRadius = radius + thickness2;

  var d = Math.tan((1 / 16) * RAD) * innerRadius;
  var d2 = Math.sqrt(thickness * thickness + thickness * thickness);

  var flag = size2 - Math.cos(RAD * (1 / 8)) * outerRadius > thickness;

  ctx.globalCompositeOperation = "destination-in";
  ctx.beginPath();
  ctx.arc(size2, size2, outerRadius, startAngle, endAngle);
  if (startAngle == 0) {
    if (flag) ctx.lineTo(size - thickness, size2 - (d + d2));
    ctx.lineTo(size - thickness, size2 - d);
  } else {
    if (flag) ctx.lineTo(thickness, size2 + d + d2);
    ctx.lineTo(thickness, size2 + d);
  }
  ctx.arc(size2, size2, innerRadius, endAngle, startAngle, true);
  ctx.closePath();
  ctx.fill();
}

export function draw(canvas: HTMLCanvasElement, startHue: number = 0) {
  var scratch = document.createElement("canvas");
  var shadow = document.createElement("canvas");

  var ctx = canvas.getContext("2d");

  var endHue = startHue + deltaHue;
  var midHue = Math.round(startHue + deltaHue * 0.5);
  var endLight = startLight + deltaLight;
  var midLight = Math.round(startLight + deltaLight * 0.5);

  var size = canvas.width;
  var half = size * 0.5;

  thickness2 = thickness * 0.5;
  if (radius < thickness2) radius = thickness2;

  var x = radius * Math.cos(Math.PI * 0.25);
  var y = x * 2 - (radius - x) * 2;
  var y2 = y * 0.5;

  var cx1 = Math.round(half + radius);
  var cy1 = Math.round(half - y2);

  var cx2 = Math.round(half - radius);
  var cy2 = Math.round(half + y2);

  ctx.clearRect(0, 0, size, size);

  // bottom stem
  ctx.fillStyle =
    "hsl(" + startHue + "," + saturation + "%," + startLight + "%)";
  ctx.fillRect(half - thickness2, cy1, thickness, size - cy1);

  // right loop
  drawRadial(
    scratch,
    startHue,
    midHue,
    startLight,
    midLight,
    -Math.PI,
    Math.PI * 0.75
  );
  ctx.drawImage(
    scratch,
    cx1 - (radius + thickness2),
    cy1 - (radius + thickness2)
  );

  // left loop
  drawRadial(scratch, endHue, midHue, endLight, midLight, 0, Math.PI * 1.75);
  ctx.drawImage(
    scratch,
    cx2 - (radius + thickness2),
    cy2 - (radius + thickness2)
  );

  // top stem
  ctx.fillStyle = "hsl(" + endHue + "," + saturation + "%," + endLight + "%)";
  ctx.fillRect(half - thickness2, 0, thickness, cy2);

  var elements = document.querySelectorAll(".topBorder") as NodeListOf<
    HTMLElement
  >;
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.borderLeftColor =
      "hsl(" + endHue + "," + saturation + "%," + endLight + "%)";
  }

  var elements = document.querySelectorAll(".bottomBorder") as NodeListOf<
    HTMLElement
  >;
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.borderLeftColor =
      "hsl(" + startHue + "," + saturation + "%," + startLight + "%)";
  }

  var innerRadius = radius - thickness2;
  var outerRadius = radius + thickness2;

  // shadow
  shadow.width = thickness + shadowSize * 2;
  shadow.height = size;

  var ctx2 = shadow.getContext("2d");

  ctx2.save();
  ctx2.clearRect(0, 0, shadow.width, shadow.height);
  ctx2.fillStyle = "hsl(" + endHue + "," + saturation + "%," + endLight + "%)";
  ctx2.shadowColor = "rgba(0,0,0,0.8)";
  ctx2.shadowBlur = shadowSize;
  ctx2.moveTo(shadowSize + thickness, 0);
  ctx2.arc(
    shadowSize + thickness - outerRadius,
    cy2,
    outerRadius,
    0,
    Math.PI * 1
  );
  ctx2.arc(
    shadowSize + thickness - outerRadius,
    cy2,
    innerRadius,
    Math.PI * 1,
    0,
    true
  );
  ctx2.lineTo(shadowSize, 0);
  ctx2.fill();
  ctx2.restore();

  ctx2.save();
  ctx2.globalCompositeOperation = "xor";
  ctx2.fillStyle = "rgba(255,0,0,1)";
  ctx2.moveTo(shadowSize + thickness, 0);
  ctx2.arc(
    shadowSize + thickness - outerRadius,
    cy2,
    outerRadius,
    0,
    Math.PI * 1
  );
  ctx2.arc(
    shadowSize + thickness - outerRadius,
    cy2,
    innerRadius,
    Math.PI * 1,
    0,
    true
  );
  ctx2.lineTo(shadowSize, 0);
  ctx2.fill();
  ctx2.restore();

  ctx.save();
  ctx.globalCompositeOperation = "source-atop";
  ctx.drawImage(shadow, half - (thickness2 + shadowSize), 0);
  ctx.restore();

  let favicon = document.getElementById("favicon") as HTMLLinkElement;
  favicon.href = canvas.toDataURL("image/png");
}
