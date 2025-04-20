export class Excelutils{

    static formatCellValue = (cell: number) => {
        if (!isNaN(cell)) {
          const num = Number(cell);
          if (num % 1 !== 0) {
            return parseFloat(num.toFixed(2));
          } else {
            return num;
          }
        } else {
          return cell;
        }
      };



  static extractTableData = (data: any) => {

    const headers = ['tipoItem', 'descripcion', 'uniMedida', 'cantidad', 'precioUni', 'montoDescu', 'ventaNoSuj', 'ventaExenta', 'ventaGravada']; // ?? PORQUE COMPRA
    const rows = data.slice(3);
    // let idTemporal=listdetallesDTE[listdetallesDTE.length-1]?.numItem+1 || 1;
    return rows.map((row:any) => {
      const rowData = {} as any;
      let hasData = false;
      row.forEach((cell:any, index:number) => {
        if (cell !== null && cell !== undefined && cell !== '') {
          // rowData[headers[index]] = formatCellValue(cell);
          if (headers[index] === 'precioUni') {
            // rowData.ivaItem = parseFloat(((rowData.precioUni * rowData.cantidad) - parseFloat((Number(rowData.precioUni * rowData.cantidad) / 1.13).toFixed(2))).toFixed(2));
          }
          hasData = true;
        }
      });

      return hasData ? rowData : null;
    }).filter(rowData => rowData !== null); // Filtrar las filas que son null

  };



}