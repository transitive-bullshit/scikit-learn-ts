# RFECV

Recursive feature elimination with cross-validation to select features.

See glossary entry for cross-validation estimator.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFECV.html)

## Constructors

## constructor()

### Signature

```ts
new RFECV(opts?: object): RFECV;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.cv?` | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.estimator?` | `any` | A supervised learning estimator with a `fit` method that provides information about feature importance either through a `coef\_` attribute or through a `feature\_importances\_` attribute. |
| `opts.importance_getter?` | `string` | If ‘auto’, uses the feature importance either through a `coef\_` or `feature\_importances\_` attributes of estimator.  Also accepts a string that specifies an attribute name/path for extracting feature importance. For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") with its last step named `clf`.  If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.  `Default Value`  `'auto'` |
| `opts.min_features_to_select?` | `number` | The minimum number of features to be selected. This number of features will always be scored, even if the difference between the original feature count and `min\_features\_to\_select` isn’t divisible by `step`.  `Default Value`  `1` |
| `opts.n_jobs?` | `number` | Number of cores to run in parallel while fitting across folds. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.scoring?` | `string` | A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`. |
| `opts.step?` | `number` | If greater than or equal to 1, then `step` corresponds to the (integer) number of features to remove at each iteration. If within (0.0, 1.0), then `step` corresponds to the percentage (rounded down) of features to remove at each iteration. Note that the last iteration may remove fewer than `step` features in order to reach `min\_features\_to\_select`.  `Default Value`  `1` |
| `opts.verbose?` | `number` | Controls verbosity of output.  `Default Value`  `0` |

### Returns

[`RFECV`](RFECV.md)

Defined in:  [generated/feature\_selection/RFECV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L25)

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

Defined in:  [generated/feature\_selection/RFECV.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L157)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/feature\_selection/RFECV.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L140)

### fit()

Fit the RFE model and automatically tune the number of selected features.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the total number of features. |
| `opts.groups?` | `ArrayLike` | Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” cv instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")). |
| `opts.y?` | `ArrayLike` | Target values (integers for classification, real numbers for regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L190)

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

Defined in:  [generated/feature\_selection/RFECV.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L239)

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

Defined in:  [generated/feature\_selection/RFECV.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L286)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L321)

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

Defined in:  [generated/feature\_selection/RFECV.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L354)

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

Defined in:  [generated/feature\_selection/RFECV.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L95)

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

Defined in:  [generated/feature\_selection/RFECV.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L389)

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

Defined in:  [generated/feature\_selection/RFECV.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L422)

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

Defined in:  [generated/feature\_selection/RFECV.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L455)

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

Defined in:  [generated/feature\_selection/RFECV.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L488)

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

Defined in:  [generated/feature\_selection/RFECV.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L521)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.groups?` | `string` \| `boolean` | Metadata routing for `groups` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/RFECV.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L572)

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

Defined in:  [generated/feature\_selection/RFECV.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L607)

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

Defined in:  [generated/feature\_selection/RFECV.ts:640](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L640)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/RFECV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/RFECV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/RFECV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_selection/RFECV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_selection/RFECV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L19)

## Accessors

### cv\_results\_

A dict with keys:

#### Signature

```ts
cv_results_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/feature\_selection/RFECV.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L696)

### estimator\_

The fitted estimator used to select features.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/feature\_selection/RFECV.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L673)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/RFECV.ts:765](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L765)

### n\_features\_

The number of selected features with cross-validation.

#### Signature

```ts
n_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/RFECV.ts:719](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L719)

### n\_features\_in\_

Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/RFECV.ts:742](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L742)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/RFECV.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L82)

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

Defined in: [generated/feature\_selection/RFECV.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L86)

### ranking\_

The feature ranking, such that `ranking\_\[i\]` corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.

#### Signature

```ts
ranking_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/feature\_selection/RFECV.ts:790](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L790)

### support\_

The mask of selected features.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/RFECV.ts:812](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/feature_selection/RFECV.ts#L812)
