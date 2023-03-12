[sklearn](../readme.md) / [Exports](../modules.md) / RegressorChain

# Class: RegressorChain

A multi-label model that arranges regressions into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

Read more in the [User Guide](../multiclass.html#regressorchain).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.RegressorChain.html

## Table of contents

### Constructors

- [constructor](RegressorChain.md#constructor)

### Properties

- [\_isDisposed](RegressorChain.md#_isdisposed)
- [\_isInitialized](RegressorChain.md#_isinitialized)
- [\_py](RegressorChain.md#_py)
- [id](RegressorChain.md#id)
- [opts](RegressorChain.md#opts)

### Accessors

- [estimators\_](RegressorChain.md#estimators_)
- [feature\_names\_in\_](RegressorChain.md#feature_names_in_)
- [n\_features\_in\_](RegressorChain.md#n_features_in_)
- [order\_](RegressorChain.md#order_)
- [py](RegressorChain.md#py)

### Methods

- [dispose](RegressorChain.md#dispose)
- [fit](RegressorChain.md#fit)
- [init](RegressorChain.md#init)
- [predict](RegressorChain.md#predict)
- [score](RegressorChain.md#score)

## Constructors

### constructor

• **new RegressorChain**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RegressorChainOptions`](../interfaces/RegressorChainOptions.md) |

#### Defined in

[generated/multioutput/RegressorChain.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multioutput/RegressorChain.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multioutput/RegressorChain.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/multioutput/RegressorChain.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/multioutput/RegressorChain.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/multioutput/RegressorChain.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L19)

## Accessors

### estimators\_

• `get` **estimators_**(): `Promise`<`any`[]\>

A list of clones of base\_estimator.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/multioutput/RegressorChain.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L198)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multioutput/RegressorChain.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L271)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `base\_estimator` exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multioutput/RegressorChain.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L246)

___

### order\_

• `get` **order_**(): `Promise`<`any`[]\>

The order of labels in the classifier chain.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/multioutput/RegressorChain.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L223)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/multioutput/RegressorChain.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/multioutput/RegressorChain.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/multioutput/RegressorChain.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model to data matrix X and targets Y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RegressorChainFitOptions`](../interfaces/RegressorChainFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multioutput/RegressorChain.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L104)

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

[generated/multioutput/RegressorChain.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict on the data matrix X using the ClassifierChain model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RegressorChainPredictOptions`](../interfaces/RegressorChainPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/multioutput/RegressorChain.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L136)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RegressorChainScoreOptions`](../interfaces/RegressorChainScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multioutput/RegressorChain.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L166)
