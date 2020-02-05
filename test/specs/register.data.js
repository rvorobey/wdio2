const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const URL_DIARY = `${HOST}/diary`;

const email = Math.random()+'test1@test.com';

const user = {
  firstName: 'John',
  lastName: 'Smith',
  password: 'qwerty12345',
  phone: '14021234567',
  about: 'about',
  goals: 'goals',
  engLevel: 'Zero'
};

const regPage = {
  title: 'Progress Monitor',
  h1: 'User Register',
  description: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit'
};

const loginPage = {
  title: 'Progress Monitor',
  h1: 'User Login'
};

const confPage = {
  title: 'Progress Monitor',
  h1: 'You are a new user'
};

const selectors = {
  h1: 'h1',
  description: 'p',
  submitButton: 'form button[type="submit"]',
  firstNameInput: 'form input[name="firstName"]',
  lastNameInput: 'form input[name="lastName"]',
  phoneInput: 'form input[name="phone"]',
  emailInput: 'form input[name="email"]',
  passwordInput: 'form input[name="password"]',
  aboutInput: 'form textarea[name="about"]',
  goalsInput: 'form textarea[name="goals"]',
  engLevelInput: 'form select[name="englishLevel"]',
  link: 'li',
  createButton: 'a.btn.btn-secondary',
  h4: 'h4',
  report: {
    morale: 'select.form-control',
    hours: 'input.form-control',
    day: 'textarea.form-control',
    help: '#input-0',
    understood: '#input-1',
    save: 'form button[type="submit"]',
  },
  flashGroup: {
    cardsLink: '//div[@id="site-menu"]//a[@qa="cards-link"]',
    newFlash: '//button[@qa="flash-create-new-group"]',
    modalOpen: '//div[contains(@class, "sidepanel")]',
    modalTitle: '//div[contains(@class, "sidepanel")]//*[@class="modal-title"]',
    groupName: '//div[contains(@class, "sidepanel")]//input[@name="name"]',
    groupDesc: '//div[contains(@class, "sidepanel")]//input[@name="description"]',
    submitForm: '//div[contains(@class, "sidepanel")]//button[@type="submit"]',
    checkTitle: '//div[@qa="flash-group-list "]//h4/a',
    checkDesc: '//div[@qa="flash-group-list "]//div[@qa="description"]',
    titleClickable: '//div[@qa="flash-group-list "]//h4/a',
    h1: '//h1'
  }
};

module.exports = {
  URL_REGISTER, URL_LOGIN, URL_DIARY, email, user, regPage, loginPage, confPage, selectors
};
