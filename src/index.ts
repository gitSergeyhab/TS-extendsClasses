import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';
import {LinkedList} from './LinkedList';

const numbersCollection = new NumbersCollection([77, 3, -2, 23, 2, 89])
console.log(numbersCollection.data);
numbersCollection.bubbleSort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('ojdrjj00ndnZD nfE#');
console.log(charactersCollection.data);
charactersCollection.bubbleSort();
console.log(charactersCollection.data);


const linked = new LinkedList();
linked.add(22);
linked.add(123)
linked.add(1239)
linked.add(-22);
linked.add(-12);
console.log('///////////')
linked.print();
linked.bubbleSort();
console.log('///////////')
linked.print();
console.log(linked)
