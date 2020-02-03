const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;

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
  link: 'li'
};

module.exports = {
  URL_REGISTER, URL_LOGIN, email, user, regPage, loginPage, confPage, selectors
};
