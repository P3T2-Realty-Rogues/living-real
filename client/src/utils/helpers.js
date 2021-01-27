
// Utility function to pluralize a noun, based on an existing count value.
export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

export default function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


// Utility function to open/setup the local database
export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open a connection to the db
    const request = window.indexedDB.open('realdb', 1);

    // Create variables to hold references to the database, transactions (tx), and the object store
    let db, tx, store;

    // If the version has changed (or if this is the first time using the database), run this method and create the three object stores.
    request.onupgradeneeded = function (e) {
      // This function will only run if the version number changes (or initially doesn't exist).

      const db = request.result;
      // Create object store for each type of data and set "primary" key index to be the `_id` of the data
      db.createObjectStore('user', { keyPath: '_id' });
      db.createObjectStore('properties', { keyPath: '_id' });
    };

    // Handle any errors with connecting
    request.onerror = function (e) {
      console.log('There was an error setting up the local DB.');
    };

    // Assuming the database opened successfully
    request.onsuccess = function (e) {
      // Save a reference of the database to the `db` variable
      db = request.result;

      // Open a transaction to do whatever we pass into `storeName` (must match one of the object store names)
      tx = db.transaction(storeName, 'readwrite');

      // Save a reference to that object store
      store = tx.objectStore(storeName);

      // If there's any errors, this event listener will report it
      db.onerror = function (e) {
        console.log('Error transacting with the local database: ', e);
      };

      // Perform the desired action, based on the parameter passed into this function.
      switch (method) {

        case 'put':
          store.put(object);             // add new data, overwrite existing data
          resolve(object);
          break;

        case 'get':
          const all = store.getAll();    // get everything in the global store
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;

        case 'delete':                    // permits deleting (removing) items while off-line.
          store.delete(object._id);
          break;

        default:
          console.log('Invalid method requested.');
          break;
      }

      // When the transaction is complete, this event listener will close the connection
      tx.oncomplete = function () {
        db.close();
      };
    };

  });
}