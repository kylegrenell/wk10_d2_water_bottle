var waterBottle = {
     volume: 0,
     fill: function(){
          volume = 100;
          return volume;
     },
     drink: function(){
          volume -= 10;
          if (volume < 0){
               volume = 0;
               console.log("The bottle is empty, you can't drink any more!")
          }
          return volume;
     },
     empty: function(){
          volume = 0;
          return volume;
     }
}

module.exports = waterBottle;