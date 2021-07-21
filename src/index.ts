import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';
import {LinkedList} from './LinkedList';

const numbersCollection = new NumbersCollection([77, 3, -2, 23, 2, 89])
const sorter = new Sorter(numbersCollection)
// console.log(sorter);
// sorter.bubbleSort();
// console.log(sorter, 1);
// console.log(numbersCollection.data, numbersCollection.len);

const charactersCollection = new CharactersCollection('i will kill you and eat');
const sorter2 = new Sorter(charactersCollection);
// console.log(sorter2.collection);
// sorter2.bubbleSort();
// console.log(sorter2, charactersCollection, charactersCollection.len);

const linked = new LinkedList();
// console.log(linked);
linked.add(22);
// console.log(linked);
linked.add(123)
// console.log(linked);
// console.log('len: ', linked.len);
// linked.print();
linked.add(1239)
// console.log(linked);
// console.log('len: ', linked.len);
linked.add(-22);
// linked.print();
// console.log(linked.at(2));
linked.add(-12)
console.log('/-----------/');
linked.print();
const linkedSorter = new Sorter(linked);
linkedSorter.bubbleSort();
console.log('/-----------/');
linked.print();