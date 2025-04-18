/*

Implement a data structure that allow you to store historical values and has the following functionalities:
- set(index, value): set the value at the given index to be equal to value
- get(index, snapId): returns the value at the given index at that snapId
- snap(): takes a snapshot of the current state of the data structure and returns the snapId

Assume that:
- starting snapId is 0
- the dafault values are 0
- if a value is set at a given index, it will be the same for all the future snapshots until the value is changed

Example:
const sa = new SnapshotArray(3); // [0, 0, 0]
sa.set(0, 5);                    // [5, 0, 0]
const id1 = sa.snap();           // id1 = 0, snapshot saved: [5,0,0]
sa.set(0, 6);                    // [6, 0, 0]
const id2 = sa.snap();           // id2 = 1, snapshot saved: [6,0,0]...set new value but for different snap
sa.set(1, 9);                    // [6, 9, 0]

sa.get(0, 0); // ➝ 5 (from snapshot 0)
sa.get(0, 1); // ➝ 6 (from snapshot 1)
sa.get(1, 1); // ➝ 0 (not yet set at snapshot 1)


Clarification:
- Imagine an array where every change is tracked. You can take a snapshot at any time and later ask: “What was the value at index X during snapshot Y?”
We need:
- efficient set and get.
- an efficient access to historical values is needed
- avoid storing full array copies for each snapshot (space-efficient).

*/

class SnapshotArray {
    constructor(length) {
        this.currentDataArray = new Array(length).fill(0)  // [0, 0]
        this.historySnapshots = [];  // maps snapId to its data...[snapId0 -> [0, 5] ,  snapId1 -> [0, 6]]
        this.snapId = 0;
    }

    set(index, value) {
        this.currentDataArray[index] = value;  // set data value at particular index
    }

    snap() {
        this.historySnapshots[this.snapId] = [...this.currentDataArray] // [[a, b]] => [a, b]
        this.snapId++;  // next snap comes with its different id
        return this.snapId;
    }

    get(index, snapId) {
        return this.historySnapshots[snapId][index];
    }
}

// Example usage:

const sa = new SnapshotArray(3); // [0, 0, 0]
sa.set(0, 5);                    // [5, 0, 0]
const id1 = sa.snap();           // id1 = 0, snapshot saved: [5,0,0]
sa.set(0, 6);                    // [6, 0, 0]
const id2 = sa.snap();           // id2 = 1, snapshot saved: [6,0,0]...set new value but for different snap
sa.set(1, 9);                    // [6, 9, 0]
console.log(sa.get(0, 0));  // ➝ 5 (from snapshot 0)
console.log(sa.get(0, 1)); // ➝ 6 (from snapshot 1)
console.log(sa.get(1, 1)); // ➝ 0 (not yet set at snapshot 1)
console.log(sa.get(1, 0)); // ➝ 0 (not yet set at snapshot 0)
console.log(sa.get(2, 0)); // ➝ 0 (not yet set at snapshot 0)

// Time Complexities:
// - Set: O(1)
// - Snap: O(1)
// - Get: O(1)

/////////////// Alternative: using Map

class SnapshotArrayUsingMap {
    constructor(length){
        this.snapshotsHistory = [];     // [...]
        this.dataToSnap = new Map();    // {id -> 5}
        this.snapId = 0;
    }

    set(index, value){
        this.dataToSnap.set(index, value);  // index -> value = {0 -> 5}
    }

    snap(){
        const currentData = new Map(this.dataToSnap);   // {0 -> 5}
        // this.snapshotsHistory[this.snapId] = currentData;
        this.snapshotsHistory.push(currentData);    // [index -> value, 0 -> 5...]
        return this.snapId++;     // move pointer step forward to keep track of current/latest snap position in the history array
    }

    get(index, snapId){

        // search backwards using snapId to find the latest map's value .....[{index -> value}, {index -> value},  {0 -> 5}...]
        for(let i = snapId; i >= 0; i--){
            const snapDataMap = this.snapshotsHistory[i];   // {0 -> 5}
            if(snapDataMap.has(index)){         // if {0 -> 5} map has key '0' matching 'index'
                return snapDataMap.get(index)          // then return its value '5'
            }
        }

        return -1
    }
}

const sam = new SnapshotArrayUsingMap(3);
sam.set(0, 5);          // {0 -> 5}
sam.set(1, 2);          // {0 -> 5, 1 -> 2}
let sId1 = sam.snap();   // sId1 = 0
sam.set(0, 6);          // [6, _, _]
let sId2 = sam.snap();   // sId2 = 1
console.log(sam.get(0, 0)); // Output: 5
console.log(sam.get(0, 1)); // Output: 6

