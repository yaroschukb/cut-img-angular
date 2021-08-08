import { Component, ViewChild, ElementRef } from '@angular/core';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import {base64ToFile} from './utils/blob.utils';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @ViewChild('inputFile') InputVariable: ElementRef;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    blobImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};
    showResizeSquares: boolean = true
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      this.blobImage = base64ToFile(this.croppedImage);
      console.log('ImageCropped', event, base64ToFile(this.croppedImage));
    }

    imageLoaded() {
        this.showCropper = true;
        console.log('Image loaded');
    }

    cropperReady(sourceImageDimensions: Dimensions) {
        console.log('Cropper ready', sourceImageDimensions);
    }
    savePhoto() {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(this.blobImage);
      link.download = `image.png`;
      link.click();
    }
    resetImage() {
        this.scale = 1;
        this.rotation = 0;
        this.canvasRotation = 0;
        this.transform = {};
    }

    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

}
