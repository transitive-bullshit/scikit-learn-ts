[sklearn](../readme.md) / [Exports](../modules.md) / MultiOutputRegressorFitOptions

# Interface: MultiOutputRegressorFitOptions

## Table of contents

### Properties

- [X](MultiOutputRegressorFitOptions.md#x)
- [fit\_params](MultiOutputRegressorFitOptions.md#fit_params)
- [sample\_weight](MultiOutputRegressorFitOptions.md#sample_weight)
- [y](MultiOutputRegressorFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The input data.

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L341)

___

### fit\_params

• `Optional` **fit\_params**: `any`

Parameters passed to the `estimator.fit` method of each step.

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L356)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights.

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L351)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Multi-output targets. An indicator matrix turns on multilabel estimation.

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L346)
