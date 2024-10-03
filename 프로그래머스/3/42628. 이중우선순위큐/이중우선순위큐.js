class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp(index) {
        index = index || this.heap.length - 1;
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] < this.heap[index]) {
                [this.heap[parent], this.heap[index]] = [
                    this.heap[index],
                    this.heap[parent],
                ];
                index = parent;
            } else break;
        }
    }

    extractMax() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }
        return max;
    }

    sinkDown(index) {
        index = index || 0;
        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let largest = index;
            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }
            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }
            if (largest !== index) {
                [this.heap[largest], this.heap[index]] = [
                    this.heap[index],
                    this.heap[largest],
                ];
                index = largest;
            } else break;
        }
    }

    delete(value) {
        const index = this.heap.indexOf(value);
        if (index === -1) return;
        const last = this.heap.pop();
        if (index === this.heap.length) return;
        this.heap[index] = last;
        this.bubbleUp(index);
        this.sinkDown(index);
    }

    peek() {
        return this.heap[0] ?? 0;
    }

    print(name) {
        console.log(name, this.heap);
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function solution(operations) {
    const maxHeap = new MaxHeap();
    const minHeap = new MaxHeap();
    operations.forEach((op) => {
        const [a, b] = op.split(" ");
        const value = +b;
        if (a === "D") {
            if (maxHeap.isEmpty() || minHeap.isEmpty()) return; // 힙이 비어 있을 때 무시

            if (value < 0) {
                const min = -1 * minHeap.extractMax();
                maxHeap.delete(min);
            } else {
                const max = maxHeap.extractMax();
                minHeap.delete(-1 * max);
            }
        } else {
            maxHeap.insert(value);
            minHeap.insert(-1 * value);
        }
    });

    return [maxHeap.peek(), minHeap.peek() * -1];
}
