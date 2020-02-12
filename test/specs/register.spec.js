import Register_PO from '../../page-objects/Register_PO';

describe('Test REGISTER page on stage.pasv', () => {
  beforeEach(function() {
    Register_PO.open();
  });
  it('Submit all information via the registration page', () => {
    Register_PO.successfulRegistration();
  });
});
