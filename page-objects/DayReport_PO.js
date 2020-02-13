import Base_PO from './Base_PO';
const data = require('../test/data/dayReport.data');

class DayReport_PO extends Base_PO {
  open() {
    super.open('https://stage.pasv.us/diary/create');
  }
  get header() {
    return $('//h1');
  }
  get marks() {
    return $('//div[contains(@class, "mb-2")]//strong');
  }
  get needHelp() {
    return $('//input[@id="input-0"]');
  }
  get understoodEverything() {
    return $('//input[@id="input-1"]');
  }
  get helpedClassmates() {
    return $('//input[@id="input-2"]');
  }
  get watchedLectures() {
    return $('//input[@id="input-3"]');
  }
  get readDocumentation() {
    return $('//input[@id="input-4"]');
  }
  get codePractice() {
    return $('//input[@id="input-5"]');
  }
  get quizPractice() {
    return $('//input[@id="input-6"]');
  }
  get interviewPreparation() {
    return $('//input[@id="input-7"]');
  }
  get recruiterPhoneCall() {
    return $('//input[@id="input-8"]');
  }
  get interviewTechScreen() {
    return $('//input[@id="input-9"]');
  }
  get interviewOnsite() {
    return $('//input[@id="input-10"]');
  }
  get jobOffer() {
    return $('//input[@id="input-11"]');
  }
  get moraleLevel() {
    return $('//select[@name="morale"]');
  }
  get howManyHours() {
    return $('//input[@name="hours"]');
  }
  get howWasYourDay() {
    return $('//textarea[@name="description"]');
  }
  save() {
    browser.$('//button[contains(text(),"Save")]').click();
    browser.pause(1000);
  }
  create() {
    browser.$('//a[@qa="create-day-report-button"]').click();
    browser.pause(1000);
  }
  diary() {
    browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]').click();
    browser.pause(1000);
  }
  approve() {
    browser.$('//div[@qa="day-report-item-0"]//button[@qa="approve-button"]').click();
    browser.pause(1000);
  }
  approved() {
    browser.$('//div[@qa="day-report-item-0"]//span[@qa="approved-mark"]').isExisting();
    browser.pause(500);
  }
  fillOutReport() {
    expect(this.header.getText()).to.contain(data.header);
    expect(this.marks.getText()).to.contain(data.marks);
    this.needHelp.click();
    this.understoodEverything.click();
    this.helpedClassmates.click();
    this.watchedLectures.click();
    this.readDocumentation.click();
    this.moraleLevel.selectByVisibleText(data.morale);
    this.howManyHours.setValue(data.hours);
    this.howWasYourDay.setValue(data.generateRandomString());
    this.save();
  }
}
export default new DayReport_PO();
