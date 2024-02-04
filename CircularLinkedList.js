class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Add a node to the end of the circular linked list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        // If the list is empty, make the new node the head
        this.head = newNode;
        this.tail = newNode;
      } else {
        // Otherwise, add the new node to the end and update the tail
        this.tail.next = newNode;
        newNode.next = this.head; // Make the list circular
        this.tail = newNode;
      }
    }
  
    // Display the circular linked list
    display() {
      let current = this.head;
  
      if (!current) {
        console.log("Circular Linked List is empty.");
        return;
      }
  
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  }
  
  // Example usage
  const circularList = new CircularLinkedList();
  
  circularList.append(1);
  circularList.append(2);
  circularList.append(3);
  
  console.log("Circular Linked List:");
  circularList.display();
  