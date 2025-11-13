## Second Largest Number — Problem, logic and diagrams

### Problem statement

Given an array/list of numbers, find the second largest (distinct) number. If the array doesn't contain at least two distinct numbers, indicate that no second largest exists.

### Input / Output

- Input: an array of numbers (example: [3, 5, 1, 2, 4])
- Output: the second largest distinct number (for the example above, 4). If not present, return null / a message.

### Example

- Example 1: [3, 5, 1, 2, 4] -> Largest = 5, Second largest = 4
- Example 2: [7, 7, 7] -> No second largest (all equal)
- Example 3: [10] -> No second largest (only one element)

### Intuition

We only need to know the largest and the second largest while scanning the array once. Maintain two variables: `largest` and `secondLargest`. Update them as you iterate.

High-level contract:
- Inputs: array of numbers
- Outputs: second largest distinct number or null/indicator when none
- Error modes: non-array input (caller should pass an array)

### Algorithm (single-pass)

1. Initialize `largest = -Infinity`, `secondLargest = -Infinity`.
2. For each number `x` in the array:
   - If `x` > `largest`: set `secondLargest = largest`, `largest = x`.
   - Else if `x` < `largest` and `x` > `secondLargest`: set `secondLargest = x`.
   - (Ignore values equal to `largest` — we want a distinct second largest.)
3. After the loop, if `secondLargest` is still `-Infinity` then there is no second largest distinct number.

### Pseudocode

```
function findSecondLargest(arr):
    if arr length < 2: return null
    largest = -Infinity
    second = -Infinity
    for each x in arr:
        if x > largest:
            second = largest
            largest = x
        else if x < largest and x > second:
            second = x
    if second == -Infinity: return null
    return second
```

### JavaScript example (concise)

```
function secondLargest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return null;
  let largest = -Infinity;
  let second = -Infinity;
  for (const x of arr) {
    if (x > largest) {
      second = largest;
      largest = x;
    } else if (x < largest && x > second) {
      second = x;
    }
  }
  return second === -Infinity ? null : second;
}

// Example: secondLargest([3,5,1,2,4]) -> 4
```

### Iteration trace (worked example)

Array: [3, 5, 1, 5, 4]

- Start: largest = -Inf, second = -Inf
- x = 3 -> largest = 3, second = -Inf
- x = 5 -> largest = 5, second = 3
- x = 1 -> (1 < 5 and 1 > 3) false -> second stays 3
- x = 5 -> (x == largest) -> ignored
- x = 4 -> (4 < 5 and 4 > 3) -> second = 4
- Result: second = 4

### ASCII flow diagram

Start
  |
  v
Initialize largest = -Inf, second = -Inf
  |
  v
For each x in array -------------------------------+
  |                                              |
  v                                              |
Is x > largest? -- yes --> second = largest; largest = x
  | no                                           |
  v                                              |
Is x < largest and x > second? -- yes --> second = x
  | no                                           |
  v                                              |
continue loop -----------------------------------+
  |
  v
After loop: if second == -Inf -> no second largest
  |
  v
Return second (or null)

### Complexity

- Time: O(n) — single pass through the array
- Space: O(1) — constant extra memory

### Edge cases

- All numbers equal -> no second largest (return null)
- Array with one element -> no second largest
- Negative numbers -> handled by using -Infinity initializers
- Non-numeric values -> function assumes numeric array; validate if necessary

### Notes and alternatives

- If you don't require the second value to be distinct, the condition can be relaxed (but usually the problem asks for distinct second largest).
- Another approach: sort the array descending and scan for the first value different from the maximum — this is simpler but O(n log n) due to sorting. The single-pass approach is optimal at O(n).

---

File created to complement `second_largest_number.js` in this folder. Open this file to view the explanation and diagrams.
