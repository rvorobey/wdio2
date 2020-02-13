import Login_PO from '../../../page-objects/Login_PO';
import Groups_PO from '../../../page-objects/Groups_PO';

describe('CREATING NEW LECTURE', () => {
  before('Should login as ADMIN', () => {
    Login_PO.open();
    Login_PO.loginAsAdmin();
  });
  it('Should CREATE, VERIFY', () => {
    Groups_PO.createNewLecture();
  });
  after('Should logout', () => {
    Login_PO.logoutFromApp();
  });
});
