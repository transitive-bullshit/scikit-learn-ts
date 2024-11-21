**sklearn** • **Docs**

***

Transform between iterable of iterables and a multilabel format.

Although a list of sets or tuples is a very intuitive format for multilabel data, it is unwieldy to process. This transformer converts between this intuitive format and the supported multilabel format: a (samples x classes) binary matrix indicating the presence of a class label.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MultiLabelBinarizer.html)

## Constructors

### new MultiLabelBinarizer()

> **new MultiLabelBinarizer**(`opts`?): [`MultiLabelBinarizer`](MultiLabelBinarizer.md)

#### Parameters

• **opts?**

• **opts.classes?**: `ArrayLike`

Indicates an ordering for the class labels. All entries should be unique (cannot contain duplicate classes).

• **opts.sparse\_output?**: `boolean`

Set to `true` if output binary array is desired in CSR sparse format.

**Default Value**

`false`

#### Returns

[`MultiLabelBinarizer`](MultiLabelBinarizer.md)

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L17)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

A copy of the `classes` parameter when provided. Otherwise it corresponds to the sorted set of classes found when fitting.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L329)

***

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

[generated/preprocessing/MultiLabelBinarizer.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L40)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L96)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the label sets binarizer, storing classes\_.

#### Parameters

• **opts**

• **opts.y?**: `any`

A set of labels (any orderable and hashable object) for each sample. If the `classes` parameter is set, `y` will not be iterated.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L113)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Fit the label sets binarizer and transform the given label sets.

#### Parameters

• **opts**

• **opts.y?**: `any`

A set of labels (any orderable and hashable object) for each sample. If the `classes` parameter is set, `y` will not be iterated.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L147)

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

[generated/preprocessing/MultiLabelBinarizer.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L185)

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

[generated/preprocessing/MultiLabelBinarizer.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L53)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Transform the given indicator matrix into label sets.

#### Parameters

• **opts**

• **opts.yt?**: `ArrayLike`

A matrix containing only 1s ands 0s.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L221)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L259)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Transform the given label sets.

#### Parameters

• **opts**

• **opts.y?**: `any`

A set of labels (any orderable and hashable object) for each sample. If the `classes` parameter is set, `y` will not be iterated.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/MultiLabelBinarizer.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/MultiLabelBinarizer.ts#L295)
