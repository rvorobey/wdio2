import Homepage_PO from '../../page-objects/Homepage_PO';

describe('Test HOMEPAGE on stage.pasv', () => {
  beforeEach(function() {
    Homepage_PO.open();
  });
  it('Check title, description, buttons and slogan', () => {
    Homepage_PO.correctInfo();
  });
});
