function Settings() {
if ((typeof Camera !== "undefined")) {
this.destinationType = Camera.DestinationType.FILE_URI; // cameraOptions: destinationType
this.sourceType = Camera.PictureSourceType.CAMERA; // cameraOptions: sourceType
this.mediaType = Camera.MediaType.PICTURE; // cameraOptions: mediaType
}
this.quality = 100; // cameraOptions: quality
this.targetWidth = 600; // cameraOptions: targetWidth
this.targetHeight = 1000; // cameraOptions: targetHeight
this.allowEdit = false; // cameraOptions: allowEdit
this.correctOrientation = false;
//this.cameraDirection = 0;
this.positionPaysage = true;
this.encodingType = (typeof Camera !== "undefined") ? Camera.EncodingType.JPEG : 0; // cameraOptions: encodingType
this.saveToPhotoAlbum = false; // cameraOptions: saveToPhotoAlbum
this.popoverOptions = new CameraPopoverOptions(100, 100, 100, 100, Camera.PopoverArrowDirection.ARROW_DOWN); // cameraOptions: popoverOptions
}

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
$("#open_camera_button").bind ("click", onCapture);
$("#open_gallery_button").bind ("click", onGallery);
$("#open_SAVEDPHOTOALBUM_button").bind ("click", onSAVEDPHOTOALBUM);	
$("#open_network_button").bind ("click", onNetwork);
$("#open_geolocation_button").bind ("click", onGeolocation);
$("#open_acceleration_button").bind ("click", onAcceleration);
$("#open_compass_button").bind ("click", onCompass);
$("#open_OrientationChange_button").bind ("click", onOrientationChange);
}
	
function onCapture() {
var settings;
settings = new Settings();

navigator.camera.getPicture(onCaptureSuccess, onCaptureError, { quality : settings.quality,
                                                                    destinationType : settings.destinationType,
                                                                    sourceType : settings.sourceType,
                                                                    allowEdit : settings.allowEdit,
                                                                    encodingType : settings.encodingType,
                                                                    targetWidth : settings.targetWidth,
                                                                    targetHeight : settings.targetHeight,
                                                                    mediaType: settings.mediaType,
                                                                    saveToPhotoAlbum : settings.saveToPhotoAlbum,
                                                                    correctOrientation: settings.correctOrientation,
								    cameraDirection: settings.cameraDirection,
                                                                    popoverOptions : settings.popoverOptions
                                                                  });	
    
function onCaptureSuccess(imageData) {}
function onCaptureError(message) {alert(message); }
}

function onGallery() {
var settings;
settings = new Settings();

navigator.camera.getPicture(onGallerySuccess, onGalleryError, { quality : settings.quality,
                                                                    destinationType : settings.destinationType,
                                                                    sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
                                                                    allowEdit : settings.allowEdit,
                                                                    encodingType : settings.encodingType,
                                                                    targetWidth : settings.targetWidth,
                                                                    targetHeight : settings.targetHeight,
                                                                    mediaType: settings.mediaType,
                                                                    saveToPhotoAlbum : settings.saveToPhotoAlbum,
                                                                    correctOrientation: settings.correctOrientation,
								    cameraDirection: settings.cameraDirection,
                                                                    popoverOptions : settings.popoverOptions
                                                                  });	
    
function onGallerySuccess(imageData) {}
function onGalleryError(message) {alert(message); }
}

function onSAVEDPHOTOALBUM() {
var settings;
settings = new Settings();

navigator.camera.getPicture(onGallerySuccess, onGalleryError, { quality : settings.quality,
                                                                    destinationType : settings.destinationType,
                                                                    sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM,
                                                                    allowEdit : settings.allowEdit,
                                                                    encodingType : settings.encodingType,
                                                                    targetWidth : settings.targetWidth,
                                                                    targetHeight : settings.targetHeight,
                                                                    mediaType: settings.mediaType,
                                                                    saveToPhotoAlbum : settings.saveToPhotoAlbum,
                                                                    correctOrientation: settings.correctOrientation,
								    cameraDirection: settings.cameraDirection,
                                                                    popoverOptions : settings.popoverOptions
                                                                  });	
    
function onGallerySuccess(imageData) {}
function onGalleryError(message) {alert(message); }
}



function onNetwork() {
	var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Connexion inconnue';
        states[Connection.ETHERNET] = 'Connexion Ethernet';
        states[Connection.WIFI] = 'Connexion WiFi';
        states[Connection.CELL_2G] = 'Connexion 2G';
        states[Connection.CELL_3G] = 'Connexion 3G';
        states[Connection.CELL_4G] = 'Connexion 4G';
        states[Connection.NONE] = 'Pas de connexion réseau';

alert(states[networkState]);

}

function onGeolocation() {
navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);

function geolocationSuccess(position) {alert(position.coords.latitude);}
function geolocationError(error) {alert('error');}
}


function onAcceleration() {
navigator.accelerometer.getCurrentAcceleration(accelerometerSuccessPortrait, accelerometerErrorPortrait);
	
function accelerometerSuccessPortrait(acceleration) {alert(acceleration.x);}
function accelerometerErrorPortrait(error) {alert('error');}
}

function onCompass() {
var options = {
    frequency: 3000
}; // Update every 3 seconds

var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
	
function compassSuccess(acceleration) {alert(heading.magneticHeading);}
function compassError(error) {alert('error');}
}

function onOrientationChange() {alert('onOrientationChange');
alert(window.orientation) ;
}
