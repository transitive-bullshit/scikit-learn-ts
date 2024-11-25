# Class: DummyRegressor

Regressor that makes predictions using simple rules.

This regressor is useful as a simple baseline to compare with other (real) regressors. Do not use it for real problems.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#dummy-estimators).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyRegressor.html)

## Constructors

### new DummyRegressor()

> **new DummyRegressor**(`opts`?): [`DummyRegressor`](DummyRegressor.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.constant`? | `number` \| `ArrayLike` | The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy. |
| `opts.quantile`? | `number` | The quantile to predict using the “quantile” strategy. A quantile of 0.5 corresponds to the median, while 0.0 to the minimum and 1.0 to the maximum. |
| `opts.strategy`? | `"quantile"` \| `"constant"` \| `"mean"` \| `"median"` | Strategy to use to generate predictions. |

**Returns** [`DummyRegressor`](DummyRegressor.md)

**Defined in** [generated/dummy/DummyRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/dummy/DummyRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/dummy/DummyRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/dummy/DummyRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L21) |
| `id` | `string` | `undefined` | [generated/dummy/DummyRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L18) |
| `opts` | `any` | `undefined` | [generated/dummy/DummyRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L19) |

## Accessors

### constant\_

**Get Signature**

> **get** **constant\_**(): `Promise`\<`ArrayLike`[]\>

Mean or median or quantile of the training targets or constant value given by the user.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/dummy/DummyRegressor.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L391)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/dummy/DummyRegressor.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L441)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/dummy/DummyRegressor.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L416)

***

### n\_outputs\_

**Get Signature**

> **get** **n\_outputs\_**(): `Promise`\<`number`\>

Number of outputs.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/dummy/DummyRegressor.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L466)

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

**Defined in** [generated/dummy/DummyRegressor.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L47)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/dummy/DummyRegressor.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L99)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the random regressor.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike`[] | Training data. |
| `opts.y`? | `ArrayLike` | Target values. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/dummy/DummyRegressor.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L116)

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

**Defined in** [generated/dummy/DummyRegressor.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L160)

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

**Defined in** [generated/dummy/DummyRegressor.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L60)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform classification on test vectors X.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.return_std`? | `boolean` | Whether to return the standard deviation of posterior prediction. All zeros in this case. |
| `opts.X`? | `ArrayLike`[] | Test data. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/dummy/DummyRegressor.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L194)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination R^2 of the prediction.

The coefficient R^2 is defined as `(1 \- u/v)`, where `u` is the residual sum of squares `((y_true \- y_pred) \*\* 2).sum()` and `v` is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a R^2 score of 0.0.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike`[] | Test samples. Passing `undefined` as test samples gives the same result as passing real test samples, since `DummyRegressor` operates independently of the sampled observations. |
| `opts.y`? | `ArrayLike` | True values for X. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/dummy/DummyRegressor.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L235)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/dummy/DummyRegressor.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L281)

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
| `opts.return_std`? | `string` \| `boolean` | Metadata routing for `return_std` parameter in `predict`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/dummy/DummyRegressor.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L319)

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

**Defined in** [generated/dummy/DummyRegressor.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L357)
