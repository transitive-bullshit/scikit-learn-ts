# GaussianProcessClassifier

Gaussian process classification (GPC) based on Laplace approximation.

The implementation is based on Algorithm 3.1, 3.2, and 5.1 from [\[RW2006\]](#r2da648a61a73-rw2006).

Internally, the Laplace approximation is used for approximating the non-Gaussian posterior by a Gaussian.

Currently, the implementation is restricted to using the logistic link function. For multi-class classification, several binary one-versus rest classifiers are fitted. Note that this class thus does not implement a true multi-class Laplace approximation.

Read more in the [User Guide](../gaussian_process.html#gaussian-process).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new GaussianProcessClassifier(opts?: object): GaussianProcessClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy_X_train?` | `boolean` | If `true`, a persistent copy of the training data is stored in the object. Otherwise, just a reference to the training data is stored, which might cause predictions to change if the data is modified externally.  `Default Value`  `true` |
| `opts.kernel?` | `any` | The kernel specifying the covariance function of the GP. If `undefined` is passed, the kernel “1.0 \* RBF(1.0)” is used as default. Note that the kernel’s hyperparameters are optimized during fitting. Also kernel cannot be a `CompoundKernel`. |
| `opts.max_iter_predict?` | `number` | The maximum number of iterations in Newton’s method for approximating the posterior during predict. Smaller values will reduce computation time at the cost of worse results.  `Default Value`  `100` |
| `opts.multi_class?` | `"one_vs_rest"` \| `"one_vs_one"` | Specifies how multi-class classification problems are handled. Supported are ‘one\_vs\_rest’ and ‘one\_vs\_one’. In ‘one\_vs\_rest’, one binary Gaussian process classifier is fitted for each class, which is trained to separate this class from the rest. In ‘one\_vs\_one’, one binary Gaussian process classifier is fitted for each pair of classes, which is trained to separate these two classes. The predictions of these binary predictors are combined into multi-class predictions. Note that ‘one\_vs\_one’ does not support predicting probability estimates.  `Default Value`  `'one_vs_rest'` |
| `opts.n_jobs?` | `number` | The number of jobs to use for the computation: the specified multiclass problems are computed in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.n_restarts_optimizer?` | `number` | The number of restarts of the optimizer for finding the kernel’s parameters which maximize the log-marginal likelihood. The first run of the optimizer is performed from the kernel’s initial parameters, the remaining ones (if any) from thetas sampled log-uniform randomly from the space of allowed theta-values. If greater than 0, all bounds must be finite. Note that n\_restarts\_optimizer=0 implies that one run is performed.  `Default Value`  `0` |
| `opts.optimizer?` | `"fmin_l_bfgs_b"` | Can either be one of the internally supported optimizers for optimizing the kernel’s parameters, specified by a string, or an externally defined optimizer passed as a callable. If a callable is passed, it must have the signature:  `Default Value`  `'fmin_l_bfgs_b'` |
| `opts.random_state?` | `number` | Determines random number generation used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.warm_start?` | `boolean` | If warm-starts are enabled, the solution of the last Newton iteration on the Laplace approximation of the posterior mode is used as initialization for the next call of \_posterior\_mode(). This can speed up convergence when \_posterior\_mode is called several times on similar problems as in hyperparameter optimization. See [the Glossary](../../glossary.html#term-warm_start).  `Default Value`  `false` |

### Returns

[`GaussianProcessClassifier`](GaussianProcessClassifier.md)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L29)

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

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L160)

### fit()

Fit Gaussian process classification model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Feature vectors or other representations of training data. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values, must be binary. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L177)

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

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L221)

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

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L104)

### log\_marginal\_likelihood()

Return log-marginal likelihood of theta for training data.

In the case of multi-class classification, the mean log-marginal likelihood of the one-versus-rest classifiers are returned.

#### Signature

```ts
log_marginal_likelihood(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.clone_kernel?` | `boolean` | If `true`, the kernel attribute is copied. If `false`, the kernel attribute is modified, but may result in a performance improvement.  `Default Value`  `true` |
| `opts.eval_gradient?` | `boolean` | If `true`, the gradient of the log-marginal likelihood with respect to the kernel hyperparameters at position theta is returned additionally. Note that gradient computation is not supported for non-binary classification. If `true`, theta must not be `undefined`.  `Default Value`  `false` |
| `opts.theta?` | [`ArrayLike`](../types/ArrayLike.md) | Kernel hyperparameters for which the log-marginal likelihood is evaluated. In the case of multi-class classification, theta may be the hyperparameters of the compound kernel or of an individual kernel. In the latter case, all individual kernel get assigned the same theta values. If `undefined`, the precomputed log\_marginal\_likelihood of `self.kernel\_.theta` is returned. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L261)

### predict()

Perform classification on an array of test vectors X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Query points where the GP is evaluated for classification. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L315)

### predict\_proba()

Return probability estimates for the test vector X.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Query points where the GP is evaluated for classification. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L352)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L392)

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

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L447)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L25)

### id

> `string`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L22)

### opts

> `any`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L23)

## Accessors

### base\_estimator\_

The estimator instance that defines the likelihood function using the observed data.

#### Signature

```ts
base_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L485)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L485)

### classes\_

Unique class labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L539)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L539)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L620)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L620)

### log\_marginal\_likelihood\_value\_

The log-marginal-likelihood of `self.kernel\_.theta`

#### Signature

```ts
log_marginal_likelihood_value_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L512)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L512)

### n\_classes\_

The number of classes in the training data

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L566)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L566)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L593)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L593)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L91)

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

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L95)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L91) [generated/gaussian\_process/GaussianProcessClassifier.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L95)
