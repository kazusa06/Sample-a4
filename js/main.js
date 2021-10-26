window.onload = () => {
  const CANVAS = document.querySelector('canvas');
  const CTX = CANVAS.getContext('2d');

  CTX.fillStyle = 'red';
  CTX.fillRect(100,100,100,100);
}