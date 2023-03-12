[sklearn](../readme.md) / [Exports](../modules.md) / DummyClassifierOptions

# Interface: DummyClassifierOptions

## Table of contents

### Properties

- [constant](DummyClassifierOptions.md#constant)
- [random\_state](DummyClassifierOptions.md#random_state)
- [strategy](DummyClassifierOptions.md#strategy)

## Properties

### constant

• `Optional` **constant**: `string` \| `number` \| [`ArrayLike`](../modules.md#arraylike)

The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy.

#### Defined in

[generated/dummy/DummyClassifier.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L405)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the randomness to generate the predictions when `strategy='stratified'` or `strategy='uniform'`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/dummy/DummyClassifier.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L400)

___

### strategy

• `Optional` **strategy**: ``"uniform"`` \| ``"most_frequent"`` \| ``"prior"`` \| ``"stratified"`` \| ``"constant"``

Strategy to use to generate predictions.

**`Default Value`**

`'prior'`

#### Defined in

[generated/dummy/DummyClassifier.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyClassifier.ts#L395)
