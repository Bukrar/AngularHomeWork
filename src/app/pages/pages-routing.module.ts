import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { ArticleComponent } from '../pages/article/article.component';
import { RegisterComponent } from '../pages/register/register.component';
import { CreateComponent } from '../pages/create/create.component';
import { EditComponent } from '../pages/edit/edit.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "article/:id", component: ArticleComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "create", component: CreateComponent
  },
  {
    path: "edit", component: EditComponent
  },
  {
    path: "profile", component: ProfileComponent
  },
  {
    path: "settings", component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
