abstract class Taxes {
  grossIncome: number;
  irpef: number;
  inps: number;

  constructor(_grossIncome: number, _irpef: number, _inps: number) {
    this.grossIncome = _grossIncome;
    this.irpef = _irpef;
    this.inps = _inps;


  }
  abstract getTaxesIrpef(): number;
  abstract getTaxesInps(): number;
}

class FreeLance extends Taxes {
    constructor(grossIncome: number, irpef: number, inps: number) {
        super(grossIncome, irpef, inps);
    }
    getNetTaxes(): number {
        return this.grossIncome * 0.96;
      }
    
      getTaxesIrpef(): number {
        return this.getNetTaxes() * this.irpef;
      }
    
      getTaxesInps(): number {
        return this.getNetTaxes() * this.inps;
      }
    
      getNetIncome(): number {
        return this.getNetTaxes() - this.getTaxesInps() - this.getTaxesIrpef();
      }
}





