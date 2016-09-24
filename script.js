
$('#start').click(function(){
  $(this).hide()
  let alphabet = ['a', 'b']
  for(i = 0; i < alphabet.length ; i++){
    var div = $('<div></div>').addClass('square')
    $('main').append(div.html(alphabet[i]))
  }
})
