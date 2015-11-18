var models = require('../models');
var chai = require('chai');
var chaiSpies = require('chai-spies');
var expect = chai.expect;
var Page = models.Page;
var User = models.User;
var path = require('path');
var chalk = require('chalk');

describe('Validation', function () {
    var page;
    beforeEach(function(){
        page = new Page();
    });
    describe('Page Creation', function () {
        it('creates a Page', function(){
            expect(page).to.be.instanceof(Page);
        });
        it('Expects pages to have a title, urlTitle, and content', function () {
            expect(page).to.have.property('title');
            expect(page).to.have.property('urlTitle');
            expect(page).to.have.property('content');
        });
        xit('Has access to the author through the User schema' , function () {
            expect(page.author).to.be.instanceof(User);
        });
        it('another test case from the workshop\'s model',function(done){
//            page.title = "a title";
//            page.content = "here is some content";
            page.validate(function(err){
                expect(err.errors).to.have.property('title');
                done();
            });
        });
    });
    describe('Test Page Virtuals', function () {
    	xit('Expects /wiki/ to be preceding the urlTitle', function(done){
            
        });
    	xit('Returns a 404 if an invalid path is given')
    });
    describe('Page Validation', function () {
        xit('Page creation will fail if title, urlTitle, and content are not there', function () {})
    	it('Expects the urlTitle to not contain any invalid characters',function(){
            page.urlTitle = "A_Valid_Link";
            expect(!/[\s?&=]/.test(page.urlTitle)).to.be.ok;
            page.urlTitle = "An Invalid Link";
            expect(!/[\s?&=]/.test(page.urlTitle)).to.not.be.ok;
        });
    	xit('Generates a urlTitle when none is provided by user')
    })
});
describe('A different category', function () {
    
});



//future specs
xdescribe('Find Similar Method', function () {
    xit('Finds other pages that share a tag')
    xit('Returns id of matching pages')
    xit('Returns the tags of a particular page')
})
xdescribe('Find by Tag method', function () {
    xit('Receives the correct tag input from user as parameter')
    xit('Returns the pages from database that have matching tags')
    xit('Does not return pages that do not have matching tags')
})