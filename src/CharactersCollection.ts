import {Sorter} from './Sorter';

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super();
    }

    get len(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const dataArray = this.data.split('');
        const temp = dataArray[leftIndex];
        dataArray[leftIndex] = dataArray[rightIndex];
        dataArray[rightIndex] = temp;
        this.data = dataArray.join('');
    }
}