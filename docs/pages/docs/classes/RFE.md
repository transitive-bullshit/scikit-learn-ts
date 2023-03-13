# RFE

Feature ranking with recursive feature elimination.

Given an external estimator that assigns weights to features (e.g., the coefficients of a linear model), the goal of recursive feature elimination (RFE) is to select features by recursively considering smaller and smaller sets of features. First, the estimator is trained on the initial set of features and the importance of each feature is obtained either through any specific attribute or callable. Then, the least important features are pruned from current set of features. That procedure is recursively repeated on the pruned set until the desired number of features to select is eventually reached.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFE.html)

## Constructors

## constructor()

### Signature

```ts
new RFE(opts?: object): RFE;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimator?` | `any` | A supervised learning estimator with a `fit` method that provides information about feature importance (e.g. `coef\_`, `feature\_importances\_`). |
| `opts.importance_getter?` | `string` | If ‘auto’, uses the feature importance either through a `coef\_` or `feature\_importances\_` attributes of estimator.  Also accepts a string that specifies an attribute name/path for extracting feature importance (implemented with `attrgetter`). For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of class:`~sklearn.pipeline.Pipeline` with its last step named `clf`.  If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.  `Default Value`  `'auto'` |
| `opts.n_features_to_select?` | `number` | The number of features to select. If `undefined`, half of the features are selected. If integer, the parameter is the absolute number of features to select. If float between 0 and 1, it is the fraction of features to select. |
| `opts.step?` | `number` | If greater than or equal to 1, then `step` corresponds to the (integer) number of features to remove at each iteration. If within (0.0, 1.0), then `step` corresponds to the percentage (rounded down) of features to remove at each iteration.  `Default Value`  `1` |
| `opts.verbose?` | `number` | Controls verbosity of output.  `Default Value`  `0` |

### Returns

[`RFE`](RFE.md)

Defined in:  [generated/feature\_selection/RFE.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/RFE.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/RFE.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/RFE.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_selection/RFE.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_selection/RFE.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L19)

## Accessors

### estimator\_

The fitted estimator used to select features.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/feature\_selection/RFE.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L581)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/RFE.ts:649](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L649)

### n\_features\_

The number of selected features.

#### Signature

```ts
n_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/RFE.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L603)

### n\_features\_in\_

Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/RFE.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L626)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/RFE.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L65)

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

Defined in: [generated/feature\_selection/RFE.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L69)

### ranking\_

The feature ranking, such that `ranking\_\[i\]` corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.

#### Signature

```ts
ranking_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/RFE.ts:672](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L672)

### support\_

The mask of selected features.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/RFE.ts:694](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L694)

## Methods

### decision\_function()

Compute the decision function of `X`.

#### Signature

```ts
decision_function(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any`[] | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L138)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_selection/RFE.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L121)

### fit()

Fit the RFE model and then the underlying estimator on the selected features.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The training input samples. |
| `opts.fit_params?` | `any` | Additional parameters passed to the `fit` method of the underlying estimator. |
| `opts.y?` | `ArrayLike` | The target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L171)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFE.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L219)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L266)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.indices?` | `boolean` | If `true`, the return value will be an array of integers, rather than a boolean mask.  `Default Value`  `false` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L299)

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

Defined in:  [generated/feature\_selection/RFE.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L78)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L334)

### predict()

Reduce X to the selected features and predict using the estimator.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L367)

### predict\_log\_proba()

Predict class log-probabilities for X.

#### Signature

```ts
predict_log_proba(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input samples. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFE.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L400)

### predict\_proba()

Predict class probabilities for X.

#### Signature

```ts
predict_proba(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any`[] | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/RFE.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L433)

### score()

Reduce X to the selected features and return the score of the estimator.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input samples. |
| `opts.fit_params?` | `any` | Parameters to pass to the `score` method of the underlying estimator. |
| `opts.y?` | `any` | The target values. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_selection/RFE.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L466)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L515)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | The input samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFE.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/feature_selection/RFE.ts#L548)
