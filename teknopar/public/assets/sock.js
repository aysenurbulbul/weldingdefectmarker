//socket for taking file's content from hidden text area
$(function () {
  var socket = io();
  $('#file').click(function(){
    socket.emit('chat message', $('#nane').val());
    //$('#m').val('');
    return false;
  });
});
