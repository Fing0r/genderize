export const GENDER_UI = {
  FORM:document.querySelector('.gender'),
  BTN: document.querySelector('.gender__btn'),
  NAME:document.querySelector('.gender__name'),
  API_URL: 'https://api.genderize.io',
  RESULT: document.querySelector('.gender__result'),
  ERROR: document.querySelector('.gender__error'),
}

export const createUrl = name => `${GENDER_UI.API_URL}?name=${name.value.trim()}`;
export const getJson = url => fetch(url).then(response => response.json());
export const renderResult = (name, gender) => (GENDER_UI.RESULT.value = `${name.value} - ${gender}`)
export const showError = (err) => GENDER_UI.ERROR.textContent = err.message;

export function showResult(json) {
  if (json.gender) {
    GENDER_UI.ERROR.textContent = ''
    return renderResult(GENDER_UI.NAME, json.gender)
  }
  GENDER_UI.RESULT.value = ''
  throw new Error('Имя отсутствует или некорректное');
}