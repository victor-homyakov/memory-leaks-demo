# memory-leaks-demo

Browser-only demos for DevTools: detached DOM, JS heap retention, allocation timeline, three-snapshot technique, and React-related patterns. Built with Vite and React Router.

## Run locally

```bash
npm install
npm run dev
```

Open the app at [http://localhost:5173](http://localhost:5173) (Vite default). Use Chrome DevTools: **Performance monitor**, **Memory** (including detached elements, allocation timeline, heap snapshots), and **`queryObjects`** in the console where the slide notes suggest it.

## Routes

| Path        | Demo                                               |
| ----------- | -------------------------------------------------- |
| `/`         | Index with links to all demos                      |
| `/demo-1-1` | Detached elements                                  |
| `/demo-1-2` | JS heap leak + allocation timeline                 |
| `/demo-1-3` | Less obvious JS leak (contrast with 1.2)           |
| `/demo-1-4` | Leak in `@boundMethod` + `debounce`                |
| `/demo-2-1` | Modal leak (listeners / refs)                      |
| `/demo-2-2` | Random `data-*` attributes on React nodes          |
| `/demo-2-3` | Stable path with `useMemo` / selector (not a leak) |

Demo **1.4** runs instances on a timer; others use buttons (and modal open/close where relevant).

## Node.js demos

Node examples (`chrome://inspect`, allocation timeline, `/perf`, heap dumps) are **not** in this repository. Use the companion project **[node-memory-leak-example](https://github.com/victor-homyakov/node-memory-leak-example)** — clone it, follow its README, and run it alongside this app when reproducing the Node sections of the talk.
