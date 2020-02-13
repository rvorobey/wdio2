import Login_PO from '../../../page-objects/Login_PO';
import Groups_PO from '../../../page-objects/Groups_PO';

describe('CREATING NEW GROUP', () => {
  before('Should login as ADMIN', () => {
    Login_PO.open();
    Login_PO.loginAsAdmin();
  });
  it('Should navigate to GROUPS, CREATE, VERIFY', () => {
    Groups_PO.createNewGroup();
  });
  after('Should logout', () => {
    Login_PO.logoutFromApp();
  });
});
