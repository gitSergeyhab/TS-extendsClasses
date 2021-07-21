export class CharactersCollection {
    constructor(public data: string) {}

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