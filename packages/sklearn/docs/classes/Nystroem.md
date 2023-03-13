# Nystroem

Approximate a kernel map using a subset of the training data.

Constructs an approximate feature map for an arbitrary kernel using a subset of the data as basis.

Read more in the [User Guide](../kernel_approximation.html#nystroem-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.Nystroem.html)

## Constructors

## constructor()

### Signature

```ts
new Nystroem(opts?: object): Nystroem;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.coef0?` | `number` | Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels. |
| `opts.degree?` | `number` | Degree of the polynomial kernel. Ignored by other kernels. |
| `opts.gamma?` | `number` | Gamma parameter for the RBF, laplacian, polynomial, exponential chi2 and sigmoid kernels. Interpretation of the default value is left to the kernel; see the documentation for sklearn.metrics.pairwise. Ignored by other kernels. |
| `opts.kernel?` | `string` | Kernel map to be approximated. A callable should accept two arguments and the keyword arguments passed to this object as `kernel\_params`, and should return a floating point number.  `Default Value`  `'rbf'` |
| `opts.kernel_params?` | `any` | Additional parameters (keyword arguments) for kernel function passed as callable object. |
| `opts.n_components?` | `number` | Number of features to construct. How many data points will be used to construct the mapping.  `Default Value`  `100` |
| `opts.n_jobs?` | `number` | The number of jobs to use for the computation. This works by breaking down the kernel matrix into `n\_jobs` even slices and computing them in parallel.  `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.random_state?` | `number` | Pseudo-random number generator to control the uniform sampling without replacement of `n\_components` of the training data to construct the basis kernel. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |

### Returns

[`Nystroem`](Nystroem.md)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L21)

### id

> `string`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L18)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L19)

## Accessors

### component\_indices\_

Indices of `components\_` in the training set.

#### Signature

```ts
component_indices_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L372)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L372)

### components\_

Subset of training points used to construct the feature map.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L349)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L349)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L447)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L447)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L422)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L422)

### normalization\_

Normalization matrix needed for embedding. Square root of the kernel matrix on `components\_`.

#### Signature

```ts
normalization_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L397)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L397)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/Nystroem.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L76)

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

Defined in:  [generated/kernel\_approximation/Nystroem.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L80)

Defined in:  [generated/kernel\_approximation/Nystroem.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L76) [generated/kernel\_approximation/Nystroem.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L80)

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

Defined in:  [generated/kernel\_approximation/Nystroem.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L136)

### fit()

Fit estimator to data.

Samples a subset of training points, computes kernel on these and computes normalization matrix.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L155)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L195)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.kernel_approximation.Nystroem.fit "sklearn.kernel_approximation.Nystroem.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L244)

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

Defined in:  [generated/kernel\_approximation/Nystroem.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L89)

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

Defined in:  [generated/kernel\_approximation/Nystroem.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L281)

### transform()

Apply feature map to X.

Computes an approximate feature map using the kernel between some training points and X.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Data to transform. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/kernel\_approximation/Nystroem.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L316)
