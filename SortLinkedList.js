class Node 
{
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
    // sort linke list of 0s, 1s and 2s of a linked list
    sortLinkedList()
    {
        let zeroCount = 0;
        let oneCount = 0;
        let twoCount = 0;

        let temp = this.head;
        while(temp !== null)
        {
            if(temp.data === 0)
            {
                zeroCount++; 
            }
            else if(temp.data === 1)
            {
                oneCount++;
            }
            else if(temp.data === 2)
            {
                twoCount++;
            }

            temp = temp.next;
        }

        temp = this.head;

        while(temp !== null)
        {
            if(zeroCount !== 0)
            {
                temp.data = 0;
                zeroCount--;
            }
            else if(oneCount !== 0)
            {
                temp.data = 1;
                oneCount--;
            }
            else if(twoCount !== 0)
            {
                temp.data = 2;
                twoCount--;
            }
            temp = temp.next;
        }
        return this.head;
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

var arr = [0,1,0,2,1,2,0]
var ll = new LinkedList();
for(let i=0;i<arr.length;i++)
{
    ll.insertAtLast(arr[i]);
}
ll.printLinkedlist();
console.log("++++++++++++++++");
ll.sortLinkedList();
ll.printLinkedlist();