# PLSSVD

Partial Least Square SVD.

This transformer simply performs a SVD on the cross-covariance matrix `X'Y`. It is able to project both the training data `X` and the targets `Y`. The training data `X` is projected on the left singular vectors, while the targets are projected on the right singular vectors.

Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSSVD.html)

## Constructors

## constructor()

### Signature

```ts
new PLSSVD(opts?: object): PLSSVD;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.  `Default Value`  `true` |
| `opts.n_components?` | `number` | The number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.  `Default Value`  `2` |
| `opts.scale?` | `boolean` | Whether to scale `X` and `Y`.  `Default Value`  `true` |

### Returns

[`PLSSVD`](PLSSVD.md)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L25)

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

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L105)

### fit()

Fit model to data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training samples. |
| `opts.Y?` | [`ArrayLike`](../types/ArrayLike.md) | Targets. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L122)

### fit\_transform()

Learn and apply the dimensionality reduction.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training samples. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Targets. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L162)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.cross_decomposition.PLSSVD.fit "sklearn.cross_decomposition.PLSSVD.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L204)

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

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L64)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

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

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L239)

### transform()

Apply the dimensionality reduction.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Samples to be transformed. |
| `opts.Y?` | [`ArrayLike`](../types/ArrayLike.md) | Targets. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L272)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L21)

### id

> `string`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L18)

### opts

> `any`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L381)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L381)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L358)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L358)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L51)

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

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L55)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L51) [generated/cross\_decomposition/PLSSVD.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L55)

### x\_weights\_

The left singular vectors of the SVD of the cross-covariance matrix. Used to project `X` in [`transform`](#sklearn.cross_decomposition.PLSSVD.transform "sklearn.cross_decomposition.PLSSVD.transform").

#### Signature

```ts
x_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L312)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L312)

### y\_weights\_

The right singular vectors of the SVD of the cross-covariance matrix. Used to project `X` in [`transform`](#sklearn.cross_decomposition.PLSSVD.transform "sklearn.cross_decomposition.PLSSVD.transform").

#### Signature

```ts
y_weights_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L335)

Defined in:  [generated/cross\_decomposition/PLSSVD.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cross_decomposition/PLSSVD.ts#L335)
