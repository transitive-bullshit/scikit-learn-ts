# Class: GenericUnivariateSelect

Univariate feature selector with configurable strategy.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.GenericUnivariateSelect.html)

## Constructors

### new GenericUnivariateSelect()

> **new GenericUnivariateSelect**(`opts`?): [`GenericUnivariateSelect`](GenericUnivariateSelect.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.mode`? | `"percentile"` \| `"k_best"` \| `"fpr"` \| `"fdr"` \| `"fwe"` | Feature selection mode. Note that the `'percentile'` and `'kbest'` modes are supporting unsupervised feature selection (when `y` is `undefined`). |
| `opts.param`? | `number` \| `"all"` | Parameter of the corresponding mode. |
| `opts.score_func`? | `any` | Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). For modes ‘percentile’ or ‘kbest’ it can return a single array scores. |

**Returns** [`GenericUnivariateSelect`](GenericUnivariateSelect.md)

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/feature\_selection/GenericUnivariateSelect.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/feature\_selection/GenericUnivariateSelect.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/feature\_selection/GenericUnivariateSelect.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L19) |
| `id` | `string` | `undefined` | [generated/feature\_selection/GenericUnivariateSelect.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L16) |
| `opts` | `any` | `undefined` | [generated/feature\_selection/GenericUnivariateSelect.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L17) |

## Accessors

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L510)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L483)

***

### pvalues\_

**Get Signature**

> **get** **pvalues\_**(): `Promise`\<`ArrayLike`\>

p-values of feature scores, `undefined` if `score_func` returned scores only.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L456)

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

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L47)

***

### scores\_

**Get Signature**

> **get** **scores\_**(): `Promise`\<`ArrayLike`\>

Scores of features.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L429)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L103)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Run score function on (X, y) and get the appropriate features.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The training input samples. |
| `opts.y`? | `ArrayLike` | The target values (class labels in classification, real numbers in regression). If the selector is unsupervised then `y` can be set to `undefined`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L120)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Additional fit parameters. |
| `opts.X`? | `ArrayLike`[] | Input samples. |
| `opts.y`? | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L161)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Mask feature names according to selected features.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Input features. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L207)

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

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L245)

***

### get\_support()

> **get\_support**(`opts`): `Promise`\<`any`\>

Get a mask, or integer index, of the features selected.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.indices`? | `boolean` | If `true`, the return value will be an array of integers, rather than a boolean mask. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L281)

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

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L60)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Reverse the transformation operation.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | The input samples. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L319)

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

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L357)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Reduce X to the selected features.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | The input samples. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/feature\_selection/GenericUnivariateSelect.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L393)
