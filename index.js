const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj1 = document.getElementById("value1");
  animateValue(obj1, 100, 13, 5000);

  const obj2 = document.getElementById("value2");
  animateValue(obj2, 100, 5, 5000);

  const obj3 = document.getElementById("value3");
  animateValue(obj3, 100, 25, 5000);

  const obj4 = document.getElementById("value4");
  animateValue(obj4, 100, 7, 5000);

  const obj5 = document.getElementById("value5");
  animateValue(obj5, 100, 5, 5000);