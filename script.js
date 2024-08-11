let bar_div = document.querySelector(".bars");
let insertbtn = document.querySelector(".insert");
let bubble = document.querySelector(".bubble");
let selection = document.querySelector(".selection");
let insertion = document.querySelector(".insertion");
let merge = document.querySelector(".merge");
let quick = document.querySelector(".quick");
let reset = document.querySelector(".reset");
let btns = document.querySelector(".btns");
let menu_btns = document.querySelectorAll(".menu-btns button");
let table = document.querySelectorAll(".sort-table td");
let desc = document.querySelector(".table-box div");
let table_div = document.querySelector(".table-box");
let sort_cover = document.querySelector(".sort-cover");
let temp = document.querySelector(".temp");
let desc_content = document.querySelector(".sort-description p")
let sort_btn = document.querySelector(".sortbtn");
let codeEditor = document.querySelector("#code");



const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


sort_cover.classList.add("none");

let complexity = [
    [
        "O(N x N)",
        "O(N)",
        "O(N x N)",
        "O(1)"
    ],
    [
        "O(N x N)",
        "O(N x N)",
        "O(N x N)",
        "O(1)"
    ],
    [
        "O(N x N)",
        "O(N)",
        "O(N x N)",
        "O(1)"
    ],
    [
        "O(N x logN)",
        "O(N x logN)",
        "O(N x logN)",
        "O(N)"
    ],
    [
        "O(N x logN)",
        "O(N x logN)",
        "O(N x N)",
        "O(logN)"
    ]
];

let description = {
    bubble: " Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed.<br><br><br> These passes through the list are repeated until no swaps have to be performed during a pass, meaning that the list has become fully sorted. The algorithm, which is a comparison sort, is named for the way the larger elements bubble up to the top of the list.This simple algorithm performs poorly in real-world use and is used primarily as an educational tool. ",
    selection: "Selection sort is an in-place comparison sort.The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list.<br><br><br> Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right..",
    insertion: "Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.<br><br><br>Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position",
    merge: "Merge Sort is a sorting algorithm based on the Divide and conquor technique.It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively.We represented the first one.<br><br><br> The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining.This will be the sorted data structure.",
    quick: "Quicksort is an efficient, general-purpose sorting algorithm. Quicksort was developed by British computer scientist Tony Hoare in 1959 and published in 1961. It is still a commonly used algorithm for sorting. Overall, it is slightly faster than merge sort and heapsort for randomized data, particularly on larger distributions.<br><br><br> Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting"
};

