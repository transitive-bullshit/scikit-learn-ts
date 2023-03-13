# ElasticNetCVOptions

## Properties

### alphas?

> [`ArrayLike`](../types/ArrayLike.md)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

Defined in:  [generated/linear\_model/ElasticNetCV.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L527)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L567)

### cv?

> `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

Defined in:  [generated/linear\_model/ElasticNetCV.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L560)

### eps?

> `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L515)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

#### Default Value

`true`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L534)

### l1\_ratio?

> `number`

Float between 0 and 1 passed to ElasticNet (scaling between l1 and l2 penalties). For `l1\_ratio \= 0` the penalty is an L2 penalty. For `l1\_ratio \= 1` it is an L1 penalty. For `0 < l1\_ratio < 1`, the penalty is a combination of L1 and L2 This parameter can be a list, in which case the different values are tested by cross-validation and the one giving the best prediction score is used. Note that a good choice of list of values for l1\_ratio is often to put more values close to 1 (i.e. Lasso) and less close to 0 (i.e. Ridge), as in `\[.1, .5, .7, .9, .95, .99, 1\]`.

#### Default Value

`0.5`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L508)

### max\_iter?

> `number`

The maximum number of iterations.

#### Default Value

`1000`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L548)

### n\_alphas?

> `number`

Number of alphas along the regularization path, used for each l1\_ratio.

#### Default Value

`100`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L522)

### n\_jobs?

> `number`

Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/linear\_model/ElasticNetCV.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L579)

### positive?

> `boolean`

When set to `true`, forces the coefficients to be positive.

#### Default Value

`false`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L586)

### precompute?

> `boolean` \| [`ArrayLike`](../types/ArrayLike.md)[] \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L541)

### random\_state?

> `number`

The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/linear\_model/ElasticNetCV.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L591)

### selection?

> `"random"` \| `"cyclic"`

If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

#### Default Value

`'cyclic'`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L598)

### tol?

> `number`

The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L555)

### verbose?

> `number` \| `boolean`

Amount of verbosity.

#### Default Value

`0`

Defined in:  [generated/linear\_model/ElasticNetCV.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L574)
