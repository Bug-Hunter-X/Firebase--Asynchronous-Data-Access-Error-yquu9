The Firebase SDK may throw an error if you try to access a property of a document snapshot before the snapshot has fully loaded.  This can happen if you use the `get()` method with an asynchronous callback without properly handling the asynchronous nature of the operation. For example:

```javascript
const docRef = doc(db, 'collection', 'docId');
docRef.get().then((doc) => {
  console.log(doc.data().someProperty); // Error if data hasn't loaded yet
});
```