let code = {
    bubble: [
        `        #include &lt; stdio.h &gt;

        void bubble_sort(int arr[], int n) {
            int i, j;
            for (i = 0; i < n - 1; i++) {
                for (j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }

        int main() {
            int arr[] = {64, 34, 25, 12, 22, 11, 90};
            int n = sizeof(arr) / sizeof(arr[0]);
            bubble_sort(arr, n);
            printf("Sorted array: ");
            for (int i = 0; i < n; i++) {
                printf("%d ", arr[i]);
            }
            return 0;
        }`,

        `        #include <iostream>
        using namespace std;

        void bubble_sort(int arr[], int n) {
            for (int i = 0; i < n - 1; i++) {
                for (int j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }

        int main() {
            int arr[] = {64, 34, 25, 12, 22, 11, 90};
            int n = sizeof(arr) / sizeof(arr[0]);
            bubble_sort(arr, n);
            cout << "Sorted array: ";
            for (int i = 0; i < n; i++) {
                cout << arr[i] << " ";
            }
            return 0;
        }`,

        `        public class BubbleSort {
            public static void bubble_sort(int arr[]) {
                int n = arr.length;
                for (int i = 0; i < n - 1; i++) {
                    for (int j = 0; j < n - i - 1; j++) {
                        if (arr[j] > arr[j + 1]) {
                            int temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
            }

            public static void main(String args[]) {
                int arr[] = {64, 34, 25, 12, 22, 11, 90};
                bubble_sort(arr);
                System.out.println("Sorted array: ");
                for (int i = 0; i < arr.length; i++) {
                    System.out.print(arr[i] + " ");
                }
            }
        }`,

        `        function bubble_sort(arr) {
            let n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }

        let arr = [64, 34, 25, 12, 22, 11, 90];
        bubble_sort(arr);
        console.log("Sorted array: " + arr.join(" "));`,

        `        def bubble_sort(arr):
            n = len(arr)
            for i in range(n - 1):
                for j in range(n - i - 1):
                    if arr[j] > arr[j + 1]:
                        arr[j], arr[j + 1] = arr[j + 1], arr[j]

        arr = [64, 34, 25, 12, 22, 11, 90]
        bubble_sort(arr)
        print("Sorted array:", arr)`
    ],
    selection: [
        `        #include &lt; stdio.h &gt;

        void selection_sort(int arr[], int n) {
            for (int i = 0; i < n - 1; i++) {
                int min_idx = i;
                for (int j = i + 1; j < n; j++) {
                    if (arr[j] < arr[min_idx]) {
                        min_idx = j;
                    }
                }
                int temp = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = temp;
            }
        }

        int main() {
            int arr[] = {64, 25, 12, 22, 11};
            int n = sizeof(arr) / sizeof(arr[0]);
            selection_sort(arr, n);
            printf("Sorted array: ");
            for (int i = 0; i < n; i++) {
                printf("%d ", arr[i]);
            }
            return 0;
        }`,

        `        #include <iostream>
        using namespace std;

        void selection_sort(int arr[], int n) {
            for (int i = 0; i < n - 1; i++) {
                int min_idx = i;
                for (int j = i + 1; j < n; j++) {
                    if (arr[j] < arr[min_idx]) {
                        min_idx = j;
                    }
                }
                swap(arr[min_idx], arr[i]);
            }
        }

        int main() {
            int arr[] = {64, 25, 12, 22, 11};
            int n = sizeof(arr) / sizeof(arr[0]);
            selection_sort(arr, n);
            cout << "Sorted array: ";
            for (int i = 0; i < n; i++) {
                cout << arr[i] << " ";
            }
            return 0;
        }`,

        `        public class SelectionSort {
            public static void selection_sort(int arr[]) {
                int n = arr.length;
                for (int i = 0; i < n - 1; i++) {
                    int min_idx = i;
                    for (int j = i + 1; j < n; j++) {
                        if (arr[j] < arr[min_idx]) {
                            min_idx = j;
                        }
                    }
                    int temp = arr[min_idx];
                    arr[min_idx] = arr[i];
                    arr[i] = temp;
                }
            }

            public static void main(String args[]) {
                int arr[] = {64, 25, 12, 22, 11};
                selection_sort(arr);
                System.out.println("Sorted array: ");
                for (int i = 0; i < arr.length; i++) {
                    System.out.print(arr[i] + " ");
                }
            }
        }`,

        `        function selection_sort(arr) {
            let n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                let min_idx = i;
                for (let j = i + 1; j < n; j++) {
                    if (arr[j] < arr[min_idx]) {
                        min_idx = j;
                    }
                }
                [arr[min_idx], arr[i]] = [arr[i], arr[min_idx]];
            }
        }

        let arr = [64, 25, 12, 22, 11];
        selection_sort(arr);
        console.log("Sorted array: " + arr.join(" "));`,

        `        def selection_sort(arr):
            n = len(arr)
            for i in range(n - 1):
                min_idx = i
                for j in range(i + 1, n):
                    if arr[j] < arr[min_idx]:
                        min_idx = j
                arr[i], arr[min_idx] = arr[min_idx], arr[i]

        arr = [64, 25, 12, 22, 11]
        selection_sort(arr)
        print("Sorted array:", arr)`
    ],
    insertion: [
        `// C Code
        #include <stdio.h>

        void insertion_sort(int arr[], int n) {
            for (int i = 1; i < n; i++) {
                int key = arr[i];
                int j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
        }

        int main() {
            int arr[] = {12, 11, 13, 5, 6};
            int n = sizeof(arr) / sizeof(arr[0]);
            insertion_sort(arr, n);
            printf("Sorted array: ");
            for (int i = 0; i < n; i++) {
                printf("%d ", arr[i]);
            }
            return 0;
        }`,

        `// C++ Code
        #include <iostream>
        using namespace std;

        void insertion_sort(int arr[], int n) {
            for (int i = 1; i < n; i++) {
                int key = arr[i];
                int j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
        }

        int main() {
            int arr[] = {12, 11, 13, 5, 6};
            int n = sizeof(arr) / sizeof(arr[0]);
            insertion_sort(arr, n);
            cout << "Sorted array: ";
            for (int i = 0; i < n; i++) {
                cout << arr[i] << " ";
            }
            return 0;
        }`,

        `// Java Code
        public class InsertionSort {
            public static void insertion_sort(int arr[]) {
                int n = arr.length;
                for (int i = 1; i < n; i++) {
                    int key = arr[i];
                    int j = i - 1;
                    while (j >= 0 && arr[j] > key) {
                        arr[j + 1] = arr[j];
                        j = j - 1;
                    }
                    arr[j + 1] = key;
                }
            }

            public static void main(String args[]) {
                int arr[] = {12, 11, 13, 5, 6};
                insertion_sort(arr);
                System.out.println("Sorted array: ");
                for (int i = 0; i < arr.length; i++) {
                    System.out.print(arr[i] + " ");
                }
            }
        }`,

        `// JavaScript Code
        function insertion_sort(arr) {
            let n = arr.length;
            for (let i = 1; i < n; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
        }

        let arr = [12, 11, 13, 5, 6];
        insertion_sort(arr);
        console.log("Sorted array: " + arr.join(" "));`,

        `# Python Code
        def insertion_sort(arr):
            for i in range(1, len(arr)):
                key = arr[i]
                j = i - 1
                while j >= 0 and key < arr[j]:
                    arr[j + 1] = arr[j]
                    j -= 1
                arr[j + 1] = key

        arr = [12, 11, 13, 5, 6]
        insertion_sort(arr)
        print("Sorted array:", arr)`
    ],
    merge: [
        `// C Code
        #include <stdio.h>

        void merge(int arr[], int l, int m, int r) {
            int n1 = m - l + 1;
            int n2 = r - m;
            int L[n1], R[n2];
            for (int i = 0; i < n1; i++)
                L[i] = arr[l + i];
            for (int j = 0; j < n2; j++)
                R[j] = arr[m + 1 + j];

            int i = 0, j = 0, k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }

            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }

            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }

        void merge_sort(int arr[], int l, int r) {
            if (l < r) {
                int m = l + (r - l) / 2;
                merge_sort(arr, l, m);
                merge_sort(arr, m + 1, r);
                merge(arr, l, m, r);
            }
        }

        int main() {
            int arr[] = {12, 11, 13, 5, 6, 7};
            int n = sizeof(arr) / sizeof(arr[0]);
            merge_sort(arr, 0, n - 1);
            printf("Sorted array: ");
            for (int i = 0; i < n; i++) {
                printf("%d ", arr[i]);
            }
            return 0;
        }`,

        `// C++ Code
        #include <iostream>
        using namespace std;

        void merge(int arr[], int l, int m, int r) {
            int n1 = m - l + 1;
            int n2 = r - m;
            int L[n1], R[n2];
            for (int i = 0; i < n1; i++)
                L[i] = arr[l + i];
            for (int j = 0; j < n2; j++)
                R[j] = arr[m + 1 + j];

            int i = 0, j = 0, k = l;
            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }

            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
            }

            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
            }
        }

        void merge_sort(int arr[], int l, int r) {
            if (l < r) {
                int m = l + (r - l) / 2;
                merge_sort(arr, l, m);
                merge_sort(arr, m + 1, r);
                merge(arr, l, m, r);
            }
        }

        int main() {
            int arr[] = {12, 11, 13, 5, 6, 7};
            int n = sizeof(arr) / sizeof(arr[0]);
            merge_sort(arr, 0, n - 1);
            cout << "Sorted array: ";
            for (int i = 0; i < n; i++) {
                cout << arr[i] << " ";
            }
            return 0;
        }`,

        `// Java Code
        public class MergeSort {
            void merge(int arr[], int l, int m, int r) {
                int n1 = m - l + 1;
                int n2 = r - m;

                int L[] = new int[n1];
                int R[] = new int[n2];

                for (int i = 0; i < n1; ++i)
                    L[i] = arr[l + i];
                for (int j = 0; j < n2; ++j)
                    R[j] = arr[m + 1 + j];

                int i = 0, j = 0;
                int k = l;
                while (i < n1 && j < n2) {
                    if (L[i] <= R[j]) {
                        arr[k] = L[i];
                        i++;
                    } else {
                        arr[k] = R[j];
                        j++;
                    }
                    k++;
                }

                while (i < n1) {
                    arr[k] = L[i];
                    i++;
                    k++;
                }

                while (j < n2) {
                    arr[k] = R[j];
                    j++;
                    k++;
                }
            }

            void merge_sort(int arr[], int l, int r) {
                if (l < r) {
                    int m = l + (r - l) / 2;
                    merge_sort(arr, l, m);
                    merge_sort(arr, m + 1, r);
                    merge(arr, l, m, r);
                }
            }

            public static void main(String args[]) {
                int arr[] = {12, 11, 13, 5, 6, 7};
                int n = arr.length;
                MergeSort ob = new MergeSort();
                ob.merge_sort(arr, 0, n - 1);
                System.out.println("Sorted array: ");
                for (int i = 0; i < n; i++) {
                    System.out.print(arr[i] + " ");
                }
            }
        }`,

        `// JavaScript Code
        function merge(left, right) {
            let result = [], i = 0, j = 0;
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
            return result.concat(left.slice(i)).concat(right.slice(j));
        }

        function merge_sort(arr) {
            if (arr.length <= 1) {
                return arr;
            }
            const mid = Math.floor(arr.length / 2);
            const left = merge_sort(arr.slice(0, mid));
            const right = merge_sort(arr.slice(mid));
            return merge(left, right);
        }

        let arr = [12, 11, 13, 5, 6, 7];
        arr = merge_sort(arr);
        console.log("Sorted array: " + arr.join(" "));`,

        `# Python Code
        def merge_sort(arr):
            if len(arr) > 1:
                mid = len(arr) // 2
                L = arr[:mid]
                R = arr[mid:]

                merge_sort(L)
                merge_sort(R)

                i = j = k = 0
                while i < len(L) and j < len(R):
                    if L[i] < R[j]:
                        arr[k] = L[i]
                        i += 1
                    else:
                        arr[k] = R[j]
                        j += 1
                    k += 1

                while i < len(L):
                    arr[k] = L[i]
                    i += 1
                    k += 1

                while j < len(R):
                    arr[k] = R[j]
                    j += 1
                    k += 1

        arr = [12, 11, 13, 5, 6, 7]
        merge_sort(arr)
        print("Sorted array:", arr)`
    ],
    quick: [
        `// C Code
        #include <stdio.h>

        void swap(int* a, int* b) {
            int t = *a;
            *a = *b;
            *b = t;
        }

        int partition(int arr[], int low, int high) {
            int pivot = arr[high];
            int i = (low - 1);

            for (int j = low; j <= high - 1; j++) {
                if (arr[j] < pivot) {
                    i++;
                    swap(&arr[i], &arr[j]);
                }
            }
            swap(&arr[i + 1], &arr[high]);
            return (i + 1);
        }

        void quick_sort(int arr[], int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quick_sort(arr, low, pi - 1);
                quick_sort(arr, pi + 1, high);
            }
        }

        int main() {
            int arr[] = {10, 7, 8, 9, 1, 5};
            int n = sizeof(arr) / sizeof(arr[0]);
            quick_sort(arr, 0, n - 1);
            printf("Sorted array: ");
            for (int i = 0; i < n; i++) {
                printf("%d ", arr[i]);
            }
            return 0;
        }`,

        `// C++ Code
        #include <iostream>
        using namespace std;

        void swap(int* a, int* b) {
            int t = *a;
            *a = *b;
            *b = t;
        }

        int partition(int arr[], int low, int high) {
            int pivot = arr[high];
            int i = (low - 1);

            for (int j = low; j <= high - 1; j++) {
                if (arr[j] < pivot) {
                    i++;
                    swap(&arr[i], &arr[j]);
                }
            }
            swap(&arr[i + 1], &arr[high]);
            return (i + 1);
        }

        void quick_sort(int arr[], int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                quick_sort(arr, low, pi - 1);
                quick_sort(arr, pi + 1, high);
            }
        }

        int main() {
            int arr[] = {10, 7, 8, 9, 1, 5};
            int n = sizeof(arr) / sizeof(arr[0]);
            quick_sort(arr, 0, n - 1);
            cout << "Sorted array: ";
            for (int i = 0; i < n; i++) {
                cout << arr[i] << " ";
            }
            return 0;
        }`,

        `// Java Code
        public class QuickSort {
            int partition(int arr[], int low, int high) {
                int pivot = arr[high];
                int i = (low - 1);
                for (int j = low; j < high; j++) {
                    if (arr[j] < pivot) {
                        i++;
                        int temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
                int temp = arr[i + 1];
                arr[i + 1] = arr[high];
                arr[high] = temp;
                return i + 1;
            }

            void quick_sort(int arr[], int low, int high) {
                if (low < high) {
                    int pi = partition(arr, low, high);
                    quick_sort(arr, low, pi - 1);
                    quick_sort(arr, pi + 1, high);
                }
            }

            public static void main(String args[]) {
                int arr[] = {10, 7, 8, 9, 1, 5};
                int n = arr.length;
                QuickSort ob = new QuickSort();
                ob.quick_sort(arr, 0, n - 1);
                System.out.println("Sorted array: ");
                for (int i = 0; i < n; i++) {
                    System.out.print(arr[i] + " ");
                }
            }
        }`,

        `// JavaScript Code
        function partition(arr, low, high) {
            let pivot = arr[high];
            let i = low - 1;
            for (let j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            return i + 1;
        }

        function quick_sort(arr, low, high) {
            if (low < high) {
                let pi = partition(arr, low, high);
                quick_sort(arr, low, pi - 1);
                quick_sort(arr, pi + 1, high);
            }
        }

        let arr = [10, 7, 8, 9, 1, 5];
        quick_sort(arr, 0, arr.length - 1);
        console.log("Sorted array: " + arr.join(" "));`,

        `# Python Code
        def partition(arr, low, high):
            pivot = arr[high]
            i = low - 1
            for j in range(low, high):
                if arr[j] < pivot:
                    i += 1
                    arr[i], arr[j] = arr[j], arr[i]
            arr[i + 1], arr[high] = arr[high], arr[i + 1]
            return i + 1

        def quick_sort(arr, low, high):
            if low < high:
                pi = partition(arr, low, high)
                quick_sort(arr, low, pi - 1)
                quick_sort(arr, pi + 1, high)

        arr = [10, 7, 8, 9, 1, 5]
        quick_sort(arr, 0, len(arr) - 1)
        print("Sorted array:", arr)`
    ]
};


