[sklearn](../readme.md) / [Exports](../modules.md) / MultiOutputClassifierPartialFitOptions

# Interface: MultiOutputClassifierPartialFitOptions

## Table of contents

### Properties

- [X](MultiOutputClassifierPartialFitOptions.md#x)
- [classes](MultiOutputClassifierPartialFitOptions.md#classes)
- [sample\_weight](MultiOutputClassifierPartialFitOptions.md#sample_weight)
- [y](MultiOutputClassifierPartialFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The input data.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L429)

___

### classes

• `Optional` **classes**: `any`[]

Each array is unique classes for one output in str/int. Can be obtained via `\[np.unique(y\[:, i\]) for i in range(y.shape\[1\])\]`, where `y` is the target matrix of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that `y` doesn’t need to contain all labels in `classes`.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L439)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L444)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Multi-output targets.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L434)
