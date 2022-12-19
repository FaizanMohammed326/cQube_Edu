import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CqubeLibraryModule } from 'cqube-library';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StudentLearningSurveyComponent } from './student-learning-survey.component';
import { StudentLearningSurveyRoutingModule } from './student-learning-survey-routing.module';
import { StudentLearningSurveyProgramComponent } from './pages/student-learning-survey-program/student-learning-survey-program.component';
import { PerformanceComparisionByGradeSubjectComponent } from './pages/performance-comparision-by-grade-subject/performance-comparision-by-grade-subject.component';
import { ImplementationStatusComponent } from './pages/implementation-status/implementation-status.component';


@NgModule({
    declarations: [
        DashboardComponent,
        StudentLearningSurveyProgramComponent,
        StudentLearningSurveyComponent,
        PerformanceComparisionByGradeSubjectComponent,
        ImplementationStatusComponent,
    ],
    imports: [
        CommonModule,
        StudentLearningSurveyRoutingModule,
        MatTabsModule,
        SharedModule,
        CqubeLibraryModule,
        NgxSpinnerModule
    ]
})
export class StudentLearningSurveyModule { }
