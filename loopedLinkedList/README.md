## Goal

Given a linked list implement a function which check whether this list has a loop or not

#### Example 

 list with nodes: 1 -> 2 -> 3 -> null
 
 Answer: false
 
 Why: last node points to null, there is no loops
##
 list with nodes: 
   
                  1 -> 2 -> 3
 
                  ^         |
                  
                  |         |
                  
                  -----------
 
 Answer: true
 
 Why: last node points to the first node
