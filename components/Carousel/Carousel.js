/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator() {
  const images = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];
  let i = 0;
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent = " < ";
  rightButton.textContent = " > ";
  img.src = images[i];
  img.style.display = 'inline-block';
  img.style.zIndex = -1;

  leftButton.addEventListener('click', () => {
    i -= 1;
    if (i < 0) {
      i = 3;
    }
    img.src = images[i];
    return i;
  });

  rightButton.addEventListener('click', () => {
    i += 1;
    if (i > 3) {
      i = 0;
    }
    img.src = images[i];
    return i;
  });

  carousel.append(leftButton);
  carousel.append(img);
  carousel.append(rightButton);

  return carousel;
}

const carouselHolder = document.querySelector('.carousel-container');
carouselHolder.appendChild(carouselCreator());