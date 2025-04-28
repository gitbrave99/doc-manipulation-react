import React, { useState } from 'react'
import { AGencia, MatrixDoc2 } from '../interfaces/MatrixDoc.interfaces';
import { CellBase, Spreadsheet } from 'react-spreadsheet';

interface ShowDocComponentProps {
    pInitValue: MatrixDoc2<CellBase<any>>;
    // setData: React.Dispatch<SetStateAction<Matrix<T>>>;
  }


export const ShowDoc2Component = ({pInitValue}:ShowDocComponentProps) => {
    const [data, setdata] = useState<MatrixDoc2<CellBase<any>>>(pInitValue);
    return (
        <div className="bg-teal w-max">
          
          {pInitValue != undefined && <Spreadsheet data={data} />}
        </div>
      );
}