function setBtn(i) {
    menu_btns[i].style.backgroundColor = "transparent";
    menu_btns[i].style.borderBottom = "none";
    if (i == menu_btns.length - 1)
        menu_btns[i].style.borderRight = "none";
    for (let j = 0; j < menu_btns.length; j++) {
        if (i != j) {
            menu_btns[j].style.backgroundColor = "rgb(53, 53, 53)";
            menu_btns[j].style.borderBottom = "2px solid #d17f3f";
        }
    }
}


function addCode(name) {
    for (let i = 0; i < menu_btns.length; i++) {
        menu_btns[i].addEventListener("click", () => {
            setBtn(i);
            codeEditor.innerHTML = code[name][i];
        });

    }
}


const arr2 = [2, 5, 1, 13, 13, 5, 16, 12, 4, 7, 3];
let arr = [...arr2];


let Flag = 0;

function rearrange(array) {
    console.log(array);
    while (bar_div.firstChild) {
        bar_div.removeChild(bar_div.firstChild);
    }
    let max = Math.max(...array);
    array.forEach((el) => {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.innerText = el;
        let h = el / max * 50;
        bar.style.height = `${h}vh`;
        bar_div.appendChild(bar);
    });
}

rearrange(arr);

insertbtn.addEventListener("click", () => {
    if (Flag == 1) return;
    let array_ipt = document.createElement("input");
    array_ipt.type = "text";
    array_ipt.placeholder = "Enter arrray";
    array_ipt.classList.add("ipt-des");
    insertbtn.insertAdjacentElement("afterend", array_ipt);
    insertbtn.remove();
    btns.style.alignItems = "center";
    array_ipt.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            let s = array_ipt.value;
            array_ipt.value = "";
            console.log("s = ", s);
            if (s) {
                let newarr = s.split(",").map(Number);
                console.log("a = ", newarr);
                arr = newarr;
                // arr2 = newarr;
                rearrange(arr);
            } else {
                console.log("The input field is empty.");
            }

            let inst = document.createElement("button");
            inst.innerText = "Insert Array";
            inst.classList.add("btn");
            array_ipt.insertAdjacentElement("afterend", inst);
            array_ipt.remove();
        }
    });

});



