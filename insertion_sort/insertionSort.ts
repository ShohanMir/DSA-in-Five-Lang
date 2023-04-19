function insertionSort(arr: number[]): number[] {
	for(let i = 1; i < arr.length; i++){
		current = arr[i];
		j = i - 1;
		
		while(j <= 0 && arr[j] > current){
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = current;
	}
	return arr;
}

let arr: number[] = [3,2,1,5,4]
let sortedArr: number[] = insertionSort(arr);
console.log(sortedARR);

