//输入一个链表 输出链表的倒数第k个节点
function findList(head,k){
    if(!head) return ;
    let node = head;
    // let preNode = null
    // while(node.next){
    //     let nextNode = node.next;
    //     node.next = preNode;
    //     preNode = node;
    //     node = nextNode;
    // }
    // node.next = preNode;
    let len = 0;
    while(node){
        node = node.next;
        len++
    }

    if(k > length) return

    let count = len - k;
    let newNode = head;
    while(newNode && count>0){
        newNode = newNode.next;
        count--
    }
    console.log(newNode)
    return newNode
}

let head = {
    value:1,
    next:{
        value:2,
        next:{
            value:3,
            next:{
                value:4,
                next:{
                    value:5,
                    next:{
                        value:6
                    }
                }
            }
        }
    }
}

findList(head,3)