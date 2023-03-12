[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchSparsePCAOptions

# Interface: MiniBatchSparsePCAOptions

## Table of contents

### Properties

- [alpha](MiniBatchSparsePCAOptions.md#alpha)
- [batch\_size](MiniBatchSparsePCAOptions.md#batch_size)
- [callback](MiniBatchSparsePCAOptions.md#callback)
- [max\_iter](MiniBatchSparsePCAOptions.md#max_iter)
- [max\_no\_improvement](MiniBatchSparsePCAOptions.md#max_no_improvement)
- [method](MiniBatchSparsePCAOptions.md#method)
- [n\_components](MiniBatchSparsePCAOptions.md#n_components)
- [n\_iter](MiniBatchSparsePCAOptions.md#n_iter)
- [n\_jobs](MiniBatchSparsePCAOptions.md#n_jobs)
- [random\_state](MiniBatchSparsePCAOptions.md#random_state)
- [ridge\_alpha](MiniBatchSparsePCAOptions.md#ridge_alpha)
- [shuffle](MiniBatchSparsePCAOptions.md#shuffle)
- [tol](MiniBatchSparsePCAOptions.md#tol)
- [verbose](MiniBatchSparsePCAOptions.md#verbose)

## Properties

### alpha

• `Optional` **alpha**: `number`

Sparsity controlling parameter. Higher values lead to sparser components.

**`Default Value`**

`1`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L499)

___

### batch\_size

• `Optional` **batch\_size**: `number`

The number of features to take in each mini batch.

**`Default Value`**

`3`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L530)

___

### callback

• `Optional` **callback**: `any`

Callable that gets invoked every five iterations.

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L523)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics. If `max\_iter` is not `undefined`, `n\_iter` is ignored.

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L518)

___

### max\_no\_improvement

• `Optional` **max\_no\_improvement**: `number`

Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. Used only if `max\_iter` is not `undefined`.

To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.

**`Default Value`**

`10`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L579)

___

### method

• `Optional` **method**: ``"cd"`` \| ``"lars"``

Method to be used for optimization. lars: uses the least angle regression method to solve the lasso problem (linear\_model.lars\_path) cd: uses the coordinate descent method to compute the Lasso solution (linear\_model.Lasso). Lars will be faster if the estimated components are sparse.

**`Default Value`**

`'lars'`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L556)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of sparse atoms to extract. If `undefined`, then `n\_components` is set to `n\_features`.

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L492)

___

### n\_iter

• `Optional` **n\_iter**: `number`

Number of iterations to perform for each mini batch.

**`Default Value`**

`100`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L513)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:549](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L549)

___

### random\_state

• `Optional` **random\_state**: `number`

Used for random shuffling when `shuffle` is set to `true`, during online dictionary learning. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L561)

___

### ridge\_alpha

• `Optional` **ridge\_alpha**: `number`

Amount of ridge shrinkage to apply in order to improve conditioning when calling the transform method.

**`Default Value`**

`0.01`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L506)

___

### shuffle

• `Optional` **shuffle**: `boolean`

Whether to shuffle the data before splitting it in batches.

**`Default Value`**

`true`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L544)

___

### tol

• `Optional` **tol**: `number`

Control early stopping based on the norm of the differences in the dictionary between 2 steps. Used only if `max\_iter` is not `undefined`.

To disable early stopping based on changes in the dictionary, set `tol` to 0.0.

**`Default Value`**

`0.001`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L570)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Controls the verbosity; the higher, the more messages. Defaults to 0.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/MiniBatchSparsePCA.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchSparsePCA.ts#L537)
