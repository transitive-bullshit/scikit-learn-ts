# ElasticNetCVFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse.

Defined in:  [generated/linear\_model/ElasticNetCV.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L605)

### sample\_weight?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

Sample weights used for fitting and evaluation of the weighted mean squared error of each cv-fold. Note that the cross validated MSE that is finally used to find the best model is the unweighted mean over the (weighted) MSEs of each test fold.

Defined in:  [generated/linear\_model/ElasticNetCV.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L615)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Target values.

Defined in:  [generated/linear\_model/ElasticNetCV.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L610)