bubble.addEventListener("click", async () => {
    if (Flag == 0) {


        temp.remove();
        table_div.style.display = "flex";
        sort_cover.classList.remove("none");

        desc.innerText = "BUBBLE SORT";
        desc_content.innerHTML = `${description.bubble}`;
        setBtn(0);
        codeEditor.innerHTML = code.bubble[0];
        addCode("bubble");

        for (let i = 0; i < 4; i++) {
            table[i].innerText = complexity[0][i];
        }
        reset.style.opacity = "1";


        rearrange(arr);



        // let btn1 = document.querySelector("#btn1");
        table_div.removeChild(table_div.lastElementChild);

        let btn_sort = document.createElement("button");
        btn_sort.innerText = "Sort Array";
        btn_sort.classList.add("sortbtn");

        table_div.appendChild(btn_sort);

        btn_sort.addEventListener("click", async () => {
            btn_sort.style.opacity = "0";
            reset.style.opacity = "0";

            Flag = 1;

            await delay(1000);

            await bubble_sort();
            btn_sort.style.opacity = "1";
        });

    }
    else {
        alert("Sorting is Already in Process");
    }

});

async function bubble_sort() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
            let bars = document.querySelectorAll(".bar");
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await delay(500);

            if (arr[j] > arr[j + 1]) {
                let bars = document.querySelectorAll(".bar");
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                bars[j + 1].insertAdjacentElement("afterend", bars[j]);

            }
            bars[j].style.backgroundColor = "green";
            bars[j + 1].style.backgroundColor = "green";
        }
        let bars = document.querySelectorAll(".bar");
        bars[arr.length - 1 - i].style.backgroundColor = "gold";
        bars[arr.length - 1 - i].style.color = "black";

    }
    Flag = 0;
    reset.style.opacity = "1";

}

