# NeighborhoodComponentsAnalysis

Neighborhood Components Analysis.

Neighborhood Component Analysis (NCA) is a machine learning algorithm for metric learning. It learns a linear transformation in a supervised fashion to improve the classification accuracy of a stochastic nearest neighbors rule in the transformed space.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html)

## Constructors

## constructor()

### Signature

```ts
new NeighborhoodComponentsAnalysis(opts?: object): NeighborhoodComponentsAnalysis;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.callback?` | `any` | If not `undefined`, this function is called after every iteration of the optimizer, taking as arguments the current solution (flattened transformation matrix) and the number of iterations. This might be useful in case one wants to examine or store the transformation found after each iteration. |
| `opts.init?` | `ArrayLike`[] \| `"auto"` \| `"random"` \| `"identity"` \| `"pca"` \| `"lda"` | Initialization of the linear transformation. Possible options are `'auto'`, `'pca'`, `'lda'`, `'identity'`, `'random'`, and a numpy array of shape `(n\_features\_a, n\_features\_b)`.  `Default Value`  `'auto'` |
| `opts.max_iter?` | `number` | Maximum number of iterations in the optimization.  `Default Value`  `50` |
| `opts.n_components?` | `number` | Preferred dimensionality of the projected space. If `undefined` it will be set to `n\_features`. |
| `opts.random_state?` | `number` | A pseudo random number generator object or a seed for it if int. If `init='random'`, `random\_state` is used to initialize the random transformation. If `init='pca'`, `random\_state` is passed as an argument to PCA when initializing the transformation. Pass an int for reproducible results across multiple function calls. See Glossary. |
| `opts.tol?` | `number` | Convergence tolerance for the optimization.  `Default Value`  `0.00001` |
| `opts.verbose?` | `number` | If 0, no progress messages will be printed. If 1, progress messages will be printed to stdout. If > 1, progress messages will be printed and the `disp` parameter of [`scipy.optimize.minimize`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html#scipy.optimize.minimize "(in SciPy v1.10.1)") will be set to `verbose \- 2`.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | If `true` and [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit") has been called before, the solution of the previous call to [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit") is used as the initial linear transformation (`n\_components` and `init` will be ignored).  `Default Value`  `false` |

### Returns

[`NeighborhoodComponentsAnalysis`](NeighborhoodComponentsAnalysis.md)

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L25)

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

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L147)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The training samples. |
| `opts.y?` | `ArrayLike` | The corresponding training labels. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L164)

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

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L210)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L264)

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

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L95)

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

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L304)

### transform()

Apply the learned transformation to the given data.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Data samples. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L342)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L19)

## Accessors

### components\_

The linear transformation learned during fitting.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/neighbors/NeighborhoodComponentsAnalysis.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L380)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neighbors/NeighborhoodComponentsAnalysis.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L488)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/NeighborhoodComponentsAnalysis.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L407)

### n\_iter\_

Counts the number of iterations performed by the optimizer.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/NeighborhoodComponentsAnalysis.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L434)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L82)

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

Defined in: [generated/neighbors/NeighborhoodComponentsAnalysis.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L86)

### random\_state\_

Pseudo random number generator object used during initialization.

#### Signature

```ts
random_state_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/NeighborhoodComponentsAnalysis.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L461)
