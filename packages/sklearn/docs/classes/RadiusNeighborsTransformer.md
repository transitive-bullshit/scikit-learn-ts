[sklearn](../readme.md) / [Exports](../modules.md) / RadiusNeighborsTransformer

# Class: RadiusNeighborsTransformer

Transform X into a (weighted) graph of neighbors nearer than a radius.

The transformed data is a sparse graph as returned by `radius\_neighbors\_graph`.

Read more in the [User Guide](../neighbors.html#neighbors-transformer).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsTransformer.html

## Table of contents

### Constructors

- [constructor](RadiusNeighborsTransformer.md#constructor)

### Properties

- [\_isDisposed](RadiusNeighborsTransformer.md#_isdisposed)
- [\_isInitialized](RadiusNeighborsTransformer.md#_isinitialized)
- [\_py](RadiusNeighborsTransformer.md#_py)
- [id](RadiusNeighborsTransformer.md#id)
- [opts](RadiusNeighborsTransformer.md#opts)

### Accessors

- [effective\_metric\_](RadiusNeighborsTransformer.md#effective_metric_)
- [effective\_metric\_params\_](RadiusNeighborsTransformer.md#effective_metric_params_)
- [feature\_names\_in\_](RadiusNeighborsTransformer.md#feature_names_in_)
- [n\_features\_in\_](RadiusNeighborsTransformer.md#n_features_in_)
- [n\_samples\_fit\_](RadiusNeighborsTransformer.md#n_samples_fit_)
- [py](RadiusNeighborsTransformer.md#py)

### Methods

- [dispose](RadiusNeighborsTransformer.md#dispose)
- [fit](RadiusNeighborsTransformer.md#fit)
- [fit\_transform](RadiusNeighborsTransformer.md#fit_transform)
- [get\_feature\_names\_out](RadiusNeighborsTransformer.md#get_feature_names_out)
- [init](RadiusNeighborsTransformer.md#init)
- [radius\_neighbors](RadiusNeighborsTransformer.md#radius_neighbors)
- [radius\_neighbors\_graph](RadiusNeighborsTransformer.md#radius_neighbors_graph)
- [set\_output](RadiusNeighborsTransformer.md#set_output)
- [transform](RadiusNeighborsTransformer.md#transform)

## Constructors

### constructor

• **new RadiusNeighborsTransformer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RadiusNeighborsTransformerOptions`](../interfaces/RadiusNeighborsTransformerOptions.md) |

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L19)

## Accessors

### effective\_metric\_

• `get` **effective_metric_**(): `Promise`<`string`\>

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L369)

___

### effective\_metric\_params\_

• `get` **effective_metric_params_**(): `Promise`<`any`\>

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L396)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L450)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L423)

___

### n\_samples\_fit\_

• `get` **n_samples_fit_**(): `Promise`<`number`\>

Number of samples in the fitted data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L477)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the radius neighbors transformer from the training dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerFitOptions`](../interfaces/RadiusNeighborsTransformerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L110)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to X and y with optional parameters fit\_params and returns a transformed version of X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerFitTransformOptions`](../interfaces/RadiusNeighborsTransformerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L144)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerGetFeatureNamesOutOptions`](../interfaces/RadiusNeighborsTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L181)

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

[generated/neighbors/RadiusNeighborsTransformer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L43)

___

### radius\_neighbors

▸ **radius_neighbors**(`opts`): `Promise`<`any`\>

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerRadiusNeighborsOptions`](../interfaces/RadiusNeighborsTransformerRadiusNeighborsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L220)

___

### radius\_neighbors\_graph

▸ **radius_neighbors_graph**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerRadiusNeighborsGraphOptions`](../interfaces/RadiusNeighborsTransformerRadiusNeighborsGraphOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L258)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerSetOutputOptions`](../interfaces/RadiusNeighborsTransformerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L299)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsTransformerTransformOptions`](../interfaces/RadiusNeighborsTransformerTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/RadiusNeighborsTransformer.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsTransformer.ts#L334)
