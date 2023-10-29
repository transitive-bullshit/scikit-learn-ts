# HistGradientBoostingRegressor

Histogram-based Gradient Boosting Regression Tree.

This estimator is much faster than [`GradientBoostingRegressor`](sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor "sklearn.ensemble.GradientBoostingRegressor") for big datasets (n\_samples >= 10 000).

This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples.

This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

Read more in the [User Guide](../ensemble.html#histogram-based-gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new HistGradientBoostingRegressor(opts?: object): HistGradientBoostingRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.categorical_features?` | `number` | Indicates the categorical features. |
| `opts.early_stopping?` | `boolean` \| `"auto"` | If ‘auto’, early stopping is enabled if the sample size is larger than 10000. If `true`, early stopping is enabled, otherwise early stopping is disabled.  `Default Value`  `'auto'` |
| `opts.interaction_cst?` | `"pairwise"` \| `"no_interactions"` | Specify interaction constraints, the sets of features which can interact with each other in child node splits.  Each item specifies the set of feature indices that are allowed to interact with each other. If there are more features than specified in these constraints, they are treated as if they were specified as an additional set.  The strings “pairwise” and “no\_interactions” are shorthands for allowing only pairwise or no interactions, respectively.  For instance, with 5 features in total, `interaction\_cst=\[{0, 1}\]` is equivalent to `interaction\_cst=\[{0, 1}, {2, 3, 4}\]`, and specifies that each branch of a tree will either only split on features 0 and 1 or only split on features 2, 3 and 4. |
| `opts.l2_regularization?` | `number` | The L2 regularization parameter. Use `0` for no regularization (default).  `Default Value`  `0` |
| `opts.learning_rate?` | `number` | The learning rate, also known as *shrinkage*. This is used as a multiplicative factor for the leaves values. Use `1` for no shrinkage.  `Default Value`  `0.1` |
| `opts.loss?` | `"quantile"` \| `"gamma"` \| `"squared_error"` \| `"absolute_error"` \| `"poisson"` | The loss function to use in the boosting process. Note that the “squared error”, “gamma” and “poisson” losses actually implement “half least squares loss”, “half gamma deviance” and “half poisson deviance” to simplify the computation of the gradient. Furthermore, “gamma” and “poisson” losses internally use a log-link, “gamma” requires `y > 0` and “poisson” requires `y >= 0`. “quantile” uses the pinball loss.  `Default Value`  `'squared_error'` |
| `opts.max_bins?` | `number` | The maximum number of bins to use for non-missing values. Before training, each feature of the input array `X` is binned into integer-valued bins, which allows for a much faster training stage. Features with a small number of unique values may use less than `max\_bins` bins. In addition to the `max\_bins` bins, one more bin is always reserved for missing values. Must be no larger than 255.  `Default Value`  `255` |
| `opts.max_depth?` | `number` | The maximum depth of each tree. The depth of a tree is the number of edges to go from the root to the deepest leaf. Depth isn’t constrained by default. |
| `opts.max_iter?` | `number` | The maximum number of iterations of the boosting process, i.e. the maximum number of trees.  `Default Value`  `100` |
| `opts.max_leaf_nodes?` | `number` | The maximum number of leaves for each tree. Must be strictly greater than 1. If `undefined`, there is no maximum limit.  `Default Value`  `31` |
| `opts.min_samples_leaf?` | `number` | The minimum number of samples per leaf. For small datasets with less than a few hundred samples, it is recommended to lower this value since only very shallow trees would be built.  `Default Value`  `20` |
| `opts.monotonic_cst?` | `any` | Monotonic constraint to enforce on each feature are specified using the following integer values: |
| `opts.n_iter_no_change?` | `number` | Used to determine when to “early stop”. The fitting process is stopped when none of the last `n\_iter\_no\_change` scores are better than the `n\_iter\_no\_change \- 1` -th-to-last one, up to some tolerance. Only used if early stopping is performed.  `Default Value`  `10` |
| `opts.quantile?` | `number` | If loss is “quantile”, this parameter specifies which quantile to be estimated and must be between 0 and 1. |
| `opts.random_state?` | `number` | Pseudo-random number generator to control the subsampling in the binning process, and the train/validation data split if early stopping is enabled. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.scoring?` | `string` | Scoring parameter to use for early stopping. It can be a single string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)). If `undefined`, the estimator’s default scorer is used. If `scoring='loss'`, early stopping is checked w.r.t the loss value. Only used if early stopping is performed.  `Default Value`  `'loss'` |
| `opts.tol?` | `number` | The absolute tolerance to use when comparing scores during early stopping. The higher the tolerance, the more likely we are to early stop: higher tolerance means that it will be harder for subsequent iterations to be considered an improvement upon the reference score.  `Default Value`  `1e-7` |
| `opts.validation_fraction?` | `number` | Proportion (or absolute size) of training data to set aside as validation data for early stopping. If `undefined`, early stopping is done on the training data. Only used if early stopping is performed.  `Default Value`  `0.1` |
| `opts.verbose?` | `number` | The verbosity level. If not zero, print some information about the fitting process.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble. For results to be valid, the estimator should be re-trained on the same data only. See [the Glossary](../../glossary.html#term-warm_start).  `Default Value`  `false` |

### Returns

[`HistGradientBoostingRegressor`](HistGradientBoostingRegressor.md)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L29)

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

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L261)

### fit()

Fit the gradient boosting model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The input samples. |
| `opts.sample_weight?` | `any` | Weights of training data. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L278)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L331)

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

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L183)

### predict()

Predict values for X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L369)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L408)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L464)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L506)

### staged\_predict()

Predict regression target for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The input samples. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L546)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L25)

### id

> `string`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L22)

### opts

> `any`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L23)

## Accessors

### do\_early\_stopping\_

Indicates whether early stopping is used during training.

#### Signature

```ts
do_early_stopping_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L584)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L584)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:746](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L746)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:746](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L746)

### is\_categorical\_

Boolean mask for the categorical features. `undefined` if there are no categorical features.

#### Signature

```ts
is_categorical_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:692](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L692)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:692](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L692)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:719](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L719)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:719](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L719)

### n\_trees\_per\_iteration\_

The number of tree that are built at each iteration. For regressors, this is always 1.

#### Signature

```ts
n_trees_per_iteration_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L611)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L611)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L170)

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

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L174)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L170) [generated/ensemble/HistGradientBoostingRegressor.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L174)

### train\_score\_

The scores at each iteration on the training data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. If `scoring` is not ‘loss’, scores are computed on a subset of at most 10 000 samples. Empty if no early stopping.

#### Signature

```ts
train_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L638)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L638)

### validation\_score\_

The scores at each iteration on the held-out validation data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. Empty if no early stopping or if `validation\_fraction` is `undefined`.

#### Signature

```ts
validation_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L665)

Defined in:  [generated/ensemble/HistGradientBoostingRegressor.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L665)
