[**sklearn**](../README.md) • **Docs**

***

Stratified K-Fold iterator variant with non-overlapping groups.

This cross-validation object is a variation of StratifiedKFold attempts to return stratified folds with non-overlapping groups. The folds are made by preserving the percentage of samples for each class.

Each group will appear exactly once in the test set across all folds (the number of distinct groups has to be at least equal to the number of folds).

The difference between [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold") and `StratifiedGroupKFold` is that the former attempts to create balanced folds such that the number of distinct groups is approximately the same in each fold, whereas `StratifiedGroupKFold` attempts to create folds which preserve the percentage of samples for each class as much as possible given the constraint of non-overlapping groups between splits.

Read more in the [User Guide](../cross_validation.html#stratified-group-k-fold).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedGroupKFold.html)

## Constructors

### new StratifiedGroupKFold()

> **new StratifiedGroupKFold**(`opts`?): [`StratifiedGroupKFold`](StratifiedGroupKFold.md)

#### Parameters

• **opts?**

• **opts.n\_splits?**: `number`

Number of folds. Must be at least 2.

**Default Value**

`5`

• **opts.random\_state?**: `number`

When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold for each class. Otherwise, leave `random\_state` as `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.shuffle?**: `boolean`

Whether to shuffle each class’s samples before splitting into batches. Note that the samples within each split will not be shuffled. This implementation can only shuffle groups that have approximately the same y distribution, no global shuffle will be performed.

**Default Value**

`false`

#### Returns

[`StratifiedGroupKFold`](StratifiedGroupKFold.md)

#### Defined in

[generated/model\_selection/StratifiedGroupKFold.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L31)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/StratifiedGroupKFold.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L29)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/StratifiedGroupKFold.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L28)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/StratifiedGroupKFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L27)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/StratifiedGroupKFold.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L24)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/StratifiedGroupKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L25)

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

[generated/model\_selection/StratifiedGroupKFold.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L55)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/StratifiedGroupKFold.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L111)

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

[generated/model\_selection/StratifiedGroupKFold.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L130)

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

[generated/model\_selection/StratifiedGroupKFold.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L166)

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

[generated/model\_selection/StratifiedGroupKFold.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L68)

***

### set\_split\_request()

> **set\_split\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `split` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.groups?**: `string` \| `boolean`

Metadata routing for `groups` parameter in `split`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/StratifiedGroupKFold.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L216)

***

### split()

> **split**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Generate indices to split data into training and test set.

#### Parameters

• **opts**

• **opts.groups?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Group labels for the samples used while splitting the dataset into train/test set.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The target variable for supervised learning problems.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/StratifiedGroupKFold.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L252)
