# LabelPropagation

Label Propagation classifier.

Read more in the [User Guide](../semi_supervised.html#label-propagation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelPropagation.html)

## Constructors

## constructor()

### Signature

```ts
new LabelPropagation(opts?: LabelPropagationOptions): LabelPropagation;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LabelPropagationOptions`](../interfaces/LabelPropagationOptions.md) |

### Returns

[`LabelPropagation`](LabelPropagation.md)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L19)

### id

> `string`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L16)

### opts

> `any`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L17)

## Accessors

### X\_

Input array.

#### Signature

```ts
X_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L238)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L238)

### classes\_

The distinct labels used in classifying instances.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L263)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L263)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L371)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L371)

### label\_distributions\_

Categorical distribution for each item.

#### Signature

```ts
label_distributions_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L290)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L290)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L344)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L344)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L398)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L398)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L28)

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

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L32)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L28) [generated/semi\_supervised/LabelPropagation.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L32)

### transduction\_

Label assigned to each item during [fit](../../glossary.html#term-fit).

#### Signature

```ts
transduction_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L317)

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L317)

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

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L87)

### fit()

Fit a semi-supervised label propagation model to X.

#### Signature

```ts
fit(opts: LabelPropagationFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelPropagationFitOptions`](../interfaces/LabelPropagationFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L104)

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

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L41)

### predict()

Perform inductive inference across the model.

#### Signature

```ts
predict(opts: LabelPropagationPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelPropagationPredictOptions`](../interfaces/LabelPropagationPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L136)

### predict\_proba()

Predict probability for each possible outcome.

Compute the probability estimates for each single sample in X and each possible outcome seen during training (categorical distribution).

#### Signature

```ts
predict_proba(opts: LabelPropagationPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelPropagationPredictProbaOptions`](../interfaces/LabelPropagationPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L168)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: LabelPropagationScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LabelPropagationScoreOptions`](../interfaces/LabelPropagationScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/semi\_supervised/LabelPropagation.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L204)
