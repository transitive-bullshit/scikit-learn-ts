[sklearn](../readme.md) / [Exports](../modules.md) / PCAOptions

# Interface: PCAOptions

## Table of contents

### Properties

- [copy](PCAOptions.md#copy)
- [iterated\_power](PCAOptions.md#iterated_power)
- [n\_components](PCAOptions.md#n_components)
- [n\_oversamples](PCAOptions.md#n_oversamples)
- [power\_iteration\_normalizer](PCAOptions.md#power_iteration_normalizer)
- [random\_state](PCAOptions.md#random_state)
- [svd\_solver](PCAOptions.md#svd_solver)
- [tol](PCAOptions.md#tol)
- [whiten](PCAOptions.md#whiten)

## Properties

### copy

• `Optional` **copy**: `boolean`

If `false`, data passed to fit are overwritten and running fit(X).transform(X) will not yield the expected results, use fit\_transform(X) instead.

**`Default Value`**

`true`

#### Defined in

[generated/decomposition/PCA.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L684)

___

### iterated\_power

• `Optional` **iterated\_power**: `number` \| ``"auto"``

Number of iterations for the power method computed by svd\_solver == ‘randomized’. Must be of range \[0, infinity).

**`Default Value`**

`'auto'`

#### Defined in

[generated/decomposition/PCA.ts:714](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L714)

___

### n\_components

• `Optional` **n\_components**: `number` \| ``"mle"``

Number of components to keep. if n\_components is not set all components are kept:

#### Defined in

[generated/decomposition/PCA.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L677)

___

### n\_oversamples

• `Optional` **n\_oversamples**: `number`

This parameter is only relevant when `svd\_solver="randomized"`. It corresponds to the additional number of random vectors to sample the range of `X` so as to ensure proper conditioning. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.

**`Default Value`**

`10`

#### Defined in

[generated/decomposition/PCA.ts:721](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L721)

___

### power\_iteration\_normalizer

• `Optional` **power\_iteration\_normalizer**: ``"auto"`` \| ``"QR"`` \| ``"LU"`` \| ``"none"``

Power iteration normalizer for randomized SVD solver. Not used by ARPACK. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.

**`Default Value`**

`'auto'`

#### Defined in

[generated/decomposition/PCA.ts:728](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L728)

___

### random\_state

• `Optional` **random\_state**: `number`

Used when the ‘arpack’ or ‘randomized’ solvers are used. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/decomposition/PCA.ts:733](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L733)

___

### svd\_solver

• `Optional` **svd\_solver**: ``"auto"`` \| ``"full"`` \| ``"randomized"`` \| ``"arpack"``

The solver is selected by a default policy based on `X.shape` and `n\_components`: if the input data is larger than 500x500 and the number of components to extract is lower than 80% of the smallest dimension of the data, then the more efficient ‘randomized’ method is enabled. Otherwise the exact full SVD is computed and optionally truncated afterwards.

**`Default Value`**

`'auto'`

#### Defined in

[generated/decomposition/PCA.ts:700](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L700)

___

### tol

• `Optional` **tol**: `number`

Tolerance for singular values computed by svd\_solver == ‘arpack’. Must be of range \[0.0, infinity).

**`Default Value`**

`0`

#### Defined in

[generated/decomposition/PCA.ts:707](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L707)

___

### whiten

• `Optional` **whiten**: `boolean`

When `true` (`false` by default) the `components\_` vectors are multiplied by the square root of n\_samples and then divided by the singular values to ensure uncorrelated outputs with unit component-wise variances.

Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometime improve the predictive accuracy of the downstream estimators by making their data respect some hard-wired assumptions.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/PCA.ts:693](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/PCA.ts#L693)