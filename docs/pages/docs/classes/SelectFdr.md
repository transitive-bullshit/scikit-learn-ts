# SelectFdr

Filter: Select the p-values for an estimated false discovery rate.

This uses the Benjamini-Hochberg procedure. `alpha` is an upper bound on the expected false discovery rate.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFdr.html)

## Constructors

## constructor()

### Signature

```ts
new SelectFdr(opts?: SelectFdrOptions): SelectFdr;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `SelectFdrOptions` |

### Returns

[`SelectFdr`](SelectFdr.md)

Defined in:  [generated/feature\_selection/SelectFdr.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectFdr.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectFdr.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/SelectFdr.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_selection/SelectFdr.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_selection/SelectFdr.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectFdr.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L383)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/SelectFdr.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L358)

### pvalues\_

p-values of feature scores.

#### Signature

```ts
pvalues_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectFdr.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L335)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/SelectFdr.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L30)

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

Defined in: [generated/feature\_selection/SelectFdr.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L34)

### scores\_

Scores of features.

#### Signature

```ts
scores_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectFdr.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L312)

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

Defined in:  [generated/feature\_selection/SelectFdr.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L82)

### fit()

Run score function on (X, y) and get the appropriate features.

#### Signature

```ts
fit(opts: SelectFdrFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFdrFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFdr.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L99)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SelectFdrFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFdrFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/SelectFdr.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L131)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: SelectFdrGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFdrGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFdr.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L163)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: SelectFdrGetSupportOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFdrGetSupportOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFdr.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L196)

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

Defined in:  [generated/feature\_selection/SelectFdr.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L43)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: SelectFdrInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFdrInverseTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFdr.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L224)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: SelectFdrSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFdrSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFdr.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L256)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: SelectFdrTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFdrTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFdr.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L284)