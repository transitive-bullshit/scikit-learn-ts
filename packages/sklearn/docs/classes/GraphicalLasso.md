# GraphicalLasso

Sparse inverse covariance estimation with an l1-penalized estimator.

Read more in the [User Guide](../covariance.html#sparse-inverse-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLasso.html)

## Constructors

## constructor()

### Signature

```ts
new GraphicalLasso(opts?: GraphicalLassoOptions): GraphicalLasso;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GraphicalLassoOptions`](../interfaces/GraphicalLassoOptions.md) |

### Returns

[`GraphicalLasso`](GraphicalLasso.md)

Defined in:  [generated/covariance/GraphicalLasso.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLasso.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/covariance/GraphicalLasso.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/covariance/GraphicalLasso.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L19)

### id

> `string`

Defined in:  [generated/covariance/GraphicalLasso.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L16)

### opts

> `any`

Defined in:  [generated/covariance/GraphicalLasso.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L17)

## Accessors

### covariance\_

Estimated covariance matrix

#### Signature

```ts
covariance_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/GraphicalLasso.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L278)

Defined in:  [generated/covariance/GraphicalLasso.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L278)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLasso.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L378)

Defined in:  [generated/covariance/GraphicalLasso.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L378)

### location\_

Estimated location, i.e. the estimated mean.

#### Signature

```ts
location_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLasso.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L253)

Defined in:  [generated/covariance/GraphicalLasso.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L253)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L353)

Defined in:  [generated/covariance/GraphicalLasso.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L353)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L328)

Defined in:  [generated/covariance/GraphicalLasso.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L328)

### precision\_

Estimated pseudo inverse matrix.

#### Signature

```ts
precision_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/covariance/GraphicalLasso.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L303)

Defined in:  [generated/covariance/GraphicalLasso.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L303)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/covariance/GraphicalLasso.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L28)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L32)

Defined in:  [generated/covariance/GraphicalLasso.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L28) [generated/covariance/GraphicalLasso.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L32)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L87)

### error\_norm()

Compute the Mean Squared Error between two covariance estimators.

#### Signature

```ts
error_norm(opts: GraphicalLassoErrorNormOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoErrorNormOptions`](../interfaces/GraphicalLassoErrorNormOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L104)

### fit()

Fit the GraphicalLasso model to X.

#### Signature

```ts
fit(opts: GraphicalLassoFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoFitOptions`](../interfaces/GraphicalLassoFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L136)

### get\_precision()

Getter for the precision matrix.

#### Signature

```ts
get_precision(opts: GraphicalLassoGetPrecisionOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoGetPrecisionOptions`](../interfaces/GraphicalLassoGetPrecisionOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L164)

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

Defined in:  [generated/covariance/GraphicalLasso.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L41)

### mahalanobis()

Compute the squared Mahalanobis distances of given observations.

#### Signature

```ts
mahalanobis(opts: GraphicalLassoMahalanobisOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoMahalanobisOptions`](../interfaces/GraphicalLassoMahalanobisOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/covariance/GraphicalLasso.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L193)

### score()

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Signature

```ts
score(opts: GraphicalLassoScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GraphicalLassoScoreOptions`](../interfaces/GraphicalLassoScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/covariance/GraphicalLasso.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L223)
