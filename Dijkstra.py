""" 
@see https://www.bilibili.com/video/BV1ts41157Sy/
"""

import heapq

graph = {
  "A": [{"B":5}, {"C":1}],
  "B": [{"A":5}, {"C":2}, {"D":1}],
  "C": [{"A":1}, {"B":2}, {"D":4}, {"E":6}],
  "D": [{"B":1}, {"C":4}, {"E":3}, {"F":8}],
  "E": [{"C":8}, {"D":3}],
  "F": [{"D":6}],
}

def Dijkstra(graph, s):
  pqueue = []
  seen = set()
  heapq.heappush(pqueue, (0, s))
  while (len(pqueue) > 0):
    pair = heapq.heappop(pqueue)
    dist = pair[0]
    vertex = pair[1]
    seen.add(vertex)
    nodes = graph[vertex].keys()
    for w in nodes:
      if w not in seen:
        
