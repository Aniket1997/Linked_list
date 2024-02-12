// Node class for doubly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DoublyLinkedList class
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a new node to the end of the doubly linked list
    addNode(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Display the doubly linked list in forward order
    displayForward() {
        let forwardStr = "";
        let current = this.head;
        while (current) {
            forwardStr += current.data + " ";
            current = current.next;
        }
        console.log(forwardStr.trim());
    }

    // Display the doubly linked list in reverse order
    displayReverse() {
        let reverseStr = "";
        let current = this.tail;
        while (current) {
            reverseStr += current.data + " ";
            current = current.prev;
        }
        console.log(reverseStr.trim());
    }

    // Display the doubly linked list as arrays
    displayList() {
        let forwardStr = "";
        let reverseStr = "";
        
        // Display in forward order and build a string
        let currentForward = this.head;
        while (currentForward) {
            forwardStr += currentForward.data + " ";
            currentForward = currentForward.next;
        }

        // Display in reverse order and build another string
        let currentReverse = this.tail;
        while (currentReverse) {
            reverseStr += currentReverse.data + " ";
            currentReverse = currentReverse.prev;
        }

        console.log("Forward Order:", forwardStr.trim());
        console.log("Reverse Order:", reverseStr.trim());
    }
}

// Example usage
const doublyList = new DoublyLinkedList();

// Add nodes to the doubly linked list
doublyList.addNode(1);
doublyList.addNode(2);
doublyList.addNode(3);
doublyList.addNode(4);
doublyList.addNode(5);

// Display the doubly linked list as arrays
doublyList.displayList();
