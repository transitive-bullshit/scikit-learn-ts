[sklearn](../readme.md) / [Exports](../modules.md) / MultiOutputClassifierFitOptions

# Interface: MultiOutputClassifierFitOptions

## Table of contents

### Properties

- [X](MultiOutputClassifierFitOptions.md#x)
- [Y](MultiOutputClassifierFitOptions.md#y)
- [fit\_params](MultiOutputClassifierFitOptions.md#fit_params)
- [sample\_weight](MultiOutputClassifierFitOptions.md#sample_weight)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The input data.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L407)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

The target values.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L412)

___

### fit\_params

• `Optional` **fit\_params**: `any`

Parameters passed to the `estimator.fit` method of each step.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L422)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying classifier supports sample weights.

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L417)
