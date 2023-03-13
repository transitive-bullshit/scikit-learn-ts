# RegressorChain

A multi-label model that arranges regressions into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

Read more in the [User Guide](../multiclass.html#regressorchain).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.RegressorChain.html)

## Constructors

## constructor()

### Signature

```ts
new RegressorChain(opts?: object): RegressorChain;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.base_estimator?` | `any` | The base estimator from which the regressor chain is built. |
| `opts.cv?` | `number` | Determines whether to use cross validated predictions or true labels for the results of previous estimators in the chain. Possible inputs for cv are: |
| `opts.order?` | [`ArrayLike`](../types/ArrayLike.md) \| `"random"` | If `undefined`, the order will be determined by the order of columns in the label matrix Y.: |
| `opts.random_state?` | `number` | If `order='random'`, determines random number generation for the chain order. In addition, it controls the random seed given at each `base\_estimator` at each chaining iteration. Thus, it is only used when `base\_estimator` exposes a `random\_state`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.verbose?` | `boolean` | If `true`, chain progress is output as each model is completed.  `Default Value`  `false` |

### Returns

[`RegressorChain`](RegressorChain.md)

Defined in:  [generated/multioutput/RegressorChain.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multioutput/RegressorChain.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multioutput/RegressorChain.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/multioutput/RegressorChain.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L21)

### id

> `string`

Defined in:  [generated/multioutput/RegressorChain.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L18)

### opts

> `any`

Defined in:  [generated/multioutput/RegressorChain.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L19)

## Accessors

### estimators\_

A list of clones of base\_estimator.

#### Signature

```ts
estimators_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/RegressorChain.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L260)

Defined in:  [generated/multioutput/RegressorChain.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L260)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multioutput/RegressorChain.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L333)

Defined in:  [generated/multioutput/RegressorChain.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L333)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `base\_estimator` exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/RegressorChain.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L308)

Defined in:  [generated/multioutput/RegressorChain.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L308)

### order\_

The order of labels in the classifier chain.

#### Signature

```ts
order_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/RegressorChain.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L285)

Defined in:  [generated/multioutput/RegressorChain.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L285)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multioutput/RegressorChain.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L57)

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

Defined in:  [generated/multioutput/RegressorChain.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L61)

Defined in:  [generated/multioutput/RegressorChain.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L57) [generated/multioutput/RegressorChain.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L61)

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

Defined in:  [generated/multioutput/RegressorChain.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L114)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input data. |
| `opts.Y?` | [`ArrayLike`](../types/ArrayLike.md)[] | The target values. |
| `opts.fit_params?` | `any` | Parameters passed to the `fit` method at each step of the regressor chain. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/RegressorChain.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L131)

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

Defined in:  [generated/multioutput/RegressorChain.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L70)

### predict()

Predict on the data matrix X using the ClassifierChain model.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multioutput/RegressorChain.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L178)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/RegressorChain.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/multioutput/RegressorChain.ts#L213)
