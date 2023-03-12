[sklearn](../readme.md) / [Exports](../modules.md) / KNeighborsTransformer

# Class: KNeighborsTransformer

Transform X into a (weighted) graph of k nearest neighbors.

The transformed data is a sparse graph as returned by kneighbors\_graph.

Read more in the [User Guide](../neighbors.html#neighbors-transformer).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsTransformer.html

## Table of contents

### Constructors

- [constructor](KNeighborsTransformer.md#constructor)

### Properties

- [\_isDisposed](KNeighborsTransformer.md#_isdisposed)
- [\_isInitialized](KNeighborsTransformer.md#_isinitialized)
- [\_py](KNeighborsTransformer.md#_py)
- [id](KNeighborsTransformer.md#id)
- [opts](KNeighborsTransformer.md#opts)

### Accessors

- [effective\_metric\_](KNeighborsTransformer.md#effective_metric_)
- [effective\_metric\_params\_](KNeighborsTransformer.md#effective_metric_params_)
- [feature\_names\_in\_](KNeighborsTransformer.md#feature_names_in_)
- [n\_features\_in\_](KNeighborsTransformer.md#n_features_in_)
- [n\_samples\_fit\_](KNeighborsTransformer.md#n_samples_fit_)
- [py](KNeighborsTransformer.md#py)

### Methods

- [dispose](KNeighborsTransformer.md#dispose)
- [fit](KNeighborsTransformer.md#fit)
- [fit\_transform](KNeighborsTransformer.md#fit_transform)
- [get\_feature\_names\_out](KNeighborsTransformer.md#get_feature_names_out)
- [init](KNeighborsTransformer.md#init)
- [kneighbors](KNeighborsTransformer.md#kneighbors)
- [kneighbors\_graph](KNeighborsTransformer.md#kneighbors_graph)
- [set\_output](KNeighborsTransformer.md#set_output)
- [transform](KNeighborsTransformer.md#transform)

## Constructors

### constructor

• **new KNeighborsTransformer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KNeighborsTransformerOptions`](../interfaces/KNeighborsTransformerOptions.md) |

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L19)

## Accessors

### effective\_metric\_

• `get` **effective_metric_**(): `Promise`<`string`\>

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L357)

___

### effective\_metric\_params\_

• `get` **effective_metric_params_**(): `Promise`<`any`\>

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L384)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L438)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L411)

___

### n\_samples\_fit\_

• `get` **n_samples_fit_**(): `Promise`<`number`\>

Number of samples in the fitted data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L465)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the k-nearest neighbors transformer from the training dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerFitOptions`](../interfaces/KNeighborsTransformerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L110)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to X and y with optional parameters fit\_params and returns a transformed version of X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerFitTransformOptions`](../interfaces/KNeighborsTransformerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L142)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerGetFeatureNamesOutOptions`](../interfaces/KNeighborsTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L179)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L43)

___

### kneighbors

▸ **kneighbors**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerKneighborsOptions`](../interfaces/KNeighborsTransformerKneighborsOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L216)

___

### kneighbors\_graph

▸ **kneighbors_graph**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of k-Neighbors for points in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerKneighborsGraphOptions`](../interfaces/KNeighborsTransformerKneighborsGraphOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L252)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerSetOutputOptions`](../interfaces/KNeighborsTransformerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L291)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KNeighborsTransformerTransformOptions`](../interfaces/KNeighborsTransformerTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/KNeighborsTransformer.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L323)
