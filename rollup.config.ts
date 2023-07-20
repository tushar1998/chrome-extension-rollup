import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";
import nodePolyfill from "rollup-plugin-polyfill-node";
import { RollupOptions, InputPluginOption } from "rollup";
import { chromeExtension, simpleReloader } from "rollup-plugin-chrome-extension";

const input = {
  "service-worker": "./src/service-worker.ts",
  "content-script": "./src/content-script.ts",
  index: "./src/index.tsx",
};

const config: RollupOptions = {
  input: "./src/manifest.json",
  output: {
    format: "esm",
    dir: "lib",
  },
  plugins: [
    chromeExtension() as unknown as InputPluginOption,
    simpleReloader() as unknown as InputPluginOption,
    del({
      targets: ["./lib/*"],
      // runOnce: true,
    }),
    // copy({
    //   targets: [
    //     { src: "src/manifest.json", dest: "dist" },
    //     { src: "src/assets", dest: "dist" },
    //   ],
    // }),
    // replace({
    //   "process.env.NODE_ENV": "String('development')",
    //   preventAssignment: false,
    // }),
    commonjs(),
    resolve(),
    json(),
    nodePolyfill(),
    typescript({ tsconfig: "./tsconfig.build.json" }),
  ],
};

export default config;
