# LatentDirichletAllocation

Latent Dirichlet Allocation with online variational Bayes algorithm.

The implementation is based on [\[1\]](#re25e5648fc37-1) and [\[2\]](#re25e5648fc37-2).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.LatentDirichletAllocation.html)

## Constructors

## constructor()

### Signature

```ts
new LatentDirichletAllocation(opts?: LatentDirichletAllocationOptions): LatentDirichletAllocation;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LatentDirichletAllocationOptions`](../interfaces/LatentDirichletAllocationOptions.md) |

### Returns

[`LatentDirichletAllocation`](LatentDirichletAllocation.md)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L19)

### id

> `string`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L16)

### opts

> `any`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L17)

## Accessors

### bound\_

Final perplexity score on training set.

#### Signature

```ts
bound_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L574)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L574)

### components\_

Variational parameters for topic word distribution. Since the complete conditional for topic word distribution is a Dirichlet, `components\_\[i, j\]` can be viewed as pseudocount that represents the number of times word `j` was assigned to topic `i`. It can also be viewed as distribution over the words for each topic after normalization: `model.components\_ / model.components\_.sum(axis=1)\[:, np.newaxis\]`.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L412)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L412)

### doc\_topic\_prior\_

Prior of document topic distribution `theta`. If the value is `undefined`, it is `1 / n\_components`.

#### Signature

```ts
doc_topic_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L601)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L601)

### exp\_dirichlet\_component\_

Exponential value of expectation of log topic word distribution. In the literature, this is `exp(E\[log(beta)\])`.

#### Signature

```ts
exp_dirichlet_component_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L439)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L439)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L520)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L520)

### n\_batch\_iter\_

Number of iterations of the EM step.

#### Signature

```ts
n_batch_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L466)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L466)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L493)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L493)

### n\_iter\_

Number of passes over the dataset.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L547)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L547)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L28)

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

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L32)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L28) [generated/decomposition/LatentDirichletAllocation.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L32)

### random\_state\_

RandomState instance that is generated either from a seed, the random number generator or by `np.random`.

#### Signature

```ts
random_state_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L628)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L628)

### topic\_word\_prior\_

Prior of topic word distribution `beta`. If the value is `undefined`, it is `1 / n\_components`.

#### Signature

```ts
topic_word_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L655)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:655](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L655)

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

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L107)

### fit()

Learn model for the data X with variational Bayes method.

When `learning\_method` is ‘online’, use mini-batch update. Otherwise, use batch update.

#### Signature

```ts
fit(opts: LatentDirichletAllocationFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationFitOptions`](../interfaces/LatentDirichletAllocationFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L126)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: LatentDirichletAllocationFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationFitTransformOptions`](../interfaces/LatentDirichletAllocationFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L158)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: LatentDirichletAllocationGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationGetFeatureNamesOutOptions`](../interfaces/LatentDirichletAllocationGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L199)

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

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L41)

### partial\_fit()

Online VB with Mini-Batch update.

#### Signature

```ts
partial_fit(opts: LatentDirichletAllocationPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationPartialFitOptions`](../interfaces/LatentDirichletAllocationPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L234)

### perplexity()

Calculate approximate perplexity for data X.

Perplexity is defined as exp(-1. \* log-likelihood per word)

#### Signature

```ts
perplexity(opts: LatentDirichletAllocationPerplexityOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationPerplexityOptions`](../interfaces/LatentDirichletAllocationPerplexityOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L271)

### score()

Calculate approximate log-likelihood as score.

#### Signature

```ts
score(opts: LatentDirichletAllocationScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationScoreOptions`](../interfaces/LatentDirichletAllocationScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L308)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: LatentDirichletAllocationSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationSetOutputOptions`](../interfaces/LatentDirichletAllocationSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L342)

### transform()

Transform data X according to the fitted model.

#### Signature

```ts
transform(opts: LatentDirichletAllocationTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LatentDirichletAllocationTransformOptions`](../interfaces/LatentDirichletAllocationTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L377)
