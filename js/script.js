document.addEventListener('DOMContentLoaded', () => {
  handleTypeWriter(0);
});

function handleTypeWriter(index) {
  const text = 'Desenvolvedor Front-end e Web Designer';
  const speed = 70;

  document.getElementById('home-job-subtitle').innerHTML += text.charAt(index);

  setTimeout(() => {
    if (index < text.length - 1) {
      handleTypeWriter(index + 1);
    }
  }, speed);
}
