class Node {
    next = null;
    value = '';

    setValue(val) {
        this.value = val;
    }

    setNext(node) {
        this.next = node;
    }
}

const node1 = new Node();
node1.setValue('1');

const node2 = new Node();
node2.setValue('2');

node1.setNext(node2);

const node3 = new Node();
node3.setValue('3');

node2.setNext(node3);

// uncomment next line for looped list
// node3.setNext(node1);

function isListLooped(head) {
    const visitedNodes = [];

    while (head !== null) {
        if (visitedNodes.includes(head)) {
            return true;
        }
        visitedNodes.push(head);
        head = head.next;
    }

    return false;
}

console.log(isListLooped(node1));

