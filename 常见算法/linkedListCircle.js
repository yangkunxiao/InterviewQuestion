//证明一个链表是有环链表
function isLinkedListCircle(node){
    let array = [];
    let flag = false;
    while(node.next){
        if(array.includes(node.val)){
            flag = true
            break
        }else {
            array.push(node.val)
            node = node.next;
        }
    }
    return flag
}

let node = {
    val:1
}

let node2 = {
    val:2
}

let node3 = {
    val:3
}

let node4 = {
    val:4
}

node.next = node2;


node2.next = node3;


node3.next = node4;

console.log(isLinkedListCircle(node))