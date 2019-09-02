firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      
      var user = firebase.auth().currentUser;
      var email_id = user.email;
      
     
      
    
      if(user != null){
  
        
        document.getElementById("user").innerHTML = email_id;
  
      }
  
    } else {
      // No user is signed in.
  
     
     window.location.href = "index.html";
  
    }
  });

  $(document).ready(function(){
    
    $("#myInput").on("keyup", function() {
        
      var value = $(this).val().toLowerCase();
      $("#title-list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  const titleList = document.querySelector('#title-list');
  firebase.firestore().collection("project").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id);
      renderTitle(doc);
      
    })
  });

  function renderTitle(doc){
    
    let div = document.createElement('div');
    
    
    let li = document.createElement('li');
    //let title = document.createElement('a');
    let domain = document.createElement('span');
   
    let guide = document.createElement('span');
    let dept = document.createElement('span');
    let cless = document.createElement('span');
    let acadyear = document.createElement('span');
    let score = document.createElement('span');
    let rsp = document.createElement('span');
    li.setAttribute('data-id',doc.id);
    li.setAttribute('class',"docData");
    jQuery('<a/>', {
      href: '#',
      name: 'title',
      id: doc.id,
      html: doc.data().title,
      
      }).bind('click', function(){
        console.log(this.id);
        document.getElementById("fourblock").style.display = "none";
        document.getElementById("section-counter").style.display = "none";
        
        jQuery('<form/>', {
          name: 'detail',
          id: "detail",
          
          
          }).appendTo(div);
          menu.appendChild(div);
          jQuery('<h1/>', {
            name: "title",
            id: 'title',
            html: doc.data().title,
          }).appendTo(detail);
          jQuery('<h2/>', {
            name: "domain",
            id: 'domain',
            html: doc.data().domain,
          }).appendTo(detail);
          
          $('#detail').append("<br/>" + "Student Name: ");
          $('#detail').append(" " + doc.data().name);
          $('#detail').append("<br/>" + "Guide Name: ");
          $('#detail').append(" " + doc.data().guide);
          $('#detail').append("<br/>" + "Class: ");
          $('#detail').append(" " + doc.data().dept);
          $('#detail').append("    " + doc.data().class);
          $('#detail').append("<br/>" + "Score: ");
          $('#detail').append(" " + doc.data().score);
          $('#detail').append("<br/>" + "Research Paper Published: ");
          $('#detail').append(" " + doc.data().researchpaper);
          $('#detail').append("<br/>" + "Academic Year: ");
          $('#detail').append(" " + doc.data().acadyear);
          $('#detail').append("<br/>");
          jQuery('<a/>',{
            name: 'video',
            id: "video",
            html: 'view video',
            href: doc.data().video,
          }).appendTo(detail);
          $('#detail').append("<br/>");
          jQuery('<a/>',{
            name: 'video',
            id: "video",
            html: 'view report',
            href: doc.data().report,
          }).appendTo(detail);
          $('#detail').append("<br/>");
          jQuery('<a/>',{
            name: 'video',
            id: "video",
            html: 'view presentation',
            href: doc.data().presentation,
          }).appendTo(detail);


      }).appendTo(li);

      
    // title.textContent = doc.data().title;
    domain.textContent = doc.data().domain;
    guide.textContent = doc.data().guide;
    dept.textContent = doc.data().dept;
    cless.textContent = doc.data().class;
    score.textContent = doc.data().score;
    acadyear.textContent = doc.data().acadyear;
   
    
    
    // title.setAttribute('class',"tlink");
    // title.setAttribute('href',"#");
    
    
    
    
    // li.appendChild(title);
    li.appendChild(domain);
    li.appendChild(guide);
    li.appendChild(dept);
    li.appendChild(cless);
    li.appendChild(score);
    li.appendChild(acadyear);
    

    titleList.appendChild(li);



    

}