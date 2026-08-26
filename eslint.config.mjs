import { globalIgnores } from "eslint/config";
import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...coreWebVitals,
  ...nextTypescript,
  // Archived legacy static site + build output stay out of lint scope.
  globalIgnores(["old-code/**", ".next/**", "out/**", "node_modules/**"]),
];

export default eslintConfig;