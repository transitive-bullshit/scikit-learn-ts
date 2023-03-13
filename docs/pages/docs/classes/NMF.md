# NMF

Non-Negative Matrix Factorization (NMF).

Find two non-negative matrices, i.e. matrices with all non-negative elements, (W, H) whose product approximates the non-negative matrix X. This factorization can be used for example for dimensionality reduction, source separation or topic extraction.

The objective function is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html)

## Constructors

## constructor()

### Signature

```ts
new NMF(opts?: object): NMF;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha_H?` | `number` \| `"same"` | Constant that multiplies the regularization terms of `H`. Set it to zero to have no regularization on `H`. If “same” (default), it takes the same value as `alpha\_W`.  `Default Value`  `'same'` |
| `opts.alpha_W?` | `number` | Constant that multiplies the regularization terms of `W`. Set it to zero (default) to have no regularization on `W`.  `Default Value`  `0` |
| `opts.beta_loss?` | `number` \| `"frobenius"` \| `"kullback-leibler"` \| `"itakura-saito"` | Beta divergence to be minimized, measuring the distance between X and the dot product WH. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for beta\_loss <= 0 (or ‘itakura-saito’), the input matrix X cannot contain zeros. Used only in ‘mu’ solver.  `Default Value`  `'frobenius'` |
| `opts.init?` | `"random"` \| `"nndsvd"` \| `"nndsvda"` \| `"nndsvdar"` \| `"custom"` | Method used to initialize the procedure. Valid options: |
| `opts.l1_ratio?` | `number` | The regularization mixing parameter, with 0 <= l1\_ratio <= 1. For l1\_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1\_ratio = 1 it is an elementwise L1 penalty. For 0 < l1\_ratio < 1, the penalty is a combination of L1 and L2.  `Default Value`  `0` |
| `opts.max_iter?` | `number` | Maximum number of iterations before timing out.  `Default Value`  `200` |
| `opts.n_components?` | `number` | Number of components, if n\_components is not set all features are kept. |
| `opts.random_state?` | `number` | Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See Glossary. |
| `opts.shuffle?` | `boolean` | If true, randomize the order of coordinates in the CD solver.  `Default Value`  `false` |
| `opts.solver?` | `"cd"` \| `"mu"` | Numerical solver to use:  `Default Value`  `'cd'` |
| `opts.tol?` | `number` | Tolerance of the stopping condition.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | Whether to be verbose.  `Default Value`  `0` |

### Returns

[`NMF`](NMF.md)

Defined in:  [generated/decomposition/NMF.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/NMF.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/NMF.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/NMF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/NMF.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/NMF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L19)

## Accessors

### components\_

Factorization matrix, sometimes called ‘dictionary’.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/decomposition/NMF.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L423)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/NMF.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L539)

### n\_components\_

The number of components. It is same as the `n\_components` parameter if it was given. Otherwise, it will be same as the number of features.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/NMF.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L446)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/NMF.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L516)

### n\_iter\_

Actual number of iterations.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/NMF.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L494)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/NMF.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L108)

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

Defined in: [generated/decomposition/NMF.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L112)

### reconstruction\_err\_

Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.

#### Signature

```ts
reconstruction_err_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/NMF.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L469)

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

Defined in:  [generated/decomposition/NMF.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L170)

### fit()

Learn a NMF model for the data X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.params?` | `any` | Parameters (keyword arguments) and values passed to the fit\_transform instance. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/NMF.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L187)

### fit\_transform()

Learn a NMF model for the data X and returns the transformed data.

This is more efficient than calling fit followed by transform.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.H?` | `ArrayLike`[] | If init=’custom’, it is used as initial guess for the solution. |
| `opts.W?` | `ArrayLike`[] | If init=’custom’, it is used as initial guess for the solution. |
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/NMF.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L233)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.NMF.fit "sklearn.decomposition.NMF.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/NMF.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L289)

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

Defined in:  [generated/decomposition/NMF.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L121)

### inverse\_transform()

Transform data back to its original space.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.W?` | `ArrayLike` | Transformed data matrix. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/decomposition/NMF.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L322)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

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

Defined in:  [generated/decomposition/NMF.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L357)

### transform()

Transform the data X according to the fitted NMF model.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/NMF.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/NMF.ts#L390)
