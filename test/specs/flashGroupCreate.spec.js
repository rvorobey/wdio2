const { expect } = require('chai');
const { URL_LOGIN } = require('../data/auth');
const { selectors } = require('../data/register.data');
const { loginAsAdmin, logout } = require('../data/auth');

describe('FLASH GROUP CREATE', () => {
  before('Login as admin', () => {
    loginAsAdmin();
  });
  it('should click top menu Cards', () => {
    $(selectors.flashGroup.cardsLink).click();
  });
  it('should click button Create new FlashGroup', () => {
    $(selectors.flashGroup.newFlash).click();
    browser.pause(400);
  });
  it('should check if modal form is open', () => {
    const el = $(selectors.flashGroup.modalOpen);
    expect(el.isDisplayed()).true;
  });
  it('should check if modal form title is correct', () => {
    const actual = $(selectors.flashGroup.modalTitle).getText();
    const expected = 'Create Flash Group';
    expect(actual).eq(expected);
  });
  it('should fill out input group name', () => {
    const el = $(selectors.flashGroup.groupName);
    el.setValue('My group name 123');
  });
  it('should fill out input group description', () => {
    const el = $(selectors.flashGroup.groupDesc);
    el.setValue('My group description 123...');
  });
  it('should submit form', () => {
    const el = $(selectors.flashGroup.submitForm);
    el.click();
    browser.pause(500);
  });
  it('should first item in list be equal created group title', () => {
    const actual = $(selectors.flashGroup.checkTitle).getText();
    const expected = 'My group name 123';
    expect(actual).eq(expected);
  });
  it('should first item in list be equal created group description', () => {
    const actual = $(selectors.flashGroup.checkDesc).getText();
    const expected = 'My group description 123...';
    expect(actual).eq(expected);
  });
  it('should verify created title group is clickable', () => {
    const el = $(selectors.flashGroup.titleClickable);
    el.click();
    browser.pause(300);
  });
  it('should clicked group has correct title', () => {
    const actual = $(selectors.flashGroup.h1).getText();
    const expected = 'My group name 123';
    expect(actual).eq(expected);
  });
  after('AFTER', () => {
    logout();
    browser.pause(1000);
  });
});
