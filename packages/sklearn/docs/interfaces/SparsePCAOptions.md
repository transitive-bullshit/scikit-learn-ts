[sklearn](../readme.md) / [Exports](../modules.md) / SparsePCAOptions

# Interface: SparsePCAOptions

## Table of contents

### Properties

- [U\_init](SparsePCAOptions.md#u_init)
- [V\_init](SparsePCAOptions.md#v_init)
- [alpha](SparsePCAOptions.md#alpha)
- [max\_iter](SparsePCAOptions.md#max_iter)
- [method](SparsePCAOptions.md#method)
- [n\_components](SparsePCAOptions.md#n_components)
- [n\_jobs](SparsePCAOptions.md#n_jobs)
- [random\_state](SparsePCAOptions.md#random_state)
- [ridge\_alpha](SparsePCAOptions.md#ridge_alpha)
- [tol](SparsePCAOptions.md#tol)
- [verbose](SparsePCAOptions.md#verbose)

## Properties

### U\_init

• `Optional` **U\_init**: [`ArrayLike`](../modules.md#arraylike)[]

Initial values for the loadings for warm restart scenarios. Only used if `U\_init` and `V\_init` are not `undefined`.

#### Defined in

[generated/decomposition/SparsePCA.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L516)

___

### V\_init

• `Optional` **V\_init**: [`ArrayLike`](../modules.md#arraylike)[]

Initial values for the components for warm restart scenarios. Only used if `U\_init` and `V\_init` are not `undefined`.

#### Defined in

[generated/decomposition/SparsePCA.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L521)

___

### alpha

• `Optional` **alpha**: `number`

Sparsity controlling parameter. Higher values lead to sparser components.

**`Default Value`**

`1`

#### Defined in

[generated/decomposition/SparsePCA.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L478)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations to perform.

**`Default Value`**

`1000`

#### Defined in

[generated/decomposition/SparsePCA.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L492)

___

### method

• `Optional` **method**: ``"cd"`` \| ``"lars"``

Method to be used for optimization. lars: uses the least angle regression method to solve the lasso problem (linear\_model.lars\_path) cd: uses the coordinate descent method to compute the Lasso solution (linear\_model.Lasso). Lars will be faster if the estimated components are sparse.

**`Default Value`**

`'lars'`

#### Defined in

[generated/decomposition/SparsePCA.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L506)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of sparse atoms to extract. If `undefined`, then `n\_components` is set to `n\_features`.

#### Defined in

[generated/decomposition/SparsePCA.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L471)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/decomposition/SparsePCA.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L511)

___

### random\_state

• `Optional` **random\_state**: `number`

Used during dictionary learning. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/decomposition/SparsePCA.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L533)

___

### ridge\_alpha

• `Optional` **ridge\_alpha**: `number`

Amount of ridge shrinkage to apply in order to improve conditioning when calling the transform method.

**`Default Value`**

`0.01`

#### Defined in

[generated/decomposition/SparsePCA.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L485)

___

### tol

• `Optional` **tol**: `number`

Tolerance for the stopping condition.

**`Default Value`**

`1e-8`

#### Defined in

[generated/decomposition/SparsePCA.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L499)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Controls the verbosity; the higher, the more messages. Defaults to 0.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/SparsePCA.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparsePCA.ts#L528)
