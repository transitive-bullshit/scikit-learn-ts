**sklearn** • **Docs**

***

Center an arbitrary kernel matrix \\(K\\).

Let define a kernel \\(K\\) such that:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KernelCenterer.html)

## Constructors

### new KernelCenterer()

> **new KernelCenterer**(`opts`?): [`KernelCenterer`](KernelCenterer.md)

#### Parameters

• **opts?**

• **opts.feature\_names\_in\_?**: `ArrayLike`

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

• **opts.K\_fit\_all\_?**: `number`

Average of kernel matrix.

• **opts.K\_fit\_rows\_?**: `ArrayLike`

Average of each column of kernel matrix.

• **opts.n\_features\_in\_?**: `number`

Number of features seen during fit.

#### Returns

[`KernelCenterer`](KernelCenterer.md)

#### Defined in

[generated/preprocessing/KernelCenterer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/KernelCenterer.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L17)

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

[generated/preprocessing/KernelCenterer.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L48)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L100)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit KernelCenterer.

#### Parameters

• **opts**

• **opts.K?**: `ArrayLike`[]

Kernel matrix.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L117)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: `ArrayLike`[]

Input samples.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L156)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L200)

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

[generated/preprocessing/KernelCenterer.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L236)

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

[generated/preprocessing/KernelCenterer.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L61)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.K?**: `string` \| `boolean`

Metadata routing for `K` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L274)

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

[generated/preprocessing/KernelCenterer.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L310)

***

### set\_transform\_request()

> **set\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.copy?**: `string` \| `boolean`

Metadata routing for `copy` parameter in `transform`.

• **opts.K?**: `string` \| `boolean`

Metadata routing for `K` parameter in `transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L346)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Center kernel matrix.

#### Parameters

• **opts**

• **opts.copy?**: `boolean`

Set to `false` to perform inplace computation.

**Default Value**

`true`

• **opts.K?**: `ArrayLike`[]

Kernel matrix.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/preprocessing/KernelCenterer.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/preprocessing/KernelCenterer.ts#L385)
