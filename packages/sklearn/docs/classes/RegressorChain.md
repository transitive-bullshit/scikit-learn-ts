# RegressorChain

A multi-label model that arranges regressions into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

Read more in the [User Guide](../multiclass.html#regressorchain).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.RegressorChain.html)

## Constructors

## constructor()

### Signature

```ts
new RegressorChain(opts?: RegressorChainOptions): RegressorChain;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RegressorChainOptions`](../interfaces/RegressorChainOptions.md) |

### Returns

[`RegressorChain`](RegressorChain.md)

Defined in:  [generated/multioutput/RegressorChain.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multioutput/RegressorChain.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multioutput/RegressorChain.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/multioutput/RegressorChain.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L21)

### id

> `string`

Defined in:  [generated/multioutput/RegressorChain.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L18)

### opts

> `any`

Defined in:  [generated/multioutput/RegressorChain.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L19)

## Accessors

### estimators\_

A list of clones of base\_estimator.

#### Signature

```ts
estimators_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/RegressorChain.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L198)

Defined in:  [generated/multioutput/RegressorChain.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L198)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multioutput/RegressorChain.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L271)

Defined in:  [generated/multioutput/RegressorChain.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L271)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `base\_estimator` exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/RegressorChain.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L246)

Defined in:  [generated/multioutput/RegressorChain.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L246)

### order\_

The order of labels in the classifier chain.

#### Signature

```ts
order_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/RegressorChain.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L223)

Defined in:  [generated/multioutput/RegressorChain.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L223)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multioutput/RegressorChain.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L30)

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

Defined in:  [generated/multioutput/RegressorChain.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L34)

Defined in:  [generated/multioutput/RegressorChain.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L30) [generated/multioutput/RegressorChain.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L34)

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

Defined in:  [generated/multioutput/RegressorChain.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L87)

### fit()

Fit the model to data matrix X and targets Y.

#### Signature

```ts
fit(opts: RegressorChainFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RegressorChainFitOptions`](../interfaces/RegressorChainFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/RegressorChain.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L104)

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

Defined in:  [generated/multioutput/RegressorChain.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L43)

### predict()

Predict on the data matrix X using the ClassifierChain model.

#### Signature

```ts
predict(opts: RegressorChainPredictOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RegressorChainPredictOptions`](../interfaces/RegressorChainPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multioutput/RegressorChain.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L136)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: RegressorChainScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RegressorChainScoreOptions`](../interfaces/RegressorChainScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/RegressorChain.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L166)
