import {  useState } from "react";
import Spreadsheet from "react-spreadsheet";
type Matrix<T> = Array<Array<T | undefined | any>>;
interface AGencia { value: string | number | null | undefined }

interface ShowDocComponentProps {
  pInitValue: Matrix<AGencia>;
  // setData: React.Dispatch<SetStateAction<Matrix<T>>>;
}

const ShowDocComponent = ({ pInitValue }: ShowDocComponentProps) => {
  const [data, setdata] = useState<Matrix<AGencia>>(pInitValue);
console.log("data: ", data);

  return (
    <div className="bg-teal w-max">
      <Spreadsheet data={pInitValue} onChange={setdata} />
    </div>
  );
}
export default ShowDocComponent;