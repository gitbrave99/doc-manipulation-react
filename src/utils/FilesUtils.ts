import { SetStateAction } from "react";

export class FilesUtils {
    
    static getProgressInUploding = <T> (e: React.ChangeEvent<HTMLInputElement>, pSetState:React.Dispatch<SetStateAction<number>> ) => {
        // const file = e.target.files[0];
        const reader = new FileReader();
      
        reader.onprogress = (event) => {
          if (event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 100);
            // setstate
            pSetState(percent);
          }
        };
    }

    static  readableFileSize=(size: number): string=> {
      if (size === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(size) / Math.log(k));
      return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
}