import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule],

  styles:[`
    .toolbar {display:flex; 
              gap:8px; 
              align-items:center;
              flex-wrap:wrap;}
              input{ padding:6px 8px;}
              `],
  // template: `
  //   <h3>Template Reference variable (#var)</h3>
  //   <div class="toolbar">
  //     <input #box type="text" placeholder="Type Something" (input)="current=box.value"/>
  //     <button (click)="read(box.value)">Read Value</button>
  //     <button (click)="box.focus()">Focus Input</button>
  //      <span style="margin-left:8px;color:#666">length={{ box.value?.length || 0 }}</span>
  //   </div>
  //   <p>Current: {{ current || '(empty)' }}</p>
    
  // 
  template: `
    <button (click)="toggle()">Toggle user</button>
    <p>Email: {{ user?.profile?.email || '(none)' }}</p>
  `
})
export class App {
  // current = '';
  // read(val: string) { this.current = val ?? ''; }
  user:{profile?:{email?:string}}|undefined=undefined;
  toggle(){
    this.user=this.user ? undefined : {profile:{email:'a@example.com'}};
  }

}


bootstrapApplication(App);

