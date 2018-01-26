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
    authDomain: "comprasapp-d6265.firebaseapp.com",
    databaseURL: "https://comprasapp-d6265.firebaseio.com",
    projectId: "comprasapp-d6265",
    storageBucket: "comprasapp-d6265.appspot.com",
    messagingSenderId: "136869622283"
  })
}


}
