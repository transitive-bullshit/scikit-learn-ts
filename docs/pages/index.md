![sklearn ts logo](/social.png)

<p align="center">
  <a href="https://www.npmjs.com/package/sklearn"><img alt="NPM" src="https://img.shields.io/npm/v/sklearn.svg" /></a>
  <a href="https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml"><img alt="Build Status" src="https://github.com/transitive-bullshit/scikit-learn-ts/actions/workflows/test.yml/badge.svg" /></a>
  <a href="https://github.com/transitive-bullshit/scikit-learn-ts/blob/main/license"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-blue" /></a>
  <a href="https://prettier.io"><img alt="Prettier Code Formatting" src="https://img.shields.io/badge/code_style-prettier-brightgreen.svg" /></a>
</p>

## Intro

This project enables Node.js devs to use Python's powerful [scikit-learn](https://scikit-learn.org/) machine learning library – *without having to know any Python*. 🤯

> This project is new and _experimental_. It works great for local development, but I wouldn't recommend using it for production just yet. You can follow the progress on Twitter [@transitive_bs](https://twitter.com/transitive_bs)

## Features

- **All TS classes are auto-generated from the official python scikit-learn docs!**
- All [257 classes](https://scikit-learn.org/stable/modules/classes.html) are supported along with proper TS types and docs
  - `KMeans`
  - `TSNE`
  - `PCA`
  - `LinearRegression`
  - `LogisticRegression`
  - `DecisionTreeClassifier`
  - `RandomForestClassifier`
  - `XGBClassifier`
  - `DBSCAN`
  - `StandardScaler`
  - `MinMaxScaler`
  - ... _all of them_ 💯
- Generally much faster and more robust than JS-based alternatives
  - (benchmarks & comparisons coming soon)
