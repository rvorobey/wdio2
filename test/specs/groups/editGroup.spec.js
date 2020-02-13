import Login_PO from '../../../page-objects/Login_PO';
import Groups_PO from '../../../page-objects/Groups_PO';

describe('EDITING NEW GROUP', () => {
  before('Should login as ADMIN', () => {
    Login_PO.open();
    Login_PO.loginAsAdmin();
  });
  it('Should EDIT', () => {
    Groups_PO.editNewGroup();
  });
  after('Should logout', () => {
    Login_PO.logoutFromApp();
  });
});
