import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
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
    BusinessInsightsComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    FullCalendarModule,
    AppRoutingModule,
    FormsModule,
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
