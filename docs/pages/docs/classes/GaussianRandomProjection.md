# GaussianRandomProjection

Reduce dimensionality through Gaussian random projection.

The components of the random matrix are drawn from N(0, 1 / n\_components).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.GaussianRandomProjection.html)

## Constructors

## constructor()

### Signature

```ts
new GaussianRandomProjection(opts?: object): GaussianRandomProjection;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.compute_inverse_components?` | `boolean` | Learn the inverse transform by computing the pseudo-inverse of the components during fit. Note that computing the pseudo-inverse does not scale well to large matrices.  `Default Value`  `false` |
| `opts.eps?` | `number` | Parameter to control the quality of the embedding according to the Johnson-Lindenstrauss lemma when `n\_components` is set to ‘auto’. The value should be strictly positive.  Smaller values lead to better embedding and higher number of dimensions (n\_components) in the target projection space.  `Default Value`  `0.1` |
| `opts.n_components?` | `number` \| `"auto"` | Dimensionality of the target projection space.  n\_components can be automatically adjusted according to the number of samples in the dataset and the bound given by the Johnson-Lindenstrauss lemma. In that case the quality of the embedding is controlled by the `eps` parameter.  It should be noted that Johnson-Lindenstrauss lemma can yield very conservative estimated of the required number of components as it makes no assumption on the structure of the dataset.  `Default Value`  `'auto'` |
| `opts.random_state?` | `number` | Controls the pseudo random number generator used to generate the projection matrix at fit time. Pass an int for reproducible output across multiple function calls. See Glossary. |

### Returns

[`GaussianRandomProjection`](GaussianRandomProjection.md)

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L21)

### id

> `string`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L18)

### opts

> `any`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L19)

## Accessors

### components\_

Random matrix used for the projection.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L417)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L498)

### inverse\_components\_

Pseudo-inverse of the components, only computed if `compute\_inverse\_components` is `true`.

#### Signature

```ts
inverse_components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L444)

### n\_components\_

Concrete number of components computed when n\_components=”auto”.

#### Signature

```ts
n_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L390)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L471)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L62)

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

Defined in: [generated/random\_projection/GaussianRandomProjection.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L66)

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

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L121)

### fit()

Generate a sparse random projection matrix.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training set: only the shape is used to find optimal random matrix dimensions based on the theory referenced in the afore mentioned papers. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L138)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L180)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.random_projection.GaussianRandomProjection.fit "sklearn.random_projection.GaussianRandomProjection.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L234)

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

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L75)

### inverse\_transform()

Project data back to its original space.

Returns an array X\_original whose transform would be X. Note that even if X is sparse, X\_original is dense: this may use a lot of RAM.

If `compute\_inverse\_components` is `false`, the inverse of the components is computed during each call to `inverse\_transform` which can be costly.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Data to be transformed back. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L276)

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

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L316)

### transform()

Project the data by using matrix product with the random matrix.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data to project into a smaller dimensional space. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/random\_projection/GaussianRandomProjection.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L353)
