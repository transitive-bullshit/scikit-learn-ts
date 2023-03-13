# IsotonicRegression

Isotonic regression model.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.isotonic.IsotonicRegression.html)

## Constructors

## constructor()

### Signature

```ts
new IsotonicRegression(opts?: object): IsotonicRegression;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.increasing?` | `boolean` \| `"auto"` | Determines whether the predictions should be constrained to increase or decrease with `X`. ‘auto’ will decide based on the Spearman correlation estimate’s sign.  `Default Value`  `true` |
| `opts.out_of_bounds?` | `"nan"` \| `"clip"` \| `"raise"` | Handles how `X` values outside of the training domain are handled during prediction.  `Default Value`  `'nan'` |
| `opts.y_max?` | `number` | Upper bound on the highest predicted value (the maximum may still be lower). If not set, defaults to +inf. |
| `opts.y_min?` | `number` | Lower bound on the lowest predicted value (the minimum value may still be higher). If not set, defaults to -inf. |

### Returns

[`IsotonicRegression`](IsotonicRegression.md)

Defined in:  [generated/isotonic/IsotonicRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/isotonic/IsotonicRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/isotonic/IsotonicRegression.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/isotonic/IsotonicRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L19)

### id

> `string`

Defined in:  [generated/isotonic/IsotonicRegression.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L16)

### opts

> `any`

Defined in:  [generated/isotonic/IsotonicRegression.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L17)

## Accessors

### X\_max\_

Maximum value of input array `X\_` for right bound.

#### Signature

```ts
X_max_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L453)

### X\_min\_

Minimum value of input array `X\_` for left bound.

#### Signature

```ts
X_min_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L426)

### X\_thresholds\_

Unique ascending `X` values used to interpolate the y = f(X) monotonic function.

#### Signature

```ts
X_thresholds_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L480)

### f\_

The stepwise interpolating function that covers the input domain `X`.

#### Signature

```ts
f_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L534)

### increasing\_

Inferred value for `increasing`.

#### Signature

```ts
increasing_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L559)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/isotonic/IsotonicRegression.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L52)

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

Defined in: [generated/isotonic/IsotonicRegression.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L56)

### y\_thresholds\_

De-duplicated `y` values suitable to interpolate the y = f(X) monotonic function.

#### Signature

```ts
y_thresholds_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/isotonic/IsotonicRegression.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L507)

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

Defined in:  [generated/isotonic/IsotonicRegression.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L111)

### fit()

Fit the model using X, y as training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `number` \| `ArrayLike` | Training data. |
| `opts.sample_weight?` | `ArrayLike` | Weights. If set to `undefined`, all weights will be set to 1 (equal weights). |
| `opts.y?` | `ArrayLike` | Training target. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L128)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L179)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L230)

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

Defined in:  [generated/isotonic/IsotonicRegression.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L65)

### predict()

Predict new data by linear interpolation.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.T?` | `number` \| `ArrayLike` | Data to transform. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L268)

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
| `opts.X?` | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L305)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L356)

### transform()

Transform new data by linear interpolation.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.T?` | `number` \| `ArrayLike` | Data to transform. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/isotonic/IsotonicRegression.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/isotonic/IsotonicRegression.ts#L391)
