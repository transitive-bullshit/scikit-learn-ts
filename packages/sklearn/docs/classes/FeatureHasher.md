# FeatureHasher

Implements feature hashing, aka the hashing trick.

This class turns sequences of symbolic feature names (strings) into scipy.sparse matrices, using a hash function to compute the matrix column corresponding to a name. The hash function employed is the signed 32-bit version of Murmurhash3.

Feature names of type byte string are used as-is. Unicode strings are converted to UTF-8 first, but no Unicode normalization is done. Feature values must be (finite) numbers.

This class is a low-memory alternative to DictVectorizer and CountVectorizer, intended for large-scale (online) learning and situations where memory is tight, e.g. when running prediction code on embedded devices.

Read more in the [User Guide](../feature_extraction.html#feature-hashing).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.FeatureHasher.html)

## Constructors

## constructor()

### Signature

```ts
new FeatureHasher(opts?: object): FeatureHasher;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alternate_sign?` | `boolean` | When `true`, an alternating sign is added to the features as to approximately conserve the inner product in the hashed space even for small n\_features. This approach is similar to sparse random projection.  `Default Value`  `true` |
| `opts.dtype?` | `any` | The type of feature values. Passed to scipy.sparse matrix constructors as the dtype argument. Do not set this to bool, np.boolean or any unsigned integer type. |
| `opts.input_type?` | `string` | Choose a string from {‘dict’, ‘pair’, ‘string’}. Either “dict” (the default) to accept dictionaries over (feature\_name, value); “pair” to accept pairs of (feature\_name, value); or “string” to accept single strings. feature\_name should be a string, while value should be a number. In the case of “string”, a value of 1 is implied. The feature\_name is hashed to find the appropriate column for the feature. The value’s sign might be flipped in the output (but see non\_negative, below).  `Default Value`  `'dict'` |
| `opts.n_features?` | `number` | The number of features (columns) in the output matrices. Small numbers of features are likely to cause hash collisions, but large numbers will cause larger coefficient dimensions in linear learners.  `Default Value`  `2` |

### Returns

[`FeatureHasher`](FeatureHasher.md)

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L25)

### id

> `string`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L22)

### opts

> `any`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L23)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L60)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L64)

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L60) [generated/feature\_extraction/FeatureHasher.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L64)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L115)

### fit()

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Not used, present here for API consistency by convention. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L134)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L174)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:73](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L73)

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

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L223)

### transform()

Transform a sequence of instances to a scipy.sparse matrix.

#### Signature

```ts
transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.raw_X?` | `any` | Samples. Each sample must be iterable an (e.g., a list or tuple) containing/generating feature names (and optionally values, see the input\_type constructor argument) which will be hashed. raw\_X need not support the len function, so it can be the result of a generator; n\_samples is determined on the fly. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_extraction/FeatureHasher.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/feature_extraction/FeatureHasher.ts#L256)
