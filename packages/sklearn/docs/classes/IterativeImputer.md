# Class: IterativeImputer

Multivariate imputer that estimates each feature from all the others.

A strategy for imputing missing values by modeling each feature with missing values as a function of other features in a round-robin fashion.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../impute.html#iterative-imputer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.IterativeImputer.html)

## Constructors

### new IterativeImputer()

> **new IterativeImputer**(`opts`?): [`IterativeImputer`](IterativeImputer.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.add_indicator`? | `boolean` | If `true`, a [`MissingIndicator`](https://scikit-learn.org/stable/modules/generated/sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time. |
| `opts.estimator`? | `any` | The estimator to use at each step of the round-robin imputation. If `sample_posterior=True`, the estimator must support `return_std` in its `predict` method. |
| `opts.fill_value`? | `string` | When `strategy="constant"`, `fill_value` is used to replace all occurrences of missing_values. For string or object data types, `fill_value` must be a string. If `undefined`, `fill_value` will be 0 when imputing numerical data and “missing_value” for strings or object data types. |
| `opts.imputation_order`? | `"random"` \| `"ascending"` \| `"descending"` \| `"roman"` \| `"arabic"` | The order in which the features will be imputed. Possible values: |
| `opts.initial_strategy`? | `"most_frequent"` \| `"constant"` \| `"mean"` \| `"median"` | Which strategy to use to initialize the missing values. Same as the `strategy` parameter in [`SimpleImputer`](https://scikit-learn.org/stable/modules/generated/sklearn.impute.SimpleImputer.html#sklearn.impute.SimpleImputer "sklearn.impute.SimpleImputer"). |
| `opts.keep_empty_features`? | `boolean` | If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0` except when `initial_strategy="constant"` in which case `fill_value` will be used instead. |
| `opts.max_iter`? | `number` | Maximum number of imputation rounds to perform before returning the imputations computed during the final round. A round is a single imputation of each feature with missing values. The stopping criterion is met once `max(abs(X_t \- X_{t-1}))/max(abs(X\[known_vals\])) < tol`, where `X_t` is `X` at iteration `t`. Note that early stopping is only applied if `sample_posterior=False`. |
| `opts.max_value`? | `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md) | Maximum possible imputed value. Broadcast to shape `(n_features,)` if scalar. If array-like, expects shape `(n_features,)`, one max value for each feature. The default is `np.inf`. |
| `opts.min_value`? | `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md) | Minimum possible imputed value. Broadcast to shape `(n_features,)` if scalar. If array-like, expects shape `(n_features,)`, one min value for each feature. The default is `\-np.inf`. |
| `opts.missing_values`? | `number` | The placeholder for the missing values. All occurrences of `missing_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing_values` should be set to `np.nan`, since `pd.NA` will be converted to `np.nan`. |
| `opts.n_nearest_features`? | `number` | Number of other features to use to estimate the missing values of each feature column. Nearness between features is measured using the absolute correlation coefficient between each feature pair (after initial imputation). To ensure coverage of features throughout the imputation process, the neighbor features are not necessarily nearest, but are drawn with probability proportional to correlation for each imputed target feature. Can provide significant speed-up when the number of features is huge. If `undefined`, all features will be used. |
| `opts.random_state`? | `number` | The seed of the pseudo random number generator to use. Randomizes selection of estimator features if `n_nearest_features` is not `undefined`, the `imputation_order` if `random`, and the sampling from posterior if `sample_posterior=True`. Use an integer for determinism. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.sample_posterior`? | `boolean` | Whether to sample from the (Gaussian) predictive posterior of the fitted estimator for each imputation. Estimator must support `return_std` in its `predict` method if set to `true`. Set to `true` if using `IterativeImputer` for multiple imputations. |
| `opts.skip_complete`? | `boolean` | If `true` then features with missing values during [`transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.impute.IterativeImputer.transform "sklearn.impute.IterativeImputer.transform") which did not have any missing values during [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.impute.IterativeImputer.fit "sklearn.impute.IterativeImputer.fit") will be imputed with the initial imputation method only. Set to `true` if you have many features with no missing values at both [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.impute.IterativeImputer.fit "sklearn.impute.IterativeImputer.fit") and [`transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.impute.IterativeImputer.transform "sklearn.impute.IterativeImputer.transform") time to save compute. |
| `opts.tol`? | `number` | Tolerance of the stopping condition. |
| `opts.verbose`? | `number` | Verbosity flag, controls the debug messages that are issued as functions are evaluated. The higher, the more verbose. Can be 0, 1, or 2. |

#### Returns

[`IterativeImputer`](IterativeImputer.md)

#### Defined in

[generated/impute/IterativeImputer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/impute/IterativeImputer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/impute/IterativeImputer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/impute/IterativeImputer.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L21) |
| `id` | `string` | `undefined` | [generated/impute/IterativeImputer.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L18) |
| `opts` | `any` | `undefined` | [generated/impute/IterativeImputer.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L19) |

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/impute/IterativeImputer.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L548)

***

### imputation\_sequence\_

#### Get Signature

> **get** **imputation\_sequence\_**(): `Promise`\<`any`\>

Each tuple has `(feat_idx, neighbor_feat_idx, estimator)`, where `feat_idx` is the current feature to be imputed, `neighbor_feat_idx` is the array of other features used to impute the current feature, and `estimator` is the trained estimator used for the imputation. Length is `self.n_features_with_missing_ \* self.n_iter_`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L467)

***

### indicator\_

#### Get Signature

> **get** **indicator\_**(): `Promise`\<`any`\>

Indicator used to add binary indicators for missing values. `undefined` if `add_indicator=False`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L602)

***

### initial\_imputer\_

#### Get Signature

> **get** **initial\_imputer\_**(): `Promise`\<`any`\>

Imputer used to initialize the missing values.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L440)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/impute/IterativeImputer.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L521)

***

### n\_features\_with\_missing\_

#### Get Signature

> **get** **n\_features\_with\_missing\_**(): `Promise`\<`number`\>

Number of features with missing values.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/impute/IterativeImputer.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L575)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iteration rounds that occurred. Will be less than `self.max_iter` if early stopping criterion was reached.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/impute/IterativeImputer.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L494)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/impute/IterativeImputer.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L133)

***

### random\_state\_

#### Get Signature

> **get** **random\_state\_**(): `Promise`\<`any`\>

RandomState instance that is generated either from a seed, the random number generator or by `np.random`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L629)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/impute/IterativeImputer.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L187)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the imputer on `X` and return self.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Parameters routed to the `fit` method of the sub-estimator via the metadata routing API. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Input data, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L204)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Fit the imputer on `X` and return the transformed `X`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.params`? | `any` | Parameters routed to the `fit` method of the sub-estimator via the metadata routing API. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Input data, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/impute/IterativeImputer.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L248)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L294)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L332)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/impute/IterativeImputer.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L146)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/impute/IterativeImputer.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L370)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Impute all missing values in `X`.

Note that this is stochastic, and that if `random_state` is not fixed, repeated calls, or permuted input, results will differ.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The input data to complete. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/impute/IterativeImputer.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/impute/IterativeImputer.ts#L406)
