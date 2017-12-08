import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyBq7N99JIab23_kgUQ58SIp3HDGv_nVptE",
    authDomain: "comprasapp-d6265.firebaseapp.com"
  })
}


}
