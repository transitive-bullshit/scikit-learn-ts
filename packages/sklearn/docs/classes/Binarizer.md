# Binarizer

Binarize data (set feature values to 0 or 1) according to a threshold.

Values greater than the threshold map to 1, while values less than or equal to the threshold map to 0. With the default threshold of 0, only positive values map to 1.

Binarization is a common operation on text count data where the analyst can decide to only consider the presence or absence of a feature rather than a quantified number of occurrences for instance.

It can also be used as a pre-processing step for estimators that consider boolean random variables (e.g. modelled using the Bernoulli distribution in a Bayesian setting).

Read more in the [User Guide](../preprocessing.html#preprocessing-binarization).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.Binarizer.html)

## Constructors

## constructor()

### Signature

```ts
new Binarizer(opts?: object): Binarizer;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.copy?` | `boolean` | Set to `false` to perform inplace binarization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix).  `Default Value`  `true` |
| `opts.threshold?` | `number` | Feature values below or equal to this are replaced by 0, above it by 1. Threshold may not be less than 0 for operations on sparse matrices.  `Default Value`  `0` |

### Returns

[`Binarizer`](Binarizer.md)

Defined in:  [generated/preprocessing/Binarizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/Binarizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/Binarizer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/Binarizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L25)

### id

> `string`

Defined in:  [generated/preprocessing/Binarizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L22)

### opts

> `any`

Defined in:  [generated/preprocessing/Binarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L23)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/Binarizer.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L342)

Defined in:  [generated/preprocessing/Binarizer.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L342)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/preprocessing/Binarizer.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L317)

Defined in:  [generated/preprocessing/Binarizer.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L317)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/Binarizer.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L48)

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

Defined in:  [generated/preprocessing/Binarizer.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L52)

Defined in:  [generated/preprocessing/Binarizer.ts:48](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L48) [generated/preprocessing/Binarizer.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L52)

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

Defined in:  [generated/preprocessing/Binarizer.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L100)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data. |
| `opts.y?` | `any` | Ignored. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/Binarizer.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L119)

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

Defined in:  [generated/preprocessing/Binarizer.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L159)

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

Defined in:  [generated/preprocessing/Binarizer.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L206)

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

Defined in:  [generated/preprocessing/Binarizer.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L61)

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

Defined in:  [generated/preprocessing/Binarizer.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L244)

### transform()

Binarize each element of X.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data to binarize, element by element. scipy.sparse matrices should be in CSR format to avoid an un-necessary copy. |
| `opts.copy?` | `boolean` | Copy the input X or not. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/Binarizer.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L277)
