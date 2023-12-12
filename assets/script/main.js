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

let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHan6dler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}