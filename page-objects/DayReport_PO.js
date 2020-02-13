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
  get saveButton() {
    return $('//button[contains(text(),"Save")]');
  }
  save() {
    this.saveButton.click();
  }
  get createDayReport() {
    return $('//a[@qa="create-day-report-button"]');
  }
  create() {
    this.createDayReport.click();
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
    browser.pause(10000);
    browser.pause(2000);
    this.save();
  }
};
export default new DayReport_PO();
