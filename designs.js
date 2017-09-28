// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const color = $("#colorPicker");
const submit = $("#submit");
let color_value = $("#colorPicker").val();
let height, width;
getColor();


function getColor(){
  color.change(function(){
      color_value  = $("#colorPicker").val();
  });
}


submit.click(function(){
  makeGrid();
  $("#input_height").val(0);
  $("#input_width").val(0);
});

function createBoxes(){
  $("#pixel_canvas").append("<span type=button class=space></span>");
  $(".space").click(function(){

    $(this).css("background-color", color_value);

  });
}

function makeGrid() {
  height = $("#input_height").val();

  for(let i = 1; i <= height; i++){
    createBoxes();
    width = $("#input_width").val();

    let two = 2;
    while (two <= width) {

        createBoxes();
        two += 1;
    }
    $("#pixel_canvas").append("<p></p>");
  }
}
