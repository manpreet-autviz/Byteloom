import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FinancialApprovalsComponent } from './pages/financial-approvals/financial-approvals.component';
import { DisbursalComponent } from './pages/disbursal/disbursal.component';
import { TatAnalysisComponent } from './pages/tat-analysis/tat-analysis.component';
import { TatAnalysisTablesComponent } from './pages/tat-analysis-tables/tat-analysis-tables.component';
import { RejectionAnalysisComponent } from './pages/rejection-analysis/rejection-analysis.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { BusinessInsightsComponent } from './pages/business-insights/business-insights.component';
import { ThreeSixtyComponent } from './pages/three-sixty/three-sixty.component';
import { ProductivitySalesComponent } from './pages/productivity-sales/productivity-sales.component';
import { ChannelPartnersComponent } from './pages/channel-partners/channel-partners.component';
import { CreditComponent } from './pages/credit/credit.component';
import { TechnicalComponent } from './technical/technical.component';
import { LegalComponent } from './pages/legal/legal.component';
import { ChequesSummaryComponent } from './pages/cheques-summary/cheques-summary.component';
import { OtcPddComponent } from './pages/otc-pdd/otc-pdd.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'financial-approvals', component: FinancialApprovalsComponent },
  { path: 'disbursal', component: DisbursalComponent },
  { path: 'tat-analysis', component: TatAnalysisComponent },
  { path: 'tat-table/:data', component: TatAnalysisTablesComponent },
  { path: 'rejection-ananlysis', component: RejectionAnalysisComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'business-insights', component: BusinessInsightsComponent },
  { path: '360', component: ThreeSixtyComponent },
  { path: 'productivity/sales', component: ProductivitySalesComponent },
  { path: 'productivity/channel-partner', component: ChannelPartnersComponent },
  { path: 'productivity/credit', component: CreditComponent },
  { path: 'productivity/technical', component: TechnicalComponent },
  { path: 'productivity/legal', component: LegalComponent },
  { path: 'summary', component: ChequesSummaryComponent },
  { path: 'otc-pdd', component: OtcPddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
