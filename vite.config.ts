import { transformAsync } from "@babel/core";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

/**
 * Vite 8 + @vitejs/plugin-react use Oxc for TS/JSX — legacy decorators are not lowered.
 * Babel pre-pass for demo14 only so @boundMethod reaches the browser as plain JS.
 */
function legacyDecoratorsDemo14(): Plugin {
    return {
        name: "legacy-decorators-demo14",
        enforce: "pre",
        async transform(code, id) {
            const file = id.split("?")[0].replace(/\\/g, "/");
            if (!file.includes("/src/demos/demo14/")) return;
            if (!file.endsWith(".ts") && !file.endsWith(".tsx")) return;

            const result = await transformAsync(code, {
                filename: file,
                parserOpts: { sourceType: "module" },
                presets: [
                    [
                        "@babel/preset-typescript",
                        {
                            isTSX: file.endsWith(".tsx"),
                            allExtensions: true,
                        },
                    ],
                ],
                plugins: [
                    ["@babel/plugin-proposal-decorators", { legacy: true }],
                    "@babel/plugin-transform-class-properties",
                ],
                sourceMaps: true,
            });
            if (!result?.code) return null;
            return { code: result.code, map: result.map ?? undefined };
        },
    };
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [legacyDecoratorsDemo14(), react()],
});
