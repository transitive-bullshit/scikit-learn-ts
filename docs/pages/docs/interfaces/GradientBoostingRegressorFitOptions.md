# GradientBoostingRegressorFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L708)

### monitor?

> `any`

The monitor is called after each iteration with the current iteration, a reference to the estimator and the local variables of `\_fit\_stages` as keyword arguments `callable(i, self, locals())`. If the callable returns `true` the fitting procedure is stopped. The monitor can be used for various things such as computing held-out estimates, early stopping, model introspect, and snapshoting.

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:723](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L723)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:718](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L718)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Target values (strings or integers in classification, real numbers in regression) For classification, labels must correspond to classes.

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:713](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L713)
