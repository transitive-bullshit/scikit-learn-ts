# SparseCoder

Sparse coding.

Finds a sparse representation of data against a fixed, precomputed dictionary.

Each row of the result is the solution to a sparse coding problem. The goal is to find a sparse array `code` such that:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.SparseCoder.html)

## Constructors

## constructor()

### Signature

```ts
new SparseCoder(opts?: SparseCoderOptions): SparseCoder;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `SparseCoderOptions` |

### Returns

[`SparseCoder`](SparseCoder.md)

Defined in:  [generated/decomposition/SparseCoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/SparseCoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/SparseCoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/SparseCoder.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L21)

### id

> `string`

Defined in:  [generated/decomposition/SparseCoder.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L18)

### opts

> `any`

Defined in:  [generated/decomposition/SparseCoder.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/decomposition/SparseCoder.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L271)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/SparseCoder.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L30)

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

Defined in: [generated/decomposition/SparseCoder.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L34)

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

Defined in:  [generated/decomposition/SparseCoder.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L95)

### fit()

Do nothing and return the estimator unchanged.

This method is just there to implement the usual API and hence work in pipelines.

#### Signature

```ts
fit(opts: SparseCoderFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SparseCoderFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/SparseCoder.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L114)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SparseCoderFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SparseCoderFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/SparseCoder.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L144)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: SparseCoderGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SparseCoderGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/SparseCoder.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L178)

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

Defined in:  [generated/decomposition/SparseCoder.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L43)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: SparseCoderSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SparseCoderSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/SparseCoder.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L213)

### transform()

Encode the data as a sparse combination of the dictionary atoms.

Coding method is determined by the object parameter `transform\_algorithm`.

#### Signature

```ts
transform(opts: SparseCoderTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SparseCoderTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/decomposition/SparseCoder.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L243)
