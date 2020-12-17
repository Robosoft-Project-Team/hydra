import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorFiles } from './shared/interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ HttpInterceptorFiles ],
  bootstrap: [AppComponent]
})
export class AppModule { }
