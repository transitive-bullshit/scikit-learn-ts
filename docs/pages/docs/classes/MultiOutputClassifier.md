# MultiOutputClassifier

Multi target classification.

This strategy consists of fitting one classifier per target. This is a simple strategy for extending classifiers that do not natively support multi-target classification.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new MultiOutputClassifier(opts?: object): MultiOutputClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.estimator?` | `any` | An estimator object implementing fit and predict. A predict\_proba method will be exposed only if `estimator` implements it. |
| `opts.n_jobs?` | `number` | The number of jobs to run in parallel. [`fit`](#sklearn.multioutput.MultiOutputClassifier.fit "sklearn.multioutput.MultiOutputClassifier.fit"), [`predict`](#sklearn.multioutput.MultiOutputClassifier.predict "sklearn.multioutput.MultiOutputClassifier.predict") and [`partial\_fit`](#sklearn.multioutput.MultiOutputClassifier.partial_fit "sklearn.multioutput.MultiOutputClassifier.partial_fit") (if supported by the passed estimator) will be parallelized for each target.  When individual estimators are fast to train or predict, using `n\_jobs > 1` can result in slower performance due to the parallelism overhead.  `undefined` means `1` unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all available processes / threads. See Glossary for more details. |

### Returns

[`MultiOutputClassifier`](MultiOutputClassifier.md)

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L17)

## Accessors

### classes\_

Class labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/multioutput/MultiOutputClassifier.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L349)

### estimators\_

Estimators used for predictions.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/multioutput/MultiOutputClassifier.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L376)

### feature\_names\_in\_

Names of features seen during fit. Only defined if the underlying estimators expose such an attribute when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/multioutput/MultiOutputClassifier.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L430)

### n\_features\_in\_

Number of features seen during fit. Only defined if the underlying `estimator` exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/multioutput/MultiOutputClassifier.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L403)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L42)

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

Defined in: [generated/multioutput/MultiOutputClassifier.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L46)

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

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L99)

### fit()

Fit the model to data matrix X and targets Y.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |
| `opts.Y?` | `ArrayLike`[] | The target values. |
| `opts.fit_params?` | `any` | Parameters passed to the `estimator.fit` method of each step. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying classifier supports sample weights. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L116)

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

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L55)

### partial\_fit()

Incrementally fit a separate model for each class output.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |
| `opts.classes?` | `any`[] | Each array is unique classes for one output in str/int. Can be obtained via `\[np.unique(y\[:, i\]) for i in range(y.shape\[1\])\]`, where `y` is the target matrix of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that `y` doesn’t need to contain all labels in `classes`. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights. |
| `opts.y?` | `ArrayLike` | Multi-output targets. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L172)

### predict()

Predict multi-output variable using model for each target variable.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L232)

### predict\_proba()

Return prediction probabilities for each class of each output.

This method will raise a `ValueError` if any of the estimators do not have `predict\_proba`.

#### Signature

```ts
predict_proba(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input data. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L269)

### score()

Return the mean accuracy on the given test data and labels.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.y?` | `ArrayLike`[] | True values for X. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/MultiOutputClassifier.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L307)
