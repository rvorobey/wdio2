import Login_PO from '../../../page-objects/Login_PO';
import DayReport_PO from '../../../page-objects/DayReport_PO';

describe('CREATING DAY REPORT', () => {
  before('Should login as STUDENT', () => {
    Login_PO.open();
    Login_PO.loginAsStudent();
  });
  it('Should click on CREATE DAY REPORT button', () => {
    DayReport_PO.create();
  });
  it('Should fill out DAY REPORT', () => {
    DayReport_PO.fillOutReport();
    browser.pause(1000);
  });
  after('Should logout', () => {
    Login_PO.logoutFromApp();
  });
});
