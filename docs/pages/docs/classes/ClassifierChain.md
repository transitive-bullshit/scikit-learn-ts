# Class: ClassifierChain

A multi-label model that arranges binary classifiers into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

For an example of how to use `ClassifierChain` and benefit from its ensemble, see [ClassifierChain on a yeast dataset](https://scikit-learn.org/stable/modules/generated/../../auto_examples/multioutput/plot_classifier_chain_yeast.html#sphx-glr-auto-examples-multioutput-plot-classifier-chain-yeast-py) example.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../multiclass.html#classifierchain).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.ClassifierChain.html)

## Constructors

### new ClassifierChain()

> **new ClassifierChain**(`opts`?): [`ClassifierChain`](ClassifierChain.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.base_estimator`? | `any` | The base estimator from which the classifier chain is built. |
| `opts.chain_method`? | `"predict_proba"` \| `"decision_function"` \| `"predict"` \| `"predict_log_proba"` | Prediction method to be used by estimators in the chain for the ‘prediction’ features of previous estimators in the chain. |
| `opts.cv`? | `number` | Determines whether to use cross validated predictions or true labels for the results of previous estimators in the chain. Possible inputs for cv are: |
| `opts.order`? | `ArrayLike` \| `"random"` | If `undefined`, the order will be determined by the order of columns in the label matrix Y.: |
| `opts.random_state`? | `number` | If `order='random'`, determines random number generation for the chain order. In addition, it controls the random seed given at each `base_estimator` at each chaining iteration. Thus, it is only used when `base_estimator` exposes a `random_state`. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.verbose`? | `boolean` | If `true`, chain progress is output as each model is completed. |

**Returns** [`ClassifierChain`](ClassifierChain.md)

**Defined in** [generated/multioutput/ClassifierChain.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/multioutput/ClassifierChain.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/multioutput/ClassifierChain.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/multioutput/ClassifierChain.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L23) |
| `id` | `string` | `undefined` | [generated/multioutput/ClassifierChain.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L20) |
| `opts` | `any` | `undefined` | [generated/multioutput/ClassifierChain.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L21) |

## Accessors

### chain\_method\_

**Get Signature**

> **get** **chain\_method\_**(): `Promise`\<`string`\>

Prediction method used by estimators in the chain for the prediction features.

**Returns** `Promise`\<`string`\>

**Defined in** [generated/multioutput/ClassifierChain.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L508)

***

### classes\_

**Get Signature**

> **get** **classes\_**(): `Promise`\<`any`[]\>

A list of arrays of length `len(estimators_)` containing the class labels for each estimator in the chain.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/multioutput/ClassifierChain.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L433)

***

### estimators\_

**Get Signature**

> **get** **estimators\_**(): `Promise`\<`any`[]\>

A list of clones of base_estimator.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/multioutput/ClassifierChain.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L458)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/multioutput/ClassifierChain.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L558)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying `base_estimator` exposes such an attribute when fit.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/multioutput/ClassifierChain.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L533)

***

### order\_

**Get Signature**

> **get** **order\_**(): `Promise`\<`any`[]\>

The order of labels in the classifier chain.

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/multioutput/ClassifierChain.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L483)

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

**Defined in** [generated/multioutput/ClassifierChain.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L70)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`[]\>

Evaluate the decision_function of the models in the chain.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The input data. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/multioutput/ClassifierChain.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L139)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/multioutput/ClassifierChain.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L122)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model to data matrix X and targets Y.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Parameters passed to the `fit` method of each step. Only available if `enable_metadata_routing=True`. See the [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing). |
| `opts.X`? | `ArrayLike` | The input data. |
| `opts.Y`? | `ArrayLike`[] | The target values. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/multioutput/ClassifierChain.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L173)

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

**Defined in** [generated/multioutput/ClassifierChain.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L219)

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

**Defined in** [generated/multioutput/ClassifierChain.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L83)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict on the data matrix X using the ClassifierChain model.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | The input data. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/multioutput/ClassifierChain.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L253)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict logarithm of probability estimates.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | The input data. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/multioutput/ClassifierChain.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L285)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict probability estimates.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | The input data. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/multioutput/ClassifierChain.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L319)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike`[] | Test samples. |
| `opts.y`? | `ArrayLike` | True labels for `X`. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/multioutput/ClassifierChain.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L353)

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

**Defined in** [generated/multioutput/ClassifierChain.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L399)
