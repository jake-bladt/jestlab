class DOM {
    private _incBtn: HTMLElement;
    private _decBtn: HTMLElement;
    private _counter: HTMLElement;

    constructor() {
        this._incBtn = this._getDOMElement('#incBtn');
        this._decBtn = this._getDOMElement('#decBtn');
        this._counter = this._getDOMElement('#counter');
    }

    private _getDOMElement(selector: string) : HTMLElement {
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

class DOMEvents {
    public register(htmlElement: HTMLElement, type: string, callback: (e: Event) => void) : void {
        htmlElement.addEventListener(type, callback);
    }
}

class App {
    constructor(public dom: DOM, public domEvents: DOMEvents) {
        this.setupEvents();
    }

    private setupEvents(): void {
        const buttons = [this.dom.incBtn, this.dom.decBtn];
        buttons.forEach(b => this.domEvents.register(b, 'click', this.handleClicks.bind(this)));
    }

    private handleClicks(e: MouseEvent) : void {
        const {id} = <HTMLElement>e.target;
        if(id === 'incBtn') {
            this.incrementCounter();
        } else {
            this.decrementCounter();
        }
    }

    private incrementCounter() : void {
        this.dom.counter++;
    }

    private decrementCounter(): void {
        this.dom.counter--;
    }
}

(new App(new DOM(), new DOMEvents()));
