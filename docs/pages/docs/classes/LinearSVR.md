# LinearSVR

Linear Support Vector Regression.

Similar to SVR with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

This class supports both dense and sparse input.

Read more in the User Guide.

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
| `opts.dual?` | `boolean` | Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features.  `Default Value`  `true` |
| `opts.epsilon?` | `number` | Epsilon parameter in the epsilon-insensitive loss function. Note that the value of this parameter depends on the scale of the target variable y. If unsure, set `epsilon=0`.  `Default Value`  `0` |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be already centered).  `Default Value`  `true` |
| `opts.intercept_scaling?` | `number` | When self.fit\_intercept is `true`, instance vector x becomes \[x, self.intercept\_scaling\], i.e. a “synthetic” feature with constant value equals to intercept\_scaling is appended to the instance vector. The intercept becomes intercept\_scaling \* synthetic feature weight Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept\_scaling has to be increased.  `Default Value`  `1` |
| `opts.loss?` | `"epsilon_insensitive"` \| `"squared_epsilon_insensitive"` | Specifies the loss function. The epsilon-insensitive loss (standard SVR) is the L1 loss, while the squared epsilon-insensitive loss (‘squared\_epsilon\_insensitive’) is the L2 loss.  `Default Value`  `'epsilon_insensitive'` |
| `opts.max_iter?` | `number` | The maximum number of iterations to be run.  `Default Value`  `1000` |
| `opts.random_state?` | `number` | Controls the pseudo random number generation for shuffling the data. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.tol?` | `number` | Tolerance for stopping criteria.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.  `Default Value`  `0` |

### Returns

[`LinearSVR`](LinearSVR.md)

Defined in:  [generated/svm/LinearSVR.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/svm/LinearSVR.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/svm/LinearSVR.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/svm/LinearSVR.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L23)

### id

> `string`

Defined in:  [generated/svm/LinearSVR.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L20)

### opts

> `any`

Defined in:  [generated/svm/LinearSVR.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L21)

## Accessors

### coef\_

Weights assigned to the features (coefficients in the primal problem).

`coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/svm/LinearSVR.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L308)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/LinearSVR.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L379)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/svm/LinearSVR.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L331)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/svm/LinearSVR.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L354)

### n\_iter\_

Maximum number of iterations run across all classes.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/svm/LinearSVR.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L404)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/svm/LinearSVR.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L100)

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

Defined in: [generated/svm/LinearSVR.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L104)

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

Defined in:  [generated/svm/LinearSVR.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L162)

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
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | `ArrayLike` | Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight. |
| `opts.y?` | `ArrayLike` | Target vector relative to X. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/LinearSVR.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L179)

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

Defined in:  [generated/svm/LinearSVR.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L113)

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

Defined in:  [generated/svm/LinearSVR.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L226)

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

Defined in:  [generated/svm/LinearSVR.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVR.ts#L259)
