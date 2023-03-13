# GaussianNB

Gaussian Naive Bayes (GaussianNB).

Can perform online updates to model parameters via [`partial\_fit`](#sklearn.naive_bayes.GaussianNB.partial_fit "sklearn.naive_bayes.GaussianNB.partial_fit"). For details on algorithm used to update feature means and variance online, see Stanford CS tech report STAN-CS-79-773 by Chan, Golub, and LeVeque:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.GaussianNB.html)

## Constructors

## constructor()

### Signature

```ts
new GaussianNB(opts?: GaussianNBOptions): GaussianNB;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `GaussianNBOptions` |

### Returns

[`GaussianNB`](GaussianNB.md)

Defined in:  [generated/naive\_bayes/GaussianNB.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L19)

### id

> `string`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L16)

### opts

> `any`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L17)

## Accessors

### class\_count\_

number of training samples observed in each class.

#### Signature

```ts
class_count_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/GaussianNB.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L330)

### class\_prior\_

probability of each class.

#### Signature

```ts
class_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/GaussianNB.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L355)

### classes\_

class labels known to the classifier.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/GaussianNB.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L380)

### epsilon\_

absolute additive value to variances.

#### Signature

```ts
epsilon_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/naive\_bayes/GaussianNB.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L403)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/naive\_bayes/GaussianNB.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L451)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/naive\_bayes/GaussianNB.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L426)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/naive\_bayes/GaussianNB.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L28)

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

Defined in: [generated/naive\_bayes/GaussianNB.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L32)

### theta\_

mean of each feature per class.

#### Signature

```ts
theta_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/naive\_bayes/GaussianNB.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L499)

### var\_

Variance of each feature per class.

#### Signature

```ts
var_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/naive\_bayes/GaussianNB.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L476)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L83)

### fit()

Fit Gaussian Naive Bayes according to X, y.

#### Signature

```ts
fit(opts: GaussianNBFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianNBFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L100)

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

Defined in:  [generated/naive\_bayes/GaussianNB.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L41)

### partial\_fit()

Incremental fit on a batch of samples.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once.

This method has some performance and numerical stability overhead, hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.

#### Signature

```ts
partial_fit(opts: GaussianNBPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianNBPartialFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L138)

### predict()

Perform classification on an array of test vectors X.

#### Signature

```ts
predict(opts: GaussianNBPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianNBPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L174)

### predict\_joint\_log\_proba()

Return joint log probability estimates for the test vector X.

For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.

#### Signature

```ts
predict_joint_log_proba(opts: GaussianNBPredictJointLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianNBPredictJointLogProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L204)

### predict\_log\_proba()

Return log-probability estimates for the test vector X.

#### Signature

```ts
predict_log_proba(opts: GaussianNBPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianNBPredictLogProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L236)

### predict\_proba()

Return probability estimates for the test vector X.

#### Signature

```ts
predict_proba(opts: GaussianNBPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianNBPredictProbaOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L266)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: GaussianNBScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GaussianNBScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/naive\_bayes/GaussianNB.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/naive_bayes/GaussianNB.ts#L298)
