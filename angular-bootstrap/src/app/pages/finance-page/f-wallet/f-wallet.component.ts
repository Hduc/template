import { Component } from '@angular/core';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { TotalIncomeComponent } from './total-income/total-income.component';
import { TotalExpensesComponent } from './total-expenses/total-expenses.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-f-wallet',
    imports: [TotalBalanceComponent, TotalIncomeComponent, TotalExpensesComponent, StatisticsComponent, TransactionHistoryComponent, CardComponent],
    templateUrl: './f-wallet.component.html',
    styleUrl: './f-wallet.component.scss'
})
export class FWalletComponent {}