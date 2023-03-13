# CCA

Canonical Correlation Analysis, also known as “Mode B” PLS.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.CCA.html)

## Constructors

## constructor()

### Signature

```ts
new CCA(opts?: CCAOptions): CCA;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CCAOptions`](../interfaces/CCAOptions.md) |

### Returns

[`CCA`](CCA.md)

Defined in:  [generated/cross\_decomposition/CCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/CCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/CCA.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cross\_decomposition/CCA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L19)

### id

> `string`

Defined in:  [generated/cross\_decomposition/CCA.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L16)

### opts

> `any`

Defined in:  [generated/cross\_decomposition/CCA.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/CCA.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L553)

Defined in:  [generated/cross\_decomposition/CCA.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L553)

### intercept\_

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_ + intercept\_`.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/CCA.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L486)

Defined in:  [generated/cross\_decomposition/CCA.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L486)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L530)

Defined in:  [generated/cross\_decomposition/CCA.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L530)

### n\_iter\_

Number of iterations of the power method, for each component.

#### Signature

```ts
n_iter_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L508)

Defined in:  [generated/cross\_decomposition/CCA.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L508)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cross\_decomposition/CCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L28)

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

Defined in:  [generated/cross\_decomposition/CCA.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L32)

Defined in:  [generated/cross\_decomposition/CCA.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L28) [generated/cross\_decomposition/CCA.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L32)

### x\_loadings\_

The loadings of `X`.

#### Signature

```ts
x_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L394)

Defined in:  [generated/cross\_decomposition/CCA.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L394)

### x\_rotations\_

The projection matrix used to transform `X`.

#### Signature

```ts
x_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L440)

Defined in:  [generated/cross\_decomposition/CCA.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L440)

### x\_weights\_

The left singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
x_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L350)

Defined in:  [generated/cross\_decomposition/CCA.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L350)

### y\_loadings\_

The loadings of `Y`.

#### Signature

```ts
y_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L417)

Defined in:  [generated/cross\_decomposition/CCA.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L417)

### y\_rotations\_

The projection matrix used to transform `Y`.

#### Signature

```ts
y_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L463)

Defined in:  [generated/cross\_decomposition/CCA.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L463)

### y\_weights\_

The right singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
y_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L372)

Defined in:  [generated/cross\_decomposition/CCA.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L372)

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

Defined in:  [generated/cross\_decomposition/CCA.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L84)

### fit()

Fit model to data.

#### Signature

```ts
fit(opts: CCAFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAFitOptions`](../interfaces/CCAFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L101)

### fit\_transform()

Learn and apply the dimension reduction on the train data.

#### Signature

```ts
fit_transform(opts: CCAFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAFitTransformOptions`](../interfaces/CCAFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L130)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: CCAGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAGetFeatureNamesOutOptions`](../interfaces/CCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L162)

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

Defined in:  [generated/cross\_decomposition/CCA.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L41)

### inverse\_transform()

Transform data back to its original space.

#### Signature

```ts
inverse_transform(opts: CCAInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAInverseTransformOptions`](../interfaces/CCAInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/CCA.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L192)

### predict()

Predict targets of given samples.

#### Signature

```ts
predict(opts: CCAPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAPredictOptions`](../interfaces/CCAPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/CCA.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L224)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: CCAScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCAScoreOptions`](../interfaces/CCAScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L256)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: CCASetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCASetOutputOptions`](../interfaces/CCASetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L290)

### transform()

Apply the dimension reduction.

#### Signature

```ts
transform(opts: CCATransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CCATransformOptions`](../interfaces/CCATransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/CCA.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L318)
