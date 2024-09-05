import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AzureBlobService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File, token: string, url: string): Observable<any> {
    const blobUrl = `${url}/${file.name}?${token}`;
    const headers = new HttpHeaders({
      "x-ms-blob-type": "BlockBlob",
    });

    return this.http.put(blobUrl, file, { headers });
  }

  deleteFile(fileName: string, token: string, url: string): Observable<any> {
    const blobUrl = `${url}/${fileName}?${token}`;
    return this.http.delete(blobUrl);
  }

  getImageUrl(fileName: string, token: string, url: string): string {
    return `${url}/${fileName}?${token}`;
  }
}
