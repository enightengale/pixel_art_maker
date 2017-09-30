const color = $("#colorPicker");
const submit = $("#submit");
const sizePicker = document.querySelector("#sizePicker");
let color_value = $("#colorPicker").val();
let height, width;
let isGrid = false;
getColor();

//choose your color here!
function getColor(){
  color.change(function(){
      color_value  = $("#colorPicker").val();
  });
}

//on click listener for submit button
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    isGrid = true;
    makeGrid();
    $("#input_height").val(0);
    $("#input_width").val(0);
});

//dynamically creates new boxes for grid!
function createBoxes(){
  if(isGrid === true) {
    $(".space").remove();
    isGrid = false;
  }

    $("#pixel_canvas").append("<span type=button class=space></span>");
    $(".space").click(function(){

      $(this).css("background-color", color_value);

    });
}

//makes grid based on user input
function makeGrid() {
  isGrid = true;
  if(isGrid === true) {
    $(".space").remove();
    isGrid = false;
  }
  height = $("#input_height").val();
  width = $("#input_width").val();

  for(let i = 1; i <= height; i++){
    createBoxes();

    let two = 2;

    while (two <= width) {

        createBoxes();
        two += 1;
    }
    $("#pixel_canvas").append("<p></p>");
  }
}
