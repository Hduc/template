import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { SelectionModel } from '@angular/cdk/collections';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-ct-wallet',
    imports: [RouterLink, NgIf, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule],
    templateUrl: './ct-wallet.component.html',
    styleUrl: './ct-wallet.component.scss'
})
export class CtWalletComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    displayedColumns: string[] = ['name', 'address', 'cryptoAsset', 'balance', 'lastTransactionDate', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}

export interface PeriodicElement {
    name: string;
    cryptoAsset: any;
    address: string;
    balance: string;
    lastTransactionDate: string;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        name: 'BTC Wallet',
        address: '3FZasd93cpjq2LkjuV5qJHunfnkLtktZc4',
        cryptoAsset: {
            img: 'images/cryptocurrencies/bitcoin.svg',
            name: 'Bitcoin',
            abbreviation: 'BTC'
        },
        balance: '0.25 BTC',
        lastTransactionDate: '2025-10-01',
        status: {
            active: true,
            inactive: false
        }
    },
    {
        name: 'ETH Wallet',
        address: '0x32Be343pjq2LkjuV5qJHunfnkLtktZc4',
        cryptoAsset: {
            img: 'images/cryptocurrencies/ethereum.svg',
            name: 'Ethereum',
            abbreviation: 'ETH'
        },
        balance: '5.2 ETH',
        lastTransactionDate: '2025-10-02',
        status: {
            active: true,
            inactive: false
        }
    },
    {
        name: 'BNB Wallet',
        address: 'DdzFFzCqrh3cpjq2LkjuV5qJHunfnkLtktZc4',
        cryptoAsset: {
            img: 'images/cryptocurrencies/binance.svg',
            name: 'Binance',
            abbreviation: 'BNB'
        },
        balance: '1000 BNB',
        lastTransactionDate: '2025-10-03',
        status: {
            active: false,
            inactive: true
        }
    },
    {
        name: 'USDT Wallet',
        address: 'Dsbeompjq2LkjuV5qJHunfnkLtktZc4',
        cryptoAsset: {
            img: 'images/cryptocurrencies/tether.svg',
            name: 'Tether',
            abbreviation: 'USDT'
        },
        balance: '2500 USDT',
        lastTransactionDate: '2025-10-04',
        status: {
            active: true,
            inactive: false
        }
    },
    {
        name: 'XRP Wallet',
        address: '4pN1bycd93cpjq2LkjuV5qJHunfnkLtktZc4',
        cryptoAsset: {
            img: 'images/cryptocurrencies/xrp.svg',
            name: 'XRP',
            abbreviation: 'XRP'
        },
        balance: '15 XRP',
        lastTransactionDate: '2025-10-05',
        status: {
            active: true,
            inactive: false
        }
    },
    {
        name: 'SOL Wallet',
        address: 'LZjTAtMjq2LkjuV5qJHunfnkLtktZc4',
        cryptoAsset: {
            img: 'images/cryptocurrencies/solana.svg',
            name: 'Solana',
            abbreviation: 'SOL'
        },
        balance: '12 SOL',
        lastTransactionDate: '2025-10-06',
        status: {
            active: true,
            inactive: false
        }
    },
    {
        name: 'USDC Wallet',
        address: '4cZtktLknfnuJq5VujkL2qjpc39dsaZF3',
        cryptoAsset: {
            img: 'images/cryptocurrencies/usdc.png',
            name: 'USDC',
            abbreviation: 'USDC'
        },
        balance: '0.5 USDC',
        lastTransactionDate: '2025-10-07',
        status: {
            active: true,
            inactive: false
        }
    },
    {
        name: 'TRX Wallet',
        address: '3FZbc3cpjq2LkjuV5qJHunfnkLtktZc4',
        cryptoAsset: {
            img: 'images/cryptocurrencies/tron.png',
            name: 'Tron',
            abbreviation: 'TRX'
        },
        balance: '1500 TRX',
        lastTransactionDate: '2025-10-08',
        status: {
            active: false,
            inactive: true
        }
    },
    {
        name: 'AVAX Wallet',
        address: '1FZbt93cpjq2LkjuV5qJHunfnkLtktZc4',
        cryptoAsset: {
            img: 'images/cryptocurrencies/avalanche.png',
            name: 'Avalanche',
            abbreviation: 'AVAX'
        },
        balance: '100 AVAX',
        lastTransactionDate: '2025-10-09',
        status: {
            active: true,
            inactive: false
        }
    },
    {
        name: 'LINK Wallet',
        address: '16cbfe2pjq2LkjuV5qJHunfnkLtktZc4',
        cryptoAsset: {
            img: 'images/cryptocurrencies/chainlink.png',
            name: 'Chainlink',
            abbreviation: 'LINK'
        },
        balance: '5000 LINK',
        lastTransactionDate: '2025-10-10',
        status: {
            active: true,
            inactive: false
        }
    }
];