[sklearn](../readme.md) / [Exports](../modules.md) / CCA

# Class: CCA

Canonical Correlation Analysis, also known as “Mode B” PLS.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.CCA.html

## Table of contents

### Constructors

- [constructor](CCA.md#constructor)

### Properties

- [\_isDisposed](CCA.md#_isdisposed)
- [\_isInitialized](CCA.md#_isinitialized)
- [\_py](CCA.md#_py)
- [id](CCA.md#id)
- [opts](CCA.md#opts)

### Accessors

- [feature\_names\_in\_](CCA.md#feature_names_in_)
- [intercept\_](CCA.md#intercept_)
- [n\_features\_in\_](CCA.md#n_features_in_)
- [n\_iter\_](CCA.md#n_iter_)
- [py](CCA.md#py)
- [x\_loadings\_](CCA.md#x_loadings_)
- [x\_rotations\_](CCA.md#x_rotations_)
- [x\_weights\_](CCA.md#x_weights_)
- [y\_loadings\_](CCA.md#y_loadings_)
- [y\_rotations\_](CCA.md#y_rotations_)
- [y\_weights\_](CCA.md#y_weights_)

### Methods

- [dispose](CCA.md#dispose)
- [fit](CCA.md#fit)
- [fit\_transform](CCA.md#fit_transform)
- [get\_feature\_names\_out](CCA.md#get_feature_names_out)
- [init](CCA.md#init)
- [inverse\_transform](CCA.md#inverse_transform)
- [predict](CCA.md#predict)
- [score](CCA.md#score)
- [set\_output](CCA.md#set_output)
- [transform](CCA.md#transform)

## Constructors

### constructor

• **new CCA**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CCAOptions`](../interfaces/CCAOptions.md) |

#### Defined in

[generated/cross_decomposition/CCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cross_decomposition/CCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cross_decomposition/CCA.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cross_decomposition/CCA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/cross_decomposition/CCA.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cross_decomposition/CCA.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L17)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/CCA.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L553)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_ + intercept\_`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/CCA.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L486)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cross_decomposition/CCA.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L530)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`any`[]\>

Number of iterations of the power method, for each component.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/cross_decomposition/CCA.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L508)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cross_decomposition/CCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cross_decomposition/CCA.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L32)

___

### x\_loadings\_

• `get` **x_loadings_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The loadings of `X`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/CCA.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L394)

___

### x\_rotations\_

• `get` **x_rotations_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The projection matrix used to transform `X`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/CCA.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L440)

___

### x\_weights\_

• `get` **x_weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The left singular vectors of the cross-covariance matrices of each iteration.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/CCA.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L350)

___

### y\_loadings\_

• `get` **y_loadings_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The loadings of `Y`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/CCA.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L417)

___

### y\_rotations\_

• `get` **y_rotations_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The projection matrix used to transform `Y`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/CCA.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L463)

___

### y\_weights\_

• `get` **y_weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The right singular vectors of the cross-covariance matrices of each iteration.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/CCA.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L372)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cross_decomposition/CCA.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L84)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit model to data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAFitOptions`](../interfaces/CCAFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/CCA.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L101)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Learn and apply the dimension reduction on the train data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAFitTransformOptions`](../interfaces/CCAFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/CCA.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L130)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAGetFeatureNamesOutOptions`](../interfaces/CCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/CCA.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L162)

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

[generated/cross_decomposition/CCA.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L41)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform data back to its original space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAInverseTransformOptions`](../interfaces/CCAInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/CCA.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L192)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict targets of given samples.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAPredictOptions`](../interfaces/CCAPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/CCA.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L224)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAScoreOptions`](../interfaces/CCAScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cross_decomposition/CCA.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L256)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCASetOutputOptions`](../interfaces/CCASetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/CCA.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L290)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Apply the dimension reduction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCATransformOptions`](../interfaces/CCATransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/CCA.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L318)
