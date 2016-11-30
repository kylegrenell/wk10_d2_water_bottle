var bottle = require('./water_bottle');

var athlete = {
     hydration: 100,
     distance: 0,
     bottle: bottle,
     run: function(){
          if (this.hydration > 0){
          this.hydration -= 10;
          this.distance +=10;
          }else {
               this.hydration = 0;
               console.log("Drink something now, you're dehydrated!")
          }
     },
     drinkWater: function(){
          this.bottle.drink();
          this.hydration += 10;
     }
}

module.exports = athlete;