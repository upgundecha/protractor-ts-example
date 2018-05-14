import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Protractor with typescript typings', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user', () => {
    element(by.model('yourName')).sendKeys('Unmesh');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Unmesh!');
  });

  it('should list todos', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
});