require('should');
import Hop from '../src';

describe('Module functionality', function() {
  it('Should export the expected type', function() {
    Hop.should.be.instanceOf(Function);
  });
});
