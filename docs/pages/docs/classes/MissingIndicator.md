# MissingIndicator

Binary indicators for missing values.

Note that this component typically should not be used in a vanilla `Pipeline` consisting of transformers and a classifier, but rather could be added using a `FeatureUnion` or `ColumnTransformer`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.MissingIndicator.html)

## Constructors

## constructor()

### Signature

```ts
new MissingIndicator(opts?: object): MissingIndicator;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.error_on_new?` | `boolean` | If `true`, [`transform`](#sklearn.impute.MissingIndicator.transform "sklearn.impute.MissingIndicator.transform") will raise an error when there are features with missing values that have no missing values in [`fit`](#sklearn.impute.MissingIndicator.fit "sklearn.impute.MissingIndicator.fit"). This is applicable only when `features='missing-only'`.  `Default Value`  `true` |
| `opts.features?` | `"all"` \| `"missing-only"` | Whether the imputer mask should represent all or a subset of features.  `Default Value`  `'missing-only'` |
| `opts.missing_values?` | `string` \| `number` | The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` should be set to `np.nan`, since `pd.NA` will be converted to `np.nan`. |
| `opts.sparse?` | `boolean` \| `"auto"` | Whether the imputer mask format should be sparse or dense.  `Default Value`  `'auto'` |

### Returns

[`MissingIndicator`](MissingIndicator.md)

Defined in:  [generated/impute/MissingIndicator.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/impute/MissingIndicator.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/impute/MissingIndicator.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/impute/MissingIndicator.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L21)

### id

> `string`

Defined in:  [generated/impute/MissingIndicator.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L18)

### opts

> `any`

Defined in:  [generated/impute/MissingIndicator.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/impute/MissingIndicator.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L376)

### features\_

The features indices which will be returned when calling [`transform`](#sklearn.impute.MissingIndicator.transform "sklearn.impute.MissingIndicator.transform"). They are computed during [`fit`](#sklearn.impute.MissingIndicator.fit "sklearn.impute.MissingIndicator.fit"). If `features='all'`, `features\_` is equal to `range(n\_features)`.

#### Signature

```ts
features_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/impute/MissingIndicator.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L322)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/impute/MissingIndicator.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L349)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/impute/MissingIndicator.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L56)

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

Defined in: [generated/impute/MissingIndicator.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L60)

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

Defined in:  [generated/impute/MissingIndicator.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L113)

### fit()

Fit the transformer on `X`.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/MissingIndicator.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L130)

### fit\_transform()

Generate missing values indicator for `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data to complete. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/impute/MissingIndicator.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L170)

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

Defined in:  [generated/impute/MissingIndicator.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L212)

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

Defined in:  [generated/impute/MissingIndicator.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L69)

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

Defined in:  [generated/impute/MissingIndicator.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L252)

### transform()

Generate missing values indicator for `X`.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input data to complete. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/impute/MissingIndicator.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/impute/MissingIndicator.ts#L287)
