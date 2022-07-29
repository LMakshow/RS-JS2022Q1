export default function navButtonsEvents() {
  function toggleNavButtons() {
    document.querySelector('.btn-garage').classList.toggle('btn-active');
    document.querySelector('.btn-winners').classList.toggle('btn-active');
    document.querySelector('.garage').classList.toggle('hide');
    document.querySelector('.winners').classList.toggle('hide');
  }
  document.querySelector('.btn-garage').addEventListener('click', () => {
    toggleNavButtons();
  });
  document.querySelector('.btn-winners').addEventListener('click', () => {
    toggleNavButtons();
  });
}
