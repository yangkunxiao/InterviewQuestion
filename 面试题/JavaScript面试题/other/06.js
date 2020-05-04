/**
 * 深度优先遍历(depth-first-search)，DFS: 假设初始状态是图中的所以节点都为被遍历，从某个顶点开始，逐步遍历与其
 * 相连的每一个节点，然后从它的各个未被访问的节点为初始节点触发遍历其他节点
 */

function depthFirstSearch(node, nodeList = []) {
	if (node !== null) {
		nodeList.push(node)
		if (node.children) {
			for (let i = 0; i < node.children.length; i++) {
				depthFirstSearch(node.children[i], nodeList)
			}
		}
	}
	return nodeList
}
/**
 * 广度优先遍历(breadth-first-search) BFS：
 * 从图中某顶点v出发，在访问了v之后依次访问v的各个未曾访问过的邻接点，
 * 然后分别从这些邻接点出发依次访问它们的邻接点，并使得“先被访问的顶点的邻接点先于后被访问的顶点的邻接点被访问，
 * 直至图中所有已被访问的顶点的邻接点都被访问到。
 * 如果此时图中尚有顶点未被访问，则需要另选一个未曾被访问过的顶点作为新的起始点，
 * 重复上述过程，直至图中所有顶点都被访问到为止。
 */
function breadthFirstSearch(node) {
	let nodeList = [],
		stack = [];
	if (node) {
		stack.push(node)
		while (stack.length) {
			let item = stack.shift()
			nodeList.push(item)
			if (item.children) {
				let children = item.children
				for (let i = 0; i < children.length; i++) {
					stack.push(children[i])
				}
			}
		}
	}
	return nodeList
}

let node = document.getElementById('app')
console.log(depthFirstSearch(node))
console.log(breadthFirstSearch(node))
