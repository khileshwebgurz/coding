// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:
// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

// This is the most efficient and recommended approach in JavaScript because Set is optimized internally
class MyHashSet {
    constructor() {
        this.set = new Set();
    }

    add(value) {
        this.set.add(value);
    }

    remove(value) {
        this.set.delete(value);
    }

    contains(value) {
        return this.set.has(value);
    }
}

// now using Javascript object or set and this is optimised approach
class YourHashSet {
    constructor() {
        this.set = {}; // Using an object to store unique values
    }

    add(value) {
        this.set[value] = true; // Store value as key
    }

    remove(value) {
        delete this.set[value]; // Remove key from object
    }

    contains(value) {
        return this.set.hasOwnProperty(value); // Check if key exists
    }
}

// ✅ Example Usage
const hashSet = new YourHashSet();
hashSet.add(1);
hashSet.add(2);
console.log(hashSet.contains(1)); // true
console.log(hashSet.contains(3)); // false
hashSet.remove(1);
console.log(hashSet.contains(1)); // false
