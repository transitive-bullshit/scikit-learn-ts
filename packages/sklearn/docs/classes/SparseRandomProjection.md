# SparseRandomProjection

Reduce dimensionality through sparse random projection.

Sparse random matrix is an alternative to dense random projection matrix that guarantees similar embedding quality while being much more memory efficient and allowing faster computation of the projected data.

If we note `s \= 1 / density` the components of the random matrix are drawn from:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.SparseRandomProjection.html)

## Constructors

## constructor()

### Signature

```ts
new SparseRandomProjection(opts?: SparseRandomProjectionOptions): SparseRandomProjection;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SparseRandomProjectionOptions`](../interfaces/SparseRandomProjectionOptions.md) |

### Returns

[`SparseRandomProjection`](SparseRandomProjection.md)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L21)

### id

> `string`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L18)

### opts

> `any`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L19)

## Accessors

### components\_

Random matrix used for the projection. Sparse matrix will be of CSR format.

#### Signature

```ts
components_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L352)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L352)

### density\_

Concrete density computed from when density = “auto”.

#### Signature

```ts
density_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L406)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L406)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L460)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L460)

### inverse\_components\_

Pseudo-inverse of the components, only computed if `compute\_inverse\_components` is `true`.

#### Signature

```ts
inverse_components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L379)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L379)

### n\_components\_

Concrete number of components computed when n\_components=”auto”.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L325)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L325)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L433)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L433)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L30)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L34)

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L30) [generated/random\_projection/SparseRandomProjection.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L34)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L93)

### fit()

Generate a sparse random projection matrix.

#### Signature

```ts
fit(opts: SparseRandomProjectionFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionFitOptions`](../interfaces/SparseRandomProjectionFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L110)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SparseRandomProjectionFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionFitTransformOptions`](../interfaces/SparseRandomProjectionFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L142)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: SparseRandomProjectionGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionGetFeatureNamesOutOptions`](../interfaces/SparseRandomProjectionGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L183)

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

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L43)

### inverse\_transform()

Project data back to its original space.

Returns an array X\_original whose transform would be X. Note that even if X is sparse, X\_original is dense: this may use a lot of RAM.

If `compute\_inverse\_components` is `false`, the inverse of the components is computed during each call to `inverse\_transform` which can be costly.

#### Signature

```ts
inverse_transform(opts: SparseRandomProjectionInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionInverseTransformOptions`](../interfaces/SparseRandomProjectionInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L222)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: SparseRandomProjectionSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionSetOutputOptions`](../interfaces/SparseRandomProjectionSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L259)

### transform()

Project the data by using matrix product with the random matrix.

#### Signature

```ts
transform(opts: SparseRandomProjectionTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SparseRandomProjectionTransformOptions`](../interfaces/SparseRandomProjectionTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L291)
