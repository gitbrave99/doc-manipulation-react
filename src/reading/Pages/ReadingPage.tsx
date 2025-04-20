/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImportExcelComponent } from "../components/ImportExcelComponent"
import { Input } from "@/components/ui/input"
import ShowDocComponent from "../components/ShowDocComponent"
import { useState } from "react";


type Matrix<T> = Array<Array<T | undefined>>;
interface AGencia { value: string | number | null | undefined }

const ReadingPage = () => {
    const [agencias, setAgencias] = useState<Matrix<AGencia>>([]);
    console.log("agencias: ", agencias);
    
    return (
        <div className="m-8">
            
            <div className="border-2 p-3">
                <ImportExcelComponent setDocument={setAgencias}/>
            </div>
            <div className="w-max">
                <ShowDocComponent pInitValue={agencias}/>
            </div>
        </div>
    )
}

export default ReadingPage