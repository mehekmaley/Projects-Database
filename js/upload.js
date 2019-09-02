var uploaderv = document.getElementById('uploaderv');
var uploaderr = document.getElementById('uploaderr');
var uploaderp = document.getElementById('uploaderp');
var fileButtonv = document.getElementById('fileButtonv');
var fileButtonr = document.getElementById('fileButtonr');
var fileButtonp = document.getElementById('fileButtonp');


var url1;

var storage1 = firebase.storage();
var storageRef1 = storage1.ref();
var video;
var ppt;
var report;
var fname = document.getElementById("f_name");
var lname = document.getElementById("l_name");
var name;
var gitid = document.getElementById("git_id");
var guide = document.getElementById("guide");
var title = document.getElementById("title");
var score = document.getElementById("score");
var acadyear = document.getElementById("acadyear");
var domain = document.getElementById("domain");
var respaper = document.getElementById("r_paper");
var dept = document.getElementById("dept");
var cl = document.getElementById("year");
var sub = document.getElementById('sub1');
var oid;
var file;

fileButtonv.addEventListener('change',function(e) {
    name = fname.value +" "+  lname.value;
    file = e.target.files[0];
    
    var storageRef = firebase.storage().ref('projects/'+name+'/'+title.value+'/'+'video/'+file.name);

    var task = storageRef.put(file);

    task.on('state_changed',function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploaderv.value = percentage;

    },
    
    function error(err) {
        console.log("errrror");
    },

    function complete() { 
        console.log("completeee");

    }

    )
})

fileButtonr.addEventListener('change',function(e) {
    
    file = e.target.files[0];
    
    var storageRef = firebase.storage().ref('projects/'+name+'/'+title.value+'/'+'report/'+file.name);

    var task = storageRef.put(file);

    task.on('state_changed',function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploaderr.value = percentage;

    },
    
    function error(err) {
        console.log("errrror");
    },

    function complete() { 
        console.log("completeee");

    }

    )
})

fileButtonp.addEventListener('change',function(e) {
    
    file = e.target.files[0];
    
    var storageRef = firebase.storage().ref('projects/'+name+'/'+title.value+'/'+'presentation/'+file.name);

    var task = storageRef.put(file);

    task.on('state_changed',function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploaderp.value = percentage;

    },
    
    function error(err) {
        console.log("errrror");
    },

    function complete() { 
        console.log("completeee");

    }

    )
})


    sub.addEventListener('click',submi);

    function submi()  {
       
        console.log("submi")
        firebase.firestore().collection("project").doc().set({
            name: name,
            github: gitid.value,
            guide: guide.value,
            researchpaper: respaper.value,
            tag: a,
            title: title.value,
            dept: dept.value,
            class: cl.value,
            score: score.value,
            acadyear: acadyear.value,
            domain: domain.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

            
        });
        getdocid();

        document.getElementById("f_name").value="";
        document.getElementById("l_name").value="";
         document.getElementById("guide").value="";
         document.getElementById("title").value="";
         document.getElementById("year").value="";
         document.getElementById("dept").value="";
         document.getElementById("r_paper").value="";
         document.getElementById("git_id").value="";
         document.getElementById('uploaderr').value = "";
         document.getElementById('uploaderp').value = "";
         document.getElementById('uploaderv').value = "";
         file = "";
         document.getElementById('fileButtonv').value= "";
         document.getElementById('fileButtonr').value= "";
         document.getElementById('fileButtonp').value= "";
         document.getElementById('acadyear').value = "";
         document.getElementById('score').value = "";
         document.getElementById('domain').value = "";
         document.getElementById('tag').value = "";
         
        
        

        console.log("submi")

    }

    function getdocid() {
        console.log("id start");
        firebase.firestore().collection("project").orderBy("timestamp","desc").limit(1).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
              
               oid = doc.id
            
               console.log(oid)
               
            })
          });
          video();
          report();
          presentation();
    }

    function video() {

        console.log("yoo");
        storageRef1.child('projects/'+name+'/'+title.value+'/'+'video').listAll().then(function(result) {
            
            result.items.forEach(function(dataRef){
                console.log("sss")
                console.log("img" + dataRef.toString());
                dataRef.getDownloadURL().then(function(url){
                    
                    url1 = url;
                    console.log(url1);
                    setvideourl(url1);
    
                })
                
        
            })
        });
    }
    function setvideourl(tt) {
        firebase.firestore().collection("project").doc(oid).set({
            video: tt,
            
        },{merge: true});
        console.log("hogya");
        console.log(dept);
        console.log($( "#myselect option:selected" ).text());
         
    }
    function report() {

        console.log("rep");
        storageRef1.child('projects/'+name+'/'+title.value+'/'+'report').listAll().then(function(result) {
            
            result.items.forEach(function(dataRef){
                console.log("sss")
                console.log("img" + dataRef.toString());
                dataRef.getDownloadURL().then(function(url){
                    
                    url1 = url;
                    console.log(url1);
                    setreporturl(url1);
    
                })
                
        
            })
        });
    }
    function setreporturl(tt) {
        firebase.firestore().collection("project").doc(oid).set({
            report: tt,
            
        },{merge: true});
        console.log("hogya");
         
    }
    function presentation() {

        console.log("pres");
        storageRef1.child('projects/'+name+'/'+title.value+'/'+'presentation').listAll().then(function(result) {
            
            result.items.forEach(function(dataRef){
                console.log("sss")
                console.log("img" + dataRef.toString());
                dataRef.getDownloadURL().then(function(url){
                    
                    url1 = url;
                    console.log(url1);
                    setpresurl(url1);
    
                })
                
        
            })
        });
    }
    function setpresurl(tt) {
        firebase.firestore().collection("project").doc(oid).set({
            presentation: tt,
            
        },{merge: true});
        console.log("hogya");
        
         
    }

