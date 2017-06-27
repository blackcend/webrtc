const playVideo = require('./playVideo');
function openStream(cb) {
    'use strict';
    // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // var constraints = {
    //     audio: false,
    //     video: true
    // }

    // const video = document.getElementById("localStream");

    // function successCallback(stream){
    //     window.stream = stream; // stream available to console
    //     if(window.URL){
    //         video.src = window.URL.createObjectURL(stream);
    //     }else{
    //         video.src = stream;
    //     }
    // }

    // function errorCallback(error){
    //     console.log('navigator.getUserMedia error ' + error);
    // }

    // navigator.getUserMedia(constraints, successCallback, errorCallback);
    
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(stream => {
            cb(stream);
        })
        .catch(err => console.log(err))
}

module.exports = openStream;