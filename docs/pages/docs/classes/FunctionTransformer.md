**sklearn** • **Docs**

***

Constructs a transformer from an arbitrary callable.

A FunctionTransformer forwards its X (and optionally y) arguments to a user-defined function or function object and returns the result of this function. This is useful for stateless transformations such as taking the log of frequencies, doing custom scaling, etc.

Note: If a lambda is used as the function, then the resulting transformer will not be pickleable.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.FunctionTransformer.html)

## Constructors

### new FunctionTransformer()

> **new FunctionTransformer**(`opts`?): [`FunctionTransformer`](FunctionTransformer.md)

#### Parameters

• **opts?**

• **opts.accept\_sparse?**: `boolean`

Indicate that func accepts a sparse matrix as input. If validate is `false`, this has no effect. Otherwise, if accept\_sparse is false, sparse matrix inputs will cause an exception to be raised.

**Default Value**

`false`

• **opts.check\_inverse?**: `boolean`

Whether to check that or `func` followed by `inverse\_func` leads to the original inputs. It can be used for a sanity check, raising a warning when the condition is not fulfilled.

**Default Value**

`true`

• **opts.feature\_names\_out?**: `"one-to-one"`

Determines the list of feature names that will be returned by the `get\_feature\_names\_out` method. If it is ‘one-to-one’, then the output feature names will be equal to the input feature names. If it is a callable, then it must take two positional arguments: this `FunctionTransformer` (`self`) and an array-like of input feature names (`input\_features`). It must return an array-like of output feature names. The `get\_feature\_names\_out` method is only defined if `feature\_names\_out` is not `undefined`.

See `get\_feature\_names\_out` for more details.

• **opts.func?**: `any`

The callable to use for the transformation. This will be passed the same arguments as transform, with args and kwargs forwarded. If func is `undefined`, then func will be the identity function.

• **opts.inv\_kw\_args?**: `any`

Dictionary of additional keyword arguments to pass to inverse\_func.

• **opts.inverse\_func?**: `any`

The callable to use for the inverse transformation. This will be passed the same arguments as inverse transform, with args and kwargs forwarded. If inverse\_func is `undefined`, then inverse\_func will be the identity function.

• **opts.kw\_args?**: `any`

Dictionary of additional keyword arguments to pass to func.

• **opts.validate?**: `boolean`

Indicate that the input X array should be checked before calling `func`. The possibilities are:

**Default Value**

`false`

#### Returns

[`FunctionTransformer`](FunctionTransformer.md)

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L19)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L451)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L424)

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

[generated/preprocessing/FunctionTransformer.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L78)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L134)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit transformer by checking X.

If `validate` is `true`, `X` will be checked.

#### Parameters

• **opts**

• **opts.X?**: `any`

Input array.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L153)

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

[generated/preprocessing/FunctionTransformer.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L194)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

This method is only defined if `feature\_names\_out` is not `undefined`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input feature names.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L242)

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

[generated/preprocessing/FunctionTransformer.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L280)

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

[generated/preprocessing/FunctionTransformer.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L91)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Transform X using the inverse function.

#### Parameters

• **opts**

• **opts.X?**: `any`

Input array.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L316)

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

[generated/preprocessing/FunctionTransformer.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L354)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Transform X using the forward function.

#### Parameters

• **opts**

• **opts.X?**: `any`

Input array.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L390)
