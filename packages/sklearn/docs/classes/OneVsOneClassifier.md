[sklearn](../readme.md) / [Exports](../modules.md) / OneVsOneClassifier

# Class: OneVsOneClassifier

One-vs-one multiclass strategy.

This strategy consists in fitting one classifier per class pair. At prediction time, the class which received the most votes is selected. Since it requires to fit `n\_classes \* (n\_classes \- 1) / 2` classifiers, this method is usually slower than one-vs-the-rest, due to its O(n\_classes^2) complexity. However, this method may be advantageous for algorithms such as kernel algorithms which don’t scale well with `n\_samples`. This is because each individual learning problem only involves a small subset of the data whereas, with one-vs-the-rest, the complete dataset is used `n\_classes` times.

Read more in the [User Guide](../multiclass.html#ovo-classification).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsOneClassifier.html

## Table of contents

### Constructors

- [constructor](OneVsOneClassifier.md#constructor)

### Properties

- [\_isDisposed](OneVsOneClassifier.md#_isdisposed)
- [\_isInitialized](OneVsOneClassifier.md#_isinitialized)
- [\_py](OneVsOneClassifier.md#_py)
- [id](OneVsOneClassifier.md#id)
- [opts](OneVsOneClassifier.md#opts)

### Accessors

- [classes\_](OneVsOneClassifier.md#classes_)
- [estimators\_](OneVsOneClassifier.md#estimators_)
- [feature\_names\_in\_](OneVsOneClassifier.md#feature_names_in_)
- [n\_features\_in\_](OneVsOneClassifier.md#n_features_in_)
- [pairwise\_indices\_](OneVsOneClassifier.md#pairwise_indices_)
- [py](OneVsOneClassifier.md#py)

### Methods

- [decision\_function](OneVsOneClassifier.md#decision_function)
- [dispose](OneVsOneClassifier.md#dispose)
- [fit](OneVsOneClassifier.md#fit)
- [init](OneVsOneClassifier.md#init)
- [partial\_fit](OneVsOneClassifier.md#partial_fit)
- [predict](OneVsOneClassifier.md#predict)
- [score](OneVsOneClassifier.md#score)

## Constructors

### constructor

• **new OneVsOneClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OneVsOneClassifierOptions`](../interfaces/OneVsOneClassifierOptions.md) |

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L19)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<`any`\>

Array containing labels.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L306)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

Estimators used for predictions.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L279)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L387)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L360)

___

### pairwise\_indices\_

• `get` **pairwise_indices_**(): `Promise`<`any`[]\>

Indices of samples used when training the estimators. `undefined` when `estimator`’s `pairwise` tag is `false`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L333)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L34)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Decision function for the OneVsOneClassifier.

The decision values for the samples are computed by adding the normalized sum of pair-wise classification confidence levels to the votes in order to disambiguate between the decision values when the votes for all the classes are equal leading to a tie.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierDecisionFunctionOptions`](../interfaces/OneVsOneClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L106)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit underlying estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierFitOptions`](../interfaces/OneVsOneClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L141)

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

[generated/multiclass/OneVsOneClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L43)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Partially fit underlying estimators.

Should be used when memory is inefficient to train all data. Chunks of data can be passed in several iteration, where the first call should have an array of all target variables.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierPartialFitOptions`](../interfaces/OneVsOneClassifierPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L175)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Estimate the best class label for each sample in X.

This is implemented as `argmax(decision\_function(X), axis=1)` which will return the label of the class with most votes by estimators predicting the outcome of a decision for each possible class pair.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierPredictOptions`](../interfaces/OneVsOneClassifierPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L213)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsOneClassifierScoreOptions`](../interfaces/OneVsOneClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multiclass/OneVsOneClassifier.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsOneClassifier.ts#L245)
