# OrthogonalMatchingPursuit

Orthogonal Matching Pursuit model (OMP).

Read more in the [User Guide](../linear_model.html#omp).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.OrthogonalMatchingPursuit.html)

## Constructors

## constructor()

### Signature

```ts
new OrthogonalMatchingPursuit(opts?: OrthogonalMatchingPursuitOptions): OrthogonalMatchingPursuit;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OrthogonalMatchingPursuitOptions`](../interfaces/OrthogonalMatchingPursuitOptions.md) |

### Returns

[`OrthogonalMatchingPursuit`](OrthogonalMatchingPursuit.md)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L19)

### id

> `string`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L16)

### opts

> `any`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L17)

## Accessors

### coef\_

Parameter vector (w in the formula).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L208)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L208)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L343)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L343)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L235)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L235)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L316)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L316)

### n\_iter\_

Number of active features across every target.

#### Signature

```ts
n_iter_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| [`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L262)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L262)

### n\_nonzero\_coefs\_

The number of non-zero coefficients in the solution. If `n\_nonzero\_coefs` is `undefined` and `tol` is `undefined` this value is either set to 10% of `n\_features` or 1, whichever is greater.

#### Signature

```ts
n_nonzero_coefs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L289)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L289)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L28)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L32)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L28) [generated/linear\_model/OrthogonalMatchingPursuit.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L32)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L89)

### fit()

Fit the model using X, y as training data.

#### Signature

```ts
fit(opts: OrthogonalMatchingPursuitFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrthogonalMatchingPursuitFitOptions`](../interfaces/OrthogonalMatchingPursuitFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L106)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L41)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: OrthogonalMatchingPursuitPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrthogonalMatchingPursuitPredictOptions`](../interfaces/OrthogonalMatchingPursuitPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L138)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: OrthogonalMatchingPursuitScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrthogonalMatchingPursuitScoreOptions`](../interfaces/OrthogonalMatchingPursuitScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuit.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuit.ts#L172)
