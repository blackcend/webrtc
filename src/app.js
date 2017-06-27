const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');
const openStream = require('./openStream');

openStream(function (stream) {
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
    p.on("stream", friendStream => playVideo(friendStream, "friendStream"));
});






// signal answer
// p.on('connect',()=>{
//     setInterval(()=>p.send(Math.random),2000);
// });

// Khi co data
//p.on('data',data => console.log('Nhan du lieu: ' + data));



console.log('Hello World');