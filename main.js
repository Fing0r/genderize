import {
  GENDER_UI
} from "./view.js";

const createUrl = name => `${GENDER_UI.API_URL}?name=${name.value.trim()}`;
const getJson = url => fetch(url).then(response => response.json());
const renderResult = (name, gender) => (GENDER_UI.RESULT.value = `${name.value} - ${gender}`)
const showError = (err) => GENDER_UI.ERROR.textContent = err.message;

function showResult(json) {
  if (json.gender) {
    GENDER_UI.ERROR.textContent = ''
    return renderResult(GENDER_UI.NAME, json.gender)
  }
  GENDER_UI.RESULT.value = ''
  throw new Error('Имя отсутствует или некорректное');
}

GENDER_UI.FORM.addEventListener('submit', function (e) {
  e.preventDefault()

  getJson(createUrl(GENDER_UI.NAME))
    .then(json => showResult(json))
    .catch(err => showError(err))
})