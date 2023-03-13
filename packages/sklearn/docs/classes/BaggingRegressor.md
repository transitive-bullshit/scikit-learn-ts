# BaggingRegressor

A Bagging regressor.

A Bagging regressor is an ensemble meta-estimator that fits base regressors each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](#r4d113ba76fc0-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](#r4d113ba76fc0-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](#r4d113ba76fc0-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](#r4d113ba76fc0-4).

Read more in the [User Guide](../ensemble.html#bagging).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new BaggingRegressor(opts?: object): BaggingRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.base_estimator?` | `any` | Use `estimator` instead.  `Default Value`  `'deprecated'` |
| `opts.bootstrap?` | `boolean` | Whether samples are drawn with replacement. If `false`, sampling without replacement is performed.  `Default Value`  `true` |
| `opts.bootstrap_features?` | `boolean` | Whether features are drawn with replacement.  `Default Value`  `false` |
| `opts.estimator?` | `any` | The base estimator to fit on random subsets of the dataset. If `undefined`, then the base estimator is a [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor"). |
| `opts.max_features?` | `number` | The number of features to draw from X to train each base estimator ( without replacement by default, see `bootstrap\_features` for more details).  `Default Value`  `1` |
| `opts.max_samples?` | `number` | The number of samples to draw from X to train each base estimator (with replacement by default, see `bootstrap` for more details).  `Default Value`  `1` |
| `opts.n_estimators?` | `number` | The number of base estimators in the ensemble.  `Default Value`  `10` |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.BaggingRegressor.fit "sklearn.ensemble.BaggingRegressor.fit") and [`predict`](#sklearn.ensemble.BaggingRegressor.predict "sklearn.ensemble.BaggingRegressor.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.oob_score?` | `boolean` | Whether to use out-of-bag samples to estimate the generalization error. Only available if bootstrap=`true`.  `Default Value`  `false` |
| `opts.random_state?` | `number` | Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random\_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.verbose?` | `number` | Controls the verbosity when fitting and predicting.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See [the Glossary](../../glossary.html#term-warm_start).  `Default Value`  `false` |

### Returns

[`BaggingRegressor`](BaggingRegressor.md)

Defined in:  [generated/ensemble/BaggingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/BaggingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/BaggingRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/BaggingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/BaggingRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/BaggingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L21)

## Accessors

### estimator\_

The base estimator from which the ensemble is grown.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L335)

Defined in:  [generated/ensemble/BaggingRegressor.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L335)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L416)

Defined in:  [generated/ensemble/BaggingRegressor.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L416)

### estimators\_features\_

The subset of drawn features for each base estimator.

#### Signature

```ts
estimators_features_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L443)

Defined in:  [generated/ensemble/BaggingRegressor.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L443)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L389)

Defined in:  [generated/ensemble/BaggingRegressor.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L389)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L362)

Defined in:  [generated/ensemble/BaggingRegressor.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L362)

### oob\_prediction\_

Prediction computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_prediction\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_prediction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L497)

Defined in:  [generated/ensemble/BaggingRegressor.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L497)

### oob\_score\_

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Signature

```ts
oob_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L470)

Defined in:  [generated/ensemble/BaggingRegressor.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L470)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/BaggingRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L110)

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

Defined in:  [generated/ensemble/BaggingRegressor.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L114)

Defined in:  [generated/ensemble/BaggingRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L110) [generated/ensemble/BaggingRegressor.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L114)

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

Defined in:  [generated/ensemble/BaggingRegressor.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L181)

### fit()

Build a Bagging ensemble of estimators from the training set (X, y).

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrices are accepted only if they are supported by the base estimator. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | The target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L198)

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

Defined in:  [generated/ensemble/BaggingRegressor.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L123)

### predict()

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The training input samples. Sparse matrices are accepted only if they are supported by the base estimator. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/BaggingRegressor.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L249)

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

Defined in:  [generated/ensemble/BaggingRegressor.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L286)
