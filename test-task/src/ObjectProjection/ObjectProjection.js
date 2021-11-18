function ObjectProjection(obj, proto) {
    let newObj = {}
    if (Object.keys(proto).length === 0 && proto.constructor === Object) {
        newObj = obj
    }
    for (let key in obj) {
        if (proto.hasOwnProperty(key)) {
            if (Object.prototype.toString.call(obj[key]) === "[object String]" && proto[key] instanceof Object && !Array.isArray(proto[key])) {
                return
            } else if (obj[key] instanceof Object && !Array.isArray(obj[key]) && proto[key] instanceof Object && !Array.isArray(proto[key])) {
                    if (!(depthOf(obj[key]) < depthOf(proto[key]))) {
                        newObj[key] = {}
                        newObj[key] = ObjectProjection(obj[key], proto[key])
                    }
            } else if (Object.prototype.toString.call(proto[key]) === "[object String]") {
                newObj[key] = proto[key]
            } else {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}

const depthOf = function(object, level){
    level = level || 0
    for(let key in object){
        if (!object.hasOwnProperty(key)) continue
        if(object[key] instanceof Object && !Array.isArray(object[key])){
            level++
            level = depthOf(object[key], level)
        }
    }
    return level
}

export default ObjectProjection
