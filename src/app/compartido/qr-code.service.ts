import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  private qrCodeUrlKey = 'qrCodeUrl';

  constructor() { }

  setQRCodeUrl(url: string) {
    localStorage.setItem(this.qrCodeUrlKey, url);
  }

  getQRCodeUrl(): string | null {
    return localStorage.getItem(this.qrCodeUrlKey);
  }
}
