[sklearn](../readme.md) / [Exports](../modules.md) / PLSRegression

# Class: PLSRegression

PLS regression.

PLSRegression is also known as PLS2 or PLS1, depending on the number of targets.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSRegression.html

## Table of contents

### Constructors

- [constructor](PLSRegression.md#constructor)

### Properties

- [\_isDisposed](PLSRegression.md#_isdisposed)
- [\_isInitialized](PLSRegression.md#_isinitialized)
- [\_py](PLSRegression.md#_py)
- [id](PLSRegression.md#id)
- [opts](PLSRegression.md#opts)

### Accessors

- [feature\_names\_in\_](PLSRegression.md#feature_names_in_)
- [intercept\_](PLSRegression.md#intercept_)
- [n\_features\_in\_](PLSRegression.md#n_features_in_)
- [n\_iter\_](PLSRegression.md#n_iter_)
- [py](PLSRegression.md#py)
- [x\_loadings\_](PLSRegression.md#x_loadings_)
- [x\_rotations\_](PLSRegression.md#x_rotations_)
- [x\_scores\_](PLSRegression.md#x_scores_)
- [x\_weights\_](PLSRegression.md#x_weights_)
- [y\_loadings\_](PLSRegression.md#y_loadings_)
- [y\_rotations\_](PLSRegression.md#y_rotations_)
- [y\_scores\_](PLSRegression.md#y_scores_)
- [y\_weights\_](PLSRegression.md#y_weights_)

### Methods

- [dispose](PLSRegression.md#dispose)
- [fit](PLSRegression.md#fit)
- [fit\_transform](PLSRegression.md#fit_transform)
- [get\_feature\_names\_out](PLSRegression.md#get_feature_names_out)
- [init](PLSRegression.md#init)
- [inverse\_transform](PLSRegression.md#inverse_transform)
- [predict](PLSRegression.md#predict)
- [score](PLSRegression.md#score)
- [set\_output](PLSRegression.md#set_output)
- [transform](PLSRegression.md#transform)

## Constructors

### constructor

• **new PLSRegression**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PLSRegressionOptions`](../interfaces/PLSRegressionOptions.md) |

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L634)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_ + intercept\_`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L561)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L609)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`any`[]\>

Number of iterations of the power method, for each component.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L586)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L34)

___

### x\_loadings\_

• `get` **x_loadings_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The loadings of `X`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L411)

___

### x\_rotations\_

• `get` **x_rotations_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The projection matrix used to transform `X`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L511)

___

### x\_scores\_

• `get` **x_scores_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The transformed training samples.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L461)

___

### x\_weights\_

• `get` **x_weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The left singular vectors of the cross-covariance matrices of each iteration.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L361)

___

### y\_loadings\_

• `get` **y_loadings_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The loadings of `Y`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L436)

___

### y\_rotations\_

• `get` **y_rotations_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The projection matrix used to transform `Y`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L536)

___

### y\_scores\_

• `get` **y_scores_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The transformed training targets.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L486)

___

### y\_weights\_

• `get` **y_weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The right singular vectors of the cross-covariance matrices of each iteration.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L386)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit model to data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionFitOptions`](../interfaces/PLSRegressionFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L104)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Learn and apply the dimension reduction on the train data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionFitTransformOptions`](../interfaces/PLSRegressionFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L134)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionGetFeatureNamesOutOptions`](../interfaces/PLSRegressionGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L168)

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

[generated/cross_decomposition/PLSRegression.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform data back to its original space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionInverseTransformOptions`](../interfaces/PLSRegressionInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L201)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict targets of given samples.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionPredictOptions`](../interfaces/PLSRegressionPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L235)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionScoreOptions`](../interfaces/PLSRegressionScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L267)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionSetOutputOptions`](../interfaces/PLSRegressionSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L301)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Apply the dimension reduction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionTransformOptions`](../interfaces/PLSRegressionTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSRegression.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L329)
