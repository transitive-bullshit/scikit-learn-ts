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
new Binarizer(opts?: BinarizerOptions): Binarizer;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BinarizerOptions`](../interfaces/BinarizerOptions.md) |

### Returns

[`Binarizer`](Binarizer.md)

Defined in:  [generated/preprocessing/Binarizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/preprocessing/Binarizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/preprocessing/Binarizer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/preprocessing/Binarizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L25)

### id

> `string`

Defined in:  [generated/preprocessing/Binarizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L22)

### opts

> `any`

Defined in:  [generated/preprocessing/Binarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L23)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/preprocessing/Binarizer.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L287)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/preprocessing/Binarizer.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L262)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/preprocessing/Binarizer.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L34)

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

Defined in: [generated/preprocessing/Binarizer.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L38)

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

Defined in:  [generated/preprocessing/Binarizer.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L86)

### fit()

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

#### Signature

```ts
fit(opts: BinarizerFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerFitOptions`](../interfaces/BinarizerFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/Binarizer.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L105)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: BinarizerFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerFitTransformOptions`](../interfaces/BinarizerFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/preprocessing/Binarizer.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L135)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: BinarizerGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerGetFeatureNamesOutOptions`](../interfaces/BinarizerGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/Binarizer.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L167)

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

Defined in:  [generated/preprocessing/Binarizer.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L47)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: BinarizerSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerSetOutputOptions`](../interfaces/BinarizerSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/preprocessing/Binarizer.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L202)

### transform()

Binarize each element of X.

#### Signature

```ts
transform(opts: BinarizerTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BinarizerTransformOptions`](../interfaces/BinarizerTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/preprocessing/Binarizer.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/preprocessing/Binarizer.ts#L230)