selection.addEventListener("click", async () => {
    if (Flag == 0) {


        temp.remove();
        table_div.style.display = "flex";
        sort_cover.classList.remove("none");
        desc.innerText = "SELECTION SORT";
        desc_content.innerHTML = `${description.selection}`;
        setBtn(0);

        codeEditor.innerHTML = code.selection[0];
        addCode("selection");

        for (let i = 0; i < 4; i++) {
            table[i].innerText = complexity[1][i];
        }
        reset.style.opacity = "1";

        rearrange(arr);


        table_div.removeChild(table_div.lastElementChild);

        let btn_sort = document.createElement("button");
        btn_sort.innerText = "Sort Array";
        btn_sort.classList.add("sortbtn");

        table_div.appendChild(btn_sort);

        btn_sort.addEventListener("click", async () => {
            btn_sort.style.opacity = "0";
            reset.style.opacity = "0";

            Flag = 1;
            await delay(1000);
            await selection_sort();
            btn_sort.style.opacity = "1";

        });


    }
    else {
        alert("Sorting is Already in Process");
    }
});


async function selection_sort() {
    for (let i = 0; i < arr.length; i++) {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        let bars = document.querySelectorAll(".bar");

        let min = i;
        bars[min].style.backgroundColor = "red";
        for (let j = i + 1; j < arr.length; j++) {

            bars[j].style.backgroundColor = "red";

            await delay(500);

            if (arr[j] < arr[min]) {
                bars[min].style.backgroundColor = "green";
                min = j;
                bars[min].style.backgroundColor = "red";
            }
            else {
                bars[j].style.backgroundColor = "green";

            }

        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;

            // Swap the DOM elements
            let tempBar = bars[i].cloneNode(true);
            let tempBar2 = bars[min].cloneNode(true);
            bars[i].parentNode.replaceChild(tempBar2, bars[i]);
            bars[min].parentNode.replaceChild(tempBar, bars[min]);


            // Refresh the bars NodeList after swapping
            bars = document.querySelectorAll(".bar");
        }

        bars[i].style.backgroundColor = "gold";
        bars[i].style.color = "black";

        await delay(500);

    }
    console.log("by selection ", arr);
    console.log("arr2 ", arr2);

    Flag = 0;
    reset.style.opacity = "100";

}



