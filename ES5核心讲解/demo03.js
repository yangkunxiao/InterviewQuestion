var num = 1;

function yideng() {
    "use strict";
    console.log(this.num++); //this => undefined
}

function yideng2() {
    console.log(++this.num); //2 num=>2
}

(function() {
    "use strict";
    yideng2();
})();

yideng(); //TypeError Cannot read property num of undefined;