# Perceptron

Linear perceptron classifier.

Read more in the [User Guide](../linear_model.html#perceptron).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Perceptron.html)

## Constructors

## constructor()

### Signature

```ts
new Perceptron(opts?: object): Perceptron;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` | Constant that multiplies the regularization term if regularization is used.  `Default Value`  `0.0001` |
| `opts.class_weight?` | `any` | Preset for the class\_weight fit parameter.  Weights associated with classes. If not given, all classes are supposed to have weight one.  The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`. |
| `opts.early_stopping?` | `boolean` | Whether to use early stopping to terminate training when validation. score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least tol for n\_iter\_no\_change consecutive epochs.  `Default Value`  `false` |
| `opts.eta0?` | `number` | Constant by which the updates are multiplied.  `Default Value`  `1` |
| `opts.fit_intercept?` | `boolean` | Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.  `Default Value`  `true` |
| `opts.l1_ratio?` | `number` | The Elastic Net mixing parameter, with `0 <= l1\_ratio <= 1`. `l1\_ratio=0` corresponds to L2 penalty, `l1\_ratio=1` to L1. Only used if `penalty='elasticnet'`.  `Default Value`  `0.15` |
| `opts.max_iter?` | `number` | The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.Perceptron.partial_fit "sklearn.linear_model.Perceptron.partial_fit") method.  `Default Value`  `1000` |
| `opts.n_iter_no_change?` | `number` | Number of iterations with no improvement to wait before early stopping.  `Default Value`  `5` |
| `opts.n_jobs?` | `number` | The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.penalty?` | `"l1"` \| `"l2"` \| `"elasticnet"` | The penalty (aka regularization term) to be used. |
| `opts.random_state?` | `number` | Used to shuffle the training data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).  `Default Value`  `0` |
| `opts.shuffle?` | `boolean` | Whether or not the training data should be shuffled after each epoch.  `Default Value`  `true` |
| `opts.tol?` | `number` | The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol).  `Default Value`  `0.001` |
| `opts.validation_fraction?` | `number` | The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.  `Default Value`  `0.1` |
| `opts.verbose?` | `number` | The verbosity level.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).  `Default Value`  `false` |

### Returns

[`Perceptron`](Perceptron.md)

Defined in:  [generated/linear\_model/Perceptron.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L23)

## Methods

### decision\_function()

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data matrix for which we want to get the confidence scores. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Perceptron.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L230)

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

Defined in:  [generated/linear\_model/Perceptron.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L265)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/Perceptron.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L211)

### fit()

Fit linear model with Stochastic Gradient Descent.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training data. |
| `opts.coef_init?` | [`ArrayLike`](../types/ArrayLike.md)[] | The initial coefficients to warm-start the optimization. |
| `opts.intercept_init?` | [`ArrayLike`](../types/ArrayLike.md) | The initial intercept to warm-start the optimization. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class\_weight (passed through the constructor) if class\_weight is specified. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/Perceptron.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L291)

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

Defined in:  [generated/linear\_model/Perceptron.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L354)

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

Defined in:  [generated/linear\_model/Perceptron.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L151)

### partial\_fit()

Perform one epoch of stochastic gradient descent on given samples.

Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence, early stopping, and learning rate adjustments should be handled by the user.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Subset of the training data. |
| `opts.classes?` | [`ArrayLike`](../types/ArrayLike.md) | Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weights applied to individual samples. If not provided, uniform weights are assumed. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Subset of the target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/Perceptron.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L391)

### predict()

Predict class labels for samples in X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data matrix for which we want to get the predictions. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Perceptron.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L443)

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

Defined in:  [generated/linear\_model/Perceptron.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L478)

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
| `opts.coef_init?` | `string` \| `boolean` | Metadata routing for `coef\_init` parameter in `fit`. |
| `opts.intercept_init?` | `string` \| `boolean` | Metadata routing for `intercept\_init` parameter in `fit`. |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/Perceptron.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L529)

### set\_partial\_fit\_request()

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_partial_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.classes?` | `string` \| `boolean` | Metadata routing for `classes` parameter in `partial\_fit`. |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `partial\_fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/Perceptron.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L578)

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

Defined in:  [generated/linear\_model/Perceptron.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L622)

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

Defined in:  [generated/linear\_model/Perceptron.ts:659](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L659)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/Perceptron.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/Perceptron.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/Perceptron.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/Perceptron.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/Perceptron.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L17)

## Accessors

### classes\_

The unique classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Perceptron.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L685)

Defined in:  [generated/linear\_model/Perceptron.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L685)

### coef\_

Weights assigned to the features.

#### Signature

```ts
coef_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/linear\_model/Perceptron.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L708)

Defined in:  [generated/linear\_model/Perceptron.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L708)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/Perceptron.ts:804](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L804)

Defined in:  [generated/linear\_model/Perceptron.ts:804](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L804)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/Perceptron.ts:731](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L731)

Defined in:  [generated/linear\_model/Perceptron.ts:731](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L731)

### loss\_function\_

The function that determines the loss, or difference between the output of the algorithm and the target values.

#### Signature

```ts
loss_function_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/Perceptron.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L754)

Defined in:  [generated/linear\_model/Perceptron.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L754)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/Perceptron.ts:779](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L779)

Defined in:  [generated/linear\_model/Perceptron.ts:779](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L779)

### n\_iter\_

The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/Perceptron.ts:829](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L829)

Defined in:  [generated/linear\_model/Perceptron.ts:829](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L829)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/Perceptron.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L138)

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

Defined in:  [generated/linear\_model/Perceptron.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L142)

Defined in:  [generated/linear\_model/Perceptron.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L138) [generated/linear\_model/Perceptron.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L142)

### t\_

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/Perceptron.ts:852](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L852)

Defined in:  [generated/linear\_model/Perceptron.ts:852](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/linear_model/Perceptron.ts#L852)
