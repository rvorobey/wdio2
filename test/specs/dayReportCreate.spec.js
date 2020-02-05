const { expect } = require('chai');
const { URL_LOGIN } = require('./register.data');
const { URL_DIARY } = require('./register.data');
const { selectors } = require('./register.data');

describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $('form input[name="email"]').setValue('test2020@test.com');
    $('form input[name="password"]').setValue('qwerty');
    $('form button[type="submit"]').click();
    browser.pause(1000);
  });
  it('should open Diary page', () => {
    browser.url(URL_DIARY);
    browser.pause(1000);
  });
  it('should have correct header', () => {
    const actual = $(selectors.h1).getText();
    const expected = 'Daily reports';
    expect(actual).equal(expected);
  });
  it('should click create day report', () => {
    $(selectors.createButton).click();
  });
  it('should display get last 50 message', () => {
    const actual = $(selectors.h4).getText();
    const expected = 'Get last (50) day reports';
    expect(actual).equal(expected);
  });
  it('should have correct header', () => {
    const actual = $(selectors.h1).getText();
    const expected = 'Create day report';
    expect(actual).equal(expected);
  });
  it('should check [i need help] box', () => {
    const element = $(selectors.report.help);
    element.click();
    browser.pause(1000);
  });
  it('should check [i understood everything] box', () => {
    const element = $(selectors.report.understood);
    element.click();
    browser.pause(1000);
  });
  it('should select [morale level]', () =>{
    const element = $(selectors.report.morale);
    element.selectByVisibleText('7');
    browser.pause(1000);
  });
  it('should fill out [how many hours] form', () => {
    $(selectors.report.hours).setValue('5');
  });
  it('should fill out [how was your day] field', () => {
    $(selectors.report.day).setValue('Must be 30 characters or more!!!!!!');
    browser.pause(3000);
  });
  it('should click [save] button', () => {
    $(selectors.report.save).click();
    browser.pause(3000);
  });
});
