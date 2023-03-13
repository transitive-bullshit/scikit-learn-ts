# PolynomialFeatures

Generate polynomial and interaction features.

Generate a new feature matrix consisting of all polynomial combinations of the features with degree less than or equal to the specified degree. For example, if an input sample is two dimensional and of the form \[a, b\], the degree-2 polynomial features are \[1, a, b, a^2, ab, b^2\].

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html)

## Constructors

## constructor()

### Signature

```ts
new PolynomialFeatures(opts?: object): PolynomialFeatures;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.degree?` | `number` | If a single int is given, it specifies the maximal degree of the polynomial features. If a tuple `(min\_degree, max\_degree)` is passed, then `min\_degree` is the minimum and `max\_degree` is the maximum polynomial degree of the generated features. Note that `min\_degree=0` and `min\_degree=1` are equivalent as outputting the degree zero term is determined by `include\_bias`.  `Default Value`  `2` |
| `opts.include_bias?` | `boolean` | If `true` (default), then include a bias column, the feature in which all polynomial powers are zero (i.e. a column of ones - acts as an intercept term in a linear model).  `Default Value`  `true` |
| `opts.interaction_only?` | `boolean` | If `true`, only interaction features are produced: features that are products of at most `degree` *distinct* input features, i.e. terms with power of 2 or higher of the same input feature are excluded:  `Default Value`  `false` |
| `opts.order?` | `"C"` \| `"F"` | Order of output array in the dense case. `'F'` order is faster to compute, but may slow down subsequent estimators.  `Default Value`  `'C'` |

### Returns

[`PolynomialFeatures`](PolynomialFeatures.md)

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L25)

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

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L119)

### fit()

Compute number of output features.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L136)

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

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L178)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Input features. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L229)

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

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:71](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L71)

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

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L269)

### transform()

Transform data to polynomial features.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data to transform, row by row.  Prefer CSR over CSC for sparse input (for speed), but CSC is required if the degree is 4 or higher. If the degree is less than 4 and the input format is CSC, it will be converted to CSR, have its polynomial features generated, then converted back to CSC.  If the degree is 2 or 3, the method described in “Leveraging Sparsity to Speed Up Polynomial Feature Expansions of CSR Matrices Using K-Simplex Numbers” by Andrew Nystrom and John Hughes is used, which is much faster than the method used on CSC input. For this reason, a CSC input will be converted to CSR, and the output will be converted back to CSC prior to being returned, hence the preference of CSR. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L304)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L21)

### id

> `string`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L18)

### opts

> `any`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/preprocessing/PolynomialFeatures.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L370)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/PolynomialFeatures.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L343)

### n\_output\_features\_

The total number of polynomial output features. The number of output features is computed by iterating over all suitably sized combinations of input features.

#### Signature

```ts
n_output_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/PolynomialFeatures.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L397)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/PolynomialFeatures.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L58)

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

Defined in: [generated/preprocessing/PolynomialFeatures.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L62)
