[sklearn](../readme.md) / [Exports](../modules.md) / FunctionTransformer

# Class: FunctionTransformer

Constructs a transformer from an arbitrary callable.

A FunctionTransformer forwards its X (and optionally y) arguments to a user-defined function or function object and returns the result of this function. This is useful for stateless transformations such as taking the log of frequencies, doing custom scaling, etc.

Note: If a lambda is used as the function, then the resulting transformer will not be pickleable.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.FunctionTransformer.html

## Table of contents

### Constructors

- [constructor](FunctionTransformer.md#constructor)

### Properties

- [\_isDisposed](FunctionTransformer.md#_isdisposed)
- [\_isInitialized](FunctionTransformer.md#_isinitialized)
- [\_py](FunctionTransformer.md#_py)
- [id](FunctionTransformer.md#id)
- [opts](FunctionTransformer.md#opts)

### Accessors

- [feature\_names\_in\_](FunctionTransformer.md#feature_names_in_)
- [n\_features\_in\_](FunctionTransformer.md#n_features_in_)
- [py](FunctionTransformer.md#py)

### Methods

- [dispose](FunctionTransformer.md#dispose)
- [fit](FunctionTransformer.md#fit)
- [fit\_transform](FunctionTransformer.md#fit_transform)
- [get\_feature\_names\_out](FunctionTransformer.md#get_feature_names_out)
- [init](FunctionTransformer.md#init)
- [inverse\_transform](FunctionTransformer.md#inverse_transform)
- [set\_output](FunctionTransformer.md#set_output)
- [transform](FunctionTransformer.md#transform)

## Constructors

### constructor

• **new FunctionTransformer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FunctionTransformerOptions`](../interfaces/FunctionTransformerOptions.md) |

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L351)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L324)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit transformer by checking X.

If `validate` is `true`, `X` will be checked.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FunctionTransformerFitOptions`](../interfaces/FunctionTransformerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L116)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FunctionTransformerFitTransformOptions`](../interfaces/FunctionTransformerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L148)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

This method is only defined if `feature\_names\_out` is not `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FunctionTransformerGetFeatureNamesOutOptions`](../interfaces/FunctionTransformerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L188)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform X using the inverse function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FunctionTransformerInverseTransformOptions`](../interfaces/FunctionTransformerInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L223)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FunctionTransformerSetOutputOptions`](../interfaces/FunctionTransformerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L260)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Transform X using the forward function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FunctionTransformerTransformOptions`](../interfaces/FunctionTransformerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L292)
