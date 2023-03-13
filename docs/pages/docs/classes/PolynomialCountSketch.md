# PolynomialCountSketch

Polynomial kernel approximation via Tensor Sketch.

Implements Tensor Sketch, which approximates the feature map of the polynomial kernel:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.PolynomialCountSketch.html)

## Constructors

## constructor()

### Signature

```ts
new PolynomialCountSketch(opts?: object): PolynomialCountSketch;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.coef0?` | `number` | Constant term of the polynomial kernel whose feature map will be approximated.  `Default Value`  `0` |
| `opts.degree?` | `number` | Degree of the polynomial kernel whose feature map will be approximated.  `Default Value`  `2` |
| `opts.gamma?` | `number` | Parameter of the polynomial kernel whose feature map will be approximated.  `Default Value`  `1` |
| `opts.n_components?` | `number` | Dimensionality of the output feature space. Usually, `n\_components` should be greater than the number of features in input samples in order to achieve good performance. The optimal score / run time balance is typically achieved around `n\_components` = 10 \* `n\_features`, but this depends on the specific dataset being used.  `Default Value`  `100` |
| `opts.random_state?` | `number` | Determines random number generation for indexHash and bitHash initialization. Pass an int for reproducible results across multiple function calls. See Glossary. |

### Returns

[`PolynomialCountSketch`](PolynomialCountSketch.md)

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L23)

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

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L122)

### fit()

Fit the model with X.

Initializes the internal variables. The method needs no information about the distribution of data, so we only care about n\_features in X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L141)

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

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L185)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.kernel_approximation.PolynomialCountSketch.fit "sklearn.kernel_approximation.PolynomialCountSketch.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L239)

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

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L74)

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

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L279)

### transform()

Generate the feature map approximation for X.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | New data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L316)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L19)

### id

> `string`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L16)

### opts

> `any`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L17)

## Accessors

### bitHash\_

Array with random entries in {+1, -1}, used to represent the 2-wise independent hash functions for Count Sketch computation.

#### Signature

```ts
bitHash_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/kernel\_approximation/PolynomialCountSketch.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L380)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/kernel\_approximation/PolynomialCountSketch.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L434)

### indexHash\_

Array of indexes in range \[0, n\_components) used to represent the 2-wise independent hash functions for Count Sketch computation.

#### Signature

```ts
indexHash_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/kernel\_approximation/PolynomialCountSketch.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L353)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/kernel\_approximation/PolynomialCountSketch.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L407)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/kernel\_approximation/PolynomialCountSketch.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L61)

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

Defined in: [generated/kernel\_approximation/PolynomialCountSketch.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L65)
