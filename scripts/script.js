const circle = document.getElementById('circle');
let clickcount = 1;

const setBg = () => {
  const first = Math.floor(Math.random()*255)
  const second = Math.floor(Math.random()*255)
  const third = Math.floor(Math.random()*255)
  circle.style.backgroundColor = `rgb(${first}, ${second}, ${third})`;
};

setBg();

const darkenBg = (element) => {
  
}

circle.addEventListener('click', () => {
  regex = /\d+/g
  if (clickcount == 9) {
    circle.style.background = 'rgb(0, 0, 0)'
  } else {
    const arr = circle.style.backgroundColor.match(regex)
    const first = arr[0] - 10
    const second = arr[1] - 10
    const third = arr[2] - 10
    circle.style.backgroundColor = `rgb(${first}, ${second}, ${third})`;
    clickcount += 1
  }
})