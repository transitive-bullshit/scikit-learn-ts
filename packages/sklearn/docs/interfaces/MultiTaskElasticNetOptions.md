# MultiTaskElasticNetOptions

## Properties

### alpha?

> `number`

Constant that multiplies the L1/L2 term. Defaults to 1.0.

#### Default Value

`1`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L455)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L476)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

#### Default Value

`true`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L469)

### l1\_ratio?

> `number`

The ElasticNet mixing parameter, with 0 < l1\_ratio <= 1. For l1\_ratio = 1 the penalty is an L1/L2 penalty. For l1\_ratio = 0 it is an L2 penalty. For `0 < l1\_ratio < 1`, the penalty is a combination of L1/L2 and L2.

#### Default Value

`0.5`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L462)

### max\_iter?

> `number`

The maximum number of iterations.

#### Default Value

`1000`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L483)

### random\_state?

> `number`

The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L502)

### selection?

> `"random"` \| `"cyclic"`

If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

#### Default Value

`'cyclic'`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L509)

### tol?

> `number`

The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L490)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

#### Default Value

`false`

Defined in:  [generated/linear\_model/MultiTaskElasticNet.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L497)
