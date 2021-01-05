import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  constructor(private http: HttpClient) { }

  async transform(src: string): Promise<string> {
    try {
      const imageBlob = await this.http.get(src, { responseType: 'blob' }).toPromise();
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(imageBlob);
      });
    } catch {
      return 'assets/cv-rejected/icn_photo_thumbnail.png';
    }
  }
}
