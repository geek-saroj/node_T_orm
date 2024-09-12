import * as XLSX from 'xlsx';
import { writeFileSync } from 'fs';

// Generate dummy data
const generateData = (numRows: number) => {
  const data = [];
  for (let i = 1; i <= numRows; i++) {
    data.push({
      name: `Name ${i}`,
      email: `user${i}@example.com`
    });
  }
  return data;
};

// Create a new workbook and worksheet
const createExcelFile = (filePath: string, numRows: number) => {
  const workbook = XLSX.utils.book_new();
  const data = generateData(numRows);
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  writeFileSync(filePath, XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' }));
};

// Specify the file path and number of rows
const filePath = 'sample-data.xlsx';
const numRows = 10000;

createExcelFile(filePath, numRows);
// console.log(`Excel file with ${numRows} rows created at ${filePath}`);
