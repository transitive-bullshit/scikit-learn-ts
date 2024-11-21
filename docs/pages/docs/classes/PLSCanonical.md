# Class: PLSCanonical

Partial Least Squares transformer and regressor.

For a comparison between other cross decomposition algorithms, see [Compare cross decomposition methods](https://scikit-learn.org/stable/modules/generated/../../auto_examples/cross_decomposition/plot_compare_cross_decomposition.html#sphx-glr-auto-examples-cross-decomposition-plot-compare-cross-decomposition-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSCanonical.html)

## Constructors

### new PLSCanonical()

> **new PLSCanonical**(`opts`?): [`PLSCanonical`](PLSCanonical.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.algorithm`? | `"nipals"` \| `"svd"` | The algorithm used to estimate the first singular vectors of the cross-covariance matrix. ‘nipals’ uses the power method while ‘svd’ will compute the whole SVD. |
| `opts.copy`? | `boolean` | Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays. |
| `opts.max_iter`? | `number` | The maximum number of iterations of the power method when `algorithm='nipals'`. Ignored otherwise. |
| `opts.n_components`? | `number` | Number of components to keep. Should be in `\[1, min(n_samples, n_features, n_targets)\]`. |
| `opts.scale`? | `boolean` | Whether to scale `X` and `Y`. |
| `opts.tol`? | `number` | The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u_i \- u_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector. |

**Returns** [`PLSCanonical`](PLSCanonical.md)

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/cross\_decomposition/PLSCanonical.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/cross\_decomposition/PLSCanonical.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/cross\_decomposition/PLSCanonical.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L21) |
| `id` | `string` | `undefined` | [generated/cross\_decomposition/PLSCanonical.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L18) |
| `opts` | `any` | `undefined` | [generated/cross\_decomposition/PLSCanonical.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L19) |

## Accessors

### coef\_

**Get Signature**

> **get** **coef\_**(): `Promise`\<`ArrayLike`[]\>

The coefficients of the linear model such that `Y` is approximated as `Y \= X @ coef_.T + intercept_`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L766)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:862](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L862)

***

### intercept\_

**Get Signature**

> **get** **intercept\_**(): `Promise`\<`ArrayLike`\>

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef_.T + intercept_`.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:789](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L789)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:837](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L837)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`any`[]\>

Number of iterations of the power method, for each component. Empty if `algorithm='svd'`.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:814](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L814)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L72)

***

### x\_loadings\_

**Get Signature**

> **get** **x\_loadings\_**(): `Promise`\<`ArrayLike`[]\>

The loadings of `X`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:666](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L666)

***

### x\_rotations\_

**Get Signature**

> **get** **x\_rotations\_**(): `Promise`\<`ArrayLike`[]\>

The projection matrix used to transform `X`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:716](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L716)

***

### x\_weights\_

**Get Signature**

> **get** **x\_weights\_**(): `Promise`\<`ArrayLike`[]\>

The left singular vectors of the cross-covariance matrices of each iteration.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L616)

***

### y\_loadings\_

**Get Signature**

> **get** **y\_loadings\_**(): `Promise`\<`ArrayLike`[]\>

The loadings of `Y`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:691](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L691)

***

### y\_rotations\_

**Get Signature**

> **get** **y\_rotations\_**(): `Promise`\<`ArrayLike`[]\>

The projection matrix used to transform `Y`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:741](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L741)

***

### y\_weights\_

**Get Signature**

> **get** **y\_weights\_**(): `Promise`\<`ArrayLike`[]\>

The right singular vectors of the cross-covariance matrices of each iteration.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L641)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L124)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit model to data.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | Training vectors, where `n_samples` is the number of samples and `n_features` is the number of predictors. |
| `opts.y`? | `ArrayLike` | Target vectors, where `n_samples` is the number of samples and `n_targets` is the number of response variables. |
| `opts.Y`? | `ArrayLike` | Target vectors, where `n_samples` is the number of samples and `n_targets` is the number of response variables. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L141)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Learn and apply the dimension reduction on the train data.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | Training vectors, where `n_samples` is the number of samples and `n_features` is the number of predictors. |
| `opts.y`? | `ArrayLike`[] | Target vectors, where `n_samples` is the number of samples and `n_targets` is the number of response variables. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L183)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L222)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L258)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L85)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform data back to its original space.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | New data, where `n_samples` is the number of samples and `n_components` is the number of pls components. |
| `opts.y`? | `ArrayLike` | New target, where `n_samples` is the number of samples and `n_components` is the number of pls components. |
| `opts.Y`? | `ArrayLike`[] | New target, where `n_samples` is the number of samples and `n_components` is the number of pls components. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L292)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict targets of given samples.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.copy`? | `boolean` | Whether to copy `X` and `Y`, or perform in-place normalization. |
| `opts.X`? | `ArrayLike`[] | Samples. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L336)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.y`? | `ArrayLike` | True values for `X`. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L377)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L421)

***

### set\_predict\_request()

> **set\_predict\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.copy`? | `string` \| `boolean` | Metadata routing for `copy` parameter in `predict`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L457)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L495)

***

### set\_transform\_request()

> **set\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.copy`? | `string` \| `boolean` | Metadata routing for `copy` parameter in `transform`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L533)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Apply the dimension reduction.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.copy`? | `boolean` | Whether to copy `X` and `Y`, or perform in-place normalization. |
| `opts.X`? | `ArrayLike`[] | Samples to transform. |
| `opts.y`? | `ArrayLike`[] | Target vectors. |
| `opts.Y`? | `ArrayLike`[] | Target vectors. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cross\_decomposition/PLSCanonical.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L567)
