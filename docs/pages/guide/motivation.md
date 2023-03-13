## Why?

The Python ML ecosystem is generally a lot more mature than the Node.js ML ecosystem. Most ML research happens in Python, and many common ML tasks that Python devs take for granted are much more difficult to accomplish in Node.js.

For example, I was recently working on a data viz project using full-stack TypeScript, and I needed to use k-means and t-SNE on some text embeddings. I tested 6 different t-SNE JS packages and several k-means packages. None of the t-SNE packages worked for medium-sized inputs, they were 1000x slower in many cases, and I kept running into `NaN` city with the JS-based versions.

Case in point; it's _incredibly difficult_ to compete with the robustness, speed, and maturity of proven Python ML libraries like `scikit-learn` in JS/TS land.

So instead of trying to build a Rust-based version from scratch or using ad hoc NPM packages like above, I decided to create an experiment to see how practical it would be to just use `scikit-learn` from Node.js.

And that's how `scikit-learn-ts` was born.
