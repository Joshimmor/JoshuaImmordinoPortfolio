import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../Service/github.service';

@Component({
  selector: 'app-ncaa',
  templateUrl: './ncaa.component.html',
  styleUrls: ['./ncaa.component.scss']
})
export class NCAAComponent implements OnInit {
  URl:string = 'Joshimmor/uberClone/master/README.md'
  Markdown:string = ''
  constructor(private githubService: GithubService) {
   this.githubService.GetReadMes(this.URl).subscribe((n:any) => this.Markdown = n)
   }

  ngOnInit(): void {
  }

}