insertion.addEventListener("click", async () => {
    if (Flag == 0) {


        temp.remove();
        table_div.style.display = "flex";
        sort_cover.classList.remove("none");

        desc.innerText = "INSERTION SORT";
        desc_content.innerHTML = `${description.insertion}`;
        setBtn(0);

        codeEditor.innerHTML = code.insertion[0];
        addCode("insertion");

        for (let i = 0; i < 4; i++) {
            table[i].innerText = complexity[2][i];
        }
        reset.style.opacity = "1";


        rearrange(arr);

        table_div.removeChild(table_div.lastElementChild);

        let btn_sort = document.createElement("button");
        btn_sort.innerText = "Sort Array";
        btn_sort.classList.add("sortbtn");

        table_div.appendChild(btn_sort);

        btn_sort.addEventListener("click", async () => {
            btn_sort.style.opacity = "0";
            reset.style.opacity = "0";
            Flag = 1;
            await delay(1000);
            await insertion_sort();
            btn_sort.style.opacity = "1";

        });
    }
    else {
        alert("Sorting is Already in Process");
    }
});

async function insertion_sort() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    let bars = document.querySelectorAll(".bar");
    bars[0].style.backgroundColor = "gold";
    bars[0].style.color = "black";
    await delay(500);
    for (let i = 1; i < arr.length; i++) {
        let bars = document.querySelectorAll(".bar");

        let key = arr[i];
        let key_div = bars[i];
        let j = i - 1;

        bars[i].style.backgroundColor = "red";
        bars[i].style.position = "relative";
        bars[i].style.bottom = "70px";

        await delay(500);

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];

            bars = document.querySelectorAll(".bar");
            let tempBar1 = bars[j + 1].cloneNode(true);
            let tempBar2 = bars[j].cloneNode(true);
            await delay(500);

            bars[j].parentNode.replaceChild(tempBar1, bars[j]);
            bars[j + 1].parentNode.replaceChild(tempBar2, bars[j + 1]);
            key_div = tempBar1;

            j--;
            await delay(500);
        }
        // tempBar2.style.backgroundColor = "gold";
        // tempBar2.style.top = "0px";
        await delay(500);
        key_div.style.top = "0px";
        key_div.style.backgroundColor = "gold";
        key_div.style.color = "black";


        arr[j + 1] = key;
    }
    console.log("by insertion => ", arr);
    Flag = 0;
    reset.style.opacity = "100";

}


