export class BiquinisFiltro {
  modelo: string = "";
  size: string = "";
  available: string = "";
  colors: string[] = [];

  dataCount: number = 0;

  IsModified(): boolean {
    return (
      this.modelo != "" ||
      this.size != "" ||
      this.available != ""
    );
  }
}
