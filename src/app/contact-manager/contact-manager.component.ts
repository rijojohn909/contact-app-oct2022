import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/assets/server/services/api.service';
import { MyContact } from 'src/models/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  allcontacts:MyContact[]=[]

    searchKey:string=''

  constructor(private api:ApiService){}
  ngOnInit(): void {
   this.getAllContact()
  }
  //get all contact

  getAllContact(){
    this.api.getallContact().subscribe((data:any)=>{
      console.log(data);
      this.allcontacts = data
      
     })
  }
  //search
  search(event:any){
    this.searchKey = event.target.value
    
  }
  deleteContact(contactId:any){
     this.api.deleteContact(contactId)
    .subscribe((data:any)=>{
      // this.getAllContact()
      window.location.reload()
    })
  }

}
