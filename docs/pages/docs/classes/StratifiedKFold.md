**sklearn** • **Docs**

***

Stratified K-Fold cross-validator.

Provides train/test indices to split data in train/test sets.

This cross-validation object is a variation of KFold that returns stratified folds. The folds are made by preserving the percentage of samples for each class.

Read more in the User Guide.

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to Visualizing cross-validation behavior in scikit-learn

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html)

## Constructors

### new StratifiedKFold()

> **new StratifiedKFold**(`opts`?): [`StratifiedKFold`](StratifiedKFold.md)

#### Parameters

• **opts?**

• **opts.n\_splits?**: `number`

Number of folds. Must be at least 2.

**Default Value**

`5`

• **opts.random\_state?**: `number`

When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold for each class. Otherwise, leave `random\_state` as `undefined`. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.shuffle?**: `boolean`

Whether to shuffle each class’s samples before splitting into batches. Note that the samples within each split will not be shuffled.

**Default Value**

`false`

#### Returns

[`StratifiedKFold`](StratifiedKFold.md)

#### Defined in

[generated/model\_selection/StratifiedKFold.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/StratifiedKFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/StratifiedKFold.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/StratifiedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/StratifiedKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/StratifiedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L23)

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

[generated/model\_selection/StratifiedKFold.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L53)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/StratifiedKFold.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L105)

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

[generated/model\_selection/StratifiedKFold.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L124)

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

[generated/model\_selection/StratifiedKFold.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L158)

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

[generated/model\_selection/StratifiedKFold.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L66)

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

[generated/model\_selection/StratifiedKFold.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L200)
