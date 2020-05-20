//反转链表 输入一个链表 反转链表 并输出链表的表头
function ReverseLink(head){
    let pre = null,
        curr = head;
    while(curr !== null){
        // console.log(curr,'🍎')
        // console.log(pre,'🍌')
        let currNext = curr.next;
        curr.next = pre ? pre : null;
        pre = curr;
        curr = currNext;
    }

    // console.log(pre)
    // console.log(pre.next)
    // console.log(pre.next.next)
    // console.log(pre.next.next.next)
    return pre
}

let head = {
    value:1,
    next:{
        value:2,
        next:{
            value:3,
            next:{
                value:4,
                next:null
            }
        }
    }
}

ReverseLink(head)