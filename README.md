# Firebase Asynchronous Data Access Error

This repository demonstrates a common error in Firebase when accessing document snapshots before the data has fully loaded. The `bug.js` file shows incorrect asynchronous data handling, leading to an error. The `bugSolution.js` file provides the corrected code that properly handles the asynchronous operation.

## How to Reproduce

1. Clone this repository.
2. Install the necessary dependencies (Firebase).
3. Run the `bug.js` file. You should encounter an error.
4. Run the `bugSolution.js` file. It should print the data successfully.

## Solution

The error occurs because the `doc.data().someProperty` access happens before the `get()` method completes. The solution is to ensure the code that accesses the data is within the `.then()` block, guaranteeing that the data has loaded before being used.