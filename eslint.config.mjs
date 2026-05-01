import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

/** @type {import('eslint').Linter.Config[]} */
const config = [
  /* ------------------------------------------------------------------ */
  /* Global ignores                                                       */
  /* ------------------------------------------------------------------ */
  {
    ignores: [
      ".next/**",
      "out/**",
      "dist/**",
      "node_modules/**",
      "coverage/**",
      "*.config.mjs",
      "*.config.js",
      "next-env.d.ts",
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Next.js core + TypeScript                                            */
  /* ------------------------------------------------------------------ */
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  /* ------------------------------------------------------------------ */
  /* Prettier (must be last to override formatting rules)                 */
  /* ------------------------------------------------------------------ */
  ...compat.extends("prettier"),

  /* ------------------------------------------------------------------ */
  /* Project-level rules                                                  */
  /* ------------------------------------------------------------------ */
  {
    plugins: {
      "unused-imports": unusedImports,
      import: importPlugin,
    },

    rules: {
      /* TypeScript */
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "off", // handled by unused-imports
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",

      /* Unused imports */
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      /* Import order */
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "type",
          ],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "next/**", group: "external", position: "before" },
            { pattern: "@/**", group: "internal" },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      /* General */
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
    },
  },
];

export default config;
