import { Font } from "./font";

// tslint:disable-next-line:one-line
export class Element{
  id: number;
  station_ID: number;
  position_X: number;
  position_Y: number;
  width: number;
  height: number;
  showBorder: boolean;
  showName: boolean;
  position_name: string;
  onTop: boolean;
  name: string;
  selected: boolean;
  font: Font;
}
