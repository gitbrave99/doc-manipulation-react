import { SetStateAction, Dispatch } from "react";
import { MatrixDoc, AGencia, MatrixDoc2 } from "./MatrixDoc.interfaces";
import Spreadsheet, { CellBase } from "react-spreadsheet";

export interface ReadingI<T>{
    dataMatrix:MatrixDoc<AGencia>,
    setDataMatrix:Dispatch<SetStateAction<MatrixDoc<AGencia>>>
    dataMatrix2: MatrixDoc2<T>
    setDataMatrix2:Dispatch<SetStateAction<MatrixDoc2<T>>>
}

