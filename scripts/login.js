
$(function(){
  console.log("Ready");
  var channelStored = localStorage.getItem("twitch");
  //if a channel name is stored, go to feed and skip name change
  if(channelStored != null) window.location.href = "index.html";
});

function login(){
  var channel = $('#twitchChannelName').val();

  localStorage.setItem("twitch", channel);
  window.location.href = "index.html";
}
