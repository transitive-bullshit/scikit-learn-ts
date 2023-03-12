# LassoCVOptions

## Properties

### alphas?

> [`ArrayLike`](../types/ArrayLike.md)

List of alphas where to compute the models. If `undefined` alphas are set automatically.

Defined in:  [generated/linear\_model/LassoCV.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L484)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/LassoCV.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L519)

### cv?

> `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

Defined in:  [generated/linear\_model/LassoCV.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L524)

### eps?

> `number`

Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/LassoCV.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L472)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

#### Default Value

`true`

Defined in:  [generated/linear\_model/LassoCV.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L491)

### max\_iter?

> `number`

The maximum number of iterations.

#### Default Value

`1000`

Defined in:  [generated/linear\_model/LassoCV.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L505)

### n\_alphas?

> `number`

Number of alphas along the regularization path.

#### Default Value

`100`

Defined in:  [generated/linear\_model/LassoCV.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L479)

### n\_jobs?

> `number`

Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/linear\_model/LassoCV.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L536)

### positive?

> `boolean`

If positive, restrict regression coefficients to be positive.

#### Default Value

`false`

Defined in:  [generated/linear\_model/LassoCV.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L543)

### precompute?

> `boolean` \| [`ArrayLike`](../types/ArrayLike.md)[] \| `"auto"`

Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/LassoCV.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L498)

### random\_state?

> `number`

The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/linear\_model/LassoCV.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L548)

### selection?

> `"random"` \| `"cyclic"`

If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

#### Default Value

`'cyclic'`

Defined in:  [generated/linear\_model/LassoCV.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L555)

### tol?

> `number`

The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/LassoCV.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L512)

### verbose?

> `number` \| `boolean`

Amount of verbosity.

#### Default Value

`false`

Defined in:  [generated/linear\_model/LassoCV.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LassoCV.ts#L531)
