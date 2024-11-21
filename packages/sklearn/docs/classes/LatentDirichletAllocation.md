# Class: LatentDirichletAllocation

Latent Dirichlet Allocation with online variational Bayes algorithm.

The implementation is based on [\[1\]](https://scikit-learn.org/stable/modules/generated/#re25e5648fc37-1) and [\[2\]](https://scikit-learn.org/stable/modules/generated/#re25e5648fc37-2).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.LatentDirichletAllocation.html)

## Constructors

### new LatentDirichletAllocation()

> **new LatentDirichletAllocation**(`opts`?): [`LatentDirichletAllocation`](LatentDirichletAllocation.md)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.batch_size`?

</td>
<td>

`number`

</td>
<td>

Number of documents to use in each EM iteration. Only used in online learning.

</td>
</tr>
<tr>
<td>

`opts.doc_topic_prior`?

</td>
<td>

`number`

</td>
<td>

Prior of document topic distribution `theta`. If the value is `undefined`, defaults to `1 / n_components`. In [\[1\]](https://scikit-learn.org/stable/modules/generated/#re25e5648fc37-1), this is called `alpha`.

</td>
</tr>
<tr>
<td>

`opts.evaluate_every`?

</td>
<td>

`number`

</td>
<td>

How often to evaluate perplexity. Only used in `fit` method. set it to 0 or negative number to not evaluate perplexity in training at all. Evaluating perplexity can help you check convergence in training process, but it will also increase total training time. Evaluating perplexity in every iteration might increase training time up to two-fold.

</td>
</tr>
<tr>
<td>

`opts.learning_decay`?

</td>
<td>

`number`

</td>
<td>

It is a parameter that control learning rate in the online learning method. The value should be set between (0.5, 1.0\] to guarantee asymptotic convergence. When the value is 0.0 and batch_size is `n_samples`, the update method is same as batch learning. In the literature, this is called kappa.

</td>
</tr>
<tr>
<td>

`opts.learning_method`?

</td>
<td>

`"batch"` \| `"online"`

</td>
<td>

Method used to update `_component`. Only used in [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method. In general, if the data size is large, the online update will be much faster than the batch update.

Valid options:

</td>
</tr>
<tr>
<td>

`opts.learning_offset`?

</td>
<td>

`number`

</td>
<td>

A (positive) parameter that downweights early iterations in online learning. It should be greater than 1.0. In the literature, this is called tau_0.

</td>
</tr>
<tr>
<td>

`opts.max_doc_update_iter`?

</td>
<td>

`number`

</td>
<td>

Max number of iterations for updating document topic distribution in the E-step.

</td>
</tr>
<tr>
<td>

`opts.max_iter`?

</td>
<td>

`number`

</td>
<td>

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method, and not the [`partial_fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.

</td>
</tr>
<tr>
<td>

`opts.mean_change_tol`?

</td>
<td>

`number`

</td>
<td>

Stopping tolerance for updating document topic distribution in E-step.

</td>
</tr>
<tr>
<td>

`opts.n_components`?

</td>
<td>

`number`

</td>
<td>

Number of topics.

</td>
</tr>
<tr>
<td>

`opts.n_jobs`?

</td>
<td>

`number`

</td>
<td>

The number of jobs to use in the E-step. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.

</td>
</tr>
<tr>
<td>

`opts.perp_tol`?

</td>
<td>

`number`

</td>
<td>

Perplexity tolerance. Only used when `evaluate_every` is greater than 0.

</td>
</tr>
<tr>
<td>

`opts.random_state`?

</td>
<td>

`number`

</td>
<td>

Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

</td>
</tr>
<tr>
<td>

`opts.topic_word_prior`?

</td>
<td>

`number`

</td>
<td>

Prior of topic word distribution `beta`. If the value is `undefined`, defaults to `1 / n_components`. In [\[1\]](https://scikit-learn.org/stable/modules/generated/#re25e5648fc37-1), this is called `eta`.

</td>
</tr>
<tr>
<td>

`opts.total_samples`?

</td>
<td>

`number`

</td>
<td>

Total number of documents. Only used in the [`partial_fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.

</td>
</tr>
<tr>
<td>

`opts.verbose`?

</td>
<td>

`number`

</td>
<td>

Verbosity level.

</td>
</tr>
</tbody>
</table>

#### Returns

[`LatentDirichletAllocation`](LatentDirichletAllocation.md)

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/decomposition/LatentDirichletAllocation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/decomposition/LatentDirichletAllocation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/decomposition/LatentDirichletAllocation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L19) |
| `id` | `string` | `undefined` | [generated/decomposition/LatentDirichletAllocation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L16) |
| `opts` | `any` | `undefined` | [generated/decomposition/LatentDirichletAllocation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L17) |

## Accessors

### bound\_

#### Get Signature

> **get** **bound\_**(): `Promise`\<`number`\>

Final perplexity score on training set.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:733](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L733)

***

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Variational parameters for topic word distribution. Since the complete conditional for topic word distribution is a Dirichlet, `components_\[i, j\]` can be viewed as pseudocount that represents the number of times word `j` was assigned to topic `i`. It can also be viewed as distribution over the words for each topic after normalization: `model.components_ / model.components_.sum(axis=1)\[:, np.newaxis\]`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L571)

***

### doc\_topic\_prior\_

#### Get Signature

> **get** **doc\_topic\_prior\_**(): `Promise`\<`number`\>

Prior of document topic distribution `theta`. If the value is `undefined`, it is `1 / n_components`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:760](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L760)

***

### exp\_dirichlet\_component\_

#### Get Signature

> **get** **exp\_dirichlet\_component\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Exponential value of expectation of log topic word distribution. In the literature, this is `exp(E\[log(beta)\])`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L598)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L679)

***

### n\_batch\_iter\_

#### Get Signature

> **get** **n\_batch\_iter\_**(): `Promise`\<`number`\>

Number of iterations of the EM step.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L625)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L652)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of passes over the dataset.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L706)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L134)

***

### random\_state\_

#### Get Signature

> **get** **random\_state\_**(): `Promise`\<`any`\>

RandomState instance that is generated either from a seed, the random number generator or by `np.random`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:787](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L787)

***

### topic\_word\_prior\_

#### Get Signature

> **get** **topic\_word\_prior\_**(): `Promise`\<`number`\>

Prior of topic word distribution `beta`. If the value is `undefined`, it is `1 / n_components`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:814](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L814)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L190)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn model for the data X with variational Bayes method.

When `learning_method` is ‘online’, use mini-batch update. Otherwise, use batch update.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Document word matrix.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present here for API consistency by convention.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L209)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.fit_params`?

</td>
<td>

`any`

</td>
<td>

Additional fit parameters.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

Input samples.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Target values (`undefined` for unsupervised transformations).

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L250)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.input_features`?

</td>
<td>

`any`

</td>
<td>

Only used to validate feature names with the names seen in `fit`.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L298)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.routing`?

</td>
<td>

`any`

</td>
<td>

A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L336)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L147)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Online VB with Mini-Batch update.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Document word matrix.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present here for API consistency by convention.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L372)

***

### perplexity()

> **perplexity**(`opts`): `Promise`\<`number`\>

Calculate approximate perplexity for data X.

Perplexity is defined as exp(-1. \* log-likelihood per word)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.sub_sampling`?

</td>
<td>

`boolean`

</td>
<td>

Do sub-sampling or not.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Document word matrix.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L415)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Calculate approximate log-likelihood as score.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Document word matrix.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present here for API consistency by convention.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L456)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.transform`?

</td>
<td>

`"default"` \| `"pandas"` \| `"polars"`

</td>
<td>

Configure output of `transform` and `fit_transform`.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L499)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform data X according to the fitted model.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Document word matrix.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L535)
