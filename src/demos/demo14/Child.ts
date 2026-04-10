import debounce from "lodash/debounce";
import { Base } from "./Base.ts";

export class Child extends Base {
    // eslint-disable-next-line @typescript-eslint/unbound-method -- bound by @boundMethod on Base
    method = debounce(super.method, 100);

    fatObject = new Array(1000000).join("lalala");
}
