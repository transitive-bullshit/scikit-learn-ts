[sklearn](../readme.md) / [Exports](../modules.md) / OrthogonalMatchingPursuitOptions

# Interface: OrthogonalMatchingPursuitOptions

## Table of contents

### Properties

- [fit\_intercept](OrthogonalMatchingPursuitOptions.md#fit_intercept)
- [n\_nonzero\_coefs](OrthogonalMatchingPursuitOptions.md#n_nonzero_coefs)
- [normalize](OrthogonalMatchingPursuitOptions.md#normalize)
- [precompute](OrthogonalMatchingPursuitOptions.md#precompute)
- [tol](OrthogonalMatchingPursuitOptions.md#tol)

## Properties

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L384)

___

### n\_nonzero\_coefs

• `Optional` **n\_nonzero\_coefs**: `number`

Desired number of non-zero entries in the solution. If `undefined` (by default) this value is set to 10% of n\_features.

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L372)

___

### normalize

• `Optional` **normalize**: `boolean`

This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L391)

___

### precompute

• `Optional` **precompute**: `boolean` \| ``"auto"``

Whether to use a precomputed Gram and Xy matrix to speed up calculations. Improves performance when [n\_targets](../../glossary.html#term-n_targets) or [n\_samples](../../glossary.html#term-n_samples) is very large. Note that if you already have such matrices, you can pass them directly to the fit method.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L398)

___

### tol

• `Optional` **tol**: `number`

Maximum norm of the residual. If not `undefined`, overrides n\_nonzero\_coefs.

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuit.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L377)
