import { ReactNode } from 'react';

export interface Transaction {
    id: number,
    date: Date, // MM/DD/YYYY
    description: string, // title of transaction
    amount: number, // XX.YY
    category: Category, // subcategory of mint
    account: string // Venmo or CREDIT CARD
}

export interface csvData {
    'Date': string,
    'Description': string,
    'Original Description': string,
    'Amount': string,
    'Transaction Type': string,
    'Category': string,
    'Account Name': string,
    'Label': string,
    'Notes': string,
}

export interface Category {
    id: number,
    title: string,
    icon: ReactNode,
    color: string,
}