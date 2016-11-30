var bottle = require('../water_bottle');
var assert = require('assert');

describe('Water bottle', function(){
     it("should be empty at start", function(){
          assert.equal(0, bottle.volume);
     })
});

describe('Water bottle', function(){
     it("should go to 100 when full", function(){
          assert.equal(100, bottle.fill());
     })
});

describe('Water bottle', function(){
     it("drink should decrease volume by 10", function(){
          bottle.fill();
          bottle.drink();
          assert.equal(80, bottle.drink());
     })
});

describe('Water bottle', function(){
     it("should go to 0 when empty", function(){
          assert.equal(0, bottle.empty());
     })
});

describe('Water bottle volume', function(){
     it("should not go below 0", function(){
          bottle.empty();
          bottle.drink();
          assert.equal(0, bottle.volume);
     })
});

