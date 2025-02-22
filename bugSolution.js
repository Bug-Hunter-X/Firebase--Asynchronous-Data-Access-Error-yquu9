The correct way to access data from a Firebase document snapshot is to ensure the access is within the `then` block of the promise returned by `get()`. This way, you're certain the data is fully loaded before trying to access it.

```javascript
const docRef = doc(db, 'collection', 'docId');
docRef.get().then((doc) => {
  if (doc.exists()) {
    console.log(doc.data().someProperty); // Access data here; it's safe
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```
This revised code checks if the document exists before accessing its data. It also handles potential errors during the retrieval process, making the code more robust.