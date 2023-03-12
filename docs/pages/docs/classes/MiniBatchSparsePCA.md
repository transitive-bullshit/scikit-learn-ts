# MiniBatchSparsePCA

Mini-batch Sparse Principal Components Analysis.

Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

Read more in the [User Guide](../decomposition.html#sparsepca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchSparsePCA.html)

## Constructors

## constructor()

### Signature

```ts
new MiniBatchSparsePCA(opts?: MiniBatchSparsePCAOptions): MiniBatchSparsePCA;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MiniBatchSparsePCAOptions`](../interfaces/MiniBatchSparsePCAOptions.md) |

### Returns

[`MiniBatchSparsePCA`](MiniBatchSparsePCA.md)

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L19)

## Accessors

### components\_

Sparse components extracted from the data.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L328)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L463)

### mean\_

Per-feature empirical mean, estimated from the training set. Equal to `X.mean(axis=0)`.

#### Signature

```ts
mean_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L409)

### n\_components\_

Estimated number of components.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L355)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L436)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L382)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L30)

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

Defined in: [generated/decomposition/MiniBatchSparsePCA.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L34)

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

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L99)

### fit()

Fit the model from data in X.

#### Signature

```ts
fit(opts: MiniBatchSparsePCAFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCAFitOptions`](../interfaces/MiniBatchSparsePCAFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L116)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: MiniBatchSparsePCAFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCAFitTransformOptions`](../interfaces/MiniBatchSparsePCAFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L148)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: MiniBatchSparsePCAGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCAGetFeatureNamesOutOptions`](../interfaces/MiniBatchSparsePCAGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L188)

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

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L43)

### inverse\_transform()

Transform data from the latent space to the original space.

This inversion is an approximation due to the loss of information induced by the forward decomposition.

#### Signature

```ts
inverse_transform(opts: MiniBatchSparsePCAInverseTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCAInverseTransformOptions`](../interfaces/MiniBatchSparsePCAInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L225)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: MiniBatchSparsePCASetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCASetOutputOptions`](../interfaces/MiniBatchSparsePCASetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L262)

### transform()

Least Squares projection of the data onto the sparse components.

To avoid instability issues in case the system is under-determined, regularization can be applied (Ridge regression) via the `ridge\_alpha` parameter.

Note that Sparse PCA components orthogonality is not enforced as in PCA hence one cannot use a simple linear projection.

#### Signature

```ts
transform(opts: MiniBatchSparsePCATransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MiniBatchSparsePCATransformOptions`](../interfaces/MiniBatchSparsePCATransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/MiniBatchSparsePCA.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L296)
