import { GenericResult } from '../common/Result';

export class Dollars {

    static readonly MaxDollarAmount: number = 1000000;
    private readonly _value: number;
    get Value(): number {
        return this._value;
    }

    get IsZero(): boolean {
        return this._value === 0;
    }
    private constructor(value: number) {
        this._value = value;


    }
    static Create(dollarAmount: number): GenericResult<Dollars> {
        // console.log(dollarAmount  );
        // console.log(dollarAmount % 0.01 );
        // console.log(dollarAmount / 0.01 );
        if (dollarAmount < 0) {
            return GenericResult.Fail<Dollars>('Dollar amount cannot be negative');
        }
        if (dollarAmount >  Dollars.MaxDollarAmount) {
            return GenericResult.Fail<Dollars>('Dollar amount cannot be greater than ' + Dollars.MaxDollarAmount);
        }
        // if (dollarAmount % 0.01 > 0.01) { // this does not work correctly in javascript 
        // due to the way floating point arithmetic is implemented
        //     return GenericResult.Fail<Dollars>('Dollar amount cannot contain part of a penny');
        // }
        return GenericResult.Ok<Dollars>(new Dollars(dollarAmount));

    }
    static Of (dollarAmount: number): Dollars {
      return Dollars.Create(dollarAmount).Value;
    }




}
