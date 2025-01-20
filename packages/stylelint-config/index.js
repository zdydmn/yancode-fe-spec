module.exports = {
    "extends": ["stylelint-config-standard", "stylelint-config-standard-scss"],
    "rules": {
        "indentation": [2, { "baseIndentLevel": "auto" }],
        "max-line-length": [120, { "ignore": ["comments"] }],
        "selector-max-universal": 0,
        "declaration-empty-line-before": "never",
        "selector-list-comma-newline-after": "always-multi-line",
        "selector-max-id": 0,
        "max-nesting-depth": 3,
        "selector-max-class": [3, { "severity": "warning" }],
        "declaration-no-important": true,
        "function-url-quotes": "never",
        "color-named": "never",
        "no-invalid-position-at-import-rule": true,

        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "block-no-empty": null,
        "declaration-block-no-duplicate-properties": [
            true,
            { "ignore": ["consecutive-duplicates-with-different-values"] }
        ],
        "no-descending-specificity": null,
        "no-empty-source": null,
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-space-before": "always",
        "block-opening-brace-space-after": "always-single-line",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "comment-whitespace-inside": "always",
        "declaration-colon-space-before": "never",
        "declaration-colon-space-after": "always",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": ["always", { "severity": "error" }],
        "length-zero-no-unit": [true, { "ignore": ["custom-properties"] }],
        "value-list-comma-space-after": "always-single-line",

        "scss/double-slash-comment-whitespace-inside": "always",
        "number-leading-zero": "never"
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: ['stylelint-scss'],
}
