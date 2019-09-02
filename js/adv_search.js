$(document).ready(function(){
    
  $("#myInput").on("keyup", function() {
      
    var value = $(this).val().toLowerCase();
    $("#project-list tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

var dept = document.getElementById('dept');

var year = document.getElementById('year');
var yearch = document.getElementById("yearc").value;
var deptch = document.getElementById("deptc").value;
var table = document.getElementById("tbid");
$("#yearc").on('change', function() {
  if ($(this).is(':checked')) {
    $(this).attr('value', 'true');
  } else {
    $(this).attr('value', 'false');
  }

  yearch = document.getElementById("yearc").value;
});
$("#deptc").on('change', function() {
  if ($(this).is(':checked')) {
    $(this).attr('value', 'true');
  } else {
    $(this).attr('value', 'false');
  }

  deptch = document.getElementById("deptc").value;
});

var search = document.getElementById("search");


search.addEventListener('click', letsgo);
function letsgo() {
  console.log(yearch);
  console.log(deptch);
  document.getElementById("tbid").innerHTML = " ";

  if((yearch == "true") && (deptch == "true")) {
    firebase.firestore().collection("project").where('dept', '==', dept.value).where('acadyear','==',year.value).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.id);
        renderproject(doc);
        
      })
    });
  }
  else if((yearch == "true") && (deptch == "false")) {
    firebase.firestore().collection("project").where('acadyear','==',year.value).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.id);
        renderproject(doc);
        
      })
    });
  }
  else if((yearch == "false") && (deptch == "true")) {
    firebase.firestore().collection("project").where('dept', '==', dept.value).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.id);
        renderproject(doc);
        
      })
    });
  }



  

}


// function letsgo() {
//     console.log("letgo");
//     document.getElementById("tbid").innerHTML='none';
//     firebase.firestore().collection("project").where('dept', '==', dept.value).where('score', '==', score.value).where('acadyear', '==', year.value).get().then((snapshot) => {
//         snapshot.docs.forEach(doc => {
//           console.log(doc.id);
//           renderproject(doc);
          
//         })
//       });
// }



  

  function renderproject(doc){
      
    console.log("render ke andar")
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    
   
    
    
    

    cell0.innerHTML = doc.data().acadyear;
    cell1.innerHTML = doc.data().dept;
    cell2.innerHTML = doc.data().class;
    cell3.innerHTML = doc.data().name;
    cell4.innerHTML = doc.data().domain;
    cell5.innerHTML = doc.data().title;
    cell6.innerHTML = doc.data().guide;
    cell7.innerHTML = doc.data().score;
    
    
  }

//   $(document).ready(function() {
//     // Setup - add a text input to each footer cell
//     $('#project-list tfoot th').each( function () {
//         var title = $(this).text();
//         $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
//     } );
 
//     // DataTable
//     var table = $('#project-list').DataTable();
 
//     // Apply the search
//     table.columns().every( function () {
//         var that = this;
 
//         $( 'input', this.footer() ).on( 'keyup change clear', function () {
//             if ( that.search() !== this.value ) {
//                 that
//                     .search( this.value )
//                     .draw();
//             }
//         } );
//     } );
// } );
