let frontend = document.querySelector('a:nth-of-type(1)')


frontend.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = 'var(--highlight-secondary';
  event.target.style.color = 'var(--secondary)';
  event.target.style.borderColor = 'var(--secondary)';
});

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('dblclick', function onClick(event) {
  event.target.style.backgroundColor = 'var(--highlight-secondary';
  event.target.style.color = 'var(--secondary)';
  event.target.style.borderColor = 'var(--secondary)';
});

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('keydown', function() {
  and.classList.toggle('color-change');
});

let development = document.querySelector('a:nth-of-type(4)')
let delay;
let longpress = 1300;

development.addEventListener('mousedown', function (event) {
  delay = setTimeout(check, longpress);

  function check() {
    event.target.style.backgroundColor = 'var(--highlight-secondary';
    event.target.style.color = 'var(--secondary)';
    event.target.style.borderColor = 'var(--secondary)';
  }

}, true);

development.addEventListener('mouseup', function () {
  clearTimeout(delay);
});

development.addEventListener('mouseout', function () {
  clearTimeout(delay);
});

let sprint = document.querySelector('a:nth-of-type(5)')
sprint.addEventListener("wheel", function(event) {
  event.target.style.backgroundColor = 'var(--highlight-secondary';
  event.target.style.color = 'var(--secondary)';
  event.target.style.borderColor = 'var(--secondary)';

});


let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = 'var(--highlight-secondary';
  event.target.style.color = 'var(--secondary)';
  event.target.style.borderColor = 'var(--secondary)';
});

let the = document.querySelector('a:nth-of-type(7)')
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getCharacter(index) {
  return hexCharacters[index]
}

function generateNewColor() {
  let hexColorRep = "#"

  for (let index = 0; index < 6; index++){
    const randomPosition = Math.floor ( Math.random() * hexCharacters.length )
    hexColorRep += getCharacter( randomPosition )
  }

  return hexColorRep
}

the.addEventListener("click", (event) => {
  event.target.style.backgroundColor = generateNewColor()
})

let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}