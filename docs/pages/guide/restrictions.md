# Restrictions

- We don't currently support positional arguments; only keyword-based arguments:

```ts
// this works (keyword args)
const x = await model.fit_transform({ X: data })

// this doesn't work yet (positional args)
const y = await model.fit_transform(data)
```

- We don't currently generate TS code for `scikit-learn`'s built-in datasets
- We don't currently generate TS code for `scikit-learn`'s top-level function exports (only classes right now)
- There are basic unit tests for a handful of the auto-generated TS classes, and they work well, but there are probably edge cases and bugs in other auto-generated classes
  - Please create an issue on GitHub if you run into any weird behavior and include as much detail as possible, including code snippets
