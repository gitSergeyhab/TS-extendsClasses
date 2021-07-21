export abstract class Sorter {

    abstract len: number;
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

    bubbleSort(): void {
        for (let i=0; i<this.len; i++) {
            for (let j=1; j<this.len-i; j++) {
                if (this.compare(j-1, j)) {
                    this.swap(j-1, j);
                }
            }
        }
    }
};
