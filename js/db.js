const dbFootbal = idb.open('football', 1, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
        upgradeDb.createObjectStore('favorites', { 'keyPath': 'id' })
    }
  });

const savedTeamFav =  (favorite) => {
    dbFootbal
    .then(db => {
        const tx = db.transaction("favorites","readwrite");
        const store = tx.objectStore("favorites");
        console.log(favorite);
        store.add(favorite);
        return  tx.complete;
    })
    .then(() => {
      M.toast({html: 'Berhasil di tambahkan ke favorite team'});
    });
}

const getAll = () => {
  return new Promise((resolve, reject) => {
      dbFootbal
      .then((db) => {
        const tx = db.transaction("favorites", "readonly");
        const store = tx.objectStore("favorites");
        return store.getAll();
      })
      .then((favorites) => {
      resolve(favorites);
      });
  });
}

const getById = (id) => {
  return new Promise((resolve,reject) => {
    dbFootbal
    .then((db) => {
      const idi = parseInt(id);  
      const tx = db.transaction("favorites","readonly");
      const store = tx.objectStore("favorites");
      return store.get(idi);
    })
    .then((favorites) => {
      resolve(favorites);
    });
  });
}

const getDelete = (id) => {
   dbFootbal
   .then((db) => {
    const idi = parseInt(id);  
     const tx = db.transaction("favorites","readwrite");
     const store = tx.objectStore("favorites");
     store.delete(idi);
     return tx.complete;
   })
   .then(() => {
    M.toast({html: 'Berhasil di delete dari favorite team'});
  });
}

const deleteTeamListener = teamId => {
  const c = confirm("Hapus team ini dri favorite ?")
  if (c == true) {
    console.log(teamId);
    getDelete(teamId);
    window.location = "../index.html#saved";
  }
}


