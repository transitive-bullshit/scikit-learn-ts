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
new GaussianProcessClassifier(opts?: GaussianProcessClassifierOptions): GaussianProcessClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GaussianProcessClassifierOptions`](../interfaces/GaussianProcessClassifierOptions.md) |

### Returns

[`GaussianProcessClassifier`](GaussianProcessClassifier.md)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L25)

### id

> `string`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L22)

### opts

> `any`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L23)

## Accessors

### base\_estimator\_

The estimator instance that defines the likelihood function using the observed data.

#### Signature

```ts
base_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L298)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L298)

### classes\_

Unique class labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L352)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L352)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L433)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L433)

### log\_marginal\_likelihood\_value\_

The log-marginal-likelihood of `self.kernel\_.theta`

#### Signature

```ts
log_marginal_likelihood_value_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L325)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L325)

### n\_classes\_

The number of classes in the training data

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L379)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L379)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L406)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L406)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L34)

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

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L38)

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L34) [generated/gaussian\_process/GaussianProcessClassifier.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L38)

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

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L103)

### fit()

Fit Gaussian process classification model.

#### Signature

```ts
fit(opts: GaussianProcessClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierFitOptions`](../interfaces/GaussianProcessClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L120)

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

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L47)

### log\_marginal\_likelihood()

Return log-marginal likelihood of theta for training data.

In the case of multi-class classification, the mean log-marginal likelihood of the one-versus-rest classifiers are returned.

#### Signature

```ts
log_marginal_likelihood(opts: GaussianProcessClassifierLogMarginalLikelihoodOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierLogMarginalLikelihoodOptions`](../interfaces/GaussianProcessClassifierLogMarginalLikelihoodOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L154)

### predict()

Perform classification on an array of test vectors X.

#### Signature

```ts
predict(opts: GaussianProcessClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierPredictOptions`](../interfaces/GaussianProcessClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L191)

### predict\_proba()

Return probability estimates for the test vector X.

#### Signature

```ts
predict_proba(opts: GaussianProcessClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierPredictProbaOptions`](../interfaces/GaussianProcessClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L225)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: GaussianProcessClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessClassifierScoreOptions`](../interfaces/GaussianProcessClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessClassifier.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/GaussianProcessClassifier.ts#L262)
