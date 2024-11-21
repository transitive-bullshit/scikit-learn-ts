[**sklearn**](../README.md) • **Docs**

***

Time Series cross-validator.

Provides train/test indices to split time series data samples that are observed at fixed time intervals, in train/test sets. In each split, test indices must be higher than before, and thus shuffling in cross validator is inappropriate.

This cross-validation object is a variation of [`KFold`](sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"). In the kth split, it returns first k folds as train set and the (k+1)th fold as test set.

Note that unlike standard cross-validation methods, successive training sets are supersets of those that come before them.

Read more in the [User Guide](../cross_validation.html#time-series-split).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html)

## Constructors

### new TimeSeriesSplit()

> **new TimeSeriesSplit**(`opts`?): [`TimeSeriesSplit`](TimeSeriesSplit.md)

#### Parameters

• **opts?**

• **opts.gap?**: `number`

Number of samples to exclude from the end of each train set before the test set.

**Default Value**

`0`

• **opts.max\_train\_size?**: `number`

Maximum size for a single training set.

• **opts.n\_splits?**: `number`

Number of splits. Must be at least 2.

**Default Value**

`5`

• **opts.test\_size?**: `number`

Used to limit the size of the test set. Defaults to `n\_samples // (n\_splits + 1)`, which is the maximum allowed value with `gap=0`.

#### Returns

[`TimeSeriesSplit`](TimeSeriesSplit.md)

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L31)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L29)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L28)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L27)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L24)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L25)

## Accessors

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L60)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L112)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L131)

***

### get\_n\_splits()

> **get\_n\_splits**(`opts`): `Promise`\<`number`\>

Returns the number of splitting iterations in the cross-validator.

#### Parameters

• **opts**

• **opts.groups?**: `any`

Always ignored, exists for compatibility.

• **opts.X?**: `any`

Always ignored, exists for compatibility.

• **opts.y?**: `any`

Always ignored, exists for compatibility.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L165)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:73](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L73)

***

### split()

> **split**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Generate indices to split data into training and test set.

#### Parameters

• **opts**

• **opts.groups?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Always ignored, exists for compatibility.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Always ignored, exists for compatibility.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/TimeSeriesSplit.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L207)
