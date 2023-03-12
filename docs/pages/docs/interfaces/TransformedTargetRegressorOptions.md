# TransformedTargetRegressorOptions

## Properties

### check\_inverse?

> `boolean`

Whether to check that `transform` followed by `inverse\_transform` or `func` followed by `inverse\_func` leads to the original targets.

#### Default Value

`true`

Defined in:  [generated/compose/TransformedTargetRegressor.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L325)

### func?

> `any`

Function to apply to `y` before passing to [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit"). Cannot be set at the same time as `transformer`. The function needs to return a 2-dimensional array. If `func is None`, the function used will be the identity function.

Defined in:  [generated/compose/TransformedTargetRegressor.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L313)

### inverse\_func?

> `any`

Function to apply to the prediction of the regressor. Cannot be set at the same time as `transformer`. The function needs to return a 2-dimensional array. The inverse function is used to return predictions to the same space of the original training labels.

Defined in:  [generated/compose/TransformedTargetRegressor.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L318)

### regressor?

> `any`

Regressor object such as derived from [`RegressorMixin`](sklearn.base.RegressorMixin.html#sklearn.base.RegressorMixin "sklearn.base.RegressorMixin"). This regressor will automatically be cloned each time prior to fitting. If `regressor is None`, [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") is created and used.

Defined in:  [generated/compose/TransformedTargetRegressor.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L303)

### transformer?

> `any`

Estimator object such as derived from [`TransformerMixin`](sklearn.base.TransformerMixin.html#sklearn.base.TransformerMixin "sklearn.base.TransformerMixin"). Cannot be set at the same time as `func` and `inverse\_func`. If `transformer is None` as well as `func` and `inverse\_func`, the transformer will be an identity transformer. Note that the transformer will be cloned during fitting. Also, the transformer is restricting `y` to be a numpy array.

Defined in:  [generated/compose/TransformedTargetRegressor.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L308)
