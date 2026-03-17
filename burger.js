document.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById("asciicanvas");
  const ctx = canvas.getContext("2d");

  const size = 220;
  canvas.width = size;
  canvas.height = size;

  const chars = " .:-=+*#";
  const fontSize = 8;
  const cols = Math.floor(size / fontSize);
  const rows = Math.floor(size / fontSize);

  let angle = 0;

  ctx.font = `${fontSize}px monospace`;
  ctx.textBaseline = "top";

  function draw() {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, size, size);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {

        const cx = x - cols / 2;
        const cy = y - rows / 2;

        const dist = Math.sqrt(cx ** 2 + cy ** 2);
        const theta = Math.atan2(cy, cx);

        const wave = Math.sin(dist * 0.3 + angle * 2);
        const radial = Math.cos(theta * 6 + angle);

        const value = (wave + radial) * 0.5;

        const index = Math.floor(
          ((value + 1) / 2) * (chars.length - 1)
        );

        ctx.fillStyle = "white";
        ctx.fillText(chars[index], x * fontSize, y * fontSize);
      }
    }

    angle += 0.02;
    requestAnimationFrame(draw);
  }

  draw();
});