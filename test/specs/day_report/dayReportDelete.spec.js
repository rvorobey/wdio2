import Login_PO from '../../../page-objects/Login_PO';
import DayReport_PO from '../../../page-objects/DayReport_PO';

describe('DELETING DAY REPORT', () => {
  before('Should login as ADMIN', () => {
    Login_PO.open();
    Login_PO.loginAsAdmin();
  });
  it('Should click on DIARY', () => {
    DayReport_PO.diary();
  });
  it('Should DELETE day report', () => {
    DayReport_PO.delete();
  });
  after('Should logout', () => {
    Login_PO.logoutFromApp();
  });
});
