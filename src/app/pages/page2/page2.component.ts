import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  cafes = [
    {
      no: 0,
      name: '앤트러사이트',
      imgCnt: 5
    },
    {
      no: 1,
      name: '퀀커',
      imgCnt: 2
    }
  ];
  img_url: string;
  img_selector: number;
  cafe_selector: number;
  constructor(private http: HttpClient) {
    this.changeCafe(0);
   }

  ngOnInit() {
  }
  changeImg(num){
    this.img_selector = (this.img_selector +num +this.cafes[this.cafe_selector].imgCnt)%this.cafes[this.cafe_selector].imgCnt;
    this.img_url = `assets/king/${this.cafe_selector}-${this.img_selector}.jpeg`;
  }
  changeCafe( num ) {
    this.cafe_selector = num;
    this.img_selector = 0;
    this.changeImg(0);
  }

  code() {
    let app_key = 'ffb1ddce83a486e8f5ebe4cd67edb813';
    let redirect_uri = 'http://localhost:4200/kakaoLogin';
    this.http.get(`https://kauth.kakao.com/oauth/authorize?client_id=${app_key}&redirect_uri=${redirect_uri}&response_type=code`)
    .subscribe((data)=>{
      console.log(data);
    })
  }
}
