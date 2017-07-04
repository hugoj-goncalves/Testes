describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(false);
  });
});

describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://www.github.com');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});