merge.addEventListener("click", async () => {
    if (Flag == 0) {


        temp.remove();
        table_div.style.display = "flex";
        sort_cover.classList.remove("none");

        desc.innerText = "MERGE SORT";
        desc_content.innerHTML = `${description.merge}`;
        setBtn(0);

        codeEditor.innerHTML = code.merge[0];
        addCode("merge");

        for (let i = 0; i < 4; i++) {
            table[i].innerText = complexity[3][i];
        }
        reset.style.opacity = "1";


        rearrange(arr);

        table_div.removeChild(table_div.lastElementChild);

        let btn_sort = document.createElement("button");
        btn_sort.innerText = "Sort Array";
        btn_sort.classList.add("sortbtn");

        table_div.appendChild(btn_sort);

        btn_sort.addEventListener("click", async () => {
            btn_sort.style.opacity = "0";
            reset.style.opacity = "0";
            Flag = 1;
            await delay(1000);
            let bars = document.querySelectorAll(".bar");
            await divide(0, bars.length - 1);
            btn_sort.style.opacity = "1";
            reset.style.opacity = "1";
            Flag = 0;
        });




    }
    else {
        alert("Sorting is Already in Process");
    }

});

async function divide(start, end) {
    let bars = document.querySelectorAll(".bar");
    if (end < bars.length - 1) {
        bars[end].style.marginRight = "4vw";
        // bars[end].style.backgroundColor = "red";
    }
    if (start >= end) return;


    let mid = Math.floor(start + (end - start) / 2);

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay(500);
    await divide(start, mid);
    await divide(mid + 1, end);

    await conquor(start, mid, end);

}

