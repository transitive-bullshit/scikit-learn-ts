# PLSCanonical

Partial Least Squares transformer and regressor.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSCanonical.html)

## Constructors

## constructor()

### Signature

```ts
new PLSCanonical(opts?: PLSCanonicalOptions): PLSCanonical;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PLSCanonicalOptions`](../interfaces/PLSCanonicalOptions.md) |

### Returns

[`PLSCanonical`](PLSCanonical.md)

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L19)

### id

> `string`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L16)

### opts

> `any`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L582)

### intercept\_

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_ + intercept\_`.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L509)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L557)

### n\_iter\_

Number of iterations of the power method, for each component. Empty if `algorithm='svd'`.

#### Signature

```ts
n_iter_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L534)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L28)

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

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L32)

### x\_loadings\_

The loadings of `X`.

#### Signature

```ts
x_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L409)

### x\_rotations\_

The projection matrix used to transform `X`.

#### Signature

```ts
x_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L459)

### x\_weights\_

The left singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
x_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L359)

### y\_loadings\_

The loadings of `Y`.

#### Signature

```ts
y_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L434)

### y\_rotations\_

The projection matrix used to transform `Y`.

#### Signature

```ts
y_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L484)

### y\_weights\_

The right singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
y_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L384)

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

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L85)

### fit()

Fit model to data.

#### Signature

```ts
fit(opts: PLSCanonicalFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalFitOptions`](../interfaces/PLSCanonicalFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L102)

### fit\_transform()

Learn and apply the dimension reduction on the train data.

#### Signature

```ts
fit_transform(opts: PLSCanonicalFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalFitTransformOptions`](../interfaces/PLSCanonicalFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L132)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: PLSCanonicalGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalGetFeatureNamesOutOptions`](../interfaces/PLSCanonicalGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L166)

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

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L41)

### inverse\_transform()

Transform data back to its original space.

#### Signature

```ts
inverse_transform(opts: PLSCanonicalInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalInverseTransformOptions`](../interfaces/PLSCanonicalInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L199)

### predict()

Predict targets of given samples.

#### Signature

```ts
predict(opts: PLSCanonicalPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalPredictOptions`](../interfaces/PLSCanonicalPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L233)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: PLSCanonicalScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalScoreOptions`](../interfaces/PLSCanonicalScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L265)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: PLSCanonicalSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalSetOutputOptions`](../interfaces/PLSCanonicalSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L299)

### transform()

Apply the dimension reduction.

#### Signature

```ts
transform(opts: PLSCanonicalTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSCanonicalTransformOptions`](../interfaces/PLSCanonicalTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L327)
