import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';  // Let's Take a Photo 5, Let's Take a Photo 6

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public photoURI: string; // Let's Take a Photo 7

  constructor(
    public navCtrl: NavController,
    public camera: Camera // Let's Take a Photo 5
  ) {
  }

  savePhoto() {
    // Let's Take a Photo 6
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    // Let's Take a Photo 7
    this.camera.getPicture(options)
      .then((data) => {
        this.photoURI = 'data:image/jpeg;base64,' + data;
      })
      .catch((error) => {
        console.log("Error in getPicture : " + error);
      });
  }

}
