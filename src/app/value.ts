import { Mask } from './mask';
export class Value {
  ID: number;
  Station_ID: number;
  Type: string;
  DB: number;
  StartByte: number;
  Length: number;
  Val: string;
  Mask_ID: number;
  DBType: number;
  PLC_ID: number;
  Mask: Mask[];
}
