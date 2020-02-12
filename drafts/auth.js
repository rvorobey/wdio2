const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;

const { selectors } = require('./selectors');

const user = {
  admin: {
    email: 'test2020@test.com',
    pass: 'qwerty'
  },
  student: {
    email: 'test4040@test.com',
    pass: '12345'
  }
};

function loginAsAdmin () {
  browser.url(URL_LOGIN);
  const el = $(selectors.common.emailInput);
  el.setValue(user.admin.email);
  $(selectors.common.passInput).setValue(user.admin.pass);
  $(selectors.common.subBtn).click();
  browser.pause(1000);
}

function loginAsStudent () {
  browser.url(URL_LOGIN);
  const el = $(selectors.common.emailInput);
  el.setValue(user.student.email);
  $(selectors.common.passInput).setValue(user.student.pass);
  $(selectors.common.subBtn).click();
  browser.pause(1000);
}

function logout(){
  $(selectors.common.toggle).click();
  $(selectors.common.logoutBtn).click();
}

module.exports = {URL_REGISTER, URL_LOGIN, loginAsAdmin, loginAsStudent, logout};
