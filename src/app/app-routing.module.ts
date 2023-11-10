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
import { WorkInProgressComponent } from './pages/work-in-progress/work-in-progress.component';
import { TechnicalComponent } from './pages/technical/technical.component';
import { LegalComponent } from './pages/legal/legal.component';
import { ChequesSummaryComponent } from './pages/cheques-summary/cheques-summary.component';
import { OtcPddComponent } from './pages/otc-pdd/otc-pdd.component';
import { BusinessRMComponent } from './pages/business-rm/business-rm.component';
import { BusinessSupervisorComponent } from './pages/business-supervisor/business-supervisor.component';
import { CreditCmComponent } from './pages/credit-cm/credit-cm.component';
import { CreditSupervisorComponent } from './pages/credit-supervisor/credit-supervisor.component';
import { OutOfTatComponent } from './pages/out-of-tat/out-of-tat.component';
import { WorkInProgressTablesComponent } from './pages/work-in-progress-tables/work-in-progress-tables.component';
import { PortfolioHealthComponent } from './pages/portfolio-health/portfolio-health.component';
import { FinalApprovalComponent } from './pages/final-approval/final-approval.component';
import { TeamHierarchyComponent } from './pages/team-hierarchy/team-hierarchy.component';
import { SearchingBasisComponent } from './pages/searching-basis/searching-basis.component';
import { BranchSearchComponent } from './pages/branch-search/branch-search.component';
import { TatLoginTableComponent } from './pages/tat-login-table/tat-login-table.component';
import { LoginAuthComponent } from './pages/login-auth/login-auth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'authentication', component: LoginAuthComponent },
  { path: 'home', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent ,canActivate: [AuthGuard]},
  { path: 'financial-approvals', component: FinancialApprovalsComponent ,canActivate: [AuthGuard]},
  { path: 'final-approvals', component: FinalApprovalComponent,canActivate: [AuthGuard] },
  { path: 'disbursal', component: DisbursalComponent,canActivate: [AuthGuard] },
  { path: 'tat-analysis', component: TatAnalysisComponent,canActivate: [AuthGuard] },
  { path: 'tat-table/:data', component: TatAnalysisTablesComponent,canActivate: [AuthGuard] },
  { path: 'rejection-ananlysis', component: RejectionAnalysisComponent,canActivate: [AuthGuard] },
  { path: 'insights', component: InsightsComponent,canActivate: [AuthGuard] },
  { path: 'business-insights', component: BusinessInsightsComponent,canActivate: [AuthGuard] },
  { path: '360', component: ThreeSixtyComponent,canActivate: [AuthGuard] },
  { path: 'productivity/sales', component: ProductivitySalesComponent,canActivate: [AuthGuard] },
  { path: 'productivity/channel-partner', component: ChannelPartnersComponent,canActivate: [AuthGuard] },
  { path: 'productivity/credit', component: CreditComponent,canActivate: [AuthGuard] },
  { path: 'work-in-progress', component: WorkInProgressComponent ,canActivate: [AuthGuard]},
  { path: 'productivity/technical', component: TechnicalComponent ,canActivate: [AuthGuard]},
  { path: 'productivity/legal', component: LegalComponent,canActivate: [AuthGuard] },
  { path: 'sanctioned-undisbursed-cases', component: ChequesSummaryComponent ,canActivate: [AuthGuard]},
  { path: 'otc-pdd', component: OtcPddComponent,canActivate: [AuthGuard] },
  { path: 'business-rm', component: BusinessRMComponent,canActivate: [AuthGuard] },
  { path: 'business-supervisor', component: BusinessSupervisorComponent ,canActivate: [AuthGuard]},
  { path: 'credit-cm', component: CreditCmComponent,},
  { path: 'credit-supervisor', component: CreditSupervisorComponent ,canActivate: [AuthGuard]},
  { path: 'out-of-tat', component: OutOfTatComponent,canActivate: [AuthGuard] },
  {
    path: 'work-in-progress-table/:data',
    component: WorkInProgressTablesComponent,
    canActivate: [AuthGuard]
  },
  { path: 'portfolio-health', component: PortfolioHealthComponent,canActivate: [AuthGuard] },
  { path: 'team-hierarchy', component: TeamHierarchyComponent,canActivate: [AuthGuard] },
  { path: 'search', component: SearchingBasisComponent ,canActivate: [AuthGuard]},
  { path: 'branch-search', component: BranchSearchComponent, canActivate: [AuthGuard]},
  { path: 'login-tat-table/:data', component: TatLoginTableComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
