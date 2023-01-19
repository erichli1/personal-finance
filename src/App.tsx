import React from 'react';
import { Container, Divider } from '@chakra-ui/react'; 
import Categories from './CategoriesGuide';
import FileInput from './FileInput';
import RenderTransactions from './RenderTransactions';
import './App.css';

import { csvData, Transaction, Category } from './types';
import { CATEGORIES } from './categories';

import Papa from 'papaparse';

interface parseReturn {
  data: csvData[]
}

function App() {
  const [transactions, setTransactions] = React.useState<Transaction[]>();

  const updateFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results: parseReturn) {
          let processedData: Transaction[] = [];
          
          // process data: convert from csvData[] to Transaction[]
          results.data.map((item: csvData, index) => {
            // TODO: focus on everything since the start of the week
            let dateOfTransaction: Date = new Date(item.Date);
            let oneWeekAgo: Date = new Date(new Date().getTime() - 1000*60*60*24*7);

            // TODO: process subcategories into general categories (fun, food, etc.)
            // TODO: allow user-generated general categories and defining subcategory maps
            if (dateOfTransaction >= oneWeekAgo) {
              let tempTransaction: Transaction = {
                id: index,
                date: new Date(item.Date),
                description: item.Description,
                amount: item['Transaction Type'] === 'debit' ? Number(item.Amount) : -Number(item.Amount),
                category: CATEGORIES[4],
                account: item['Account Name'],
              };
              processedData.push(tempTransaction);
            }
          })

          setTransactions(processedData);
        },
      });
    }
  };

  const changeCategory = (transactionID: number, categoryID: number) => {
    console.log("Change transaction #" + transactionID + " to " + categoryID);
    if (transactions) {
      const newTransactions = transactions.map((transaction: Transaction, index) => {
        if (index === transactionID) {
          return {
            id: transaction.id,
            date: transaction.date,
            description: transaction.description,
            amount: transaction.amount,
            category: CATEGORIES[categoryID],
            account: transaction.account,
          };
        } else {
          return transaction;
        }
      });

      setTransactions(newTransactions);
    }
  }
  
  return (
    <Container maxWidth="75%">
      <FileInput onChange={updateFile} outline="none" accept=".csv" mt={5} />
      <Divider m={5} />
      <Categories />
      <Divider m={5} />
      <RenderTransactions data={transactions} changeCategory={changeCategory}/>
    </Container>
  );
}

export default App;
