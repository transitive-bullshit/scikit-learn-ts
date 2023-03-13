# GenericUnivariateSelect

Univariate feature selector with configurable strategy.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.GenericUnivariateSelect.html)

## Constructors

## constructor()

### Signature

```ts
new GenericUnivariateSelect(opts?: GenericUnivariateSelectOptions): GenericUnivariateSelect;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `GenericUnivariateSelectOptions` |

### Returns

[`GenericUnivariateSelect`](GenericUnivariateSelect.md)

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L19)

### id

> `string`

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L16)

### opts

> `any`

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/GenericUnivariateSelect.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L430)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/GenericUnivariateSelect.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L403)

### pvalues\_

p-values of feature scores, `undefined` if `score\_func` returned scores only.

#### Signature

```ts
pvalues_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/GenericUnivariateSelect.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L376)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L28)

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

Defined in: [generated/feature\_selection/GenericUnivariateSelect.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L32)

### scores\_

Scores of features.

#### Signature

```ts
scores_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/GenericUnivariateSelect.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L349)

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

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L87)

### fit()

Run score function on (X, y) and get the appropriate features.

#### Signature

```ts
fit(opts: GenericUnivariateSelectFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GenericUnivariateSelectFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L104)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: GenericUnivariateSelectFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GenericUnivariateSelectFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L138)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: GenericUnivariateSelectGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GenericUnivariateSelectGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L177)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: GenericUnivariateSelectGetSupportOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GenericUnivariateSelectGetSupportOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L212)

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

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L41)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: GenericUnivariateSelectInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GenericUnivariateSelectInverseTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L246)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: GenericUnivariateSelectSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GenericUnivariateSelectSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L283)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: GenericUnivariateSelectTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `GenericUnivariateSelectTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/GenericUnivariateSelect.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/GenericUnivariateSelect.ts#L317)
