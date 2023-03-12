# LassoCVFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse.

Defined in:  [generated/linear\_model/LassoCV.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L562)

### sample\_weight?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

Sample weights used for fitting and evaluation of the weighted mean squared error of each cv-fold. Note that the cross validated MSE that is finally used to find the best model is the unweighted mean over the (weighted) MSEs of each test fold.

Defined in:  [generated/linear\_model/LassoCV.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L572)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Target values.

Defined in:  [generated/linear\_model/LassoCV.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L567)