window.onload = reload;

function reload() {
    document.getElementById("f_name").value="";
        document.getElementById("l_name").value="";
         document.getElementById("guide").value="";
         document.getElementById("dept").value="";
         document.getElementById("r_paper").value="";
         document.getElementById("year").value="";
         document.getElementById("title").value="";
         document.getElementById("git_id").value="";
         document.getElementById('uploaderr').value = "";
         document.getElementById('uploaderp').value = "";
         document.getElementById('uploaderv').value = "";
         file = "";
         document.getElementById('fileButtonv').value= "";
         document.getElementById('fileButtonr').value= "";
         document.getElementById('fileButtonp').value= "";
         document.getElementById('acadyear').value = "";
         document.getElementById('score').value = "";
         document.getElementById('domain').value = "";
         document.getElementById('tag').value = "";
}   




var $form,
	$input,
    $list;
    
var i = 0;
var a = [];


document.addEventListener("DOMContentLoaded", start);

function start() {
	$form = document.querySelector(".tag-form");
	$list = document.querySelector(".tag-list");
	$input = document.querySelector(".tag-input");
	
	
	$form.onsubmit = onSubmit;
	
	// keypress
	// $input.addEventListener("keypress", onKeyInput);
}

function onSubmit() {
	addTagFromInput();
	return false;
}

function onKeyInput(event) {
	console.log(event);
	if (event.key != "Enter") return;
	addTagFromInput();
}

function addTagFromInput() {
	var name = $input.value.replace(/^\s+/, "");
	if (name.length < 1) return;
    addTag(name);
    console.log(name);
    addArray(name);
	 $input.value = "";
}

function addArray(name) {
    a[i]=name;
    console.log(a[i]);
    i++;
}




function addTag(name) {
	var $tag_li = document.createElement("li"),
		$tag_a = document.createElement("a");
	
	$tag_a.innerText = name;
	$tag_a.href = "#";
	$tag_a.addEventListener("click", function (event) {
		event.preventDefault();
		$tag_li.remove();
		return false;
	});
	
	$tag_li.appendChild($tag_a);
	
	
	var len = $list.children.length;
	$list.insertBefore($tag_li, $list.children[len-1]);
}