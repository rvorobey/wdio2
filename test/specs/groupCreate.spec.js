const { expect } = require('chai');
const { URL_LOGIN } = require('../data/register.data');
const { selectors } = require('../data/register.data');

describe('GROUP CREATE', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $('form input[name="email"]').setValue('test2020@test.com');
    $('form input[name="password"]').setValue('qwerty');
    $('form button[type="submit"]').click();
    browser.pause(1000);
  });
  after('AFTER', () => {
    browser.pause(3000);
  });
  it('should click top menu [GROUPS]', () => {
    $(selectors.group.groupsLink).click();
  });
  it('should click [CREATE NEW GROUP] button', () => {
    $(selectors.group.createButton).click();
    browser.pause(500);
  });
  it('should have correct [HEADER]', () => {
    const actual = $(selectors.group.h1).getText();
    const expected = 'Create new Group';
    expect(actual).equal(expected);
  });
  it('should fill out [GROUP NAME]', () => {
    const el = $(selectors.group.name);
    el.setValue('Test');
  });
  it('should fill out [GROUP DESCRIPTION]', () => {
    const el = $(selectors.group.desc);
    el.setValue('Testing');
  });
  it('should select [ACCESS TYPE]', () => {
    const el = $(selectors.group.access);
    el.selectByVisibleText('Members');
  });
  it('should click [CREATE] button', () => {
    $(selectors.group.submitButton).click();
    browser.pause(500);
  });
  it('should first item in list be equal created group title', () => {
    const actual = $(selectors.group.checkTitle).getText();
    const expected = 'Test';
    expect(actual).eq(expected);
  });
});
