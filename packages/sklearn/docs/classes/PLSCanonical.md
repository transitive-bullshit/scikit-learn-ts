[sklearn](../readme.md) / [Exports](../modules.md) / PLSCanonical

# Class: PLSCanonical

Partial Least Squares transformer and regressor.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSCanonical.html

## Table of contents

### Constructors

- [constructor](PLSCanonical.md#constructor)

### Properties

- [\_isDisposed](PLSCanonical.md#_isdisposed)
- [\_isInitialized](PLSCanonical.md#_isinitialized)
- [\_py](PLSCanonical.md#_py)
- [id](PLSCanonical.md#id)
- [opts](PLSCanonical.md#opts)

### Accessors

- [feature\_names\_in\_](PLSCanonical.md#feature_names_in_)
- [intercept\_](PLSCanonical.md#intercept_)
- [n\_features\_in\_](PLSCanonical.md#n_features_in_)
- [n\_iter\_](PLSCanonical.md#n_iter_)
- [py](PLSCanonical.md#py)
- [x\_loadings\_](PLSCanonical.md#x_loadings_)
- [x\_rotations\_](PLSCanonical.md#x_rotations_)
- [x\_weights\_](PLSCanonical.md#x_weights_)
- [y\_loadings\_](PLSCanonical.md#y_loadings_)
- [y\_rotations\_](PLSCanonical.md#y_rotations_)
- [y\_weights\_](PLSCanonical.md#y_weights_)

### Methods

- [dispose](PLSCanonical.md#dispose)
- [fit](PLSCanonical.md#fit)
- [fit\_transform](PLSCanonical.md#fit_transform)
- [get\_feature\_names\_out](PLSCanonical.md#get_feature_names_out)
- [init](PLSCanonical.md#init)
- [inverse\_transform](PLSCanonical.md#inverse_transform)
- [predict](PLSCanonical.md#predict)
- [score](PLSCanonical.md#score)
- [set\_output](PLSCanonical.md#set_output)
- [transform](PLSCanonical.md#transform)

## Constructors

### constructor

• **new PLSCanonical**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PLSCanonicalOptions`](../interfaces/PLSCanonicalOptions.md) |

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L17)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L582)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_ + intercept\_`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L509)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L557)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`any`[]\>

Number of iterations of the power method, for each component. Empty if `algorithm='svd'`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L534)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L32)

___

### x\_loadings\_

• `get` **x_loadings_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The loadings of `X`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L409)

___

### x\_rotations\_

• `get` **x_rotations_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The projection matrix used to transform `X`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L459)

___

### x\_weights\_

• `get` **x_weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The left singular vectors of the cross-covariance matrices of each iteration.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L359)

___

### y\_loadings\_

• `get` **y_loadings_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The loadings of `Y`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L434)

___

### y\_rotations\_

• `get` **y_rotations_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The projection matrix used to transform `Y`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L484)

___

### y\_weights\_

• `get` **y_weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The right singular vectors of the cross-covariance matrices of each iteration.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L384)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L85)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit model to data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalFitOptions`](../interfaces/PLSCanonicalFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L102)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Learn and apply the dimension reduction on the train data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalFitTransformOptions`](../interfaces/PLSCanonicalFitTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L132)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalGetFeatureNamesOutOptions`](../interfaces/PLSCanonicalGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L166)

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

[generated/cross_decomposition/PLSCanonical.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L41)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Transform data back to its original space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalInverseTransformOptions`](../interfaces/PLSCanonicalInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L199)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict targets of given samples.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalPredictOptions`](../interfaces/PLSCanonicalPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L233)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalScoreOptions`](../interfaces/PLSCanonicalScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L265)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalSetOutputOptions`](../interfaces/PLSCanonicalSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L299)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Apply the dimension reduction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalTransformOptions`](../interfaces/PLSCanonicalTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cross_decomposition/PLSCanonical.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L327)
