def insertion_sort(arr):
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > current:
            arr[j+1] = arr[j]
            j--
        
        arr[j+1] = current

    return arr

arr = [3,2,1,5,4]
sorted_arr = insertionSort(arr)
print(sorted_arr)
