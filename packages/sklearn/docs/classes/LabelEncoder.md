[**sklearn**](../README.md) • **Docs**

***

Encode target labels with value between 0 and n\_classes-1.

This transformer should be used to encode target values, *i.e.* `y`, and not the input `X`.

Read more in the [User Guide](../preprocessing_targets.html#preprocessing-targets).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html)

## Constructors

### new LabelEncoder()

> **new LabelEncoder**(`opts`?): [`LabelEncoder`](LabelEncoder.md)

#### Parameters

• **opts?**

• **opts.classes\_?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Holds the label for each class.

#### Returns

[`LabelEncoder`](LabelEncoder.md)

#### Defined in

[generated/preprocessing/LabelEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/LabelEncoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L19)

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

[generated/preprocessing/LabelEncoder.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L35)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L87)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit label encoder.

#### Parameters

• **opts**

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L104)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Fit label encoder and return encoded labels.

#### Parameters

• **opts**

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L136)

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

[generated/preprocessing/LabelEncoder.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L170)

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

[generated/preprocessing/LabelEncoder.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L48)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Transform labels back to original encoding.

#### Parameters

• **opts**

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L204)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L240)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Transform labels to normalized encoding.

#### Parameters

• **opts**

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/LabelEncoder.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/LabelEncoder.ts#L272)
