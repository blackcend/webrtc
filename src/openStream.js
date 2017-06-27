const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');
function openStream() {
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
            playVideo(stream, 'localStream')
            // tao token
            const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream: stream });
            // signal offer
            p.on('signal', (token) => {
                $("#txtMySignal").val(JSON.stringify(token));
            });
            // connect stream
            $("#btnConnect").click(() => {
                const friendSignal = JSON.parse($("#txtFriendSignal").val());
                p.signal(friendSignal);
            });
            // signal answer friendStream
            p.on("stream",friendStream => playVideo(friendStream,"friendStream"));

        })
        .catch(err => console.log(err))
}

module.exports = openStream;