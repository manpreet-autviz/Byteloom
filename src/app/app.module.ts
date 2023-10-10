import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { FinancialApprovalsComponent } from './pages/financial-approvals/financial-approvals.component';
import { DisbursalComponent } from './pages/disbursal/disbursal.component';
import { TatAnalysisComponent } from './pages/tat-analysis/tat-analysis.component';
import { TatAnalysisTablesComponent } from './pages/tat-analysis-tables/tat-analysis-tables.component';
import { TreeTableModule } from 'primeng/treetable';
import { RejectionAnalysisComponent } from './pages/rejection-analysis/rejection-analysis.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { BusinessInsightsComponent } from './pages/business-insights/business-insights.component';
import { ThreeSixtyComponent } from './pages/three-sixty/three-sixty.component';
import { ProductivitySalesComponent } from './pages/productivity-sales/productivity-sales.component';
import { ChannelPartnersComponent } from './pages/channel-partners/channel-partners.component';
import { CreditComponent } from './pages/credit/credit.component';

import { WorkInProgressComponent } from './pages/work-in-progress/work-in-progress.component';

import { TechnicalComponent } from './technical/technical.component';
import { LegalComponent } from './pages/legal/legal.component';
import { BusinessRMComponent } from './pages/business-rm/business-rm.component';
import { ChequesSummaryComponent } from './pages/cheques-summary/cheques-summary.component';
import { OtcPddComponent } from './pages/otc-pdd/otc-pdd.component';
import { BusinessSupervisorComponent } from './pages/business-supervisor/business-supervisor.component';
import { CreditCmComponent } from './pages/credit-cm/credit-cm.component';
import { CreditSupervisorComponent } from './pages/credit-supervisor/credit-supervisor.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    FinancialApprovalsComponent,
    DisbursalComponent,
    TatAnalysisComponent,
    TatAnalysisTablesComponent,
    RejectionAnalysisComponent,
    InsightsComponent,
    BusinessInsightsComponent,
    ThreeSixtyComponent,
    ProductivitySalesComponent,
    ChannelPartnersComponent,
    CreditComponent,

    WorkInProgressComponent,

    TechnicalComponent,
    LegalComponent,
    BusinessRMComponent,
    ChequesSummaryComponent,
    OtcPddComponent,
    BusinessSupervisorComponent,
    CreditCmComponent,
    CreditSupervisorComponent,

  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    FormsModule,
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
