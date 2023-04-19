function insertionSort(arr){
	for(let i = 1; i < arr.length; i++) {
		let current = arr[i];
		j = i-1;

		while(j >= 0 && arr[j] > current) {
			arr[j+1] = arr[j]
			j--;
		}

		arr[j+1] = current;
	}
	return arr;
}

let arr = [4,1,5,2,7,9,3,6]
let sortedArr = insertionSort(arr);
console.log(sortedArr)
