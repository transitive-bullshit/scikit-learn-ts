[**sklearn**](../README.md) • **Docs**

***

K-Fold cross-validator.

Provides train/test indices to split data in train/test sets. Split dataset into k consecutive folds (without shuffling by default).

Each fold is then used once as a validation while the k - 1 remaining folds form the training set.

Read more in the [User Guide](../cross_validation.html#k-fold).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html)

## Constructors

### new KFold()

> **new KFold**(`opts`?): [`KFold`](KFold.md)

#### Parameters

• **opts?**

• **opts.n\_splits?**: `number`

Number of folds. Must be at least 2.

**Default Value**

`5`

• **opts.random\_state?**: `number`

When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold. Otherwise, this parameter has no effect. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.shuffle?**: `boolean`

Whether to shuffle the data before splitting into batches. Note that the samples within each split will not be shuffled.

**Default Value**

`false`

#### Returns

[`KFold`](KFold.md)

#### Defined in

[generated/model\_selection/KFold.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/KFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/KFold.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/KFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/KFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/KFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L23)

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

[generated/model\_selection/KFold.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L53)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/KFold.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L104)

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

[generated/model\_selection/KFold.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L123)

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

[generated/model\_selection/KFold.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L155)

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

[generated/model\_selection/KFold.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L66)

***

### split()

> **split**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Generate indices to split data into training and test set.

#### Parameters

• **opts**

• **opts.groups?**: `any`

Always ignored, exists for compatibility.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The target variable for supervised learning problems.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/KFold.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/KFold.ts#L197)
