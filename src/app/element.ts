import { Font } from "./font";
import { Value } from "./value";

// tslint:disable-next-line:one-line
export class Element{
  ID: number;
  Station_ID: number;
  Position_X: number;
  Position_Y: number;
  Width: number;
  Height: number;
  ShowBorder: boolean;
  ShowName: boolean;
  Position_Name: string;
  OnTop: boolean;
  Name: string;
  Selected: boolean;
  Font: Font;
  ValueID: Value;
  FontColor: Value;
  BackColor: Value;
  Action: Value;
  Visible: Value;
}

