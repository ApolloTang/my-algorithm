function makeNestedObject(depth) {

  // recursion
  const nest = (obj, level=1) => {
    const _obj = Object.assign({}, obj)  // clone the passed in object to discard unwanted level (we only want the properties with deepest level)

    if (level < depth) {
      _obj[level] = nest( _obj, level + 1 )
    } else {
      _obj[level] = level
    }

    return Object.assign({}, _obj) // return the clone to avoid of circular ref
  }

  return nest(depth)
}

const result = makeNestedObject(3)
console.log(JSON.stringify(result, null, 2))
/*
  {
    "1": {
      "2": {
        "3": 3
      }
    }
  }
*/

