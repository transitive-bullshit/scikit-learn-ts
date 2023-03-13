# LatentDirichletAllocation

Latent Dirichlet Allocation with online variational Bayes algorithm.

The implementation is based on [\[1\]](#re25e5648fc37-1) and [\[2\]](#re25e5648fc37-2).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.LatentDirichletAllocation.html)

## Constructors

## constructor()

### Signature

```ts
new LatentDirichletAllocation(opts?: object): LatentDirichletAllocation;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.batch_size?` | `number` | Number of documents to use in each EM iteration. Only used in online learning.  `Default Value`  `128` |
| `opts.doc_topic_prior?` | `number` | Prior of document topic distribution `theta`. If the value is `undefined`, defaults to `1 / n\_components`. In [\[1\]](#re25e5648fc37-1), this is called `alpha`. |
| `opts.evaluate_every?` | `number` | How often to evaluate perplexity. Only used in `fit` method. set it to 0 or negative number to not evaluate perplexity in training at all. Evaluating perplexity can help you check convergence in training process, but it will also increase total training time. Evaluating perplexity in every iteration might increase training time up to two-fold.  `Default Value`  `-1` |
| `opts.learning_decay?` | `number` | It is a parameter that control learning rate in the online learning method. The value should be set between (0.5, 1.0\] to guarantee asymptotic convergence. When the value is 0.0 and batch\_size is `n\_samples`, the update method is same as batch learning. In the literature, this is called kappa.  `Default Value`  `0.7` |
| `opts.learning_method?` | `"batch"` \| `"online"` | Method used to update `\_component`. Only used in [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method. In general, if the data size is large, the online update will be much faster than the batch update.  Valid options:  `Default Value`  `'batch'` |
| `opts.learning_offset?` | `number` | A (positive) parameter that downweights early iterations in online learning. It should be greater than 1.0. In the literature, this is called tau\_0.  `Default Value`  `10` |
| `opts.max_doc_update_iter?` | `number` | Max number of iterations for updating document topic distribution in the E-step.  `Default Value`  `100` |
| `opts.max_iter?` | `number` | The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method, and not the [`partial\_fit`](#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.  `Default Value`  `10` |
| `opts.mean_change_tol?` | `number` | Stopping tolerance for updating document topic distribution in E-step.  `Default Value`  `0.001` |
| `opts.n_components?` | `number` | Number of topics.  `Default Value`  `10` |
| `opts.n_jobs?` | `number` | The number of jobs to use in the E-step. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.perp_tol?` | `number` | Perplexity tolerance in batch learning. Only used when `evaluate\_every` is greater than 0.  `Default Value`  `0.1` |
| `opts.random_state?` | `number` | Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.topic_word_prior?` | `number` | Prior of topic word distribution `beta`. If the value is `undefined`, defaults to `1 / n\_components`. In [\[1\]](#re25e5648fc37-1), this is called `eta`. |
| `opts.total_samples?` | `number` | Total number of documents. Only used in the [`partial\_fit`](#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.  `Default Value`  `1000000` |
| `opts.verbose?` | `number` | Verbosity level.  `Default Value`  `0` |

### Returns

[`LatentDirichletAllocation`](LatentDirichletAllocation.md)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L19)

### id

> `string`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L16)

### opts

> `any`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L17)

## Accessors

### bound\_

Final perplexity score on training set.

#### Signature

```ts
bound_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:738](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L738)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:738](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L738)

### components\_

Variational parameters for topic word distribution. Since the complete conditional for topic word distribution is a Dirichlet, `components\_\[i, j\]` can be viewed as pseudocount that represents the number of times word `j` was assigned to topic `i`. It can also be viewed as distribution over the words for each topic after normalization: `model.components\_ / model.components\_.sum(axis=1)\[:, np.newaxis\]`.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L576)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L576)

### doc\_topic\_prior\_

Prior of document topic distribution `theta`. If the value is `undefined`, it is `1 / n\_components`.

#### Signature

```ts
doc_topic_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:765](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L765)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:765](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L765)

### exp\_dirichlet\_component\_

Exponential value of expectation of log topic word distribution. In the literature, this is `exp(E\[log(beta)\])`.

#### Signature

```ts
exp_dirichlet_component_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L603)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L603)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L684)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L684)

### n\_batch\_iter\_

Number of iterations of the EM step.

#### Signature

```ts
n_batch_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:630](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L630)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:630](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L630)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:657](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L657)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:657](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L657)

### n\_iter\_

Number of passes over the dataset.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:711](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L711)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:711](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L711)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L134)

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

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L138)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L134) [generated/decomposition/LatentDirichletAllocation.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L138)

### random\_state\_

RandomState instance that is generated either from a seed, the random number generator or by `np.random`.

#### Signature

```ts
random_state_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:792](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L792)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:792](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L792)

### topic\_word\_prior\_

Prior of topic word distribution `beta`. If the value is `undefined`, it is `1 / n\_components`.

#### Signature

```ts
topic_word_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:819](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L819)

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:819](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L819)

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

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L213)

### fit()

Learn model for the data X with variational Bayes method.

When `learning\_method` is ‘online’, use mini-batch update. Otherwise, use batch update.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Document word matrix. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L232)

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

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L274)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L328)

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

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L147)

### partial\_fit()

Online VB with Mini-Batch update.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Document word matrix. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L366)

### perplexity()

Calculate approximate perplexity for data X.

Perplexity is defined as exp(-1. \* log-likelihood per word)

#### Signature

```ts
perplexity(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Document word matrix. |
| `opts.sub_sampling?` | `boolean` | Do sub-sampling or not. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L411)

### score()

Calculate approximate log-likelihood as score.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Document word matrix. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L456)

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

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L500)

### transform()

Transform data X according to the fitted model.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Document word matrix. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/decomposition/LatentDirichletAllocation.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L538)
