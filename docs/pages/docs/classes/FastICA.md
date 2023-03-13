# FastICA

FastICA: a fast algorithm for Independent Component Analysis.

The implementation is based on [\[1\]](#r44c805292efc-1).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FastICA.html)

## Constructors

## constructor()

### Signature

```ts
new FastICA(opts?: object): FastICA;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"parallel"` \| `"deflation"` | Specify which algorithm to use for FastICA.  `Default Value`  `'parallel'` |
| `opts.fun?` | `"logcosh"` \| `"exp"` \| `"cube"` | The functional form of the G function used in the approximation to neg-entropy. Could be either ‘logcosh’, ‘exp’, or ‘cube’. You can also provide your own function. It should return a tuple containing the value of the function, and of its derivative, in the point. The derivative should be averaged along its last dimension. Example:  `Default Value`  `'logcosh'` |
| `opts.fun_args?` | `any` | Arguments to send to the functional form. If empty or `undefined` and if fun=’logcosh’, fun\_args will take value {‘alpha’ : 1.0}. |
| `opts.max_iter?` | `number` | Maximum number of iterations during fit.  `Default Value`  `200` |
| `opts.n_components?` | `number` | Number of components to use. If `undefined` is passed, all are used. |
| `opts.random_state?` | `number` | Used to initialize `w\_init` when not specified, with a normal distribution. Pass an int, for reproducible results across multiple function calls. See Glossary. |
| `opts.tol?` | `number` | A positive scalar giving the tolerance at which the un-mixing matrix is considered to have converged.  `Default Value`  `0.0001` |
| `opts.w_init?` | `ArrayLike`[] | Initial un-mixing array. If `w\_init=None`, then an array of values drawn from a normal distribution is used. |
| `opts.whiten?` | `string` \| `boolean` | Specify the whitening strategy to use.  `Default Value`  `'warn'` |
| `opts.whiten_solver?` | `"svd"` \| `"eigh"` | The solver to use for whitening.  `Default Value`  `'svd'` |

### Returns

[`FastICA`](FastICA.md)

Defined in:  [generated/decomposition/FastICA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/FastICA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/FastICA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/FastICA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/FastICA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/FastICA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L19)

## Accessors

### components\_

The linear operator to apply to the data to get the independent sources. This is equal to the unmixing matrix when `whiten` is `false`, and equal to `np.dot(unmixing\_matrix, self.whitening\_)` when `whiten` is `true`.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/decomposition/FastICA.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L401)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/FastICA.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L494)

### mean\_

The mean over features. Only set if `self.whiten` is `true`.

#### Signature

```ts
mean_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/decomposition/FastICA.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L447)

### mixing\_

The pseudo-inverse of `components\_`. It is the linear operator that maps independent sources to the data.

#### Signature

```ts
mixing_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/decomposition/FastICA.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L424)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/FastICA.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L469)

### n\_iter\_

If the algorithm is “deflation”, n\_iter is the maximum number of iterations run across all components. Else they are just the number of iterations taken to converge.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/decomposition/FastICA.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L519)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/FastICA.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L92)

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

Defined in: [generated/decomposition/FastICA.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L96)

### whitening\_

Only set if whiten is ‘`true`’. This is the pre-whitening matrix that projects data onto the first `n\_components` principal components.

#### Signature

```ts
whitening_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/decomposition/FastICA.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L542)

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

Defined in:  [generated/decomposition/FastICA.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L154)

### fit()

Fit the model to X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FastICA.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L171)

### fit\_transform()

Fit the model and recover the sources from X.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/FastICA.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L209)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.FastICA.fit "sklearn.decomposition.FastICA.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/FastICA.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L249)

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

Defined in:  [generated/decomposition/FastICA.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L105)

### inverse\_transform()

Transform the sources back to the mixed data (apply mixing matrix).

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Sources, where `n\_samples` is the number of samples and `n\_components` is the number of components. |
| `opts.copy?` | `boolean` | If `false`, data passed to fit are overwritten. Defaults to `true`.  `Default Value`  `true` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/FastICA.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L282)

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

Defined in:  [generated/decomposition/FastICA.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L326)

### transform()

Recover the sources from X (apply the unmixing matrix).

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Data to transform, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.copy?` | `boolean` | If `false`, data passed to fit can be overwritten. Defaults to `true`.  `Default Value`  `true` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/FastICA.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/decomposition/FastICA.ts#L359)
