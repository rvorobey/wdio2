const { expect } = require('chai');

const { selectors } = require('../data/selectors');
const { loginAsAdmin, logout } = require('../data/auth');

describe('GROUP CREATE', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(500);
  });
  it('should click top menu [GROUPS]', () => {
    $(selectors.group.groupsLink).click();
  });
  it('should click [CREATE NEW GROUP] button', () => {
    $(selectors.group.createButton).click();
    browser.pause(500);
  });
  it('should have correct [HEADER]', () => {
    const actual = $(selectors.common.h1).getText();
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
    $(selectors.common.subBtn).click();
    browser.pause(500);
  });
  it('should first item in list be equal created group title', () => {
    const actual = $(selectors.group.checkTitle).getText();
    const expected = 'Test';
    expect(actual).eq(expected);
  });
  after('AFTER', () => {
    logout();
    browser.pause(1000);
  });
});
