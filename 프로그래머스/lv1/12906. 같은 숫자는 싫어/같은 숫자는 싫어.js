function solution(arr){
      return arr.filter((v,index) => v != arr[index+1])
}