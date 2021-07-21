interface Sortable {
    // data: any,
    len: number,
    compare(left: number, right: number): boolean,
    swap(left: number, right: number): void,
}

export class Sorter {
    // collection: number[];

    // constructor(collection: number[]) {
    //     this.collection = collection;
    // }

    constructor(public collection: Sortable) {}

    bubbleSort(): void {

        const arr = this.collection;
        const len = arr.len;

        for (let i=0; i<len; i++) {
            for (let j=1; j<len-i; j++) {
                if (arr.compare(j-1, j)) {
                    arr.swap(j-1, j);
                }

            }
        }
    }
















    // goodSort(direct = false): void {

    //     this.collection.sort((a, b) => {
    //         if (direct) return a - b;
    //         return b - a;
    //     });
    // }

    // bubbleSort(): void {

    //     const arr = this.collection;
    //     const len = arr.length;

    //     for (let i=0; i<len; i++) {
    //         for (let j=1; j<len-i; j++) {
    //             if (arr instanceof Array) { // позволят применять методы массивов, которых нет у строк
    //                 if (arr[j] < arr[j-1]) {
    //                     [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
    //                 }
    //             }

    //         }
    //     }
    // }

    // sortString(): void {
    //     let arr = this.collection;
    //     const arrStartLen = arr.length;
    //     let newArr = '';
    //     while (arr.length > 0) {
    //         let minI = 0;
    //         for (let i=1; i<arr.length; i++) {
    //             if (typeof arr === 'string') {
    //                 if (arr[i].toLowerCase() < arr[minI].toLowerCase()) {
    //                     minI = i;
    //                 }
    //             }

    //         }
    //         newArr += arr[minI];
    //         if (typeof arr === 'string') {
    //            arr = minI < arrStartLen - 1 ? arr.slice(0, minI) + arr.slice(minI + 1) : arr.slice(0, minI); 
    //         }
            

    //     }
    //     this.collection = newArr;

    // }
};

