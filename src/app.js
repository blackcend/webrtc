const openStream = require('./openStream');
const Peer = require('simple-peer');
const $ = require('jquery');
//openStream();


// tao token
const p = new Peer({ initiator: location.hash === '#1', trickle: false });

// signal offer
p.on('signal', (token) => {
    $("#txtMySignal").val(JSON.stringify(token));
});

// signal answer
p.on('connect',()=>{
    setInterval(()=>p.send(Math.random),2000);
});

// Khi co data
p.on('data',data => console.log('Nhan du lieu: ' + data));

$("#btnConnect").click(()=>{
    const friendSignal = JSON.parse($("#txtFriendSignal").val());
    p.signal(friendSignal);
});

console.log('Hello World');