/**
 * @see https://www.bilibili.com/video/BV1Ks411579J
 */

const graph = {
  "A": ["B", "C"],
  "B": ["A", "C", "D"],
  "C": ["A", "B", "D", "E"],
  "D": ["B", "C", "E", "F"],
  "E": ["C", "D"],
  "F": ["D"],
}

function BFS(graph, s) {
  const queue = []
  queue.push(s)
  const seen = []
  seen.push(s)
  while(queue.length != 0) {
    vertex = queue.shift()
    console.log(`${vertex}`)
    const nodes = graph[vertex]
    for (let i = 0; i < nodes.length; i++) {
      if(!seen.includes(nodes[i])) {
        const node = nodes[i]
        queue.push(node)
        seen.push(node)
      }
    }
  }
}

console.log("BFS:")
BFS(graph, "B")

function DFS(graph, s) {
  const stack = []
  stack.push(s)
  const seen = []
  seen.push(s)
  while(stack.length != 0) {
    vertex = stack.pop()
    console.log(`${vertex}`)
    const nodes = graph[vertex]
    for (let i = 0; i < nodes.length; i++) {
      if(!seen.includes(nodes[i])) {
        const node = nodes[i]
        stack.push(node)
        seen.push(node)
      }
    }
  }
}

console.log("DFS:")
DFS(graph, "B")
