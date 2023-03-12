[sklearn](../readme.md) / [Exports](../modules.md) / IterativeImputer

# Class: IterativeImputer

Multivariate imputer that estimates each feature from all the others.

A strategy for imputing missing values by modeling each feature with missing values as a function of other features in a round-robin fashion.

Read more in the [User Guide](../impute.html#iterative-imputer).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.impute.IterativeImputer.html

## Table of contents

### Constructors

- [constructor](IterativeImputer.md#constructor)

### Properties

- [\_isDisposed](IterativeImputer.md#_isdisposed)
- [\_isInitialized](IterativeImputer.md#_isinitialized)
- [\_py](IterativeImputer.md#_py)
- [id](IterativeImputer.md#id)
- [opts](IterativeImputer.md#opts)

### Accessors

- [feature\_names\_in\_](IterativeImputer.md#feature_names_in_)
- [imputation\_sequence\_](IterativeImputer.md#imputation_sequence_)
- [indicator\_](IterativeImputer.md#indicator_)
- [initial\_imputer\_](IterativeImputer.md#initial_imputer_)
- [n\_features\_in\_](IterativeImputer.md#n_features_in_)
- [n\_features\_with\_missing\_](IterativeImputer.md#n_features_with_missing_)
- [n\_iter\_](IterativeImputer.md#n_iter_)
- [py](IterativeImputer.md#py)
- [random\_state\_](IterativeImputer.md#random_state_)

### Methods

- [dispose](IterativeImputer.md#dispose)
- [fit](IterativeImputer.md#fit)
- [fit\_transform](IterativeImputer.md#fit_transform)
- [get\_feature\_names\_out](IterativeImputer.md#get_feature_names_out)
- [init](IterativeImputer.md#init)
- [set\_output](IterativeImputer.md#set_output)
- [transform](IterativeImputer.md#transform)

## Constructors

### constructor

• **new IterativeImputer**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`IterativeImputerOptions`](../interfaces/IterativeImputerOptions.md) |

#### Defined in

[generated/impute/IterativeImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/impute/IterativeImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/impute/IterativeImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/impute/IterativeImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/impute/IterativeImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/impute/IterativeImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/IterativeImputer.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L397)

___

### imputation\_sequence\_

• `get` **imputation_sequence_**(): `Promise`<`any`\>

Each tuple has `(feat\_idx, neighbor\_feat\_idx, estimator)`, where `feat\_idx` is the current feature to be imputed, `neighbor\_feat\_idx` is the array of other features used to impute the current feature, and `estimator` is the trained estimator used for the imputation. Length is `self.n\_features\_with\_missing\_ \* self.n\_iter\_`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L316)

___

### indicator\_

• `get` **indicator_**(): `Promise`<`any`\>

Indicator used to add binary indicators for missing values. `undefined` if `add\_indicator=False`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L451)

___

### initial\_imputer\_

• `get` **initial_imputer_**(): `Promise`<`any`\>

Imputer used to initialize the missing values.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L289)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/impute/IterativeImputer.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L370)

___

### n\_features\_with\_missing\_

• `get` **n_features_with_missing_**(): `Promise`<`number`\>

Number of features with missing values.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/impute/IterativeImputer.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L424)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iteration rounds that occurred. Will be less than `self.max\_iter` if early stopping criterion was reached.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/impute/IterativeImputer.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L343)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/impute/IterativeImputer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/impute/IterativeImputer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L34)

___

### random\_state\_

• `get` **random_state_**(): `Promise`<`any`\>

RandomState instance that is generated either from a seed, the random number generator or by `np.random`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L478)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/impute/IterativeImputer.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L109)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the imputer on `X` and return self.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerFitOptions`](../interfaces/IterativeImputerFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L126)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Fit the imputer on `X` and return the transformed `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerFitTransformOptions`](../interfaces/IterativeImputerFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/IterativeImputer.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L156)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerGetFeatureNamesOutOptions`](../interfaces/IterativeImputerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L190)

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

[generated/impute/IterativeImputer.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L43)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerSetOutputOptions`](../interfaces/IterativeImputerSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L227)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Impute all missing values in `X`.

Note that this is stochastic, and that if `random\_state` is not fixed, repeated calls, or permuted input, results will differ.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IterativeImputerTransformOptions`](../interfaces/IterativeImputerTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/impute/IterativeImputer.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/impute/IterativeImputer.ts#L259)
