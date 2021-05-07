## Goal

Implement a class which has 2 methods:
1. ```then(cb)``` - a method with callback as an argument
2. ```resolve(value)``` - a method with value as an argument (number, string, boolean) 

This class can store multiple callbacks (which can be added with ```then``` method) like this:

```
deffered.then((value) => console.log(value));
deffered.then((value) => console.log(value + 1));
deffered.then((value) => console.log(value + 2));
```

Once you call ```resolve(value)``` - all of the stored callbacks will be fired with the passed **value** as an argument.

#### Example

Input: 
```
const d = new Deferred()

setTimeout(() => {
  d.then(value => console.log('#1 resolved!', value))
}, 2000)

setTimeout(() => {
  d.then(value => console.log('#2 resolved!', value))
}, 3000)

d.resolve('good')

```

Output:
```
#1 resolved! good (after 2 seconds from the start)
#2 resolved! good (after 3 seconds from the start)
```

### CAUTION
#### Current solution is not optimal
