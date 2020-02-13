import Login_PO from '../../../page-objects/Login_PO';
import DayReport_PO from '../../../page-objects/DayReport_PO';

describe('APPROVING DAY REPORT', () => {
  before('Should login as ADMIN', () => {
    Login_PO.open();
    Login_PO.loginAsAdmin();
  });
  it('Should click on DIARY', () => {
    DayReport_PO.diary();
  });
  it('Should APPROVE day report', () => {
    DayReport_PO.approve();
  });
  it('Should CONFIRM day report was approved', () => {
    DayReport_PO.approved();
  });
  after('Should logout', () => {
    Login_PO.logoutFromApp();
  });
});