async function conquor(start, mid, end) {
    let k = mid + 1;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    let newArr = [];
    let st = start, en = end;
    let i = 0;
    while (start <= mid && k <= end) {
        let bars = document.querySelectorAll(".bar");
        bars[start + i].style.backgroundColor = "blue";
        bars[k].style.backgroundColor = "blue";

        let a = start + i;
        let b = k;
        await delay(500);
        if (arr[start] > arr[k]) {
            newArr.push(arr[k]);
            bars[start + i].style.backgroundColor = "red";
            bars[k].style.backgroundColor = "red";
            await delay(500);
            bars[start + i].insertAdjacentElement("beforebegin", bars[k]);
            bars[k].style.marginRight = "0.5vw";
            if (k - 1 >= 0)
                bars[k - 1].style.marginRight = "4vw";
            k++;
            i++;
        }
        else {
            newArr.push(arr[start]);
            start++;
        }
        await delay(500);
        bars[a].style.backgroundColor = "green";
        // bars[mid].style.marginRight = "0.5vw";
        bars[b].style.backgroundColor = "green";


    }
    bars = document.querySelectorAll(".bar");
    for (let l = st; l < en; l++) {
        bars[l].style.marginRight = "0.5vw";
    }
    while (start <= mid) {
        newArr.push(arr[start++]);
    }
    while (k <= end) {
        newArr.push(arr[k++]);
    }

    for (let i = 0; i < newArr.length; i++) {
        arr[st + i] = newArr[i];
    }
}



quick.addEventListener("click", async () => {
    if (Flag == 0) {

        table_div.removeChild(table_div.lastElementChild);
        let temp_div = document.createElement("div");
        table_div.appendChild(temp_div);

        reset.style.opacity = "0";
        temp.remove();
        table_div.style.display = "flex";
        sort_cover.classList.remove("none");

        desc.innerText = "Quick SORT";
        desc_content.innerHTML = `${description.quick}`;
        setBtn(0);

        codeEditor.innerHTML = code.quick[0];
        addCode("quick");

        for (let i = 0; i < 4; i++) {
            table[i].innerText = complexity[4][i];
        }
        bar_div.innerHTML = `<h4>Currently Unavailable <br>Developers are working on it !</h4>`;

        // bar_div.style.display = "block";
        // bar_div.margin = "20px";
    }
    else {
        alert("Sorting is Already in Process");
    }

});




reset.addEventListener("click", () => {
    console.log("arr : ", arr);
    arr = [...arr2];
    rearrange(arr);
    reset.style.opacity = "0";
});