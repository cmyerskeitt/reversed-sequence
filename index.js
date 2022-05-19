const reverseSeq = n => {
    let newArray = []
    while (n > 0) {
       newArray.push(n)
       n--
     }
    return newArray
};