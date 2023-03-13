# DummyClassifierOptions

## Properties

### constant?

> `string` \| `number` \| [`ArrayLike`](../types/ArrayLike.md)

The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy.

Defined in:  [generated/dummy/DummyClassifier.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L405)

### random\_state?

> `number`

Controls the randomness to generate the predictions when `strategy='stratified'` or `strategy='uniform'`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/dummy/DummyClassifier.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L400)

### strategy?

> `"uniform"` \| `"most_frequent"` \| `"prior"` \| `"stratified"` \| `"constant"`

Strategy to use to generate predictions.

#### Default Value

`'prior'`

Defined in:  [generated/dummy/DummyClassifier.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L395)
