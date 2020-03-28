//二叉树求各个根结点到叶子节点的和

//定义二叉树
function TreeNode (val){
    this.val = val;
    this.left = this.right = null;
}

const getPathSum = (root) => {
    let result = [];
    function getSum(node,val){
        //如果只存在根结点
        if(node.left === null && node.right === null){
            result.push(node.val + val)
        }
        //如果存在左子树
        if(node.left !== null){
            getSum(node.left,node.val + val)
        }
        // 如果存在右子树
        if(node.right !== null){
            getSum(node.right,node.val + val)
        }
    }
    getSum(root,0);
    let res = result.reduce((preVal,curVal) => {
        return preVal + curVal
    },0);
    return res
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

const res = getPathSum(root);
console.log(res)