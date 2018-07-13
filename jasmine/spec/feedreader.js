/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the allFeeds variable has been defined and that it is not empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* this loop tests each feed has a URL defined and that the URL is not empty.*/
         it('the urls are defind and are not empty', function(){
            for(var i=0; i< allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });


        /* this loops tests each feed has a name defined and that the name is not empty.*/
         it('the names are defined and are not empty', function(){
            for(var i=0; i<allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }

         });
    });
         
    /*Describe test suite"The menu" */      
    describe('The menu', function(){
        /* this test ensures the menu element is hidden by default*/
        var body = $('body'),
            MenuIcon = $('.menu-icon-link');

        it('the menu element is hidden by default', function(){
            expect(body.hasClass('menu-hidden')).toEqual(true);
        });
        /* the menu changes visibility when the menu icon is clicked and it hides when clicked again.*/
        it('the menu displays when clicked and it hides when clicked again.', function(){
            MenuIcon.click();
            expect(body.hasClass('menu-hidden')).toEqual(false);
            MenuIcon.click();
            expect(body.hasClass('menu-hidden')).toEqual(true);

        });

    });      

     /* Describe test suite"Initial Entries" */    
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, done);
        });
        /* this test ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.*/
        it('define if entry has more than 0 entries after the loadFeed function is called and completes its work', function(){
            expect($('.feed').has('.entry').length).toBeGreaterThan(0);
        
        });
    });          
    /*Describe test suite "New Feed Selection"*/
    describe('New Feed Selection', function() {
        var initialFeedHtml;

        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeedHtml = $('.feed').html();
                loadFeed(1, done);
            });
        });
        /* test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.*/
        it('changes its loaded content', function() {
            expect($('.feed').html()).not.toBe(initialFeedHtml);
        });
    }); 
}());
