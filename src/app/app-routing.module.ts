import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticlleComponent } from "./articlle/articlle.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditArticleComponent } from "./dashboard/edit-article/edit-article.component";
import { AuthGuardService } from "./guard/auth-guard.service";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "articles", component: ArticleListComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "dashboard/:key",
    component: EditArticleComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "dashboard/preview/:key",
    component: ArticlleComponent,
    canActivate: [AuthGuardService],
  },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "404", component: NotFoundComponent },
  { path: "", component: ArticleListComponent },
  { path: ":key", component: ArticlleComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
