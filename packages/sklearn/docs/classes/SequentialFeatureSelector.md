# SequentialFeatureSelector

Transformer that performs Sequential Feature Selection.

This Sequential Feature Selector adds (forward selection) or removes (backward selection) features to form a feature subset in a greedy fashion. At each stage, this estimator chooses the best feature to add or remove based on the cross-validation score of an estimator. In the case of unsupervised learning, this Sequential Feature Selector looks only at the features (X), not the desired outputs (y).

Read more in the [User Guide](../feature_selection.html#sequential-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SequentialFeatureSelector.html)

## Constructors

## constructor()

### Signature

```ts
new SequentialFeatureSelector(opts?: SequentialFeatureSelectorOptions): SequentialFeatureSelector;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SequentialFeatureSelectorOptions`](../interfaces/SequentialFeatureSelectorOptions.md) |

### Returns

[`SequentialFeatureSelector`](SequentialFeatureSelector.md)

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L19)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L386)

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L386)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L359)

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L359)

### n\_features\_to\_select\_

The number of features that were selected.

#### Signature

```ts
n_features_to_select_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L413)

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L413)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L30)

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

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L34)

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L30) [generated/feature\_selection/SequentialFeatureSelector.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L34)

### support\_

The mask of selected features.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L440)

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L440)

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

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L93)

### fit()

Learn the features to select from X.

#### Signature

```ts
fit(opts: SequentialFeatureSelectorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorFitOptions`](../interfaces/SequentialFeatureSelectorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L110)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SequentialFeatureSelectorFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorFitTransformOptions`](../interfaces/SequentialFeatureSelectorFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L144)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: SequentialFeatureSelectorGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorGetFeatureNamesOutOptions`](../interfaces/SequentialFeatureSelectorGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L183)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: SequentialFeatureSelectorGetSupportOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorGetSupportOptions`](../interfaces/SequentialFeatureSelectorGetSupportOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L218)

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

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L43)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: SequentialFeatureSelectorInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorInverseTransformOptions`](../interfaces/SequentialFeatureSelectorInverseTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L252)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: SequentialFeatureSelectorSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorSetOutputOptions`](../interfaces/SequentialFeatureSelectorSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L289)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: SequentialFeatureSelectorTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SequentialFeatureSelectorTransformOptions`](../interfaces/SequentialFeatureSelectorTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SequentialFeatureSelector.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_selection/SequentialFeatureSelector.ts#L324)
