[sklearn](../readme.md) / [Exports](../modules.md) / MultiTaskElasticNetCVOptions

# Interface: MultiTaskElasticNetCVOptions

## Table of contents

### Properties

- [alphas](MultiTaskElasticNetCVOptions.md#alphas)
- [copy\_X](MultiTaskElasticNetCVOptions.md#copy_x)
- [cv](MultiTaskElasticNetCVOptions.md#cv)
- [eps](MultiTaskElasticNetCVOptions.md#eps)
- [fit\_intercept](MultiTaskElasticNetCVOptions.md#fit_intercept)
- [l1\_ratio](MultiTaskElasticNetCVOptions.md#l1_ratio)
- [max\_iter](MultiTaskElasticNetCVOptions.md#max_iter)
- [n\_alphas](MultiTaskElasticNetCVOptions.md#n_alphas)
- [n\_jobs](MultiTaskElasticNetCVOptions.md#n_jobs)
- [random\_state](MultiTaskElasticNetCVOptions.md#random_state)
- [selection](MultiTaskElasticNetCVOptions.md#selection)
- [tol](MultiTaskElasticNetCVOptions.md#tol)
- [verbose](MultiTaskElasticNetCVOptions.md#verbose)

## Properties

### alphas

• `Optional` **alphas**: [`ArrayLike`](../modules.md#arraylike)

List of alphas where to compute the models. If not provided, set automatically.

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L563)

___

### copy\_X

• `Optional` **copy\_X**: `boolean`

If `true`, X will be copied; else, it may be overwritten.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L596)

___

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L589)

___

### eps

• `Optional` **eps**: `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L551)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L570)

___

### l1\_ratio

• `Optional` **l1\_ratio**: `number`

The ElasticNet mixing parameter, with 0 < l1\_ratio <= 1. For l1\_ratio = 1 the penalty is an L1/L2 penalty. For l1\_ratio = 0 it is an L2 penalty. For `0 < l1\_ratio < 1`, the penalty is a combination of L1/L2 and L2. This parameter can be a list, in which case the different values are tested by cross-validation and the one giving the best prediction score is used. Note that a good choice of list of values for l1\_ratio is often to put more values close to 1 (i.e. Lasso) and less close to 0 (i.e. Ridge), as in `\[.1, .5, .7, .9, .95, .99, 1\]`.

**`Default Value`**

`0.5`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L544)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of iterations.

**`Default Value`**

`1000`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L577)

___

### n\_alphas

• `Optional` **n\_alphas**: `number`

Number of alphas along the regularization path.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L558)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of CPUs to use during the cross validation. Note that this is used only if multiple values for l1\_ratio are given. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:608](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L608)

___

### random\_state

• `Optional` **random\_state**: `number`

The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L613)

___

### selection

• `Optional` **selection**: ``"random"`` \| ``"cyclic"``

If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

**`Default Value`**

`'cyclic'`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L620)

___

### tol

• `Optional` **tol**: `number`

The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.

**`Default Value`**

`0.0001`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L584)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Amount of verbosity.

**`Default Value`**

`0`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:603](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L603)