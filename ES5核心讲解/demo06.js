function yideng() {
    console.log(1);
}
(function() {
    if (false) {
        function yideng() {
            console.log(2);
        }
    }
    yideng(); //yideng is not a function 
})();