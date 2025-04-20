/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import { SetStateAction, useEffect, useState } from "react";
import { read, utils } from 'xlsx';
import Spreadsheet from "react-spreadsheet";
import { Input } from "@/components/ui/input";
 

type Matrix<T> = Array<Array<T | undefined>>;

// interface President {
//   Name: string;
//   Index: number;
// }
interface AGencia { value: string | number | null | undefined }

interface ImportExcelComponentProps<T>{
  // document:File|null,
  setDocument:React.Dispatch<SetStateAction<Matrix<AGencia>>>
}

export const ImportExcelComponent = <T,>({setDocument}:ImportExcelComponentProps<T>) => {
  // const [pres, setPres] = useState<Presidnt[]>([]);
  const [inputKey, setInputKey] = useState(Date.now());
  const [agencias, setAgencias] = useState<Matrix<AGencia>>([]);

  const resetInput = () => {
    setInputKey(Date.now()); // cambia la key => React recrea el input
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    const allowedExtensions = ['xlsx', 'xls'];
    const fileExtension = file.name.split('.')?.pop()?.toLowerCase()||"noformat/*  */";

    if (!allowedExtensions.includes(fileExtension)) {
      alert('Solo se permiten archivos Excel (.xlsx, .xls)');
    return;
    }

    reader.onload = (e) => {
      const result = e.target?.result;
      if (result == null ) {return;}
      const data = new Uint8Array(result as ArrayBuffer);
      console.info("data: ", data)
      const workbook = read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
      convertToRead(jsonData); 
    };

    
    reader.onerror = () => {
      console.error('Error de lectura del archivo');
      alert('No se pudo leer el archivo.');
    };
    reader.readAsArrayBuffer(file);
    // resetInput()
  };

  const convertToRead = (jsonData: unknown) => {
    if (!Array.isArray(jsonData)) {
      console.log("no es un array json");
      return;
    }
    const padre:Matrix<AGencia> = [];
    let fila:AGencia[] = [];

    jsonData.forEach(row => {
      row.forEach((cell:string | number | null | undefined) => {
        fila.push({ "value": cell })
      });
      padre.push(fila);
      fila = [];
    });
    setAgencias(padre);
    setDocument(padre)
  }

  // useEffect(() => {
  //   (async () => {
  //     /* Download from https://docs.sheetjs.com/pres.numbers */
  //     const f = await fetch("https://docs.sheetjs.com/pres.numbers");
  //     const ab = await f.arrayBuffer();
  //     /* parse */
  //     const wb = read(ab);
  //     /* generate array of presidents from the first worksheet */
  //     const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
  //     const data: President[] = utils.sheet_to_json<President>(ws); // generate objects
  //     /* update state */
  //     setPres(data); // update state
  //   })();
  // }, []);

  return (
    <>
          <Input 
          className="cursor-pointer hover:bg-slate-100 active:bg-slate-200"
          type="file" 
          key={inputKey} 
          onChange={handleFileUpload}
           accept=".xlsx,.xls"
          />
    </>
  )
}