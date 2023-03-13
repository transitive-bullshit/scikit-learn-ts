# LinearSVR

Linear Support Vector Regression.

Similar to SVR with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

This class supports both dense and sparse input.

Read more in the [User Guide](../svm.html#svm-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html)

## Constructors

## constructor()

### Signature

```ts
new LinearSVR(opts?: LinearSVROptions): LinearSVR;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LinearSVROptions`](../interfaces/LinearSVROptions.md) |

### Returns

[`LinearSVR`](LinearSVR.md)

Defined in:  [generated/svm/LinearSVR.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/svm/LinearSVR.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/svm/LinearSVR.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/svm/LinearSVR.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L23)

### id

> `string`

Defined in:  [generated/svm/LinearSVR.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L20)

### opts

> `any`

Defined in:  [generated/svm/LinearSVR.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L21)

## Accessors

### coef\_

Weights assigned to the features (coefficients in the primal problem).

`coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/LinearSVR.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L205)

Defined in:  [generated/svm/LinearSVR.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L205)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/LinearSVR.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L276)

Defined in:  [generated/svm/LinearSVR.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L276)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/LinearSVR.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L228)

Defined in:  [generated/svm/LinearSVR.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L228)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/LinearSVR.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L251)

Defined in:  [generated/svm/LinearSVR.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L251)

### n\_iter\_

Maximum number of iterations run across all classes.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/LinearSVR.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L301)

Defined in:  [generated/svm/LinearSVR.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L301)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/svm/LinearSVR.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L32)

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

Defined in:  [generated/svm/LinearSVR.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L36)

Defined in:  [generated/svm/LinearSVR.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L32) [generated/svm/LinearSVR.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L36)

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

Defined in:  [generated/svm/LinearSVR.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L94)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: LinearSVRFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVRFitOptions`](../interfaces/LinearSVRFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/LinearSVR.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L111)

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

Defined in:  [generated/svm/LinearSVR.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L45)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: LinearSVRPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVRPredictOptions`](../interfaces/LinearSVRPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/LinearSVR.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L143)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: LinearSVRScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVRScoreOptions`](../interfaces/LinearSVRScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/LinearSVR.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/svm/LinearSVR.ts#L171)
