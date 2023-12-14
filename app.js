const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("main-image");
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");

function changeImage(i) {
  let mainImageSrc = mainImage.src;
  let mainImageAlt = mainImage.alt;
  [mainImage.src, mainImage.alt] = [thumbnails[i].src, thumbnails[i].alt];
  [thumbnails[i].src, thumbnails[i].alt] = [mainImageSrc, mainImageAlt];
}

function rightButtonEvent(event) {
  rightButton.addEventListener(event, function () {
    changeImage(thumbnails.length - 1);
    lastImageSrc = thumbnails[thumbnails.length - 1].src;
    lastImagealt = thumbnails[thumbnails.length - 1].alt;
    for (let i = thumbnails.length - 1; i >= 0; i--) {
      if (i === 0) {
        [thumbnails[i].src, thumbnails[i].alt] = [lastImageSrc, lastImagealt];
      } else {
        [thumbnails[i].src, thumbnails[i].alt] = [
          thumbnails[i - 1].src,
          thumbnails[i - 1].alt,
        ];
      }
    }
  });
}

function leftButtonEvent(event) {
  leftButton.addEventListener("click", function () {
    changeImage(0);
    firstImageSrc = thumbnails[0].src;
    firstImagealt = thumbnails[0].alt;
    for (let i = 0; i < thumbnails.length; i++) {
      if (i === thumbnails.length - 1) {
        [thumbnails[i].src, thumbnails[i].alt] = [firstImageSrc, firstImagealt];
      } else {
        [thumbnails[i].src, thumbnails[i].alt] = [
          thumbnails[i + 1].src,
          thumbnails[i + 1].alt,
        ];
      }
    }
  });
}

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    changeImage(i);
  });
}

rightButtonEvent("click");
leftButtonEvent("click");
