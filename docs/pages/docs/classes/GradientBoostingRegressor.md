# GradientBoostingRegressor

Gradient Boosting for regression.

This estimator builds an additive model in a forward stage-wise fashion; it allows for the optimization of arbitrary differentiable loss functions. In each stage a regression tree is fit on the negative gradient of the given loss function.

[`sklearn.ensemble.HistGradientBoostingRegressor`](sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor "sklearn.ensemble.HistGradientBoostingRegressor") is a much faster variant of this algorithm for intermediate datasets (`n\_samples >= 10\_000`).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new GradientBoostingRegressor(opts?: object): GradientBoostingRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | The alpha-quantile of the huber loss function and the quantile loss function. Only if `loss='huber'` or `loss='quantile'`. Values must be in the range `(0.0, 1.0)`.  `Default Value`  `0.9` |
| `opts.ccp_alpha?` | `any` | Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. Values must be in the range `\0.0, inf)`. See [Minimal Cost-Complexity Pruning for details.  `Default Value`  `0` |
| `opts.criterion?` | `"squared_error"` \| `"friedman_mse"` | The function to measure the quality of a split. Supported criteria are “friedman\_mse” for the mean squared error with improvement score by Friedman, “squared\_error” for mean squared error. The default value of “friedman\_mse” is generally the best as it can provide a better approximation in some cases.  `Default Value`  `'friedman_mse'` |
| `opts.init?` | `"zero"` | An estimator object that is used to compute the initial predictions. `init` has to provide fit and predict. If ‘zero’, the initial raw predictions are set to zero. By default a `DummyEstimator` is used, predicting either the average target value (for loss=’squared\_error’), or a quantile for the other losses. |
| `opts.learning_rate?` | `number` | Learning rate shrinks the contribution of each tree by `learning\_rate`. There is a trade-off between learning\_rate and n\_estimators. Values must be in the range `\[0.0, inf)`.  `Default Value`  `0.1` |
| `opts.loss?` | `"quantile"` \| `"squared_error"` \| `"absolute_error"` \| `"huber"` | Loss function to be optimized. ‘squared\_error’ refers to the squared error for regression. ‘absolute\_error’ refers to the absolute error of regression and is a robust loss function. ‘huber’ is a combination of the two. ‘quantile’ allows quantile regression (use `alpha` to specify the quantile).  `Default Value`  `'squared_error'` |
| `opts.max_depth?` | `number` | Maximum depth of the individual regression estimators. The maximum depth limits the number of nodes in the tree. Tune this parameter for best performance; the best value depends on the interaction of the input variables. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples. If int, values must be in the range `\[1, inf)`.  `Default Value`  `3` |
| `opts.max_features?` | `number` \| `"sqrt"` \| `"log2"` | The number of features to consider when looking for the best split: |
| `opts.max_leaf_nodes?` | `number` | Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. Values must be in the range `\[2, inf)`. If `undefined`, then unlimited number of leaf nodes. |
| `opts.min_impurity_decrease?` | `number` | A node will be split if this split induces a decrease of the impurity greater than or equal to this value. Values must be in the range `\[0.0, inf)`.  The weighted impurity decrease equation is the following:  `Default Value`  `0` |
| `opts.min_samples_leaf?` | `number` | The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.  `Default Value`  `1` |
| `opts.min_samples_split?` | `number` | The minimum number of samples required to split an internal node:  `Default Value`  `2` |
| `opts.min_weight_fraction_leaf?` | `number` | The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided. Values must be in the range `\[0.0, 0.5\]`.  `Default Value`  `0` |
| `opts.n_estimators?` | `number` | The number of boosting stages to perform. Gradient boosting is fairly robust to over-fitting so a large number usually results in better performance. Values must be in the range `\1, inf)`.  `Default Value`  `100` |
| `opts.n_iter_no_change?` | `number` | `n\_iter\_no\_change` is used to decide if early stopping will be used to terminate training when validation score is not improving. By default it is set to `undefined` to disable early stopping. If set to a number, it will set aside `validation\_fraction` size of the training data as validation and terminate training when validation score is not improving in all of the previous `n\_iter\_no\_change` numbers of iterations. Values must be in the range `\[1, inf)`. |
| `opts.random_state?` | `number` | Controls the random seed given to each Tree estimator at each boosting iteration. In addition, it controls the random permutation of the features at each split (see Notes for more details). It also controls the random splitting of the training data to obtain a validation set if `n\_iter\_no\_change` is not `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary. |
| `opts.subsample?` | `number` | The fraction of samples to be used for fitting the individual base learners. If smaller than 1.0 this results in Stochastic Gradient Boosting. `subsample` interacts with the parameter `n\_estimators`. Choosing `subsample < 1.0` leads to a reduction of variance and an increase in bias. Values must be in the range `(0.0, 1.0\]`.  `Default Value`  `1` |
| `opts.tol?` | `number` | Tolerance for the early stopping. When the loss is not improving by at least tol for `n\_iter\_no\_change` iterations (if set to a number), the training stops. Values must be in the range `\0.0, inf)`.  `Default Value`  `0.0001` |
| `opts.validation_fraction?` | `number` | The proportion of training data to set aside as validation set for early stopping. Values must be in the range `(0.0, 1.0)`. Only used if `n\_iter\_no\_change` is set to an integer.  `Default Value`  `0.1` |
| `opts.verbose?` | `number` | Enable verbose output. If 1 then it prints progress and performance once in a while (the more trees the lower the frequency). If greater than 1 then it prints progress and performance for every tree. Values must be in the range `\[0, inf)`.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just erase the previous solution. See [the Glossary.  `Default Value`  `false` |

### Returns

[`GradientBoostingRegressor`](GradientBoostingRegressor.md)

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L27)

## Methods

### apply()

Apply trees in the ensemble to X, return leaf indices.

#### Signature

```ts
apply(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted to a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L275)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L258)

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
| `opts.X?` | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |
| `opts.monitor?` | `any` | The monitor is called after each iteration with the current iteration, a reference to the estimator and the local variables of `\_fit\_stages` as keyword arguments `callable(i, self, locals())`. If the callable returns `true` the fitting procedure is stopped. The monitor can be used for various things such as computing held-out estimates, early stopping, model introspect, and snapshoting. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node. |
| `opts.y?` | `ArrayLike` | Target values (strings or integers in classification, real numbers in regression) For classification, labels must correspond to classes. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L312)

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

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L370)

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

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L184)

