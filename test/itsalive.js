var chai = require('chai')
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);



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

describe("Finding number of function calls", function () {

  it("calls forEach once for each element passed in", function () {
    var spyFunc = chai.spy(function (element) {
        console.log(element);
    })
    var testArr = [4, 2, 5, 10, 42];
    testArr.forEach(spyFunc);
    expect(spyFunc).to.have.been.called.exactly(testArr.length);
  })
})
