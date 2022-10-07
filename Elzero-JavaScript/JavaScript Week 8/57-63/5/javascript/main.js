function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for(let s =startYear; s <= endYear; s++){
        
        document.write(`<option value="${s}"> ${s} </option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);