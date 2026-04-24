import debounce from "lodash/debounce";
import { Base } from "./Base.ts";

export class Child extends Base {
    fatObject: string;

    constructor() {
        super();
        // eslint-disable-next-line @typescript-eslint/unbound-method -- bound by @boundMethod on Base
        this.method = debounce(super.method, 100);
        this.fatObject = new Array(1000000).join("lalala");
    }
}
