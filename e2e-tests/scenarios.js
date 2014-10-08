/* global browser,element,by */
'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /simple-example when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/simple-example");
  });


  describe('simple-example', function() {

    beforeEach(function() {
      browser.get('index.html#/simple-example');
    });


    it('should render simple-example when user navigates to /simple-example', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });
});
