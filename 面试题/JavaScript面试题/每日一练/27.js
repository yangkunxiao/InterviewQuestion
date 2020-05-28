//反转链表 输出新链表的表头
function receiverList(head){
    if(!head) return ;
    let node = head;
    let preNode = null;
    while(node.next){
        //保存当前节点的下一个节点
        let nextNode = node.next;
        //将当前节点的next指向上一个节点
        node.next = preNode;
        //将上一个节点赋值为当前节点
        preNode = node;
        //将当前节点赋值为下一个节点
        node = nextNode;
    }
    //全部反转之后， 此时node执行之前的最后一个节点 此时需将其next指向preNode
    node.next = preNode;
    return node
}