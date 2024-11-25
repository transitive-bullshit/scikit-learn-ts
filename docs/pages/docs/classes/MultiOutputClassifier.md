# Class: MultiOutputClassifier

Multi target classification.

This strategy consists of fitting one classifier per target. This is a simple strategy for extending classifiers that do not natively support multi-target classification.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputClassifier.html)

## Constructors

### new MultiOutputClassifier()

> **new MultiOutputClassifier**(`opts`?): [`MultiOutputClassifier`](MultiOutputClassifier.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.estimator`? | `any` | An estimator object implementing [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit) and [predict](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict). A [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) method will be exposed only if `estimator` implements it. |
| `opts.n_jobs`? | `number` | The number of jobs to run in parallel. [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.multioutput.MultiOutputClassifier.fit "sklearn.multioutput.MultiOutputClassifier.fit"), [`predict`](https://scikit-learn.org/stable/modules/generated/#sklearn.multioutput.MultiOutputClassifier.predict "sklearn.multioutput.MultiOutputClassifier.predict") and [`partial_fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.multioutput.MultiOutputClassifier.partial_fit "sklearn.multioutput.MultiOutputClassifier.partial_fit") (if supported by the passed estimator) will be parallelized for each target. When individual estimators are fast to train or predict, using `n_jobs > 1` can result in slower performance due to the parallelism overhead. `undefined` means `1` unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all available processes / threads. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |

**Returns** [`MultiOutputClassifier`](MultiOutputClassifier.md)

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/multioutput/MultiOutputClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/multioutput/MultiOutputClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/multioutput/MultiOutputClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L19) |
| `id` | `string` | `undefined` | [generated/multioutput/MultiOutputClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L16) |
| `opts` | `any` | `undefined` | [generated/multioutput/MultiOutputClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L17) |

## Accessors

### classes\_

**Get Signature**

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

Class labels.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L456)

***

### estimators\_

**Get Signature**

> **get** **estimators\_**(): `Promise`\<`any`\>

Estimators used for predictions.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L483)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L537)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying `estimator` exposes such an attribute when fit.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L510)

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

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L42)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L98)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model to data matrix X and targets Y.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Parameters passed to the `estimator.fit` method of each step. |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying classifier supports sample weights. |
| `opts.X`? | `ArrayLike` | The input data. |
| `opts.Y`? | `ArrayLike`[] | The target values. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L115)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L166)

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

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L55)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Incrementally fit a separate model for each class output.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.classes`? | `any`[] | Each array is unique classes for one output in str/int. Can be obtained via `\[np.unique(y\[:, i\]) for i in range(y.shape\[1\])\]`, where `y` is the target matrix of the entire dataset. This argument is required for the first call to partial_fit and can be omitted in the subsequent calls. Note that `y` doesn’t need to contain all labels in `classes`. |
| `opts.partial_fit_params`? | `any` | Parameters passed to the `estimator.partial_fit` method of each sub-estimator. Only available if `enable_metadata_routing=True`. See the [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing). |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights. |
| `opts.X`? | `ArrayLike` | The input data. |
| `opts.y`? | `ArrayLike` | Multi-output targets. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L202)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict multi-output variable using model for each target variable.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | The input data. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L260)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`\>

Return prediction probabilities for each class of each output.

This method will raise a `ValueError` if any of the estimators do not have `predict_proba`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The input data. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L296)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | Test samples. |
| `opts.y`? | `ArrayLike`[] | True values for X. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L332)

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

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L375)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial_fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.classes`? | `string` \| `boolean` | Metadata routing for `classes` parameter in `partial_fit`. |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `partial_fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/multioutput/MultiOutputClassifier.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L415)
