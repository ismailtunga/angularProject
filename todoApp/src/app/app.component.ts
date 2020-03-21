import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  user = 'İsmail';
  items=[
    {aciklama:"Kahvaltı", aksiyon:"no"},
    {aciklama:"Spor", aksiyon:"no"},
    {aciklama:"Fatura", aksiyon:"no"},
    {aciklama:"Sinema", aksiyon:"no"},
  ]
}
