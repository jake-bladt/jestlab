class DOM {
    private _incBtn: HTMLElement;
    private _decBtn: HTMLElement;
    private _counter: HTMLElement;

    constructor() {
        this._incBtn = this._getDOMElement('#incBtn');
        this._decBtn = this._getDOMElement('#incBtn');
        this._counter = this._getDOMElement('#counter');
    }

    public _getDOMElement(selector: string) : HTMLElement {
        return document.querySelector(selector) as HTMLElement;
    }

    get incBtn(): HTMLElement {
        return this._incBtn;
    }

    get decBtn(): HTMLElement {
        return this._decBtn;
    }

    get counter(): number {
        return parseInt(this._counter.innerText);
    }

    set counter(value: number) {
        this._counter.innerText = value.toString();
    }

}
