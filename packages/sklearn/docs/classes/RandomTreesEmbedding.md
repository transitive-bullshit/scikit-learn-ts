# RandomTreesEmbedding

An ensemble of totally random trees.

An unsupervised transformation of a dataset to a high-dimensional sparse representation. A datapoint is coded according to which leaf of each tree it is sorted into. Using a one-hot encoding of the leaves, this leads to a binary coding with as many ones as there are trees in the forest.

The dimensionality of the resulting representation is `n\_out <= n\_estimators \* max\_leaf\_nodes`. If `max\_leaf\_nodes \== None`, the number of leaf nodes is at most `n\_estimators \* 2 \*\* max\_depth`.

Read more in the [User Guide](../ensemble.html#random-trees-embedding).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomTreesEmbedding.html)

## Constructors

## constructor()

### Signature

```ts
new RandomTreesEmbedding(opts?: RandomTreesEmbeddingOptions): RandomTreesEmbedding;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RandomTreesEmbeddingOptions`](../interfaces/RandomTreesEmbeddingOptions.md) |

### Returns

[`RandomTreesEmbedding`](RandomTreesEmbedding.md)

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L23)

### id

> `string`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L20)

### opts

> `any`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L21)

## Accessors

### estimator\_

The child estimator template used to create the collection of fitted sub-estimators.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L361)

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L361)

### estimators\_

The collection of fitted sub-estimators.

#### Signature

```ts
estimators_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L388)

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L388)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L442)

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L442)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L415)

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L415)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L469)

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L469)

### one\_hot\_encoder\_

One-hot encoder used to create the sparse embedding.

#### Signature

```ts
one_hot_encoder_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L496)

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L496)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L32)

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

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L36)

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L32) [generated/ensemble/RandomTreesEmbedding.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L36)

## Methods

### apply()

Apply trees in the forest to X, return leaf indices.

#### Signature

```ts
apply(opts: RandomTreesEmbeddingApplyOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingApplyOptions`](../interfaces/RandomTreesEmbeddingApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L122)

### decision\_path()

Return the decision path in the forest.

#### Signature

```ts
decision_path(opts: RandomTreesEmbeddingDecisionPathOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingDecisionPathOptions`](../interfaces/RandomTreesEmbeddingDecisionPathOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L152)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L105)

### fit()

Fit estimator.

#### Signature

```ts
fit(opts: RandomTreesEmbeddingFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingFitOptions`](../interfaces/RandomTreesEmbeddingFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L186)

### fit\_transform()

Fit estimator and transform dataset.

#### Signature

```ts
fit_transform(opts: RandomTreesEmbeddingFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingFitTransformOptions`](../interfaces/RandomTreesEmbeddingFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L220)

### get\_feature\_names\_out()

Get output feature names for transformation.

#### Signature

```ts
get_feature_names_out(opts: RandomTreesEmbeddingGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingGetFeatureNamesOutOptions`](../interfaces/RandomTreesEmbeddingGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L258)

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

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L45)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: RandomTreesEmbeddingSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingSetOutputOptions`](../interfaces/RandomTreesEmbeddingSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L295)

### transform()

Transform dataset.

#### Signature

```ts
transform(opts: RandomTreesEmbeddingTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomTreesEmbeddingTransformOptions`](../interfaces/RandomTreesEmbeddingTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/RandomTreesEmbedding.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/ensemble/RandomTreesEmbedding.ts#L327)
