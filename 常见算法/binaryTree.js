//二叉树遍历

//二叉树声明定义如下
function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
} 

//1、前序遍历  根节点  --> 左子树 -->  右子树
const preorderTraversal = (root) => {
    let result = [];
    function pushNode(node){
        if(node !== null){
            result.push(node.val);
            if(node.left !== null){
                pushNode(node.left)
            }
            if(node.right !== null){
                pushNode(node.right)
            }
        }
    }
    pushNode(root)
    return result
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

const res = preorderTraversal(root);
console.log(res)

//中序遍历  左子树 -->  根节点  --> 右子树
const inorderTraversal = (root) => {
    let result = [];
    function pushNode(node){
        if(node !== null){
            if(node.left !== null){
                pushNode(node.left)
            }
            result.push(node.val);
            if(node.right !== null){
                pushNode(node.right)
            }
        }
    }
    pushNode(root);
    return result
}

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

const res2 = inorderTraversal(root2);
console.log(res2)


//后续遍历 左子树 -->  右子树 -->  根节点
const postorderTraversal = (root) => {
    let result = [];
    function pushNode(node){
        if(node !== null){
            if(node.left !== null){
                pushNode(node.left)
            }
            if(node.right !== null){
                pushNode(node.right)
            }
            result.push(node.val);
        }
    }
    pushNode(root);
    return result
}

const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
root3.right = new TreeNode(3);

const res3 = postorderTraversal(root3);
console.log(res3)