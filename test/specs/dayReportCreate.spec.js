const { expect } = require('chai');

const { selectors } = require('../data/selectors');
const { loginAsAdmin, loginAsStudent, logout } = require('../data/auth');

describe('CREATE DAY REPORT', () => {
  before('Login as [STUDENT]', () => {
    loginAsStudent();
    browser.pause(1000);
  });
  it('should click top menu [DIARY]', () => {
    $(selectors.report.diaryLink).click();
    browser.pause(500);
  });
  it('should have correct [HEADER]', () => {
    const actual = $(selectors.common.h1).getText();
    const expected = 'Daily reports';
    expect(actual).equal(expected);
  });
  it('should click [CREATE DAY REPORT]', () => {
    $(selectors.report.createButton).click();
  });
  it('should display get [LAST 50 MESSAGES]', () => {
    const actual = $(selectors.common.h4).getText();
    const expected = 'Get last (50) day reports';
    expect(actual).equal(expected);
  });
  it('should have correct [HEADER]', () => {
    const actual = $(selectors.common.h1).getText();
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
    $(selectors.common.subBtn).click();
    browser.pause(3000);
  });
  after('AFTER', () => {
    logout();
    browser.pause(1000);
  });
});
