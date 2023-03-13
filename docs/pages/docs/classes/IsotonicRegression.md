# IsotonicRegression

Isotonic regression model.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.isotonic.IsotonicRegression.html)

## Constructors

## constructor()

### Signature

```ts
new IsotonicRegression(opts?: IsotonicRegressionOptions): IsotonicRegression;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `IsotonicRegressionOptions` |

### Returns

[`IsotonicRegression`](IsotonicRegression.md)

Defined in:  [generated/isotonic/IsotonicRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/isotonic/IsotonicRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/isotonic/IsotonicRegression.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/isotonic/IsotonicRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L19)

### id

> `string`

Defined in:  [generated/isotonic/IsotonicRegression.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L16)

### opts

> `any`

Defined in:  [generated/isotonic/IsotonicRegression.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L17)

## Accessors

### X\_max\_

Maximum value of input array `X\_` for right bound.

#### Signature

```ts
X_max_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L368)

### X\_min\_

Minimum value of input array `X\_` for left bound.

#### Signature

```ts
X_min_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L341)

### X\_thresholds\_

Unique ascending `X` values used to interpolate the y = f(X) monotonic function.

#### Signature

```ts
X_thresholds_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L395)

### f\_

The stepwise interpolating function that covers the input domain `X`.

#### Signature

```ts
f_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L449)

### increasing\_

Inferred value for `increasing`.

#### Signature

```ts
increasing_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L474)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/isotonic/IsotonicRegression.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L28)

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

Defined in: [generated/isotonic/IsotonicRegression.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L32)

### y\_thresholds\_

De-duplicated `y` values suitable to interpolate the y = f(X) monotonic function.

#### Signature

```ts
y_thresholds_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L422)

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

Defined in:  [generated/isotonic/IsotonicRegression.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L87)

### fit()

Fit the model using X, y as training data.

#### Signature

```ts
fit(opts: IsotonicRegressionFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsotonicRegressionFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L104)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: IsotonicRegressionFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsotonicRegressionFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L140)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: IsotonicRegressionGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsotonicRegressionGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L178)

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

Defined in:  [generated/isotonic/IsotonicRegression.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L41)

### predict()

Predict new data by linear interpolation.

#### Signature

```ts
predict(opts: IsotonicRegressionPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsotonicRegressionPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L213)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: IsotonicRegressionScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsotonicRegressionScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L245)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: IsotonicRegressionSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsotonicRegressionSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L281)

### transform()

Transform new data by linear interpolation.

#### Signature

```ts
transform(opts: IsotonicRegressionTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsotonicRegressionTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L311)
