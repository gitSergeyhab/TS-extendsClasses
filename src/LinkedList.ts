class LinkedNode {
    constructor(public data: number) {};
    next: LinkedNode | null = null;
}

export class LinkedList {
    head: LinkedNode | null = null;

    get len(): number {
        if (!this.head) {
            return 0;
        }

        let node = this.head;
        let len = 1;

        while(node.next) {
            len++;
            node = node.next;
        }

        return len;
    }

    at(pos: number): LinkedNode{
        if (!this.head) {
            throw new Error('LinkedList is Empty')
        }

        let node: LinkedNode | null = this.head;
        let count = 0;
        while(node) {
            if (count === pos) {
                return node;
            }
            node = node.next;
            count++;
        }
 
        throw new Error(`LinkedList is not contains ${pos}`)
        
    }

    add(data: number): void {
        const newNode = new LinkedNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let node = this.head;
        while(node.next) {
            node = node.next;
        }
        node.next = newNode;
    }

    compare (leftIndex: number, rightIndex: number): boolean {
        if (this.head) {
            return this.at(leftIndex).data > this.at(rightIndex).data;
        }
        throw new Error('LinkedList is Empty');
        
    }

    swap (leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        if (leftNode && rightNode) {
            const temp = leftNode.data;
            leftNode.data = rightNode.data;
            rightNode.data = temp;
            return;
        }
        throw new Error(`LinkedList does not contain ${leftIndex} or ${rightNode} element`);
    }

    print(): void {
        if (!this.head) {
            console.log('LinkedList is Empty')
            return;
        }

        let node: LinkedNode | null = this.head;

        while(node) {
            console.log(node.data)
            node = node.next;
        }
    }
}