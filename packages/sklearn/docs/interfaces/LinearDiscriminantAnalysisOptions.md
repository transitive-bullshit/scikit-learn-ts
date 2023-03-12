[sklearn](../readme.md) / [Exports](../modules.md) / LinearDiscriminantAnalysisOptions

# Interface: LinearDiscriminantAnalysisOptions

## Table of contents

### Properties

- [covariance\_estimator](LinearDiscriminantAnalysisOptions.md#covariance_estimator)
- [n\_components](LinearDiscriminantAnalysisOptions.md#n_components)
- [priors](LinearDiscriminantAnalysisOptions.md#priors)
- [shrinkage](LinearDiscriminantAnalysisOptions.md#shrinkage)
- [solver](LinearDiscriminantAnalysisOptions.md#solver)
- [store\_covariance](LinearDiscriminantAnalysisOptions.md#store_covariance)
- [tol](LinearDiscriminantAnalysisOptions.md#tol)

## Properties

### covariance\_estimator

• `Optional` **covariance\_estimator**: `any`

If not `undefined`, `covariance\_estimator` is used to estimate the covariance matrices instead of relying on the empirical covariance estimator (with potential shrinkage). The object should have a fit method and a `covariance\_` attribute like the estimators in [`sklearn.covariance`](../classes.html#module-sklearn.covariance "sklearn.covariance"). if `undefined` the shrinkage parameter drives the estimate.

This should be left to `undefined` if `shrinkage` is used. Note that `covariance\_estimator` works only with ‘lsqr’ and ‘eigen’ solvers.

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:816](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L816)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of components (<= min(n\_classes - 1, n\_features)) for dimensionality reduction. If `undefined`, will be set to min(n\_classes - 1, n\_features). This parameter only affects the `transform` method.

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:795](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L795)

___

### priors

• `Optional` **priors**: [`ArrayLike`](../modules.md#arraylike)

The class prior probabilities. By default, the class proportions are inferred from the training data.

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:790](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L790)

___

### shrinkage

• `Optional` **shrinkage**: `number` \| ``"auto"``

None: no shrinkage (default).

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:785](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L785)

___

### solver

• `Optional` **solver**: ``"svd"`` \| ``"lsqr"`` \| ``"eigen"``

‘svd’: Singular value decomposition (default). Does not compute the covariance matrix, therefore this solver is recommended for data with a large number of features.

**`Default Value`**

`'svd'`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:780](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L780)

___

### store\_covariance

• `Optional` **store\_covariance**: `boolean`

If `true`, explicitly compute the weighted within-class covariance matrix when solver is ‘svd’. The matrix is always computed and stored for the other solvers.

**`Default Value`**

`false`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:802](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L802)

___

### tol

• `Optional` **tol**: `number`

Absolute threshold for a singular value of X to be considered significant, used to estimate the rank of X. Dimensions whose singular values are non-significant are discarded. Only used if solver is ‘svd’.

**`Default Value`**

`0.0001`

#### Defined in

[generated/discriminant_analysis/LinearDiscriminantAnalysis.ts:809](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/discriminant_analysis/LinearDiscriminantAnalysis.ts#L809)
