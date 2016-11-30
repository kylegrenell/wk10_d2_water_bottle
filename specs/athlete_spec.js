var athlete = require('../athlete');
var bottle = require('../water_bottle');
var assert = require('assert');

describe('Athlete', function(){
     it("should start hydration at 100", function(){
          assert.equal(100, athlete.hydration);
     })
});


describe('Athlete', function(){
     it("should start distance at 0", function(){
          assert.equal(0, athlete.distance);
     })
});


describe('Running', function(){
     it("should increase distance by 10 and descrease hydration by 10", function(){
          athlete.run();
          assert.equal(90, athlete.hydration);
          assert.equal(10, athlete.distance);
     })
});


describe('Athlete', function(){
     it("should stop running when hydrations reaches 0", function(){
          athlete.hydration = 0;
          athlete.distance = 50;
          athlete.run();
          assert.equal(50, athlete.distance);
          assert.equal(0, athlete.hydration);
     })
});


describe('Athlete', function(){
     it("should be able to drink from the bottle and increase hydration", function(){
          bottle.fill();
          athlete.hydration = 100;
          athlete.distance = 0;
          athlete.run();
          athlete.drinkWater();
          assert.equal(100, athlete.hydration);
          assert.equal(10, athlete.distance);
     })
});



