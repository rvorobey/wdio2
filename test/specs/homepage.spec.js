import Homepage_PO from '../../page-objects/Homepage_PO';

describe('Test HOMEPAGE on stage.pasv', () => {
  beforeEach(function() {
    Homepage_PO.open();
  });
  it('Test HOMEPAGE elements', () => {
    Homepage_PO.correctInfo();
  });
});
