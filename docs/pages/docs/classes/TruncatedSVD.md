# TruncatedSVD

Dimensionality reduction using truncated SVD (aka LSA).

This transformer performs linear dimensionality reduction by means of truncated singular value decomposition (SVD). Contrary to PCA, this estimator does not center the data before computing the singular value decomposition. This means it can work with sparse matrices efficiently.

In particular, truncated SVD works on term count/tf-idf matrices as returned by the vectorizers in `sklearn.feature\_extraction.text`. In that context, it is known as latent semantic analysis (LSA).

This estimator supports two algorithms: a fast randomized SVD solver, and a “naive” algorithm that uses ARPACK as an eigensolver on `X \* X.T` or `X.T \* X`, whichever is more efficient.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html)

## Constructors

## constructor()

### Signature

```ts
new TruncatedSVD(opts?: TruncatedSVDOptions): TruncatedSVD;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `TruncatedSVDOptions` |

### Returns

[`TruncatedSVD`](TruncatedSVD.md)

Defined in:  [generated/decomposition/TruncatedSVD.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/TruncatedSVD.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/TruncatedSVD.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/TruncatedSVD.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L25)

### id

> `string`

Defined in:  [generated/decomposition/TruncatedSVD.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L22)

### opts

> `any`

Defined in:  [generated/decomposition/TruncatedSVD.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L23)

## Accessors

### components\_

The right singular vectors of the input data.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/decomposition/TruncatedSVD.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L297)

### explained\_variance\_

The variance of the training samples transformed by a projection to each component.

#### Signature

```ts
explained_variance_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/TruncatedSVD.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L322)

### explained\_variance\_ratio\_

Percentage of variance explained by each of the selected components.

#### Signature

```ts
explained_variance_ratio_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/TruncatedSVD.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L347)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/TruncatedSVD.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L422)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/TruncatedSVD.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L397)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/TruncatedSVD.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L34)

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

Defined in: [generated/decomposition/TruncatedSVD.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L38)

### singular\_values\_

The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.

#### Signature

```ts
singular_values_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/TruncatedSVD.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L372)

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

Defined in:  [generated/decomposition/TruncatedSVD.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L95)

### fit()

Fit model on training data X.

#### Signature

```ts
fit(opts: TruncatedSVDFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TruncatedSVDFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L112)

### fit\_transform()

Fit model to X and perform dimensionality reduction on X.

#### Signature

```ts
fit_transform(opts: TruncatedSVDFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TruncatedSVDFitTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L140)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: TruncatedSVDGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TruncatedSVDGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L172)

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

Defined in:  [generated/decomposition/TruncatedSVD.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L47)

### inverse\_transform()

Transform X back to its original space.

Returns an array X\_original whose transform would be X.

#### Signature

```ts
inverse_transform(opts: TruncatedSVDInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TruncatedSVDInverseTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L207)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: TruncatedSVDSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TruncatedSVDSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L241)

### transform()

Perform dimensionality reduction on X.

#### Signature

```ts
transform(opts: TruncatedSVDTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `TruncatedSVDTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/TruncatedSVD.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L269)
