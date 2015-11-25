function mutation(arr) {
  var y = 0;
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  for(i=0; i<arr2.length; i++){
    for(x=0; x< arr1.length; x++){
      if(arr2[i].indexOf(arr1[x]) >= 0){
         y++;
         }
    }
  }
  if(y >= arr2.length){
    return true;
  }else{
    return false;
  }
}
 

mutation(["hello", "hey"]);