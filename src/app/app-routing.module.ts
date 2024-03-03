import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { BlocksComponent } from './blocks/blocks.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlockContainerComponent } from './block-components/block-container/block-container.component';

const routes:Routes=[
  {path:'documentation',component:DocumentationComponent},
  {path:'blocks',component:BlocksComponent},
  {path:'blockContainer',component:BlockContainerComponent},
  {path:'pricing',component:PricingComponent},
  { path:'',redirectTo:'/blocks',pathMatch:'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
