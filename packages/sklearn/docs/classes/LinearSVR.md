# LinearSVR

Linear Support Vector Regression.

Similar to SVR with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

The main differences between [`LinearSVR`](#sklearn.svm.LinearSVR "sklearn.svm.LinearSVR") and [`SVR`](sklearn.svm.SVR.html#sklearn.svm.SVR "sklearn.svm.SVR") lie in the loss function used by default, and in the handling of intercept regularization between those two implementations.

This class supports both dense and sparse input.

Read more in the [User Guide](../svm.html#svm-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html)

## Constructors

## constructor()

### Signature

```ts
new LinearSVR(opts?: object): LinearSVR;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.C?` | `number` | Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive.  `Default Value`  `1` |
| `opts.dual?` | `boolean` \| `"auto"` | Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features. `dual="auto"` will choose the value of the parameter automatically, based on the values of `n\_samples`, `n\_features` and `loss`. If `n\_samples` < `n\_features` and optimizer supports chosen `loss`, then dual will be set to `true`, otherwise it will be set to `false`.  `Default Value`  `true` |
| `opts.epsilon?` | `number` | Epsilon parameter in the epsilon-insensitive loss function. Note that the value of this parameter depends on the scale of the target variable y. If unsure, set `epsilon=0`.  `Default Value`  `0` |
| `opts.fit_intercept?` | `boolean` | Whether or not to fit an intercept. If set to `true`, the feature vector is extended to include an intercept term: `\[x\_1, ..., x\_n, 1\]`, where 1 corresponds to the intercept. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be already centered).  `Default Value`  `true` |
| `opts.intercept_scaling?` | `number` | When `fit\_intercept` is `true`, the instance vector x becomes `\[x\_1, ..., x\_n, intercept\_scaling\]`, i.e. a “synthetic” feature with a constant value equal to `intercept\_scaling` is appended to the instance vector. The intercept becomes intercept\_scaling \* synthetic feature weight. Note that liblinear internally penalizes the intercept, treating it like any other term in the feature vector. To reduce the impact of the regularization on the intercept, the `intercept\_scaling` parameter can be set to a value greater than 1; the higher the value of `intercept\_scaling`, the lower the impact of regularization on it. Then, the weights become `\[w\_x\_1, ..., w\_x\_n, w\_intercept\*intercept\_scaling\]`, where `w\_x\_1, ..., w\_x\_n` represent the feature weights and the intercept weight is scaled by `intercept\_scaling`. This scaling allows the intercept term to have a different regularization behavior compared to the other features.  `Default Value`  `1` |
| `opts.loss?` | `"epsilon_insensitive"` \| `"squared_epsilon_insensitive"` | Specifies the loss function. The epsilon-insensitive loss (standard SVR) is the L1 loss, while the squared epsilon-insensitive loss (‘squared\_epsilon\_insensitive’) is the L2 loss.  `Default Value`  `'epsilon_insensitive'` |
| `opts.max_iter?` | `number` | The maximum number of iterations to be run.  `Default Value`  `1000` |
| `opts.random_state?` | `number` | Controls the pseudo random number generation for shuffling the data. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.tol?` | `number` | Tolerance for stopping criteria.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.  `Default Value`  `0` |

### Returns

[`LinearSVR`](LinearSVR.md)

Defined in:  [generated/svm/LinearSVR.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L29)

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

Defined in:  [generated/svm/LinearSVR.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L164)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target vector relative to X. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/LinearSVR.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L181)

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

Defined in:  [generated/svm/LinearSVR.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L230)

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

Defined in:  [generated/svm/LinearSVR.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L115)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/LinearSVR.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L265)

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

Defined in:  [generated/svm/LinearSVR.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L298)

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

Defined in:  [generated/svm/LinearSVR.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L349)

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

Defined in:  [generated/svm/LinearSVR.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L386)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/svm/LinearSVR.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/svm/LinearSVR.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/svm/LinearSVR.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L25)

### id

> `string`

Defined in:  [generated/svm/LinearSVR.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L22)

### opts

> `any`

Defined in:  [generated/svm/LinearSVR.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L23)

## Accessors

### coef\_

Weights assigned to the features (coefficients in the primal problem).

`coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/LinearSVR.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L421)

Defined in:  [generated/svm/LinearSVR.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L421)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/LinearSVR.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L492)

Defined in:  [generated/svm/LinearSVR.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L492)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/LinearSVR.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L444)

Defined in:  [generated/svm/LinearSVR.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L444)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/LinearSVR.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L467)

Defined in:  [generated/svm/LinearSVR.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L467)

### n\_iter\_

Maximum number of iterations run across all classes.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/LinearSVR.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L517)

Defined in:  [generated/svm/LinearSVR.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L517)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/svm/LinearSVR.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L102)

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

Defined in:  [generated/svm/LinearSVR.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L106)

Defined in:  [generated/svm/LinearSVR.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L102) [generated/svm/LinearSVR.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/LinearSVR.ts#L106)
