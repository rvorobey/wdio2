import Base_PO from './Base_PO';
const data = require('../test/data/register.data');

class Register_PO extends Base_PO {
  open() {
    super.open('https://stage.pasv.us/user/register');
  }
  get firstName() {
    return $('//input[@name="firstName"]');
  }
  get lastName() {
    return $('//input[@name="lastName"]');
  }
  get phoneNumber() {
    return $('//input[@name="phone"]');
  }
  get emailAddress() {
    return $('//input[@name="email"]');
  }
  get password() {
    return $('//input[@name="password"]');
  }
  get about() {
    return $('//textarea[@name="about"]');
  }
  get myGoals() {
    return $('//textarea[@name="goals"]');
  }
  get englishLevel() {
    return $('//select[@name="englishLevel"]');
  }
  get submitButton() {
    return $('//button[@type="submit"]');
  }
  submit() {
    this.submitButton.click();
  }
  get loginHeader() {
    return $('//h1');
  }
  successfulRegistration() {
    this.firstName.waitForDisplayed(3000);
    this.firstName.setValue(data.firstName);
    this.lastName.setValue(data.lastName);
    this.phoneNumber.setValue(data.phone);
    this.emailAddress.setValue(data.generateRandomEmailAddress());
    this.password.setValue(data.password);
    this.about.setValue(data.generateRandomString());
    this.myGoals.setValue(data.generateRandomString());
    this.englishLevel.selectByVisibleText(data.engLevel);
    this.submit();
    browser.pause(2000);
    expect(this.loginHeader.getText()).to.contain('User Login');
  }
}
export default new Register_PO();
