
export default class EnhancedSet extends Set {
    union(s) {
        const result = new EnhancedSet();
        for(let item of this) result.add(item)       
        for(let item of s) result.add(item) 
        return result 
    }
    intersection(s) {
        const result = new EnhancedSet();
        for (let item of this)  if(s.has(item)) result.add(item) 
        for(let item of s)     if(this.has(item)) result.add(item) 
        return result
    };

    difference(s) {
        const result = new EnhancedSet();
        for (let item of this){ if(!s.has(item) ) result.add(item) }
        return result 
    }

    symmetricDifference(s) {
        const result = new EnhancedSet();
        for (let item of this){ if(!s.has(item) ) result.add(item) }
        for (let item of s){ if(!this.has(item) ) result.add(item) }
        return result 
    }

    isSuperset(s) {
        let flag = true
        for (let item of s){
            if(this.has(item)) flag = true
            else return false
        }
        return flag
    }

    isSubset(s) {
        let flag = true
        for (let item of this){
            if(s.has(item)) flag = true
            else return false
        }
    return flag
    }    
}
