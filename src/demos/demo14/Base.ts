import { boundMethod } from "autobind-decorator";

export class Base {
    @boundMethod
    method(): void {
        // do something
    }
}
