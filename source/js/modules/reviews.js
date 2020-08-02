const reviews = () => {
  const nameAvtor = document.querySelector('.reviews__avtor');
  const dignityAvtor = document.querySelector('.reviews__item--dignity');
  const disadvantageAvtor = document.querySelector('.reviews__item--disadvantage');
  const commentAvtor = document.querySelector('.reviews__item--comment');
  const form = document.querySelector('.pop-up__form');
  const nameInput = form.querySelector('#name');
  const dignityInput = form.querySelector('#advantages');
  const disadvantageInput = form.querySelector('#disadvantage');
  const commentInput = form.querySelector('#comment');
  const buttonSubmit = document.querySelector('.pop-up__button');
  const cacheFields = {};

  // [...form.elements].forEach(element => {
  //   if (element.tagName !== 'BUTTON') {
  //     element.addEventListener('change', e => {

  //     })
  //   }
  // })



  form.addEventListener('submit', function () {

  })

  form.addEventListener('change', function (e) {
    if (e.target.tagName !== 'BUTTON') {
      // let fields = [...form.querySelectorAll('input, textarea')];
      //       let json = JSON.stringify(fields.map(e => [e.name, e.value]));
      //       localStorage.setItem(form.id, json);
      //   document.addEventListener("DOMContentLoaded", () => {
      //       let values = JSON.parse(localStorage.getItem(form.id));
      //       for (let i = 0; i < values.length; i++)
      //           form[values[i][0]].value = values[i][1];
      //   });
      cacheFields[e.target.id] = e.target.value;
      let json = JSON.stringify(cacheFields);
      localStorage.setItem(form.id, json);
    }
  });
}
export default reviews;
