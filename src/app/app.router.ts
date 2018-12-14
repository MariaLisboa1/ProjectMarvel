import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent}
    
]
@NgModule({
    imports: [ RouterModule.forRoot(ROUTES)],
    exports: [ RouterModule ],
    declarations: []
  })
export class AppRoutingModule { }