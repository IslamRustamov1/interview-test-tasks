## Goal

Implement a function that accepts an array of promises and returns an array of promises' results, without exiting an app due to any of the promises' rejection.

Input - array of promises

Output - array of promises' results

#### Example

Input: 
```
[
    Promise.resolve(1), 
    Promise.reject('Rejected promise'),
    Promise.resolve(3)
]
```

Output:
```
[ 1, 'Rejected promise', 3 ]
```
