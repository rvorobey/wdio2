import Base_PO from './Base_PO';
const data = require('../test/data/groups.data');

class Groups_PO extends Base_PO {
  open() {
    super.open('https://stage.pasv.us/group/create')
  }
  groupsLink() {
    browser.$('//div[@id="site-menu"]//a[@qa="groups-link"]').click();
    browser.pause(2000);
  }
  get header() {
    return $('//h1');
  }
  createNewGroupButton() {
    browser.$('//a[@qa="create-group-button"]').click();
    browser.pause(1000);
  }
  get groupName() {
    return $('//input[@name="name"]');
  }
  get accessType() {
    return $('//select[@name="accessType"]');
  }
  get groupDescription() {
    return $('//input[@name="description"]');
  }
  createButton() {
    browser.$('//button[contains(text(),"Create")]').click();
    browser.pause(1000);
  }
  get checkTitle() {
    return $('//div[@qa="group-list"]//h4/a');
  }
  editButton() {
    browser.$('//a[@qa="edit-button"]').click();
    browser.pause(1000);
  }
  get editGroupDescription() {
    return $('//textarea[@name="description"]');
  }
  get slackWebhook () {
    return $('//input[@name="slackWebhook"]');
  }
  get addQuiz() {
    return $('//input[@id="searchQuiz"]');
  }
  addButton() {
    browser.$('//button[contains(text(),"Add")]').click();
    browser.pause(1000);
  }
  editSaveButton() {
    browser.$('//button[contains(text(),"Save")]').click();
    browser.pause(1000);
  }
  createNewGroup() {
    this.groupsLink();
    expect(this.header.getText()).to.contain(data.header);
    this.createNewGroupButton();
    this.groupName.setValue(data.name);
    this.accessType.selectByVisibleText(data.access);
    this.groupDescription.setValue(data.description);
    this.createButton();
    expect(this.checkTitle.getText()).to.contain(data.name);
  }
  editNewGroup() {
    this.groupsLink();
    expect(this.header.getText()).to.contain(data.header);
    this.checkTitle.click();
    browser.pause(1000);
    this.editButton();
    this.groupName.setValue(`${data.name} 2`);
    this.editGroupDescription.setValue(`${data.description} EDITED!`);
    this.accessType.selectByVisibleText(data.access2);
    this.slackWebhook.setValue(data.slack);
    this.addQuiz.setValue('a');
    browser.pause(2000);
    this.addButton();
    this.editSaveButton();
    expect(this.checkTitle.getText()).to.contain(`${data.name} 2`);
  }
}
export default new Groups_PO();
