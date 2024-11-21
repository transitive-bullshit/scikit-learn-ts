**sklearn** • **Docs**

***

Stratified ShuffleSplit cross-validator.

Provides train/test indices to split data in train/test sets.

This cross-validation object is a merge of [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold") and [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit"), which returns stratified randomized folds. The folds are made by preserving the percentage of samples for each class.

Note: like the [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit") strategy, stratified random splits do not guarantee that test sets across all folds will be mutually exclusive, and might include overlapping samples. However, this is still very likely for sizeable datasets.

Read more in the User Guide.

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to Visualizing cross-validation behavior in scikit-learn

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedShuffleSplit.html)

## Constructors

### new StratifiedShuffleSplit()

> **new StratifiedShuffleSplit**(`opts`?): [`StratifiedShuffleSplit`](StratifiedShuffleSplit.md)

#### Parameters

• **opts?**

• **opts.n\_splits?**: `number`

Number of re-shuffling & splitting iterations.

**Default Value**

`10`

• **opts.random\_state?**: `number`

Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.test\_size?**: `number`

If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If `undefined`, the value is set to the complement of the train size. If `train\_size` is also `undefined`, it will be set to 0.1.

• **opts.train\_size?**: `number`

If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If `undefined`, the value is automatically set to the complement of the test size.

#### Returns

[`StratifiedShuffleSplit`](StratifiedShuffleSplit.md)

#### Defined in

[generated/model\_selection/StratifiedShuffleSplit.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L31)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/StratifiedShuffleSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L29)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/StratifiedShuffleSplit.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L28)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/StratifiedShuffleSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L27)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/StratifiedShuffleSplit.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L24)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/StratifiedShuffleSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L25)

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

[generated/model\_selection/StratifiedShuffleSplit.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L58)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/StratifiedShuffleSplit.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L114)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/StratifiedShuffleSplit.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L133)

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

[generated/model\_selection/StratifiedShuffleSplit.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L169)

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

[generated/model\_selection/StratifiedShuffleSplit.ts:71](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L71)

***

### split()

> **split**(`opts`): `Promise`\<`ArrayLike`\>

Generate indices to split data into training and test set.

#### Parameters

• **opts**

• **opts.groups?**: `any`

Always ignored, exists for compatibility.

• **opts.X?**: `ArrayLike`[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

Note that providing `y` is sufficient to generate the splits and hence `np.zeros(n\_samples)` may be used as a placeholder for `X` instead of actual training data.

• **opts.y?**: `ArrayLike`

The target variable for supervised learning problems. Stratification is done based on the y labels.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/StratifiedShuffleSplit.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L215)
