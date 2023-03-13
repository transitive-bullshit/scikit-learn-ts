# OrthogonalMatchingPursuitCV

Cross-validated Orthogonal Matching Pursuit model (OMP).

See glossary entry for cross-validation estimator.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.OrthogonalMatchingPursuitCV.html)

## Constructors

## constructor()

### Signature

```ts
new OrthogonalMatchingPursuitCV(opts?: OrthogonalMatchingPursuitCVOptions): OrthogonalMatchingPursuitCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `OrthogonalMatchingPursuitCVOptions` |

### Returns

[`OrthogonalMatchingPursuitCV`](OrthogonalMatchingPursuitCV.md)

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L21)

### id

> `string`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L18)

### opts

> `any`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L19)

## Accessors

### coef\_

Parameter vector (w in the problem formulation).

#### Signature

```ts
coef_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L241)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L349)

### intercept\_

Independent term in decision function.

#### Signature

```ts
intercept_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`\>

Defined in: [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L214)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L322)

### n\_iter\_

Number of active features across every target for the model refit with the best hyperparameters got by cross-validating across all folds.

#### Signature

```ts
n_iter_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`\>

Defined in: [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L295)

### n\_nonzero\_coefs\_

Estimated number of non-zero coefficients giving the best mean squared error over the cross-validation folds.

#### Signature

```ts
n_nonzero_coefs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L268)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L30)

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

Defined in: [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L34)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L93)

### fit()

Fit the model using X, y as training data.

#### Signature

```ts
fit(opts: OrthogonalMatchingPursuitCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `OrthogonalMatchingPursuitCVFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L110)

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

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L43)

### predict()

Predict using the linear model.

#### Signature

```ts
predict(opts: OrthogonalMatchingPursuitCVPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `OrthogonalMatchingPursuitCVPredictOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L144)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: OrthogonalMatchingPursuitCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `OrthogonalMatchingPursuitCVScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/OrthogonalMatchingPursuitCV.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L178)
