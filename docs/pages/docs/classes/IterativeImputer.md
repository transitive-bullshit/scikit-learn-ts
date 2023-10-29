# IterativeImputer

Multivariate imputer that estimates each feature from all the others.

A strategy for imputing missing values by modeling each feature with missing values as a function of other features in a round-robin fashion.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.IterativeImputer.html)

## Constructors

## constructor()

### Signature

```ts
new IterativeImputer(opts?: object): IterativeImputer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.add_indicator?` | `boolean` | If `true`, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.  `Default Value`  `false` |
| `opts.estimator?` | `any` | The estimator to use at each step of the round-robin imputation. If `sample\_posterior=True`, the estimator must support `return\_std` in its `predict` method. |
| `opts.fill_value?` | `string` | When `strategy="constant"`, `fill\_value` is used to replace all occurrences of missing\_values. For string or object data types, `fill\_value` must be a string. If `undefined`, `fill\_value` will be 0 when imputing numerical data and “missing\_value” for strings or object data types. |
| `opts.imputation_order?` | `"random"` \| `"ascending"` \| `"descending"` \| `"roman"` \| `"arabic"` | The order in which the features will be imputed. Possible values:  `Default Value`  `'ascending'` |
| `opts.initial_strategy?` | `"most_frequent"` \| `"constant"` \| `"mean"` \| `"median"` | Which strategy to use to initialize the missing values. Same as the `strategy` parameter in [`SimpleImputer`](sklearn.impute.SimpleImputer.html#sklearn.impute.SimpleImputer "sklearn.impute.SimpleImputer").  `Default Value`  `'mean'` |
| `opts.keep_empty_features?` | `boolean` | If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0` except when `initial\_strategy="constant"` in which case `fill\_value` will be used instead.  `Default Value`  `false` |
| `opts.max_iter?` | `number` | Maximum number of imputation rounds to perform before returning the imputations computed during the final round. A round is a single imputation of each feature with missing values. The stopping criterion is met once `max(abs(X\_t \- X\_{t-1}))/max(abs(X\[known\_vals\])) < tol`, where `X\_t` is `X` at iteration `t`. Note that early stopping is only applied if `sample\_posterior=False`.  `Default Value`  `10` |
| `opts.max_value?` | `number` \| `ArrayLike` | Maximum possible imputed value. Broadcast to shape `(n\_features,)` if scalar. If array-like, expects shape `(n\_features,)`, one max value for each feature. The default is `np.inf`. |
| `opts.min_value?` | `number` \| `ArrayLike` | Minimum possible imputed value. Broadcast to shape `(n\_features,)` if scalar. If array-like, expects shape `(n\_features,)`, one min value for each feature. The default is `\-np.inf`. |
| `opts.missing_values?` | `number` | The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` should be set to `np.nan`, since `pd.NA` will be converted to `np.nan`. |
| `opts.n_nearest_features?` | `number` | Number of other features to use to estimate the missing values of each feature column. Nearness between features is measured using the absolute correlation coefficient between each feature pair (after initial imputation). To ensure coverage of features throughout the imputation process, the neighbor features are not necessarily nearest, but are drawn with probability proportional to correlation for each imputed target feature. Can provide significant speed-up when the number of features is huge. If `undefined`, all features will be used. |
| `opts.random_state?` | `number` | The seed of the pseudo random number generator to use. Randomizes selection of estimator features if `n\_nearest\_features` is not `undefined`, the `imputation\_order` if `random`, and the sampling from posterior if `sample\_posterior=True`. Use an integer for determinism. See the Glossary. |
| `opts.sample_posterior?` | `boolean` | Whether to sample from the (Gaussian) predictive posterior of the fitted estimator for each imputation. Estimator must support `return\_std` in its `predict` method if set to `true`. Set to `true` if using `IterativeImputer` for multiple imputations.  `Default Value`  `false` |
| `opts.skip_complete?` | `boolean` | If `true` then features with missing values during [`transform`](#sklearn.impute.IterativeImputer.transform "sklearn.impute.IterativeImputer.transform") which did not have any missing values during [`fit`](#sklearn.impute.IterativeImputer.fit "sklearn.impute.IterativeImputer.fit") will be imputed with the initial imputation method only. Set to `true` if you have many features with no missing values at both [`fit`](#sklearn.impute.IterativeImputer.fit "sklearn.impute.IterativeImputer.fit") and [`transform`](#sklearn.impute.IterativeImputer.transform "sklearn.impute.IterativeImputer.transform") time to save compute.  `Default Value`  `false` |
| `opts.tol?` | `number` | Tolerance of the stopping condition.  `Default Value`  `0.001` |
| `opts.verbose?` | `number` | Verbosity flag, controls the debug messages that are issued as functions are evaluated. The higher, the more verbose. Can be 0, 1, or 2.  `Default Value`  `0` |

### Returns

[`IterativeImputer`](IterativeImputer.md)

Defined in:  [generated/impute/IterativeImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/impute/IterativeImputer.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L214)

### fit()

Fit the imputer on `X` and return self.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/IterativeImputer.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L231)

### fit\_transform()

Fit the imputer on `X` and return the transformed `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/impute/IterativeImputer.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L271)

### get\_feature\_names\_out()

Get output feature names for transformation.

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

Defined in:  [generated/impute/IterativeImputer.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L313)

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

Defined in:  [generated/impute/IterativeImputer.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L353)

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

Defined in:  [generated/impute/IterativeImputer.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L146)

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

Defined in:  [generated/impute/IterativeImputer.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L392)

### transform()

Impute all missing values in `X`.

Note that this is stochastic, and that if `random\_state` is not fixed, repeated calls, or permuted input, results will differ.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input data to complete. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/impute/IterativeImputer.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L429)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/impute/IterativeImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/impute/IterativeImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/impute/IterativeImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L21)

### id

> `string`

Defined in:  [generated/impute/IterativeImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L18)

### opts

> `any`

Defined in:  [generated/impute/IterativeImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/impute/IterativeImputer.ts:572](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L572)

### imputation\_sequence\_

Each tuple has `(feat\_idx, neighbor\_feat\_idx, estimator)`, where `feat\_idx` is the current feature to be imputed, `neighbor\_feat\_idx` is the array of other features used to impute the current feature, and `estimator` is the trained estimator used for the imputation. Length is `self.n\_features\_with\_missing\_ \* self.n\_iter\_`.

#### Signature

```ts
imputation_sequence_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/impute/IterativeImputer.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L491)

### indicator\_

Indicator used to add binary indicators for missing values. `undefined` if `add\_indicator=False`.

#### Signature

```ts
indicator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/impute/IterativeImputer.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L626)

### initial\_imputer\_

Imputer used to initialize the missing values.

#### Signature

```ts
initial_imputer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/impute/IterativeImputer.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L464)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/impute/IterativeImputer.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L545)

### n\_features\_with\_missing\_

Number of features with missing values.

#### Signature

```ts
n_features_with_missing_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/impute/IterativeImputer.ts:599](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L599)

### n\_iter\_

Number of iteration rounds that occurred. Will be less than `self.max\_iter` if early stopping criterion was reached.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/impute/IterativeImputer.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L518)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/impute/IterativeImputer.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L133)

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

Defined in: [generated/impute/IterativeImputer.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L137)

### random\_state\_

RandomState instance that is generated either from a seed, the random number generator or by `np.random`.

#### Signature

```ts
random_state_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/impute/IterativeImputer.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/impute/IterativeImputer.ts#L653)
