$(document).ready(function(){
    $("#myInput").on("click", function() {
        document.getElementById("fourblock").style.display = "none";
    });
    $("#myInput").on("keyup", function() {
        
      var value = $(this).val().toLowerCase();
      $("#title-list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
var provider = new firebase.auth.GoogleAuthProvider();
var web = document.getElementById("web");
web.addEventListener('click',webdomain);

var ml = document.getElementById("ml");
ml.addEventListener('click',mldomain);

var dsa = document.getElementById("dsa");
dsa.addEventListener('click',dsadomain);

var iot = document.getElementById("iot");
iot.addEventListener('click',iotdomain);
var signo = document.getElementById("signooo");

var admino = document.getElementById("adminooo");
admino.addEventListener('click',adminin);

function adminin() {
  window.location.href = "login.html";
}
 
signo.addEventListener('click',signin);
function signin() {
  console.log("sign");
    firebase.auth().signInWithPopup(provider).then(function(result){
      console.log("hgfh");
      var token = result.credential.accessToken;
      var user = result.user;
      
      console.log(token)
      console.log(user)
      window.location.href = "studentin.html";
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
    
}

function webdomain() {
  console.log("webbb");
  window.location.href = 'webdomain.html';
}

function mldomain() {
  console.log("mllbbb");
  window.location.href = 'mldomain.html';
}

function dsadomain() {
  console.log("bb");
  window.location.href = 'dsadomain.html';
}

function iotdomain() {
  console.log("wiotbb");
  window.location.href = 'iotdomain.html';
}


var idd;
const titleList = document.querySelector('#title-list');
const menu = document.querySelector('#menu');





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
var lii = document.getElementsByClassName("docData");
console.log(lii);
// $("#myInput").on("click", function() {
//   document.getElementById("fourblock").style.display = "none";
// });



firebase.firestore().collection("project").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id);
      renderTitle(doc);
      
    })
  });