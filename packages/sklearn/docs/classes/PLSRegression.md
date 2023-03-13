# PLSRegression

PLS regression.

PLSRegression is also known as PLS2 or PLS1, depending on the number of targets.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSRegression.html)

## Constructors

## constructor()

### Signature

```ts
new PLSRegression(opts?: PLSRegressionOptions): PLSRegression;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PLSRegressionOptions`](../interfaces/PLSRegressionOptions.md) |

### Returns

[`PLSRegression`](PLSRegression.md)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L21)

### id

> `string`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L18)

### opts

> `any`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L634)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:634](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L634)

### intercept\_

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_ + intercept\_`.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L561)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L561)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L609)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L609)

### n\_iter\_

Number of iterations of the power method, for each component.

#### Signature

```ts
n_iter_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L586)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L586)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L30)

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L34)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L30) [generated/cross\_decomposition/PLSRegression.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L34)

### x\_loadings\_

The loadings of `X`.

#### Signature

```ts
x_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L411)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L411)

### x\_rotations\_

The projection matrix used to transform `X`.

#### Signature

```ts
x_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L511)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L511)

### x\_scores\_

The transformed training samples.

#### Signature

```ts
x_scores_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L461)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L461)

### x\_weights\_

The left singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
x_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L361)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L361)

### y\_loadings\_

The loadings of `Y`.

#### Signature

```ts
y_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L436)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L436)

### y\_rotations\_

The projection matrix used to transform `Y`.

#### Signature

```ts
y_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L536)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L536)

### y\_scores\_

The transformed training targets.

#### Signature

```ts
y_scores_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L486)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L486)

### y\_weights\_

The right singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
y_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L386)

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L386)

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L87)

### fit()

Fit model to data.

#### Signature

```ts
fit(opts: PLSRegressionFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionFitOptions`](../interfaces/PLSRegressionFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L104)

### fit\_transform()

Learn and apply the dimension reduction on the train data.

#### Signature

```ts
fit_transform(opts: PLSRegressionFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionFitTransformOptions`](../interfaces/PLSRegressionFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L134)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: PLSRegressionGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionGetFeatureNamesOutOptions`](../interfaces/PLSRegressionGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L168)

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

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L43)

### inverse\_transform()

Transform data back to its original space.

#### Signature

```ts
inverse_transform(opts: PLSRegressionInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionInverseTransformOptions`](../interfaces/PLSRegressionInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L201)

### predict()

Predict targets of given samples.

#### Signature

```ts
predict(opts: PLSRegressionPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionPredictOptions`](../interfaces/PLSRegressionPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L235)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: PLSRegressionScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionScoreOptions`](../interfaces/PLSRegressionScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L267)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: PLSRegressionSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionSetOutputOptions`](../interfaces/PLSRegressionSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L301)

### transform()

Apply the dimension reduction.

#### Signature

```ts
transform(opts: PLSRegressionTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PLSRegressionTransformOptions`](../interfaces/PLSRegressionTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSRegression.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cross_decomposition/PLSRegression.ts#L329)
