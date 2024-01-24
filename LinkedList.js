class Node{
    constructor(data,next = null)
    {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    insetAtFirst(data)
    {
        this.head = new Node(data,this.head);
        this.size++;
        return;
    }
    insertAtLast(data)
    {
        let node = new Node(data);
        let current;
        if(!this.head)
        {
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next)
            {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAtIndex(data,index)
    {
        if(index > 0 && index > this.size)
        {
            return;
        }

        if(index === 0)
        {
            this.insetAtFirst(data);
            return;
        }

        let node = new Node(data);
        let current, prev;
        let count = 0;

        current = this.head;

        while(count<index)
        {
            prev = current;
            count++;
            current = current.next;
        }
        prev.next = node;
        node.next = current;
        this.size++;
    }
    insertLinedListAtIndex(ll2,index)
    {
        if(index<0 || index > this.size)
        {
            return;
        }
        let current = this.head;
        if(index === 0)
        {
           let currentLl2 = ll2.head;
           while(currentLl2.next)
           {
            currentLl2 = currentLl2.next;
           }
           currentLl2.next = current;
           this.head = ll2.head;
        }
        else{
           let start,end;
           start = this.head;
           console.log("start",start);
           let count = 0;
           while(count<index)
           {
            start = start.next;
            count++;
           }
           end = start.next;
           console.log("start and end value", start, end);
           let current; 
           current = ll2.head;
           console.log(current);
            while(current.next)
            {
                current = current.next;
            }
            start.next = ll2.head;
            current.next = end;
           
        }
        this.size += ll2.size;
    }
    removeIndexAt(index)
    {
        if(index>0 && index>this.size)
        {
            return;
        }
        console.log("Index",index);
        let current = this.head;
        let end;
        let count = 0;
        while(count<index-1)
        {
            current = current.next;
            count++;
        }
        end = current.next;
        current.next = end.next;
        this.size--;
    }
    removeSegment(startIndex, endIndex) {
        if (startIndex < 0 || endIndex >= this.size ) {
            return;
        }

        if(startIndex === endIndex)
        {
            let index = startIndex;
            this.removeIndexAt(index);
            return;
        }
    
        if (startIndex === 0) {
            let current = this.head;
            let count = 0;
            while (count < endIndex) {
                current = current.next;
                count++;
            }
            this.head = current.next;
        } else {
            let start = this.head;
            let count = 0;
            while (count < startIndex-1) {
                start = start.next;
                count++;
            }
            let end = start.next;
            while (count < endIndex - 1) {
                end = end.next;
                count++;
            }
            start.next = end.next;
        }
        this.size -= (endIndex - startIndex + 1);
    }

    // reverse the linked list

    // reverse the linked list in iterative way 
        reverseLinkedList()
        {
            let prev = null;
            let current = this.head;
            let forward;
            while(current!== null)
            {
                forward = current.next;
                current.next = prev;
                prev = current;
                current = forward;
            }
            this.head = prev;
            return prev;
        }

    // reverse the linked list in recursive way 
    reverse1(head) {
        if (head === null || head.next === null) {
            return head;
        }
    
        let chotahead = this.reverse1(head.next);
        head.next.next = head;  // Corrected assignment
        head.next = null;
        return chotahead;
    }     
    
    reverse(head, prev, current) {
        // base case
        if (current === null) {
            this.head = prev;
            return;
        }
    
        let forward = current.next;
        current.next = prev;
        this.reverse(this.head, current, forward);
    }
    
    reverseLinkedListRecursive() {
        // let prev = null;
        // let current = this.head;
        // this.reverse(this.head, prev, current);
        // return this.head;
        this.head = this.reverse1(this.head);
    }    
    // reverseSegmentLinkedList()
    // {

    // }
    printLinkedlist()
    {
        let current = this.head;
        while(current)
        {
            console.log("This is the Linked List",current.data);
            current = current.next;
        }
    }
}
var ll = new LinkedList();
var ll2 = new LinkedList();
ll.insetAtFirst(30);
ll.insetAtFirst(20);
ll.insertAtLast(40);
ll.insertAtIndex(90,1);
ll2.insertAtLast(1);
ll2.insertAtLast(2);
ll2.insertAtLast(3);
ll.printLinkedlist();
console.log("+++++++++++++");
ll2.printLinkedlist();
console.log("+++++++++");
ll.insertLinedListAtIndex(ll2,2);
ll.printLinkedlist();
console.log("=================")
ll.removeIndexAt(1);
ll.printLinkedlist();
console.log("++++++++++++++++++++");
ll.removeSegment(2,4);
ll.printLinkedlist();
console.log("++++++++++++++++++++++");
// ll.reverseLinkedList();
ll.reverseLinkedListRecursive();
ll.printLinkedlist();
console.log("====================");
