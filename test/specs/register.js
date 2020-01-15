const { expect } = require('chai');
const email = Math.random()+'test1@test.com';
const firstName = 'John';
const lastName = 'Smith';
const phone = '14021234567';
const password = 'qwerty12345';

describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/register');
    });
    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });
    it('should have correct title', () => {
        const actual = $('h1').getText();
        const expected = 'User Register';
        expect(actual).equal(expected);
    });
    it('should have correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
        browser.pause(500);
    });
    it('should have correct button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    });
    it('should fill First Name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);
        browser.pause(500);
    });
    it('should fill Last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(lastName);
        browser.pause(500);
    });
    it('should fill phone № field', () => {
        const element = $('form input[name="phone"]');
        element.setValue(phone);
        browser.pause(500);
    });
    it('should fill email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(500);
    });
    it('should fill password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
        browser.pause(500);
    });
    it('should fill about you', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('asdfk  lsdfl lsdf kljsdlf lsdf ljsdf ljsdgklj');
        browser.pause(500);
    });
    it('should fill goals', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('asdfk  lsdfl lsdf kljsdlf lsdf ljsdf ljsdgklj');
        browser.pause(500);
    });
    it('should select English level', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Zero');
        browser.pause(500);
    });
    it('should click submit button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

    it('should have the right heading at Login page', () => {
        const actual = $('h1').getText();
        const expected = 'User Login';
        expect(actual).equal(expected);
    });
    it('should fill email on Login page', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(2000)
    });
    it('should fill password on Login page', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
        browser.pause(2000)
    });
    it('should click login button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(3000);
    });
    it('should have the right heading at New User page', () => {
        const actual = $('h1').getText();
        const expected = 'You are a new user';
        expect(actual).equal(expected);
    });
    it('should have firstName and lastName in link', () => {
        const actual = $('li').getText();
        const expected = `${firstName} ${lastName}`;
        expect(actual).equal(expected);
        browser.pause(3000);
    });
});