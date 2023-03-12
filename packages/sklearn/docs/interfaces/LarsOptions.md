[sklearn](../readme.md) / [Exports](../modules.md) / LarsOptions

# Interface: LarsOptions

## Table of contents

### Properties

- [copy\_X](LarsOptions.md#copy_x)
- [eps](LarsOptions.md#eps)
- [fit\_intercept](LarsOptions.md#fit_intercept)
- [fit\_path](LarsOptions.md#fit_path)
- [jitter](LarsOptions.md#jitter)
- [n\_nonzero\_coefs](LarsOptions.md#n_nonzero_coefs)
- [normalize](LarsOptions.md#normalize)
- [precompute](LarsOptions.md#precompute)
- [random\_state](LarsOptions.md#random_state)
- [verbose](LarsOptions.md#verbose)

## Properties

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/Lars.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L424)

___

### eps

• `Optional` **eps**: `number`

The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.

#### Defined in

[generated/linear_model/Lars.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L417)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/Lars.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L384)

___

### fit\_path

• `Optional` **fit\_path**: `boolean`

If `true` the full path is stored in the `coef\_path\_` attribute. If you compute the solution for a large problem or many targets, setting `fit\_path` to `false` will lead to a speedup, especially with a small alpha.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/Lars.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L431)

___

### jitter

• `Optional` **jitter**: `number`

Upper bound on a uniform noise parameter to be added to the `y` values, to satisfy the model’s assumption of one-at-a-time computations. Might help with stability.

#### Defined in

[generated/linear_model/Lars.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L436)

___

### n\_nonzero\_coefs

• `Optional` **n\_nonzero\_coefs**: `number`

Target number of non-zero coefficients. Use `np.inf` for no limit.

**`Default Value`**

`500`

#### Defined in

[generated/linear_model/Lars.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L412)

___

### normalize

• `Optional` **normalize**: `boolean`

This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/Lars.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L398)

___

### precompute

• `Optional` **precompute**: `boolean` \| [`ArrayLike`](../modules.md#arraylike) \| ``"auto"``

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/Lars.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L405)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines random number generation for jittering. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). Ignored if `jitter` is `undefined`.

#### Defined in

[generated/linear_model/Lars.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L441)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Sets the verbosity amount.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/Lars.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lars.ts#L391)
