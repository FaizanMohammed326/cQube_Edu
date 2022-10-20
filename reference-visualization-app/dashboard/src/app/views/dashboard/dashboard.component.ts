import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IDashboardMenu } from 'src/app/core/models/IDashboardCard';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardMenu: IDashboardMenu[] | any;
  isNvsk = environment.config.toLocaleLowerCase() === 'nvsk';
  constructor(private readonly _configService: ConfigService, private readonly _router: Router) {
    this._configService.getDashboardMetrics().subscribe((dashboardMenuResult: any) => {
      this.dashboardMenu = dashboardMenuResult.result.data;
    });
  }

  ngOnInit(): void {
  }

  onClickOfDashboardItem(cardInfo: IDashboardMenu | undefined): void {
    if (cardInfo) {      
      this._router.navigate([cardInfo.navigationURL.trim()]);
    }
  }

}
