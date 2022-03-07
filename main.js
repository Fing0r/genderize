import {
  GENDER_UI,
  createUrl,
  getJson,
  renderResult,
  showError,
  showResult,
} from "./view.js";


GENDER_UI.FORM.addEventListener('submit', function (e) {
  e.preventDefault()

  getJson(createUrl(GENDER_UI.NAME))
    .then(json => showResult(json))
    .catch(err => showError(err))
})