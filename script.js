
var usersInChat = [];

$(function(){
  var channelName = "MrsDiz";
  console.log("I'm ready, Mr. Krabs!");

  console.log(usersInChat);

  ComfyJS.onChat = ( user, command, message, flags, extra ) => {
    var messageElement = "<div class='message'>"+
      "<span class='userName bold'>"+user+"</span>"+
      "<span class='messageContent'>"+command+"</span>"
    +"</div>";

    $('#messagesList').append(messageElement);
    $('#messagesList').animate({scrollTop: $('#messagesList')[0].scrollHeight}, 500);
  }

  ComfyJS.onJoin=(user, self, extra) => {
      console.log(user+' joined chat');

      AddEvent('https://img.icons8.com/material/24/42ff87/chat--v1.png',
      user+' just joined.');

      if(!usersInChat.find(findUsername, user)){
        usersInChat.push(user);
        $('#viewerCount').html('<img src="https://img.icons8.com/ios-glyphs/30/ffffff/visible.png"/>'+usersInChat.length);
      }
  }

  ComfyJS.onPart=(user, self, extra) => {
      console.log(user+' left chat');

      AddEvent('https://img.icons8.com/material/24/ff6ba1/chat--v1.png',
      user+' just left.');

      if(usersInChat.find(findUsername, user))
      {
        var index = usersInChat.indexOf(user);
        if(index > -1){
          usersInChat.splice(index, 1);
          $('#viewerCount').html('<img src="https://img.icons8.com/ios-glyphs/30/ffffff/visible.png"/>'+usersInChat.length);
        }
      }
  }

  ComfyJS.onHosted=(user, viewers, autohost, extra) => {
      console.log(user+' hosted');

      AddEvent('https://img.icons8.com/android/24/ff6ba1/retro-tv.png',
      user+' hosted with '+viewers+' viewers.');
  }

  ComfyJS.onRaid=(user, viewers, extra) => {
      console.log(user+' raided');

      AddEvent('https://img.icons8.com/ios-glyphs/30/ff6ba1/baby-footprints-path.png',
      user+' raided with '+viewers+' viewers.');
  }

  ComfyJS.onCheer=(user, message, bits, flags, extra) => {
      console.log(user+' cheered');

      AddEvent('https://img.icons8.com/ios-filled/50/42ff87/diamond--v1.png',
      user+' cheered '+bits+' bits. They said: <span class="bold">"'+message+'"</span>.');
  }

  ComfyJS.onSub=(user, message, subTierInfo, extra) => {
      console.log(user+' subbed. ', subTierInfo.planName);

      AddEvent('https://img.icons8.com/material-sharp/24/42ff87/star.png',
      user+' subbed with '+subTierInfo.planName+' sub. They said: <span class="italic">"'+message+'"</span>.');
  }

  ComfyJS.onResub=(user, message, streamMonths, cumulativeMonths, subTierInfo, extra) => {
      console.log(user+' subbed. ', subTierInfo.planName);

      AddEvent('https://img.icons8.com/material-sharp/24/ffd000/star.png',
      user+' subbed with '+subTierInfo.planName+' sub. They\'ve been subbed for  <span class="bold">'+streamMonths+' months</span>.'+
       +'They said: <span class="italic">"'+message+'"</span>.');
  }

  ComfyJS.onSubGift=( gifterUser, streakMonths, recipientUser, senderCount, subTierInfo, extra ) => {
      console.log(user+' subbed. ', subTierInfo.planName);

      AddEvent('https://img.icons8.com/metro/26/42ff87/gift.png',
      gifterUser+' gifted a '+subTierInfo.planName+' sub to '+recipientUser+'. They\'ve gifted '+senderCount+' subs so far!');
  }

  ComfyJS.onGiftSubContinue=(user, sender, extra) => {
      console.log(user+' resubbed');

      AddEvent('https://img.icons8.com/metro/26/ffd000/gift.png',
      sender+' continued '+user+'\'s sub for them!');
  }

  ComfyJS.onSubMysteryGift=( gifterUser, numbOfSubs, senderCount, subTierInfo, extra ) => {
      console.log(user+' subbed. ', subTierInfo.planName);

      AddEvent('https://img.icons8.com/pastel-glyph/64/42ff87/christmas-gift--v2.png',
      gifterUser+' gifted '+numbOfSubs+' '+subTierInfo.planName+' subs to the channel! They\'ve gifted '+senderCount+' to the channel.');
  }

  ComfyJS.Init( channelName );

  $('#channelName').html(channelName);

});


function AddEvent(image, content){
  var userElement = "<div class='event'><img src='"+image+"'/>"+
  content+"</div>";

  $('#eventsList').append(userElement);
  $('#eventsList').animate({scrollTop: $('#eventsList')[0].scrollHeight}, 500);
}

function findUsername(nameGiven, nameToFind){
  return nameGiven == nameToFind;
}
