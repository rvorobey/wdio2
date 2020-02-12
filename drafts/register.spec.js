const { expect } = require('chai');

const { URL_REGISTER, URL_LOGIN } = require('./auth');
const { selectors } = require('./selectors');
const { newUser, page } = require('./register.data.draft');

describe('Register page', () => {
  before(() => {
    browser.url(URL_REGISTER);
  });
  it('should have correct title', () => {
    const actual = browser.getTitle();
    const expected = page.reg.title;
    expect(actual).equal(expected);
  });
  it('should have correct header', () => {
    const actual = $(selectors.common.h1).getText();
    const expected = page.reg.h1;
    expect(actual).equal(expected);
  });
  it('should have correct description', () => {
    const actual = $(selectors.common.p).getText();
    const expected = page.reg.desc;
    expect(actual).equal(expected);
  });
  it('should have correct button text', () => {
    const actual = $(selectors.common.subBtn).getText();
    const expected = page.reg.btnTxt;
    expect(actual).equal(expected);
  });
  it('should fill in first name field', () => {
    const element = $(selectors.register.firstNameInput);
    element.setValue(newUser.firstName);
  });
  it('should fill in last name field', () => {
    const element = $(selectors.register.lastNameInput);
    element.setValue(newUser.lastName);
  });
  it('should fill phone № field', () => {
    const element = $(selectors.register.phoneInput);
    element.setValue(newUser.phone);
  });
  it('should fill email field', () => {
    const element = $(selectors.common.emailInput);
    element.setValue(newUser.email);
  });
  it('should fill password field', () => {
    const element = $(selectors.common.passInput);
    element.setValue(newUser.password);
  });
  it('should fill about you', () => {
    const element = $(selectors.register.aboutInput);
    element.setValue(newUser.about);
  });
  it('should fill goals', () => {
    const element = $(selectors.register.goalsInput);
    element.setValue(newUser.goals);
  });
  it('should select English level', () => {
    const element = $(selectors.register.engLevelInput);
    element.selectByVisibleText(newUser.engLevel);
  });
  it('should click submit button', () => {
    const element = $(selectors.common.subBtn);
    element.click();
    browser.pause(2000);
  });
});
describe('Login page', () => {
  it('should have correct title', () => {
    browser.url(URL_LOGIN);
    const actual = browser.getTitle();
    const expected = page.login.title;
    expect(actual).equal(expected);
  });
  it('should have correct header', () => {
    const actual = $(selectors.common.h1).getText();
    const expected = page.login.h1;
    expect(actual).equal(expected);
  });
  it('should fill in email field', () => {
    const element = $(selectors.common.emailInput);
    element.setValue(newUser.email);
  });
  it('should fill in password field', () => {
    const element = $(selectors.common.passInput);
    element.setValue(newUser.password);
  });
  it('should click login button', () => {
    const element = $(selectors.common.subBtn);
    element.click();
    browser.pause(1500);
  });
});
describe('Confirmation page', () => {
  it('should have correct title', () => {
    const actual = browser.getTitle();
    const expected = page.conf.title;
    expect(actual).equal(expected);
  });
  it('should have correct header', () => {
    const actual = $(selectors.common.h1).getText();
    const expected = page.conf.h1;
    expect(actual).equal(expected);
  });
  it('should have correct first and last name in link', () => {
    const actual = $(selectors.common.li).getText();
    const expected = `${newUser.firstName} ${newUser.lastName}`;
    expect(actual).equal(expected);
    browser.pause(1500);
  });
});
