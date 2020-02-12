import Login_PO from '../../page-objects/Login_PO';

describe('Test LOGIN page on stage.pasv', () => {
  beforeEach(function() {
    Login_PO.open();
  });
  it('Should login as ADMIN, pause, logout', () => {
    Login_PO.loginAsAdmin();
    browser.pause(2000);
    Login_PO.logoutFromApp();
  });
  it('Should login as STUDENT, pause, logout', () => {
    Login_PO.loginAsStudent();
    browser.pause(2000);
    Login_PO.logoutFromApp();
  });
});
