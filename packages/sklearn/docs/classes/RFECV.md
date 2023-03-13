# RFECV

Recursive feature elimination with cross-validation to select features.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../feature_selection.html#rfe).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFECV.html)

## Constructors

## constructor()

### Signature

```ts
new RFECV(opts?: RFECVOptions): RFECV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RFECVOptions`](../interfaces/RFECVOptions.md) |

### Returns

[`RFECV`](RFECV.md)

Defined in:  [generated/feature\_selection/RFECV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/RFECV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/RFECV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/RFECV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_selection/RFECV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_selection/RFECV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L19)

## Accessors

### cv\_results\_

A dict with keys:

#### Signature

```ts
cv_results_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L482)

Defined in:  [generated/feature\_selection/RFECV.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L482)

### estimator\_

The fitted estimator used to select features.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L459)

Defined in:  [generated/feature\_selection/RFECV.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L459)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/RFECV.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L551)

Defined in:  [generated/feature\_selection/RFECV.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L551)

### n\_features\_

The number of selected features with cross-validation.

#### Signature

```ts
n_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_selection/RFECV.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L505)

Defined in:  [generated/feature\_selection/RFECV.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L505)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_selection/RFECV.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L528)

Defined in:  [generated/feature\_selection/RFECV.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L528)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/RFECV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L30)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/feature\_selection/RFECV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L34)

Defined in:  [generated/feature\_selection/RFECV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L30) [generated/feature\_selection/RFECV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L34)

### ranking\_

The feature ranking, such that `ranking\_\[i\]` corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.

#### Signature

```ts
ranking_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFECV.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L576)

Defined in:  [generated/feature\_selection/RFECV.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L576)

### support\_

The mask of selected features.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/RFECV.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L598)

Defined in:  [generated/feature\_selection/RFECV.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L598)

## Methods

### decision\_function()

Compute the decision function of `X`.

#### Signature

```ts
decision_function(opts: RFECVDecisionFunctionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVDecisionFunctionOptions`](../interfaces/RFECVDecisionFunctionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L105)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_selection/RFECV.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L88)

### fit()

Fit the RFE model and automatically tune the number of selected features.

#### Signature

```ts
fit(opts: RFECVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVFitOptions`](../interfaces/RFECVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L133)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: RFECVFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVFitTransformOptions`](../interfaces/RFECVFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFECV.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L167)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: RFECVGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVGetFeatureNamesOutOptions`](../interfaces/RFECVGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L199)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: RFECVGetSupportOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVGetSupportOptions`](../interfaces/RFECVGetSupportOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L229)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_selection/RFECV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L43)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: RFECVInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVInverseTransformOptions`](../interfaces/RFECVInverseTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L257)

### predict()

Reduce X to the selected features and predict using the estimator.

#### Signature

```ts
predict(opts: RFECVPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVPredictOptions`](../interfaces/RFECVPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L285)

### predict\_log\_proba()

Predict class log-probabilities for X.

#### Signature

```ts
predict_log_proba(opts: RFECVPredictLogProbaOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVPredictLogProbaOptions`](../interfaces/RFECVPredictLogProbaOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFECV.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L313)

### predict\_proba()

Predict class probabilities for X.

#### Signature

```ts
predict_proba(opts: RFECVPredictProbaOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVPredictProbaOptions`](../interfaces/RFECVPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFECV.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L341)

### score()

Reduce X to the selected features and return the score of the estimator.

#### Signature

```ts
score(opts: RFECVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVScoreOptions`](../interfaces/RFECVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_selection/RFECV.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L369)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: RFECVSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVSetOutputOptions`](../interfaces/RFECVSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L403)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: RFECVTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFECVTransformOptions`](../interfaces/RFECVTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/RFECV.ts#L431)
