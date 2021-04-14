import svelte from "rollup-plugin-svelte";
import pkg from "./package.json";
import sveld from "sveld";

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
  input: pkg.svelte,
  output: [
    { file: pkg.module, format: "es" },
    { file: pkg.main, format: "umd", name },
  ],
  plugins: [
    svelte(),
    sveld({
			markdown: true,
			json: true,
		}),
  ],
};
