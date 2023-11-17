// checks to see if distance is out of bounds, then takes us to 1st or last photo
function checkIndex(index, numberOfImages){

    if (index >= numberOfImages){
        return 0;
    }if (index < 0){
        return numberOfImages - 1;
    }

    return index;
}

export { checkIndex };