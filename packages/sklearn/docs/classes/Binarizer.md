[sklearn](../readme.md) / [Exports](../modules.md) / Binarizer

# Class: Binarizer

Binarize data (set feature values to 0 or 1) according to a threshold.

Values greater than the threshold map to 1, while values less than or equal to the threshold map to 0. With the default threshold of 0, only positive values map to 1.

Binarization is a common operation on text count data where the analyst can decide to only consider the presence or absence of a feature rather than a quantified number of occurrences for instance.

It can also be used as a pre-processing step for estimators that consider boolean random variables (e.g. modelled using the Bernoulli distribution in a Bayesian setting).

Read more in the [User Guide](../preprocessing.html#preprocessing-binarization).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.Binarizer.html

## Table of contents

### Constructors

- [constructor](Binarizer.md#constructor)

### Properties

- [\_isDisposed](Binarizer.md#_isdisposed)
- [\_isInitialized](Binarizer.md#_isinitialized)
- [\_py](Binarizer.md#_py)
- [id](Binarizer.md#id)
- [opts](Binarizer.md#opts)

### Accessors

- [feature\_names\_in\_](Binarizer.md#feature_names_in_)
- [n\_features\_in\_](Binarizer.md#n_features_in_)
- [py](Binarizer.md#py)

### Methods

- [dispose](Binarizer.md#dispose)
- [fit](Binarizer.md#fit)
- [fit\_transform](Binarizer.md#fit_transform)
- [get\_feature\_names\_out](Binarizer.md#get_feature_names_out)
- [init](Binarizer.md#init)
- [set\_output](Binarizer.md#set_output)
- [transform](Binarizer.md#transform)

## Constructors

### constructor

• **new Binarizer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BinarizerOptions`](../interfaces/BinarizerOptions.md) |

#### Defined in

[generated/preprocessing/Binarizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/Binarizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/Binarizer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/Binarizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/preprocessing/Binarizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/preprocessing/Binarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L23)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/Binarizer.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L287)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/preprocessing/Binarizer.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L262)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/preprocessing/Binarizer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/preprocessing/Binarizer.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/preprocessing/Binarizer.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L86)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerFitOptions`](../interfaces/BinarizerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/Binarizer.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L105)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerFitTransformOptions`](../interfaces/BinarizerFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/preprocessing/Binarizer.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L135)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerGetFeatureNamesOutOptions`](../interfaces/BinarizerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/Binarizer.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L167)

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

[generated/preprocessing/Binarizer.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L47)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerSetOutputOptions`](../interfaces/BinarizerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/preprocessing/Binarizer.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L202)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Binarize each element of X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerTransformOptions`](../interfaces/BinarizerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/preprocessing/Binarizer.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L230)
