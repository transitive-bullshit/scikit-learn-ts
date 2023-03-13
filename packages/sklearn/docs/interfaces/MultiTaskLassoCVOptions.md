# MultiTaskLassoCVOptions

## Properties

### alphas?

> [`ArrayLike`](../types/ArrayLike.md)

List of alphas where to compute the models. If not provided, set automatically.

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L525)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L553)

### cv?

> `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L558)

### eps?

> `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L513)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

#### Default Value

`true`

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L532)

### max\_iter?

> `number`

The maximum number of iterations.

#### Default Value

`1000`

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L539)

### n\_alphas?

> `number`

Number of alphas along the regularization path.

#### Default Value

`100`

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L520)

### n\_jobs?

> `number`

Number of CPUs to use during the cross validation. Note that this is used only if multiple values for l1\_ratio are given. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L570)

### random\_state?

> `number`

The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L575)

### selection?

> `"random"` \| `"cyclic"`

If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

#### Default Value

`'cyclic'`

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L582)

### tol?

> `number`

The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L546)

### verbose?

> `number` \| `boolean`

Amount of verbosity.

#### Default Value

`false`

Defined in:  [generated/linear\_model/MultiTaskLassoCV.ts:565](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L565)
