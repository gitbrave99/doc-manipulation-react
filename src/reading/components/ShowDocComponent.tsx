import { log } from "node:console";
import {  useEffect, useState } from "react";
import Spreadsheet, { CellBase } from "react-spreadsheet";
type Matrix<T> = Array<Array<T | undefined | any>>;
interface AGencia { value: string | number | null | undefined }

interface ShowDocComponentProps {
  pInitValue: Matrix<AGencia>;
  // setData: React.Dispatch<SetStateAction<Matrix<T>>>;
}

const ShowDocComponent = ({ pInitValue }: ShowDocComponentProps) => {
  const [data, setdata] = useState<Matrix<AGencia>>(pInitValue);

  // useEffect(() => {
  //   setdata(pInitValue)
  //   console.log("data: otra", data);
  //   return () => {
      
  //   }
  // }, [pInitValue])
  

  const addRow = () => {
    // Crear una fila vacía con la misma cantidad de columnas que la fila 0
    console.log("adding row");
    const newRow: CellBase<any>[] = new Array(data[0].length).fill({ value: "" });
    setdata(prevData => [...prevData, newRow]);
  };
  const addColumn = () => {
    setdata(prevData =>
      prevData.map(row => [...row, { value: "" }])
    );
  };

  


  return (
    <div className="bg-teal w-max">
      
      {pInitValue != undefined && <Spreadsheet data={data} onChange={setdata} />}
      <button onClick={addRow}>add row</button> <br />
      <button onClick={addColumn}>add col</button>
      
    </div>
  );
}
export default ShowDocComponent;