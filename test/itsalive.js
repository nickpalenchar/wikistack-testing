var chai = require('chai');
var expect = chai.expect;

describe("The add function", function(){
  
  it("adds 2 and 2", function(){
    expect((2+2)).to.be.equal(4);
  });
});

describe("setTimeout 1000", function(){
  
  it("lasts approx 1000ms",function(done){
    var time = Date.now();
    setTimeout(function(){
      time = Date.now() - time;
      done();
    });
    expect(time).to.be.at.least(999);
  })
})