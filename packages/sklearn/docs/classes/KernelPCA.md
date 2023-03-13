# KernelPCA

Kernel Principal component analysis (KPCA) [\[1\]](#r396fc7d924b8-1).

Non-linear dimensionality reduction through the use of kernels (see [Pairwise metrics, Affinities and Kernels](../metrics.html#metrics)).

It uses the [`scipy.linalg.eigh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.linalg.eigh.html#scipy.linalg.eigh "(in SciPy v1.10.1)") LAPACK implementation of the full SVD or the [`scipy.sparse.linalg.eigsh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.eigsh.html#scipy.sparse.linalg.eigsh "(in SciPy v1.10.1)") ARPACK implementation of the truncated SVD, depending on the shape of the input data and the number of components to extract. It can also use a randomized truncated SVD by the method proposed in [\[3\]](#r396fc7d924b8-3), see `eigen\_solver`.

Read more in the [User Guide](../decomposition.html#kernel-pca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html)

## Constructors

## constructor()

### Signature

```ts
new KernelPCA(opts?: KernelPCAOptions): KernelPCA;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KernelPCAOptions`](../interfaces/KernelPCAOptions.md) |

### Returns

[`KernelPCA`](KernelPCA.md)

Defined in:  [generated/decomposition/KernelPCA.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/KernelPCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/KernelPCA.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/KernelPCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L23)

### id

> `string`

Defined in:  [generated/decomposition/KernelPCA.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L20)

### opts

> `any`

Defined in:  [generated/decomposition/KernelPCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L21)

## Accessors

### X\_fit\_

The data used to fit the model. If `copy\_X=False`, then `X\_fit\_` is a reference. This attribute is used for the calls to transform.

#### Signature

```ts
X_fit_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L398)

Defined in:  [generated/decomposition/KernelPCA.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L398)

### X\_transformed\_fit\_

Projection of the fitted data on the kernel principal components. Only available when `fit\_inverse\_transform` is `true`.

#### Signature

```ts
X_transformed_fit_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L373)

Defined in:  [generated/decomposition/KernelPCA.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L373)

### dual\_coef\_

Inverse transform matrix. Only available when `fit\_inverse\_transform` is `true`.

#### Signature

```ts
dual_coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L350)

Defined in:  [generated/decomposition/KernelPCA.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L350)

### eigenvalues\_

Eigenvalues of the centered kernel matrix in decreasing order. If `n\_components` and `remove\_zero\_eig` are not set, then all values are stored.

#### Signature

```ts
eigenvalues_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/KernelPCA.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L300)

Defined in:  [generated/decomposition/KernelPCA.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L300)

### eigenvectors\_

Eigenvectors of the centered kernel matrix. If `n\_components` and `remove\_zero\_eig` are not set, then all components are stored.

#### Signature

```ts
eigenvectors_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L325)

Defined in:  [generated/decomposition/KernelPCA.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L325)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/KernelPCA.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L446)

Defined in:  [generated/decomposition/KernelPCA.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L446)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/KernelPCA.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L421)

Defined in:  [generated/decomposition/KernelPCA.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L421)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/KernelPCA.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L32)

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

Defined in:  [generated/decomposition/KernelPCA.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L36)

Defined in:  [generated/decomposition/KernelPCA.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L32) [generated/decomposition/KernelPCA.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L36)

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

Defined in:  [generated/decomposition/KernelPCA.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L100)

### fit()

Fit the model from data in X.

#### Signature

```ts
fit(opts: KernelPCAFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCAFitOptions`](../interfaces/KernelPCAFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/KernelPCA.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L117)

### fit\_transform()

Fit the model from data in X and transform X.

#### Signature

```ts
fit_transform(opts: KernelPCAFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCAFitTransformOptions`](../interfaces/KernelPCAFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L145)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: KernelPCAGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCAGetFeatureNamesOutOptions`](../interfaces/KernelPCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/KernelPCA.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L177)

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

Defined in:  [generated/decomposition/KernelPCA.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L45)

### inverse\_transform()

Transform X back to original space.

`inverse\_transform` approximates the inverse transformation using a learned pre-image. The pre-image is learned by kernel ridge regression of the original data on their low-dimensional representation vectors.

#### Signature

```ts
inverse_transform(opts: KernelPCAInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCAInverseTransformOptions`](../interfaces/KernelPCAInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L212)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: KernelPCASetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCASetOutputOptions`](../interfaces/KernelPCASetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/KernelPCA.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L244)

### transform()

Transform X.

#### Signature

```ts
transform(opts: KernelPCATransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelPCATransformOptions`](../interfaces/KernelPCATransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/KernelPCA.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/KernelPCA.ts#L272)
