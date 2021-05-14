## Goal

Given two strings A and B, determine if B is a non-continous substring of B

#### Example 

 A: abcdefg
 
 B: beg
 
 Answer: YES
 
 Why: a**B**cd**E**f**G** - **BEG**
##
 A: abcadebabdeb
 
 B: baabd
 
 Answer: YES
 
 Why: a**B**c**A**deb**ADB**eb - **BAADB**
##
 A: abcadebabdeb
 
 B: baabbd
 
 Answer: NO 
 
 Why: a**B**c**A**deb**A**_**BD**eb - **BAABBD** (**B** is missing)
