/** Module-level retention: UL subtrees never attached to document → DevTools "Detached elements". */
const detached: HTMLUListElement[] = [];

export function leakDetachedNodes(): void {
    const ul = document.createElement("ul");
    for (let i = 0; i < 5; i++) {
        const li = document.createElement("li");
        ul.appendChild(li);
    }
    detached.push(ul);
}
