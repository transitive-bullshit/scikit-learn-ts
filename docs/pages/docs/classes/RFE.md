# RFE

Feature ranking with recursive feature elimination.

Given an external estimator that assigns weights to features (e.g., the coefficients of a linear model), the goal of recursive feature elimination (RFE) is to select features by recursively considering smaller and smaller sets of features. First, the estimator is trained on the initial set of features and the importance of each feature is obtained either through any specific attribute or callable. Then, the least important features are pruned from current set of features. That procedure is recursively repeated on the pruned set until the desired number of features to select is eventually reached.

Read more in the [User Guide](../feature_selection.html#rfe).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFE.html)

## Constructors

## constructor()

### Signature

```ts
new RFE(opts?: RFEOptions): RFE;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RFEOptions`](../interfaces/RFEOptions.md) |

### Returns

[`RFE`](RFE.md)

Defined in:  [generated/feature\_selection/RFE.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/RFE.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/RFE.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/RFE.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_selection/RFE.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_selection/RFE.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L19)

## Accessors

### estimator\_

The fitted estimator used to select features.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/feature\_selection/RFE.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L456)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/feature\_selection/RFE.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L524)

### n\_features\_

The number of selected features.

#### Signature

```ts
n_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/RFE.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L478)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/RFE.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L501)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/RFE.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L30)

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

Defined in: [generated/feature\_selection/RFE.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L34)

### ranking\_

The feature ranking, such that `ranking\_\[i\]` corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.

#### Signature

```ts
ranking_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/feature\_selection/RFE.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L547)

### support\_

The mask of selected features.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/feature\_selection/RFE.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L569)

## Methods

### decision\_function()

Compute the decision function of `X`.

#### Signature

```ts
decision_function(opts: RFEDecisionFunctionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEDecisionFunctionOptions`](../interfaces/RFEDecisionFunctionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L103)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_selection/RFE.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L86)

### fit()

Fit the RFE model and then the underlying estimator on the selected features.

#### Signature

```ts
fit(opts: RFEFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEFitOptions`](../interfaces/RFEFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L131)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: RFEFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEFitTransformOptions`](../interfaces/RFEFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFE.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L164)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: RFEGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEGetFeatureNamesOutOptions`](../interfaces/RFEGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L196)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: RFEGetSupportOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEGetSupportOptions`](../interfaces/RFEGetSupportOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L226)

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

Defined in:  [generated/feature\_selection/RFE.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L43)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: RFEInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEInverseTransformOptions`](../interfaces/RFEInverseTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L254)

### predict()

Reduce X to the selected features and predict using the estimator.

#### Signature

```ts
predict(opts: RFEPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEPredictOptions`](../interfaces/RFEPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L282)

### predict\_log\_proba()

Predict class log-probabilities for X.

#### Signature

```ts
predict_log_proba(opts: RFEPredictLogProbaOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEPredictLogProbaOptions`](../interfaces/RFEPredictLogProbaOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFE.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L310)

### predict\_proba()

Predict class probabilities for X.

#### Signature

```ts
predict_proba(opts: RFEPredictProbaOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEPredictProbaOptions`](../interfaces/RFEPredictProbaOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFE.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L338)

### score()

Reduce X to the selected features and return the score of the estimator.

#### Signature

```ts
score(opts: RFEScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFEScoreOptions`](../interfaces/RFEScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_selection/RFE.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L366)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: RFESetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFESetOutputOptions`](../interfaces/RFESetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L400)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: RFETransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RFETransformOptions`](../interfaces/RFETransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/RFE.ts#L428)
