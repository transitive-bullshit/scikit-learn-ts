# MissingIndicator

Binary indicators for missing values.

Note that this component typically should not be used in a vanilla `Pipeline` consisting of transformers and a classifier, but rather could be added using a `FeatureUnion` or `ColumnTransformer`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.MissingIndicator.html)

## Constructors

## constructor()

### Signature

```ts
new MissingIndicator(opts?: MissingIndicatorOptions): MissingIndicator;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `MissingIndicatorOptions` |

### Returns

[`MissingIndicator`](MissingIndicator.md)

Defined in:  [generated/impute/MissingIndicator.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/impute/MissingIndicator.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/impute/MissingIndicator.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/impute/MissingIndicator.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L21)

### id

> `string`

Defined in:  [generated/impute/MissingIndicator.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L18)

### opts

> `any`

Defined in:  [generated/impute/MissingIndicator.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/impute/MissingIndicator.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L321)

### features\_

The features indices which will be returned when calling [`transform`](#sklearn.impute.MissingIndicator.transform "sklearn.impute.MissingIndicator.transform"). They are computed during [`fit`](#sklearn.impute.MissingIndicator.fit "sklearn.impute.MissingIndicator.fit"). If `features='all'`, `features\_` is equal to `range(n\_features)`.

#### Signature

```ts
features_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/impute/MissingIndicator.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L267)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/impute/MissingIndicator.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L294)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/impute/MissingIndicator.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L30)

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

Defined in: [generated/impute/MissingIndicator.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L34)

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

Defined in:  [generated/impute/MissingIndicator.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L87)

### fit()

Fit the transformer on `X`.

#### Signature

```ts
fit(opts: MissingIndicatorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MissingIndicatorFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/MissingIndicator.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L104)

### fit\_transform()

Generate missing values indicator for `X`.

#### Signature

```ts
fit_transform(opts: MissingIndicatorFitTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MissingIndicatorFitTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/impute/MissingIndicator.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L134)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: MissingIndicatorGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MissingIndicatorGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/MissingIndicator.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L168)

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

Defined in:  [generated/impute/MissingIndicator.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L43)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: MissingIndicatorSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MissingIndicatorSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/impute/MissingIndicator.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L205)

### transform()

Generate missing values indicator for `X`.

#### Signature

```ts
transform(opts: MissingIndicatorTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MissingIndicatorTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/impute/MissingIndicator.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/impute/MissingIndicator.ts#L235)
