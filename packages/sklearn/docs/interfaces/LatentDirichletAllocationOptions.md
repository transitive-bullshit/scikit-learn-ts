[sklearn](../readme.md) / [Exports](../modules.md) / LatentDirichletAllocationOptions

# Interface: LatentDirichletAllocationOptions

## Table of contents

### Properties

- [batch\_size](LatentDirichletAllocationOptions.md#batch_size)
- [doc\_topic\_prior](LatentDirichletAllocationOptions.md#doc_topic_prior)
- [evaluate\_every](LatentDirichletAllocationOptions.md#evaluate_every)
- [learning\_decay](LatentDirichletAllocationOptions.md#learning_decay)
- [learning\_method](LatentDirichletAllocationOptions.md#learning_method)
- [learning\_offset](LatentDirichletAllocationOptions.md#learning_offset)
- [max\_doc\_update\_iter](LatentDirichletAllocationOptions.md#max_doc_update_iter)
- [max\_iter](LatentDirichletAllocationOptions.md#max_iter)
- [mean\_change\_tol](LatentDirichletAllocationOptions.md#mean_change_tol)
- [n\_components](LatentDirichletAllocationOptions.md#n_components)
- [n\_jobs](LatentDirichletAllocationOptions.md#n_jobs)
- [perp\_tol](LatentDirichletAllocationOptions.md#perp_tol)
- [random\_state](LatentDirichletAllocationOptions.md#random_state)
- [topic\_word\_prior](LatentDirichletAllocationOptions.md#topic_word_prior)
- [total\_samples](LatentDirichletAllocationOptions.md#total_samples)
- [verbose](LatentDirichletAllocationOptions.md#verbose)

## Properties

### batch\_size

• `Optional` **batch\_size**: `number`

Number of documents to use in each EM iteration. Only used in online learning.

**`Default Value`**

`128`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:733](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L733)

___

### doc\_topic\_prior

• `Optional` **doc\_topic\_prior**: `number`

Prior of document topic distribution `theta`. If the value is `undefined`, defaults to `1 / n\_components`. In [\[1\]](#re25e5648fc37-1), this is called `alpha`.

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:691](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L691)

___

### evaluate\_every

• `Optional` **evaluate\_every**: `number`

How often to evaluate perplexity. Only used in `fit` method. set it to 0 or negative number to not evaluate perplexity in training at all. Evaluating perplexity can help you check convergence in training process, but it will also increase total training time. Evaluating perplexity in every iteration might increase training time up to two-fold.

**`Default Value`**

`-1`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:740](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L740)

___

### learning\_decay

• `Optional` **learning\_decay**: `number`

It is a parameter that control learning rate in the online learning method. The value should be set between (0.5, 1.0\] to guarantee asymptotic convergence. When the value is 0.0 and batch\_size is `n\_samples`, the update method is same as batch learning. In the literature, this is called kappa.

**`Default Value`**

`0.7`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:712](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L712)

___

### learning\_method

• `Optional` **learning\_method**: ``"batch"`` \| ``"online"``

Method used to update `\_component`. Only used in [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method. In general, if the data size is large, the online update will be much faster than the batch update.

Valid options:

**`Default Value`**

`'batch'`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:705](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L705)

___

### learning\_offset

• `Optional` **learning\_offset**: `number`

A (positive) parameter that downweights early iterations in online learning. It should be greater than 1.0. In the literature, this is called tau\_0.

**`Default Value`**

`10`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:719](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L719)

___

### max\_doc\_update\_iter

• `Optional` **max\_doc\_update\_iter**: `number`

Max number of iterations for updating document topic distribution in the E-step.

**`Default Value`**

`100`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:768](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L768)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method, and not the [`partial\_fit`](#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.

**`Default Value`**

`10`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:726](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L726)

___

### mean\_change\_tol

• `Optional` **mean\_change\_tol**: `number`

Stopping tolerance for updating document topic distribution in E-step.

**`Default Value`**

`0.001`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:761](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L761)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of topics.

**`Default Value`**

`10`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:686](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L686)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to use in the E-step. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:773](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L773)

___

### perp\_tol

• `Optional` **perp\_tol**: `number`

Perplexity tolerance in batch learning. Only used when `evaluate\_every` is greater than 0.

**`Default Value`**

`0.1`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L754)

___

### random\_state

• `Optional` **random\_state**: `number`

Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:785](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L785)

___

### topic\_word\_prior

• `Optional` **topic\_word\_prior**: `number`

Prior of topic word distribution `beta`. If the value is `undefined`, defaults to `1 / n\_components`. In [\[1\]](#re25e5648fc37-1), this is called `eta`.

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L696)

___

### total\_samples

• `Optional` **total\_samples**: `number`

Total number of documents. Only used in the [`partial\_fit`](#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.

**`Default Value`**

`1000000`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:747](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L747)

___

### verbose

• `Optional` **verbose**: `number`

Verbosity level.

**`Default Value`**

`0`

#### Defined in

[generated/decomposition/LatentDirichletAllocation.ts:780](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/LatentDirichletAllocation.ts#L780)