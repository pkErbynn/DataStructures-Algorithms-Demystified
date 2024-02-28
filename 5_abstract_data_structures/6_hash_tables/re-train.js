class HashTable {
    constructor(maxSize = 5){
        this.keyMapData = new Array(maxSize);
    }

    _hash(keyString){
        const prime = 29;
        let total = 0;

        for (let index = 0; index < Math.min(keyString.length, 100); index++) {
            const char = keyString[index];
            let numberRep = char.charCodeAt(0) - 96;
            total = (total * prime) + numberRep;
        }

        return total % this.keyMapData.length;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMapData[index]){
            this.keyMapData[index] = [];
        }
        this.keyMapData[index].push([key, value])
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMapData[index]){
            let nestedArrData = this.keyMapData[index];

            for (let index = 0; index < nestedArrData.length; index++) {
                const element = nestedArrData[index];
                if(element[0] == key){
                    return element[1];
                }
                
            }
        }

        return null;
    }

    getKeys(){
        return this.keyMapData.flat().map(d => d[0]);
    }

    getValues(){
        return this.keyMapData.flat().map(d => d[1]);
    }
}

let ht = new HashTable();
ht.set("john", "kwesi");
ht.set("magie", "nyanba");
ht.set("raph", "nyan");
ht.get("raph");
console.log(ht.getKeys());
console.log(ht.getValues());