### predict()

Predict regression target for X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L408)

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
| `opts.X?` | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L447)

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
| `opts.monitor?` | `string` \| `boolean` | Metadata routing for `monitor` parameter in `fit`. |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L502)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

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

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:549](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L549)

### staged\_predict()

Predict regression target at each stage for X.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L589)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L21)

## Accessors

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:762](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L762)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:843](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L843)

### init\_

The estimator that provides the initial predictions. Set via the `init` argument or `loss.init\_estimator`.

#### Signature

```ts
init_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:735](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L735)

### max\_features\_

The inferred value of max\_features.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:870](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L870)

### n\_estimators\_

The number of estimators as selected by early stopping (if `n\_iter\_no\_change` is specified). Otherwise it is set to `n\_estimators`.

#### Signature

```ts
n_estimators_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:789](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L789)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:816](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L816)

### oob\_improvement\_

The improvement in loss on the out-of-bag samples relative to the previous iteration. `oob\_improvement\_\[0\]` is the improvement in loss of the first stage over the `init` estimator. Only available if `subsample < 1.0`.

#### Signature

```ts
oob_improvement_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L627)

### oob\_score\_

The last value of the loss on the out-of-bag samples. It is the same as `oob\_scores\_\[-1\]`. Only available if `subsample < 1.0`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:681](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L681)

### oob\_scores\_

The full history of the loss values on the out-of-bag samples. Only available if `subsample < 1.0`.

#### Signature

```ts
oob_scores_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L654)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/GradientBoostingRegressor.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L171)

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

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L175)

### train\_score\_

The i-th score `train\_score\_\[i\]` is the loss of the model at iteration `i` on the in-bag sample. If `subsample \== 1` this is the loss on the training data.

#### Signature

```ts
train_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/GradientBoostingRegressor.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L708)
