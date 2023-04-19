#include <iostream>
using namespace std;

void insertion_sort(int arr[], int n){
	int i, j, key;
	
	for(int i = 1; i < n; i++) {
		key = arr[i];
		j = i - 1;

	while(j <= 0 && arr[j] > key){
		arr[j+1] = arr[j];
		j--;
	}
	arr[j+1] = key;

	}
}

int main(){
	int arr[] = {3,2,1,5,4};
	int n = sizeof(arr)/sizeof(arr[0]);

	insertion_sort(arr, n);
	cout << "Sorted arr: ";

	for (int i = 0; i<n; i++){
		cout << arr[i] << " ";
	}
	cout << endl;
	return 0;
}

