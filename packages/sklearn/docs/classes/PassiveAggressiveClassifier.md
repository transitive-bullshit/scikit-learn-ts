# PassiveAggressiveClassifier

Passive Aggressive Classifier.

Read more in the [User Guide](../linear_model.html#passive-aggressive).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PassiveAggressiveClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new PassiveAggressiveClassifier(opts?: object): PassiveAggressiveClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.C?` | `number` | Maximum step size (regularization). Defaults to 1.0.  `Default Value`  `1` |
| `opts.average?` | `number` \| `boolean` | When set to `true`, computes the averaged SGD weights and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So average=10 will begin averaging after seeing 10 samples.  `Default Value`  `false` |
| `opts.class_weight?` | `any` | Preset for the class\_weight fit parameter.  Weights associated with classes. If not given, all classes are supposed to have weight one.  The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`. |
| `opts.early_stopping?` | `boolean` | Whether to use early stopping to terminate training when validation. score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least tol for n\_iter\_no\_change consecutive epochs.  `Default Value`  `false` |
| `opts.fit_intercept?` | `boolean` | Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.  `Default Value`  `true` |
| `opts.loss?` | `string` | The loss function to be used: hinge: equivalent to PA-I in the reference paper. squared\_hinge: equivalent to PA-II in the reference paper.  `Default Value`  `'hinge'` |
| `opts.max_iter?` | `number` | The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.PassiveAggressiveClassifier.partial_fit "sklearn.linear_model.PassiveAggressiveClassifier.partial_fit") method.  `Default Value`  `1000` |
| `opts.n_iter_no_change?` | `number` | Number of iterations with no improvement to wait before early stopping.  `Default Value`  `5` |
| `opts.n_jobs?` | `number` | The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.random_state?` | `number` | Used to shuffle the training data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.shuffle?` | `boolean` | Whether or not the training data should be shuffled after each epoch.  `Default Value`  `true` |
| `opts.tol?` | `number` | The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol).  `Default Value`  `0.001` |
| `opts.validation_fraction?` | `number` | The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.  `Default Value`  `0.1` |
| `opts.verbose?` | `number` | The verbosity level.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).  Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled.  `Default Value`  `false` |

### Returns

[`PassiveAggressiveClassifier`](PassiveAggressiveClassifier.md)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L23)

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

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L227)

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

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L267)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L208)

### fit()

Fit linear model with Passive Aggressive algorithm.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data. |
| `opts.coef_init?` | [`ArrayLike`](../types/ArrayLike.md)[] | The initial coefficients to warm-start the optimization. |
| `opts.intercept_init?` | [`ArrayLike`](../types/ArrayLike.md) | The initial intercept to warm-start the optimization. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L297)

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

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L146)

### partial\_fit()

Fit linear model with Passive Aggressive algorithm.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Subset of the training data. |
| `opts.classes?` | [`ArrayLike`](../types/ArrayLike.md) | Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Subset of the target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L357)

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

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L409)

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

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L449)

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

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L504)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L17)

## Accessors

### classes\_

The unique classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:669](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L669)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:669](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L669)

### coef\_

Weights assigned to the features.

#### Signature

```ts
coef_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L534)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L534)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L615)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L615)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L561)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L561)

### loss\_function\_

Loss function used by the algorithm.

#### Signature

```ts
loss_function_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:723](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L723)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:723](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L723)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L588)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L588)

### n\_iter\_

The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L642)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L642)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L133)

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

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L137)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L133) [generated/linear\_model/PassiveAggressiveClassifier.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L137)

### t\_

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L696)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L696)
