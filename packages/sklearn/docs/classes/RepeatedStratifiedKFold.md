[**sklearn**](../README.md) • **Docs**

***

Repeated Stratified K-Fold cross validator.

Repeats Stratified K-Fold n times with different randomization in each repetition.

Read more in the [User Guide](../cross_validation.html#repeated-k-fold).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedStratifiedKFold.html)

## Constructors

### new RepeatedStratifiedKFold()

> **new RepeatedStratifiedKFold**(`opts`?): [`RepeatedStratifiedKFold`](RepeatedStratifiedKFold.md)

#### Parameters

• **opts?**

• **opts.n\_repeats?**: `number`

Number of times cross-validator needs to be repeated.

**Default Value**

`10`

• **opts.n\_splits?**: `number`

Number of folds. Must be at least 2.

**Default Value**

`5`

• **opts.random\_state?**: `number`

Controls the generation of the random states for each repetition. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Returns

[`RepeatedStratifiedKFold`](RepeatedStratifiedKFold.md)

#### Defined in

[generated/model\_selection/RepeatedStratifiedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/RepeatedStratifiedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/RepeatedStratifiedKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/RepeatedStratifiedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/RepeatedStratifiedKFold.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/RepeatedStratifiedKFold.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L19)

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

[generated/model\_selection/RepeatedStratifiedKFold.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L49)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/RepeatedStratifiedKFold.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L105)

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

[generated/model\_selection/RepeatedStratifiedKFold.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L124)

***

### get\_n\_splits()

> **get\_n\_splits**(`opts`): `Promise`\<`number`\>

Returns the number of splitting iterations in the cross-validator.

#### Parameters

• **opts**

• **opts.groups?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Group labels for the samples used while splitting the dataset into train/test set.

• **opts.X?**: `any`

Always ignored, exists for compatibility. `np.zeros(n\_samples)` may be used as a placeholder.

• **opts.y?**: `any`

Always ignored, exists for compatibility. `np.zeros(n\_samples)` may be used as a placeholder.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/RepeatedStratifiedKFold.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L160)

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

[generated/model\_selection/RepeatedStratifiedKFold.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L62)

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

[generated/model\_selection/RepeatedStratifiedKFold.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L206)
