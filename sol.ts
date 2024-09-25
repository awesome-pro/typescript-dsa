function minGroups(intervals: number[][]): number {
    // Step 1: Sort intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize a min-heap to keep track of end times
    const minHeap: number[] = [];

    // Step 3: Iterate through the intervals
    for (const [start, end] of intervals) {
        // If the heap is not empty and the minimum end time is less than the start time
        if (minHeap.length > 0 && minHeap[0] < start) {
            // Remove the minimum end time
            minHeap.shift();
        }
        // Add the current end time to the heap
        minHeap.push(end);
        // Maintain the heap property
        minHeap.sort((a, b) => a - b);
    }

    // Step 4: The size of the heap is the number of groups needed
    return minHeap.length;
}

// Example usage:
console.log(minGroups([[5,10],[6,8],[1,5],[2,3],[1,10]])); // Output: 3
console.log(minGroups([[1,3],[5,6],[8,10],[11,13]])); // Output: 1