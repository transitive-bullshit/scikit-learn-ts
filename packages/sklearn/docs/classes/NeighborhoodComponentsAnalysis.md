# NeighborhoodComponentsAnalysis

Neighborhood Components Analysis.

Neighborhood Component Analysis (NCA) is a machine learning algorithm for metric learning. It learns a linear transformation in a supervised fashion to improve the classification accuracy of a stochastic nearest neighbors rule in the transformed space.

Read more in the [User Guide](../neighbors.html#nca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html)

## Constructors

## constructor()

### Signature

```ts
new NeighborhoodComponentsAnalysis(opts?: NeighborhoodComponentsAnalysisOptions): NeighborhoodComponentsAnalysis;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NeighborhoodComponentsAnalysisOptions`](../interfaces/NeighborhoodComponentsAnalysisOptions.md) |

### Returns

[`NeighborhoodComponentsAnalysis`](NeighborhoodComponentsAnalysis.md)

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L19)

## Accessors

### components\_

The linear transformation learned during fitting.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L298)

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L298)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L406)

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L406)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L325)

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L325)

### n\_iter\_

Counts the number of iterations performed by the optimizer.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L352)

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L352)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L32)

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

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L36)

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L32) [generated/neighbors/NeighborhoodComponentsAnalysis.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L36)

### random\_state\_

Pseudo random number generator object used during initialization.

#### Signature

```ts
random_state_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L379)

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L379)

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

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L97)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: NeighborhoodComponentsAnalysisFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisFitOptions`](../interfaces/NeighborhoodComponentsAnalysisFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L114)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: NeighborhoodComponentsAnalysisFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisFitTransformOptions`](../interfaces/NeighborhoodComponentsAnalysisFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L150)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: NeighborhoodComponentsAnalysisGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisGetFeatureNamesOutOptions`](../interfaces/NeighborhoodComponentsAnalysisGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L191)

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

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L45)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: NeighborhoodComponentsAnalysisSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisSetOutputOptions`](../interfaces/NeighborhoodComponentsAnalysisSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L228)

### transform()

Apply the learned transformation to the given data.

#### Signature

```ts
transform(opts: NeighborhoodComponentsAnalysisTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NeighborhoodComponentsAnalysisTransformOptions`](../interfaces/NeighborhoodComponentsAnalysisTransformOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L263)
