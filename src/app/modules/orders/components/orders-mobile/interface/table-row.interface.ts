import { TableAction } from "./table-action.interface";
import { TableCell } from "./table-cell.interface";
import { TableIcon } from "./table-icon.interface";

export interface TableRow {
  date: string;
  description: string;
  iconStatus: TableIcon;
  data: TableCell[];
  action: TableAction;
}
