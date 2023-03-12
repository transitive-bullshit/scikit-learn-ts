## Prequisites

_This project is meant for Node.js users, so don't worry if you're not familiar with Python. This is the only step where you'll need to touch Python, and it should be pretty straightforward._

Make sure you have Node.js and Python 3 installed and in your `PATH`.

- `node >= 14`
- `python >= 3.7`

In python land, install `numpy` and `scikit-learn` either globally via `pip` or via your favorite virtualenv manager. The shell running your Node.js program will need access to these python modules, so if you're using a virtualenv, make sure it's activated.

If you're not sure what this means, it's okay. First [install python](https://realpython.com/installing-python/), which will also install `pip`, python's package manager. Then run:

```
pip install numpy scikit-learn
```

_Congratulations!_ You've safely navigated Python land, and from here on out, we'll be using Node.js / JS / TS. The `sklearn` NPM package will use your Python installation under the hood.

## Install

```
npm install sklearn
```
