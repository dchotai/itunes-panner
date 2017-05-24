function pan() {
    var x = 0;
    var y = 0;
    var valuePanDial = document.getElementById("slider").value;
    function setAudioContext() {
        if (typeof AudioContext !== "undefined") {
            return new AudioContext();
        } else if (typeof webkitAudioContext !== "undefined") {
            return new webkitAudioContext();
        } else if (typeof mozAudioContext !== "undefined") {
            return new mozAudioContext();
        } else {
            return "undefined";
        }
    }

    var context = setAudioContext();
    if (context === "undefined") {
        throw new Error("AudioContext not supported in this web browser.");
        return;
    }

    var aud = document.getElementById('source');

    var source = context.createMediaElementSource(aud);
    var panner = context.createStereoPanner();
    panner.panningModel = "equalpower";
    source.connect(panner);
    panner.connect(context.destination);

    $(".dial").knob({
        'change' : function (v) { 
            var x = Math.cos((90 - v) * Math.PI / 180);
            panner.pan.value = x;
        },
        'max':90,
        'min':-90,
        'angleOffset':-90,
        'cursor':10,
        'angleArc':180,
    });

}
pan();
