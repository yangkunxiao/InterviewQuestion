// var s = [];
// var arr = s;
// for (var i = 0; i < 3; i++) {
//     var pusher = {
//             value: "item" + i
//         },
//         tmp;
//     if (i !== 2) {
//         tmp = []
//         pusher.children = tmp;
//     }
//     console.log(pusher)
//     arr.push(pusher);
//     arr = tmp;
// }
// console.log(s[0]);

function f(index) {
    if (index > 3) {
        return
    }
    console.log(index)
    f(index + 1);
    f(index + 1)
}
f(0)