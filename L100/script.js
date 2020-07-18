let status = document.getElementById("status");
let Bsup = document.getElementById("Bsup");

let chkVR = document.getElementById("chkVR");
let chkAR = document.getElementById("chkAR");


if(navigator.xr){
    Bsup.innerHTML = "Your Browser supports WebXR!";
    chkVR.disabled=false;
    chkAR.disabled=false;

}else{
    Bsup.innerHTML = "Your Browser does not support WebXR!"
    chkVR.disabled=true;
    chkAR.disabled=true;
    status.innerHTML = "Please try with a WebXR supported Browser.";
    
}

chkVR.addEventListener("click",async ()=>{
    const supported = await navigator.xr.isSessionSupported('immersive-vr');
    if (supported) {
        status.innerHTML = "VR supported";
    // 'immersive-vr' sessions are supported.
    // Page should advertise support to the user.
    } else {
    // 'immersive-vr' sessions are not supported.
    status.innerHTML = "VR not supported";

    }


},false)

chkAR.addEventListener("click",async ()=>{
    const supported = await navigator.xr.isSessionSupported('immersive-ar');
    if (supported) {
        status.innerHTML = "AR supported";
    // 'immersive-vr' sessions are supported.
    // Page should advertise support to the user.
    } else {
    // 'immersive-vr' sessions are not supported.
    status.innerHTML = "AR not supported";

    }


},false)