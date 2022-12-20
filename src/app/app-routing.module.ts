import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {
    path:'' ,redirectTo:'/contacts/admin',pathMatch:'full'
  },
  {
    path:'contacts/admin' , component:ContactManagerComponent
  },
  {
    path:'contacts/add' , component:AddContactComponent
  },
  {
    path:'contacts/edit/:contactId', component:UpdateContactComponent
  },
  {
  path:'contacts/view/:contactId' , component:ViewContactComponent
  },
  {
    path:'**' , component:PagenotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
