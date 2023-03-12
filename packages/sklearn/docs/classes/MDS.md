# MDS

Multidimensional scaling.

Read more in the [User Guide](../manifold.html#multidimensional-scaling).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.MDS.html)

## Constructors

## constructor()

### Signature

```ts
new MDS(opts?: MDSOptions): MDS;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MDSOptions`](../interfaces/MDSOptions.md) |

### Returns

[`MDS`](MDS.md)

Defined in:  [generated/manifold/MDS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/MDS.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/MDS.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/MDS.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L19)

### id

> `string`

Defined in:  [generated/manifold/MDS.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L16)

### opts

> `any`

Defined in:  [generated/manifold/MDS.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L17)

## Accessors

### dissimilarity\_matrix\_

Pairwise dissimilarities between the points. Symmetric matrix that:

#### Signature

```ts
dissimilarity_matrix_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/manifold/MDS.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L214)

Defined in:  [generated/manifold/MDS.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L214)

### embedding\_

Stores the position of the dataset in the embedding space.

#### Signature

```ts
embedding_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/manifold/MDS.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L170)

Defined in:  [generated/manifold/MDS.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L170)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/MDS.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L262)

Defined in:  [generated/manifold/MDS.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L262)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/manifold/MDS.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L239)

Defined in:  [generated/manifold/MDS.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L239)

### n\_iter\_

The number of iterations corresponding to the best stress.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/manifold/MDS.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L285)

Defined in:  [generated/manifold/MDS.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L285)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/MDS.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L28)

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

Defined in:  [generated/manifold/MDS.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L32)

Defined in:  [generated/manifold/MDS.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L28) [generated/manifold/MDS.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L32)

### stress\_

The final value of the stress (sum of squared distance of the disparities and the distances for all constrained points). If `normalized\_stress=True`, and `metric=False` returns Stress-1. A value of 0 indicates “perfect” fit, 0.025 excellent, 0.05 good, 0.1 fair, and 0.2 poor [\[1\]](#r77760563872b-1).

#### Signature

```ts
stress_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/manifold/MDS.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L192)

Defined in:  [generated/manifold/MDS.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L192)

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

Defined in:  [generated/manifold/MDS.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L90)

### fit()

Compute the position of the points in the embedding space.

#### Signature

```ts
fit(opts: MDSFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MDSFitOptions`](../interfaces/MDSFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/MDS.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L107)

### fit\_transform()

Fit the data from `X`, and returns the embedded coordinates.

#### Signature

```ts
fit_transform(opts: MDSFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MDSFitTransformOptions`](../interfaces/MDSFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/manifold/MDS.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L138)

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

Defined in:  [generated/manifold/MDS.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/MDS.ts#L41)
