import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { NavigationEnd, Router,Event } from '@angular/router';
import { GithubService } from '../Service/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements  OnInit {
  URL:string = ''
  Markdown:string = ''
  constructor(private githubService: GithubService, private router: Router) {
   this.URL = this.router.url.split('/').slice(2)?.join('/')
  //  console.log(this.URL)
   this.githubService.GetReadMes(this.URL).subscribe((n:any) => this.Markdown = n)
   }
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if( event instanceof NavigationEnd){
        this.URL = this.router.url.split('/').slice(2)?.join('/')
        //  console.log(this.URL)
         this.githubService.GetReadMes(this.URL).subscribe((n:any) => this.Markdown = n)
      }
    })
  }
}
