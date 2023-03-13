# SGDOneClassSVM

Solves linear One-Class SVM using Stochastic Gradient Descent.

This implementation is meant to be used with a kernel approximation technique (e.g. `sklearn.kernel\_approximation.Nystroem`) to obtain results similar to `sklearn.svm.OneClassSVM` which uses a Gaussian kernel by default.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDOneClassSVM.html)

## Constructors

## constructor()

### Signature

```ts
new SGDOneClassSVM(opts?: object): SGDOneClassSVM;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.average?` | `number` \| `boolean` | When set to `true`, computes the averaged SGD weights and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So `average=10` will begin averaging after seeing 10 samples.  `Default Value`  `false` |
| `opts.eta0?` | `number` | The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.0 as eta0 is not used by the default schedule ‘optimal’.  `Default Value`  `0` |
| `opts.fit_intercept?` | `boolean` | Whether the intercept should be estimated or not. Defaults to `true`.  `Default Value`  `true` |
| `opts.learning_rate?` | `"constant"` \| `"optimal"` \| `"invscaling"` \| `"adaptive"` | The learning rate schedule to use with `fit`. (If using `partial\_fit`, learning rate must be controlled directly).  `Default Value`  `'optimal'` |
| `opts.max_iter?` | `number` | The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the `partial\_fit`. Defaults to 1000.  `Default Value`  `1000` |
| `opts.nu?` | `number` | The nu parameter of the One Class SVM: an upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.  `Default Value`  `0.5` |
| `opts.power_t?` | `number` | The exponent for inverse scaling learning rate \[default 0.5\].  `Default Value`  `0.5` |
| `opts.random_state?` | `number` | The seed of the pseudo random number generator to use when shuffling the data. If int, random\_state is the seed used by the random number generator; If RandomState instance, random\_state is the random number generator; If `undefined`, the random number generator is the RandomState instance used by `np.random`. |
| `opts.shuffle?` | `boolean` | Whether or not the training data should be shuffled after each epoch. Defaults to `true`.  `Default Value`  `true` |
| `opts.tol?` | `number` | The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol). Defaults to 1e-3.  `Default Value`  `0.001` |
| `opts.verbose?` | `number` | The verbosity level.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See the Glossary.  Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.  `Default Value`  `false` |

### Returns

[`SGDOneClassSVM`](SGDOneClassSVM.md)

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L19)

## Accessors

### coef\_

Weights assigned to the features.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/linear\_model/SGDOneClassSVM.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L501)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/SGDOneClassSVM.ts:644](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L644)

### loss\_function\_

#### Signature

```ts
loss_function_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/linear\_model/SGDOneClassSVM.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L594)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/SGDOneClassSVM.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L619)

### n\_iter\_

The actual number of iterations to reach the stopping criterion.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/SGDOneClassSVM.ts:549](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L549)

### offset\_

Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - offset.

#### Signature

```ts
offset_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/SGDOneClassSVM.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L524)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L114)

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

Defined in: [generated/linear\_model/SGDOneClassSVM.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L118)

### t\_

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/SGDOneClassSVM.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L574)

## Methods

### decision\_function()

Signed distance to the separating hyperplane.

Signed distance is positive for an inlier and negative for an outlier.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Testing data. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L198)

### densify()

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Signature

```ts
densify(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L235)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L179)

### fit()

Fit linear One-Class SVM with Stochastic Gradient Descent.

This solves an equivalent optimization problem of the One-Class SVM primal optimization problem and returns a weight vector w and an offset rho such that the decision function is given by <w, x> - rho.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data. |
| `opts.coef_init?` | `any` | The initial coefficients to warm-start the optimization. |
| `opts.offset_init?` | `any` | The initial offset to warm-start the optimization. |
| `opts.sample_weight?` | `ArrayLike` | Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class\_weight (passed through the constructor) if class\_weight is specified. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L263)

### fit\_predict()

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L322)

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

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L127)

### partial\_fit()

Fit linear One-Class SVM with Stochastic Gradient Descent.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Subset of the training data. |
| `opts.sample_weight?` | `ArrayLike` | Weights applied to individual samples. If not provided, uniform weights are assumed. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L360)

### predict()

Return labels (1 inlier, -1 outlier) of the samples.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Testing data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L405)

### score\_samples()

Raw scoring function of the samples.

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Testing data. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L438)

### sparsify()

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Signature

```ts
sparsify(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/SGDOneClassSVM.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L475)
