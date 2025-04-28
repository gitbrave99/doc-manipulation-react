import { ReactNode, useState } from 'react';
import {ReadingContext} from './ReadingContext'
import { ReadingI } from '../interfaces/Reading.interface';
import { AGencia, MatrixDoc , MatrixDoc2} from '../interfaces/MatrixDoc.interfaces';
import { CellBase } from 'react-spreadsheet';
 

// interface props{
//   children: React.JSX.Element  | React.JSX.Element[]
// }

export const ReadingContextProvider = ({children}:{children: ReactNode}) => {

  const [dataMatrix, setDataMatrix] = useState<MatrixDoc<AGencia>>([]);
 const [dataMatrix2, setDataMatrix2] = useState<MatrixDoc2<CellBase<any>>>([
  [{ value: "A1" }, { value: "B1" }],
  [{ value: "A2" }, { value: "B2" }],
]);


  const INIT_STATE:ReadingI={
    dataMatrix,  setDataMatrix,
    dataMatrix2, setDataMatrix2

  }


  return (
    <ReadingContext.Provider value={ INIT_STATE }>
      {children}
    </ReadingContext.Provider>
  );
}