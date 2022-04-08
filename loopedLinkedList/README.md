## Goal

Given a linked list, implement a function which will check whether this list has a loop or not.

```
function isListLooped(head) {
  // ...
}
```

#### Example 

 list with nodes: 1 -> 2 -> 3 -> null
 
 Answer: false
 
 Why: there are no nodes which are pointing to the previous nodes, no loop
##
 list with nodes: 
   
                  1 -> 2 -> 3
 
                  ^         |
                  
                  |         |
                  
                  -----------
 
 Answer: true
 
 Why: last node points to the first node
