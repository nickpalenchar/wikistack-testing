var models = require('../models');
var Page = models.Page;

describe('Page Schema', function () {
    describe('Page Creation', function () {
        xit('Expects pages to have a title, urlTitle, and content', function () {});
        xit('Page creation will fail if title, urlTitle, and content are not there', function () {})
        xit('Has access to the author through the User schema' , function () {});
    });
    describe('Test Page Virtuals', function () {
    	xit('Expects /wiki/ to be preceding the urlTitle')
    	xit('Returns a 404 if an invalid path is given')
    });
    describe('Page Validation', function () {
    	xit('Expects the urlTitle to not contain any invalid characters')
    	xit('Generates a urlTitle when none is provided by user')
    })
    describe('Find Similar Method', function () {
    	xit('Finds other pages that share a tag')
    	xit('Returns id of matching pages')
    	xit('Returns the tags of a particular page')
    })
    describe('Find by Tag method', function () {
    	xit('Receives the correct tag input from user as parameter')
    	xit('Returns the pages from database that have matching tags')
    	xit('Does not return pages that do not have matching tags')
    })
});
describe('A different category', function () {});