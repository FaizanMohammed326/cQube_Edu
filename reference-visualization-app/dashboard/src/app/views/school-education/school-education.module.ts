import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { PGIRoutingModule } from './pgi-routing.module';
import { SchoolEducationRoutingModule } from './school-education-routing.module';  

import { MatTabsModule } from '@angular/material/tabs';
import { CqubeLibraryModule } from 'cqube-library';
import { SchoolEducationComponent } from './school-education.component';
import { ImplementationStatusComponent } from './pages/implementation-status/implementation-status.component';
import { StateWisePerformanceComponent } from './pages/state-wise-performance/state-wise-performance.component';


@NgModule({
  declarations: [
    SchoolEducationComponent,
    ImplementationStatusComponent,
    StateWisePerformanceComponent
  ],
  imports: [
    CommonModule,
    SchoolEducationRoutingModule,
    SharedModule,
    MatTabsModule,
    CqubeLibraryModule
  ]
})
export class SchoolEducationModule { }
