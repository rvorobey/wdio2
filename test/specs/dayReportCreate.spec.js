const { expect } = require('chai');
const { URL_LOGIN } = require('../data/register.data');
const { URL_DIARY } = require('../data/register.data');
const { selectors } = require('../data/register.data');

describe('CREATE DAY REPORT', () => {
  before('Login as [ADMIN]', () => {
    browser.url(URL_LOGIN);
    $('form input[name="email"]').setValue('test2020@test.com');
    $('form input[name="password"]').setValue('qwerty');
    $('form button[type="submit"]').click();
    browser.pause(1000);
  });
  it('should open [DIARY] page', () => {
    browser.url(URL_DIARY);
    browser.pause(1000);
  });
  it('should have correct [HEADER]', () => {
    const actual = $(selectors.h1).getText();
    const expected = 'Daily reports';
    expect(actual).equal(expected);
  });
  it('should click [CREATE DAY REPORT]', () => {
    $(selectors.createButton).click();
  });
  it('should display get [LAST 50 MESSAGES]', () => {
    const actual = $(selectors.h4).getText();
    const expected = 'Get last (50) day reports';
    expect(actual).equal(expected);
  });
  it('should have correct [HEADER]', () => {
    const actual = $(selectors.h1).getText();
    const expected = 'Create day report';
    expect(actual).equal(expected);
  });
  it('should check [I NEED HELP] box', () => {
    const element = $(selectors.report.help);
    element.click();
    browser.pause(1000);
  });
  it('should check [I UNDERSTOOD EVERYTHING] box', () => {
    const element = $(selectors.report.understood);
    element.click();
    browser.pause(1000);
  });
  it('should select [MORALE LEVEL]', () =>{
    const element = $(selectors.report.morale);
    element.selectByVisibleText('7');
    browser.pause(1000);
  });
  it('should fill out [HOW MANY HOURS] form', () => {
    $(selectors.report.hours).setValue('5');
  });
  it('should fill out [HOW WAS YOUR DAY] field', () => {
    $(selectors.report.day).setValue('Must be 30 characters or more!!!!!!');
    browser.pause(3000);
  });
  it('should click [SAVE] button', () => {
    $(selectors.report.save).click();
    browser.pause(3000);
  });
});
