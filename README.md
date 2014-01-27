
# grunt-unifon

Grunt task to unify javascript files by JSON.

## Example

```javascript
grunt.initConfig({
    unifon: {
        dest: {
            options: {
                separator: "\n"
            },
            files: {
                "js/main.js": "js/main.json"
            }
        }
    }
});
```

main.json example:

```javascript
[
    "foo.js",
    "bar.js",
    "mod/baz.js"
]
```

- Content of files above are to be concatenated, saved as "main.js".
- The path to the files must be relative to the JSON file.
