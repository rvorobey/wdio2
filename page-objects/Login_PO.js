import Base_PO from './Base_PO';
const data = require('../test/data/login.data');

class Login_PO extends Base_PO {
  open() {
    super.open('https://stage.pasv.us/user/login');
  }
  get email() {
    return $('//input[@name="email"]');
  }
  get password() {
    return $('//input[@name="password"]');
  }
  get loginButton() {
    return $('//button[contains(text(),"Login")]');
  }
  login() {
    this.loginButton.click();
  }
  get toggleDropdown() {
    return $('//a[@class="dropdown-toggle nav-link"]');
  }
  get logoutButton(){
    return $('//button[contains(text(),"Logout")]');
  }
  logout() {
    this.toggleDropdown.click();
    this.logoutButton.click();
  }
  loginAsAdmin() {
    this.email.setValue(data.admin.email);
    this.password.setValue(data.admin.pass);
    this.login();
  }
  loginAsStudent() {
    this.email.setValue(data.student.email);
    this.password.setValue(data.student.pass);
    this.login();
  }
  logoutFromApp(){
    this.logout();
  }
}
export default new Login_PO();
