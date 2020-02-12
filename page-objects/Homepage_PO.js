import Base_PO from './Base_PO';
const data = require('../test/data/homepage.data');
class Homepage_PO extends Base_PO {
  open() {
    super.open('https://stage.pasv.us');
  }
  get title() {
    return $('//span[@id="site-name"]');
  }
  get description() {
    return $('//h1');
  }
  get loginLink() {
    return $('//a[@qa="login-link"]');
  }
  get registerLink() {
    return $('//a[@qa="register-link"]');
  }
  get intro() {
    return $('//p[@class="intro"]');
  }
  get version() {
    return $('//span[@qa="app-version"]');
  }
  get slogan() {
    return $('//small[@qa="app-slogan"]');
  }
  correctInfo() {
    expect(this.title.getText()).to.contain(data.title);
    expect(this.description.getText()).to.contain(data.description);
    expect(this.loginLink.getText()).to.contain(data.login);
    expect(this.registerLink.getText()).to.contain(data.register);
    expect(this.intro.getText()).to.contain(data.intro);
    expect(this.version.getText()).to.contain(data.version);
    expect(this.slogan.getText()).to.contain(data.slogan);
  }
}
export default new Homepage_PO();
