firebase.firestore().collection("project").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id);
      renderproject(doc);
      
    })
  });