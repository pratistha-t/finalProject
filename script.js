/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", append);

function append() {
var response = $('.thoughts').val();
var time = $('.date').val();

  cardContainer.append(`<center> <div class="enter"> <input type="checkbox" class="checkbox"> <p>  ${response} ${time} </p> </div> </center>`);

  var checkbox = $('.checkbox');
  checkbox.on("click", remove);

$('.thoughts').val("");
$('.date').val("");
}

function remove() {
event.target.parentNode.remove();
}