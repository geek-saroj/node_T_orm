import * as XLSX from 'xlsx';

// Define the type for the row data
type Row = (string | number)[]; // Adjust if you expect different types

export const parseExcelFile = (filePath: string): Row[] => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as Row[];
  
  console.log('Parsed Excel Data:', data); // Log data for debugging
  return data;
};
