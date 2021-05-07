class Deferred {
  callbacks = [];
  status = '';
  resolvedValue = '';

  resolve(value) {
    this.status = 'resolved';
    this.resolvedValue = value;
    this.callbacks.forEach(cb => cb(value));
    this.callbacks = [];
  }

  then(callback) {
    if (this.status === 'resolved') {
      callback(this.resolvedValue);
    } else {
      this.callbacks.unshift(callback);
    }
  }
}

const d = new Deferred()

setTimeout(() => {
  d.then(value => console.log('#1 resolved!', value))
}, 2000)

setTimeout(() => {
  d.then(value => console.log('#2 resolved!', value))
}, 3000)

d.resolve('good')
