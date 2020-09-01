import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  moduleId: module.id,
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  messageText = '';
  messages: Array<any>;
  socket: SocketIOClient.Socket;

constructor() {
//  this.socket = io.connect('http://proj.cafe24app.com');
 this.socket = io.connect('http://localhost:8002');
//  this.socket = io.connect();
}

ngOnInit() {
      this.messages = new Array();

      this.socket.on('message-received', (msg: any) => {
        console.log(msg);
          this.messages.push(msg);
      });
 }

 sendMessage() {
   if(this.messageText !== '') {
     this.socket.emit('send-message', {
      msg: this.messageText
    });
    this.messageText = '';
   }
  }

}
