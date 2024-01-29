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
        if(current === null)
        {
            this.head = prev;
            return;
        }
        let forward = current.next;
        current.next = prev;
        this.reverse(current,forward);
    }
    
    reverseLinkedListRecursive() {
        // let prev = null;
        // let current = this.head;
        // this.reverse(this.head, prev, current);
        // return this.head;
        this.head = this.reverse1(this.head);
    }  
    // reverse in k group 
    
    // Add this method to your LinkedList class
    reverseKGroup(k) {
        this.head = this.reverseKGroupHelper(this.head, k);
    }

    // Helper method to reverse k nodes in a group
    reverseKGroupHelper(head, k) {
        if (head === null) {
            return null;
        }

        let count = 0;
        let current = head;
        let prev = null;
        let next = null;

        // Count the number of nodes in this group
        let temp = head;
        while (temp !== null && count < k) {
            temp = temp.next;
            count++;
        }

        // If the group has k nodes, reverse them
        if (count === k) {
            count = 0;
            while (current !== null && count < k) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
                count++;
            }

            // Connect the reversed group to the next reversed group
            if (next !== null) {
                head.next = this.reverseKGroupHelper(next, k);
            }

            // 'prev' is the new head of the reversed group
            return prev;
        }

        // If the group doesn't have k nodes, leave it unchanged
        return head;
    }
    reverseBetween(m, n) {
        let current = this.head;
        let prev = null;
        let count = 0;

        // Move to the starting node of the sublist
        while (i < m) {
            prev = current;
            current = current.next;
            count++;
        }

        let rtail = current;
        let rhead = null;

        // Reverse the sublist from m to n
        while (count <= n) {
            let next = current.next;
            current.next = rhead;
            rhead = current;
            current = next;
            count++;
        }

        // Connect the reversed sublist to the original list
        rtail.next = current;

        // If prev is not null, it means the sublist starts from a position other than the head
        if (prev !== null) {
            prev.next = rhead;
        } else {
            // If prev is null, the sublist starts from the head, so update the head
            this.head = rhead;
        }
    }
    getLength(){
        let current = this.head;
        let count=0;
        while(current)
        {
            current = current.next;
            count++;
        }
        return count;
    }
    getMidLinkedList()
    {
        //single pointer approch
        // var len = this.getLength();
        // console.log("Lenght of the linked list",len);
        // let ans = Math.floor(len/2);
        // let count = 0;
        // let current=this.head;
        // while(count<ans)
        // {
        //     current = current.next;
        //     count++;
        // }
        // return current;

        //2 pointer approch
        if(this.head === null || this.head.next === null)
        {
            return this.head;
        }
        if(this.head.next.next === null)
        {
            return this.head.next;
        }

        let slow = this.head;
        let fast = this.head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }

    //Floyd's Cycle Detection Algorithm to detect in the linked list the cycle is present or not and if present then where it is ?


    printLinkedlist()
    {
        let current = this.head;
        while(current)
        {
            console.log("This is the Linked List",current.data);
            current = current.next;
        }
    }
    // printCircularLinkedList() {
    //     let current = this.head;
    //     do {
    //         console.log("Node Data:", current.data);
    //         current = current.next;
    //     } while (current !== this.head);
    // }
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
ll.reverseLinkedList();
ll.reverseLinkedListRecursive();
ll.printLinkedlist();
console.log(ll.getLength());
var mid = ll.getMidLinkedList();
console.log("Mid of the Linked List",mid);
console.log("====================");
ll.insertAtLast(90);
ll.reverseKGroup(2); // Reverse the linked list in groups of 2
ll.printLinkedlist();
console.log("++++++++++++++++++++++++++++")
ll.insertAtLast(50);
ll.printLinkedlist();
console.log("++++++++++++++++++++++");
ll.reverseBetween(2,4);
ll.printLinkedlist();
// ll.reverseSegmentLinkedList(1,2);
// ll.printLinkedlist();
// ll.head.next.next.next.next = ll.head.next;
// ll.printCircularLinkedList();
console.log("++++++++++++++++++++++++++++")
