# ClassifierChain

A multi-label model that arranges binary classifiers into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

Read more in the [User Guide](../multiclass.html#classifierchain).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.ClassifierChain.html)

## Constructors

## constructor()

### Signature

```ts
new ClassifierChain(opts?: ClassifierChainOptions): ClassifierChain;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ClassifierChainOptions`](../interfaces/ClassifierChainOptions.md) |

### Returns

[`ClassifierChain`](ClassifierChain.md)

Defined in:  [generated/multioutput/ClassifierChain.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multioutput/ClassifierChain.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multioutput/ClassifierChain.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/multioutput/ClassifierChain.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L21)

### id

> `string`

Defined in:  [generated/multioutput/ClassifierChain.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L18)

### opts

> `any`

Defined in:  [generated/multioutput/ClassifierChain.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L19)

## Accessors

### classes\_

A list of arrays of length `len(estimators\_)` containing the class labels for each estimator in the chain.

#### Signature

```ts
classes_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L258)

Defined in:  [generated/multioutput/ClassifierChain.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L258)

### estimators\_

A list of clones of base\_estimator.

#### Signature

```ts
estimators_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L283)

Defined in:  [generated/multioutput/ClassifierChain.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L283)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multioutput/ClassifierChain.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L358)

Defined in:  [generated/multioutput/ClassifierChain.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L358)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `base\_estimator` exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L333)

Defined in:  [generated/multioutput/ClassifierChain.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L333)

### order\_

The order of labels in the classifier chain.

#### Signature

```ts
order_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L308)

Defined in:  [generated/multioutput/ClassifierChain.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L308)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multioutput/ClassifierChain.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L30)

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

Defined in:  [generated/multioutput/ClassifierChain.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L34)

Defined in:  [generated/multioutput/ClassifierChain.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L30) [generated/multioutput/ClassifierChain.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L34)

## Methods

### decision\_function()

Evaluate the decision\_function of the models in the chain.

#### Signature

```ts
decision_function(opts: ClassifierChainDecisionFunctionOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainDecisionFunctionOptions`](../interfaces/ClassifierChainDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L104)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L87)

### fit()

Fit the model to data matrix X and targets Y.

#### Signature

```ts
fit(opts: ClassifierChainFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainFitOptions`](../interfaces/ClassifierChainFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L136)

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

Defined in:  [generated/multioutput/ClassifierChain.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L43)

### predict()

Predict on the data matrix X using the ClassifierChain model.

#### Signature

```ts
predict(opts: ClassifierChainPredictOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainPredictOptions`](../interfaces/ClassifierChainPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L166)

### predict\_proba()

Predict probability estimates.

#### Signature

```ts
predict_proba(opts: ClassifierChainPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainPredictProbaOptions`](../interfaces/ClassifierChainPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L194)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: ClassifierChainScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainScoreOptions`](../interfaces/ClassifierChainScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L226)
