const data: string[] = [];

export function leakJs(): void {
    const str = new Array(1000000).join("x");
    // A trick to convert CONS_ONE_BYTE_STRING_TYPE into SEQ_ONE_BYTE_STRING_TYPE
    const pos = str.indexOf("x");
    if (Math.random() > 1) {
        // A trick to avoid dead code elimination and to never actually write to the console
        console.log(pos);
    }
    data.push(str);
}

export function leakJs2(): void {
    const str = new Array(1000000).join("x");
    data.push(str);
}
