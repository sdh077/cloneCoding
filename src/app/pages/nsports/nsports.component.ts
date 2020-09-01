import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-nsports',
    templateUrl: './nsports.component.html',
    styleUrls: ['./nsports.component.css']
})
export class NsportsComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.load();
    }
    load() {
        this.http.get('https://sports.news.naver.com/esports/news/list.nhn?isphoto=N')
            .subscribe(datas => {
                console.log(datas);
            });
    }

}
