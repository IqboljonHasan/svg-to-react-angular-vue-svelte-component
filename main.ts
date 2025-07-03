import { generateAngularIcons } from "./src/generators/angular"
import { generateReactIcons } from "./src/generators/react"
import { generateSvelteIcons } from "./src/generators/svelte"
import { generateVueIcons } from "./src/generators/vue"

const SVG_DIR = "src/icons-svg"
const REACT_ICONS_DIR = "dist/icons/react"
const VUE_ICONS_DIR = "dist/icons/vue"
const SVELTE_ICONS_DIR = "dist/icons/svelte"
const ANGULAR_ICONS_DIR = "dist/icons/angular"

const framework = process.argv[2]

switch (framework) {
    case "react":
        generateReactIcons(SVG_DIR, REACT_ICONS_DIR)
        break
    case "vue":
        generateVueIcons(SVG_DIR, VUE_ICONS_DIR)
        break
    case "svelte":
        generateSvelteIcons(SVG_DIR, SVELTE_ICONS_DIR)
        break
    case "angular":
        generateAngularIcons(SVG_DIR, ANGULAR_ICONS_DIR)
        break
    default:
        console.log("❌ Please specify a framework: react | vue | svelte | angular")
}
