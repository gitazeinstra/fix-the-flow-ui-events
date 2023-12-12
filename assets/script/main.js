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


let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHan6dler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}