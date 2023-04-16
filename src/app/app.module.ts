import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GridComponent } from './grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { GridNodeComponent } from './grid/grid-node/grid-node.component';
import { StoreModule } from '@ngrx/store';
import { gridReducer } from './shared/data-access/state/maze/maze.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MazeEffects } from './shared/data-access/state/maze/maze.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GridComponent,
    GridNodeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ grid: gridReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([MazeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
