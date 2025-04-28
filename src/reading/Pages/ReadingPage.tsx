/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { ImportExcelComponent } from "../components/ImportExcelComponent"
import ShowDocComponent from "../components/ShowDocComponent"
import { ReadingContext } from "../context/ReadingContext";


const ReadingPage = () => {
    const { dataMatrix, setDataMatrix } = useContext(ReadingContext);

    // const [agencias, setAgencias] = useState<Matrix<AGencia>>([]);
    console.log("agencias: ", dataMatrix);

    return (
        
            <div className="m-8">
                <div className="border-2 p-3">
                    <ImportExcelComponent setDocument={setDataMatrix} />
                </div>
                <div className="w-max">
                    <ShowDocComponent pInitValue={dataMatrix} />
                </div>
            </div>
        
    )
}

export default ReadingPage