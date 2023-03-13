# DummyRegressor

Regressor that makes predictions using simple rules.

This regressor is useful as a simple baseline to compare with other (real) regressors. Do not use it for real problems.

Read more in the [User Guide](../model_evaluation.html#dummy-estimators).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new DummyRegressor(opts?: object): DummyRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.constant?` | `number` \| [`ArrayLike`](../types/ArrayLike.md) | The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy. |
| `opts.quantile?` | `number` | The quantile to predict using the “quantile” strategy. A quantile of 0.5 corresponds to the median, while 0.0 to the minimum and 1.0 to the maximum. |
| `opts.strategy?` | `"quantile"` \| `"constant"` \| `"mean"` \| `"median"` | Strategy to use to generate predictions.  `Default Value`  `'mean'` |

### Returns

[`DummyRegressor`](DummyRegressor.md)

Defined in:  [generated/dummy/DummyRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L25)

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

Defined in:  [generated/dummy/DummyRegressor.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L102)

### fit()

Fit the random regressor.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/dummy/DummyRegressor.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L119)

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

Defined in:  [generated/dummy/DummyRegressor.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L60)

### predict()

Perform classification on test vectors X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test data. |
| `opts.return_std?` | `boolean` | Whether to return the standard deviation of posterior prediction. All zeros in this case.  `Default Value`  `false` |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/dummy/DummyRegressor.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L166)

### score()

Return the coefficient of determination R^2 of the prediction.

The coefficient R^2 is defined as `(1 \- u/v)`, where `u` is the residual sum of squares `((y\_true \- y\_pred) \*\* 2).sum()` and `v` is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a R^2 score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. Passing `undefined` as test samples gives the same result as passing real test samples, since `DummyRegressor` operates independently of the sampled observations. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True values for X. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/dummy/DummyRegressor.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L210)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/dummy/DummyRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/dummy/DummyRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/dummy/DummyRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/dummy/DummyRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/dummy/DummyRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L19)

## Accessors

### constant\_

Mean or median or quantile of the training targets or constant value given by the user.

#### Signature

```ts
constant_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/dummy/DummyRegressor.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L257)

Defined in:  [generated/dummy/DummyRegressor.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L257)

### n\_outputs\_

Number of outputs.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/dummy/DummyRegressor.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L282)

Defined in:  [generated/dummy/DummyRegressor.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L282)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/dummy/DummyRegressor.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L47)

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

Defined in:  [generated/dummy/DummyRegressor.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L51)

Defined in:  [generated/dummy/DummyRegressor.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L47) [generated/dummy/DummyRegressor.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L51)
