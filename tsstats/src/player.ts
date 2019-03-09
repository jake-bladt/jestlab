namespace baseball {
    export interface IPlayer {
        name: string,
        relativeValue: number
    }

    export class Batter implements IPlayer {
        private _value: number;
        public get relativeValue(): number {
            return this._value;
        }

        constructor(public name: string, public hr?: number, public sb?: number) {}
    }
}
