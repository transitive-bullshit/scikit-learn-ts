# LabelSpreading

LabelSpreading model for semi-supervised learning.

This model is similar to the basic Label Propagation algorithm, but uses affinity matrix based on the normalized graph Laplacian and soft clamping across the labels.

Read more in the [User Guide](../semi_supervised.html#label-propagation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelSpreading.html)

## Constructors

## constructor()

### Signature

```ts
new LabelSpreading(opts?: LabelSpreadingOptions): LabelSpreading;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LabelSpreadingOptions`](../interfaces/LabelSpreadingOptions.md) |

### Returns

[`LabelSpreading`](LabelSpreading.md)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L21)

### id

> `string`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L18)

### opts

> `any`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L19)

## Accessors

### X\_

Input array.

#### Signature

```ts
X_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L232)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L232)

### classes\_

The distinct labels used in classifying instances.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L255)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L255)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L355)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L355)

### label\_distributions\_

Categorical distribution for each item.

#### Signature

```ts
label_distributions_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L280)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L280)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L330)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L330)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L380)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L380)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L30)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L34)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L30) [generated/semi\_supervised/LabelSpreading.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L34)

### transduction\_

Label assigned to each item during [fit](../../glossary.html#term-fit).

#### Signature

```ts
transduction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L305)

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L305)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L89)

### fit()

Fit a semi-supervised label propagation model to X.

The input samples (labeled and unlabeled) are provided by matrix X, and target labels are provided by matrix y. We conventionally apply the label -1 to unlabeled samples in matrix y in a semi-supervised classification.

#### Signature

```ts
fit(opts: LabelSpreadingFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelSpreadingFitOptions`](../interfaces/LabelSpreadingFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L108)

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

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L43)

### predict()

Perform inductive inference across the model.

#### Signature

```ts
predict(opts: LabelSpreadingPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelSpreadingPredictOptions`](../interfaces/LabelSpreadingPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L138)

### predict\_proba()

Predict probability for each possible outcome.

Compute the probability estimates for each single sample in X and each possible outcome seen during training (categorical distribution).

#### Signature

```ts
predict_proba(opts: LabelSpreadingPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelSpreadingPredictProbaOptions`](../interfaces/LabelSpreadingPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L168)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: LabelSpreadingScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelSpreadingScoreOptions`](../interfaces/LabelSpreadingScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/LabelSpreading.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L200)
