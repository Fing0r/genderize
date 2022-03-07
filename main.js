import {
  GENDER_UI
} from "./view.js";

function renderResult(name, gender) {
  GENDER_UI.RESULT.value = `${name.value} - ${gender}`
}

function createUrl(name) {
  return `${GENDER_UI.API_URL}?name=${name.value.trim()}`;
}

function getJson(name) {
  const url = createUrl(name);
  
  return fetch(url).then(response => response.json())
}

GENDER_UI.FORM.addEventListener('submit', function (e) {
  e.preventDefault()

  getJson(GENDER_UI.NAME)
    .then(json => {
      if (json.gender) {
        GENDER_UI.ERROR.textContent = ''
        return renderResult(GENDER_UI.NAME, json.gender)
      }
      GENDER_UI.RESULT.value = ''
      throw new Error('Имя отсутствует или некорректное');
    })
    .catch(err => GENDER_UI.ERROR.textContent = err.message)
})