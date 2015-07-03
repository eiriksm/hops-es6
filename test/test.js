require('should');
import Hop from '../src';

describe('Module functionality', function() {
  it('Should export the expected type', function() {
    Hop.should.be.instanceOf(Function);
  });
  it('Should construct and hold the expected value', () => {
    new Hop('test', 12).getAlpha().should.equal(12);
  });
  it('Should construct with alpha for known hops', () => {
    new Hop('Centennial').getAlpha().should.equal(10);
  });
  it('Should know about some hops', () => {
    var h = new Hop('Centennial');
    h.getAlpha().should.equal(h.getKnownHops().centennial);
    h.getKnownHops().bravo.should.equal(13);
  });
});
