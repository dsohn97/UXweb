$(function(){
    
    $('#play-pause, #video').click(function(){
        if (!$(event.target).is("#video-controls")) {
           if($('#video').get(0).paused == true){
               $('#video').get(0).play();
               $('#play-pause').html("<i class='fa fa-play'></i>");
            } else{
               $('#video').get(0).pause();
               $('#play-pause').html("<i class='fa fa-play'></i>");
            }
        }
    });
    
    $('#seek-bar').click(function(){
        var video = document.getElementById("video");
        var time = video.duration * (this.value / 100);
        video.currentTime = time;
    });
    
    $('#video').bind('timeupdate', function(){
        var value = (100 / this.duration) * this.currentTime;
        $('#seek-bar').val(value);
        if($('#video').get(0).paused == true){
            $('#play-pause').html("<i class='fa fa-play'></i>");
        }
    })
    
    $('#volume-bar').change(function(){
        $('#video').prop('volume', $(this).val());
    });

});