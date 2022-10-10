import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IReportDataPayload } from 'src/app/core/models/IReportDataPayload';
import { CommonService } from 'src/app/core/services/common/common.service';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-school-registry',
  templateUrl: './school-registry.component.html',
  styleUrls: ['./school-registry.component.scss']
})
export class SchoolRegistryComponent implements OnInit {
  performanceLabel: string = 'State Wise Performance';
  national: boolean = true;
  udiseMetricsData: any;
  udiseStateData: any;
  filters: any;
  metricFilter: any;
  levels: any;
  isMapReportLoading = true;
  level: string = 'state';
  scatterData: any;
  filters1: any;
  levels1: any;
  fileName: string = "UDISE_District_Wise_Performanc";

  constructor(private readonly _configService: ConfigService, private readonly _commonService: CommonService, private readonly _spinner: NgxSpinnerService) {
    if(environment.config == 'state'){
      this.performanceLabel = 'District Wise Performance';
      this.national = false;
    }
    this.getUdiseMetricsData();
    this.getUdiseStateData(this.filters, this.levels, this.metricFilter);
    // this.getScatterData(this.filters, this.levels);
  }

  ngOnInit(): void {
  }
  
  onTabChanged($event: any): void {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      console.log('resize');
    }, 100);
  }

  getUdiseMetricsData() {
    this._configService.getVanityMetrics('udise').subscribe(vanityMetricsRes => {
      this.udiseMetricsData = vanityMetricsRes.result;
    });
  }

  getUdiseStateData(filters:any, levels:any, metricFilter: any) {
    let data: IReportDataPayload = {
      appName: environment.config.toLowerCase(),
      dataSourceName: 'school_registry',
      reportName: 'udise_performance',
      reportType: 'map',
      stateCode: environment.stateCode,
      filters,
      levels,
      metricFilter
    };

    this._commonService.getReportData(data).subscribe(res => {
      this._spinner.hide();
      this.isMapReportLoading = false;
      this.udiseStateData = res.result;
      this.filters = res.result.filters;
      this.levels = res.result.levels;
      this.levels.forEach((level:any) => {
        this.level = level.selected ? level.value : 'state'
      })
      this.metricFilter = res.result.metricFilter;
    }, err => {
      this.isMapReportLoading = false;
    });
  }

  filtersUpdated(filters: any): void {
    this.getUdiseStateData(filters, this.levels, this.metricFilter);
  }

  onSelectMetricFilter(metricFilter: any): void {
    this.getUdiseStateData(this.filters, this.levels, metricFilter);
  }

  onSelectLevel(event: any): void {
    this.getUdiseStateData(this.filters, event.items, this.metricFilter);
  }

  getScatterData(filters: any, levels: any): void {
    let data: IReportDataPayload = {
      appName: environment.config.toLowerCase(),
      dataSourceName: 'student_learning_survey',
      reportName: 'studentPerformance',
      reportType: 'scatterPlot',
      stateCode: environment.stateCode,
      filters,
      levels
    };

    this._commonService.getReportData(data).subscribe(res => {
      this.scatterData = res.result.data;
      this.filters1 = res.result.filters;
      this.levels1 = res.result.levels;
    }, error => {
      this.isMapReportLoading = false;
    });
  }

  scatterFiltersUpdated(filters: any): void {
    // this.getScatterData(filters, this.levels);
  }

  onScatterSelectLevel(event: any): void {
    event.items.forEach((level: any, levelInd: number) => {
        level.selected = levelInd === event.index;
    });

    // this.getScatterData(this.filters, event.items);
  }
}
