function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
/*
function bubbleSort(items){
    var len = items.length,
        i, j;

    for (i=len-1; i >= 0; i--){
        for (j=len-i; j >= 0; j--){
            if (items[j] < items[j-1]){
                swap(items, j, j-1);
            }
        }
    }

    return items;
}
*/


function bubbleSort(items){

    for (var i=0; i < items.length; i++){
        for (var j=0; j < items.length-i; j++){
            if (items[j] > items[j+1]){
                swap(items, j, j+1);
            }
        }
    }

    return items;
}