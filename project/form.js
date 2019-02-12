// -------- JS FOR INPUT TEXT AND TEXTAREA--------------
function focus_label(label_id,id){

  var data = document.getElementById(id).value;
  // alert();
  if (data != "") {
    var label_element = document.getElementById(label_id);
    label_element.classList.add("label_focus");
    // alert(data);
   }
  else{
    var label_element = document.getElementById(label_id);
    label_element.classList.remove("label_focus");

  }
}

// JS FOR NEXT SLIDE

  var count=0;
  var no_count = 0;
function nextSlide(){
  count=count+1;
  var nex_id = document.getElementsByClassName("slide")[count].id;
  var prev_id = document.getElementsByClassName("slide")[count- (no_count+1)].id;
  var nex_element = document.getElementById(nex_id);
  nex_element.classList.remove("none");
  var prev_element = document.getElementById(prev_id);
  prev_element.classList.add("none");
  if(count>0){
    var prev_btn = document.getElementById("previous");
    prev_btn.classList.remove("none");
  }
  if(count==5){
    var submit_btn = document.getElementById("submit");
    submit_btn.classList.remove("none");
    var next_btn = document.getElementById("next");
    next_btn.classList.add("none");
  }
  else{
    var submit_btn = document.getElementById("submit");
    submit_btn.classList.add("none");
    var next_btn = document.getElementById("next");
    next_btn.classList.remove("none");
  }

  var nex_state = document.getElementsByClassName("state")[count].id;
  var prev_state = document.getElementsByClassName("state")[count - (no_count+1)].id;
  var nex_state_element = document.getElementById(nex_state);
  var prev_state_element = document.getElementById(prev_state);
  nex_state_element.classList.add("active");
  nex_state_element.classList.add("active_state");
  prev_state_element.classList.remove("active_state");

  no_count = 0;
}

// JS FOR PREVIOUS SLIDE
function previousSlide(){
  count=count-1;
  var prev_id = document.getElementsByClassName("slide")[count].id;
  var nex_id = document.getElementsByClassName("slide")[count-(no_count - 1)].id;
  var nex_element = document.getElementById(nex_id);
  nex_element.classList.add("none");
  var prev_element = document.getElementById(prev_id);
  prev_element.classList.remove("none");
  if(count<5){
    var submit_btn = document.getElementById("submit");
    submit_btn.classList.add("none");
    var next_btn = document.getElementById("next");
    next_btn.classList.remove("none");
  }
  if(count==0){
    var prev_btn = document.getElementById("previous");
    prev_btn.classList.add("none");
  }

  var nex_state = document.getElementsByClassName("state")[count+1].id;
  var nex_active_state = document.getElementsByClassName("state")[count-(no_count - 1)].id;
  var prev_state = document.getElementsByClassName("state")[count].id;
  var nex_state_element = document.getElementById(nex_state);
  var nex_active_state_element = document.getElementById(nex_active_state);
  var prev_state_element = document.getElementById(prev_state);
  nex_state_element.classList.remove("active");
  nex_active_state_element.classList.remove("active_state");
  prev_state_element.classList.add("active_state");

  no_count = 0;

}
// FOR THIRD SLIDE FILE INPUT

$('.custom-file input').change(function (e) {
$(this).next('.custom-file-label').html(e.target.files[0].name);
});


// FOR SLIDE 6 ADDING AND REMOVING ROW
var ref_no=2;


function createRow() {

  var parent_element = document.getElementById("ref");
  var para = document.createElement("div");
  var ref = "row_" + ref_no;
  // alert(typeof(ref))
  // var ref_id = "'row_" + ref_no + "'";
  var row = "<div id="+ref+" class='row'>"+
  "<div class='col-md'><div class='group'>"+
  "<input type='text' id='ref_name_1' class='text' onfocusout='focus_label('label_ref_name_1','ref_name_1')'>"+
  "<label id='label_ref_name_1' class='text_label'>Name</label>"+
  "</div>"+
  "</div>"+
  "<div class='col-md'><div class='group'>"+
  "<input type='text' id='relationship_1' class='text' onfocusout='focus_label('label_relationship_1','relationship_1')'>"+
  "<label id='label_relationship_1' class='text_label'>Relationship</label>"+
  "</div></div>"+
  "<div class='col-md'><div class='group'>"+
  "<input type='number' id='ref_contact_1' class='text' onfocusout='focus_label('label_ref_contact_1','ref_contact_1')'>"+
  "<label id='label_ref_contact_1' class='text_label' >Contact No.:</label>"+
  "</div></div>"+
  "<div class='col-md-1'><div class='group'>"+
  "<a href='#' onclick=removeRow('"+ref+"')><ion-icon name='close' style='font-size: 30px; color: #c00;'></ion-icon></a></div></div>";
  para.innerHTML = row;
  parent_element.appendChild(para);
}

function removeRow(id) {    
  var element = document.getElementById(id);
  element.parentNode.removeChild(element);
}


// FOR LI CLICK 

function liClick(no) {

  if (no<count+1) {

    no_count = count - no;

    for (var i = 0; i < 6; i++) {
      if (i==no) {
        var slide_id = document.getElementsByClassName("slide")[i].id;
        var slide_element = document.getElementById(slide_id);
        slide_element.classList.remove("none");
        var li_id = document.getElementsByClassName("state")[i].id;
        var li_element = document.getElementById(li_id);
        li_element.classList.add("active_state");
        // alert(count);
      }
      else{
        var slide_id = document.getElementsByClassName("slide")[i].id;
        var slide_element = document.getElementById(slide_id);
        slide_element.classList.add("none");
        var li_id = document.getElementsByClassName("state")[i].id;
        var li_element = document.getElementById(li_id);
        li_element.classList.remove("active_state");
      }

    }
  
    
  }


}