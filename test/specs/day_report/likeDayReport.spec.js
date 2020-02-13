import Login_PO from '../../../page-objects/Login_PO';
import DayReport_PO from '../../../page-objects/DayReport_PO';

describe('LIKING DAY REPORT', () => {
  before('Should login as STUDENT', () => {
    Login_PO.open();
    Login_PO.loginAsStudent();
  });
  it('Should click on DIARY', () => {
    DayReport_PO.diary();
  });
  it('Should LIKE day report', () => {
    DayReport_PO.like();
  });
  it('Should CONFIRM day report was LIKED', () => {
    DayReport_PO.liked();
  });
  after('Should logout', () => {
    Login_PO.logoutFromApp();
  });
});
