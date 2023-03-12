# PassiveAggressiveClassifier

Passive Aggressive Classifier.

Read more in the [User Guide](../linear_model.html#passive-aggressive).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PassiveAggressiveClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new PassiveAggressiveClassifier(opts?: PassiveAggressiveClassifierOptions): PassiveAggressiveClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PassiveAggressiveClassifierOptions`](../interfaces/PassiveAggressiveClassifierOptions.md) |

### Returns

[`PassiveAggressiveClassifier`](PassiveAggressiveClassifier.md)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L17)

## Accessors

### classes\_

The unique classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L512)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L512)

### coef\_

Weights assigned to the features.

#### Signature

```ts
coef_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L377)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L377)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L458)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L458)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L404)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L404)

### loss\_function\_

Loss function used by the algorithm.

#### Signature

```ts
loss_function_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L566)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L566)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L431)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L431)

### n\_iter\_

The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L485)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L485)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L28)

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

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L32)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L28) [generated/linear\_model/PassiveAggressiveClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L32)

### t\_

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Signature

```ts
t_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L539)

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L539)

## Methods

### decision\_function()

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Signature

```ts
decision_function(opts: PassiveAggressiveClassifierDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierDecisionFunctionOptions`](../interfaces/PassiveAggressiveClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L122)

### densify()

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Signature

```ts
densify(opts: PassiveAggressiveClassifierDensifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierDensifyOptions`](../interfaces/PassiveAggressiveClassifierDensifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L159)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L103)

### fit()

Fit linear model with Passive Aggressive algorithm.

#### Signature

```ts
fit(opts: PassiveAggressiveClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierFitOptions`](../interfaces/PassiveAggressiveClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L189)

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

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L41)

### partial\_fit()

Fit linear model with Passive Aggressive algorithm.

#### Signature

```ts
partial_fit(opts: PassiveAggressiveClassifierPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierPartialFitOptions`](../interfaces/PassiveAggressiveClassifierPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L229)

### predict()

Predict class labels for samples in X.

#### Signature

```ts
predict(opts: PassiveAggressiveClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierPredictOptions`](../interfaces/PassiveAggressiveClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L268)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: PassiveAggressiveClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierScoreOptions`](../interfaces/PassiveAggressiveClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L305)

### sparsify()

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Signature

```ts
sparsify(opts: PassiveAggressiveClassifierSparsifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PassiveAggressiveClassifierSparsifyOptions`](../interfaces/PassiveAggressiveClassifierSparsifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/PassiveAggressiveClassifier.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L345)
