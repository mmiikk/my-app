export class Color{
    R: number;
    G: number;
    B: number;
    IntVal: String;
    HexVal: String;

    rgbToHex = () => '#' + [this.B, this.G, this.R].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('');

    calculateColorFromInt(): void{
       
        this.B = Math.round(parseInt(this.IntVal.toString()) & 255);
        this.G = Math.round((parseInt(this.IntVal.toString()) >> 8) & 255);
        this.R = Math.round((parseInt(this.IntVal.toString()) >> 16) & 255);
        this.HexVal =this.rgbToHex();
    }
}