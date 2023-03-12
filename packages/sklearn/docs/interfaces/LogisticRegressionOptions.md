[sklearn](../readme.md) / [Exports](../modules.md) / LogisticRegressionOptions

# Interface: LogisticRegressionOptions

## Table of contents

### Properties

- [C](LogisticRegressionOptions.md#c)
- [class\_weight](LogisticRegressionOptions.md#class_weight)
- [dual](LogisticRegressionOptions.md#dual)
- [fit\_intercept](LogisticRegressionOptions.md#fit_intercept)
- [intercept\_scaling](LogisticRegressionOptions.md#intercept_scaling)
- [l1\_ratio](LogisticRegressionOptions.md#l1_ratio)
- [max\_iter](LogisticRegressionOptions.md#max_iter)
- [multi\_class](LogisticRegressionOptions.md#multi_class)
- [n\_jobs](LogisticRegressionOptions.md#n_jobs)
- [penalty](LogisticRegressionOptions.md#penalty)
- [random\_state](LogisticRegressionOptions.md#random_state)
- [solver](LogisticRegressionOptions.md#solver)
- [tol](LogisticRegressionOptions.md#tol)
- [verbose](LogisticRegressionOptions.md#verbose)
- [warm\_start](LogisticRegressionOptions.md#warm_start)

## Properties

### C

• `Optional` **C**: `number`

Inverse of regularization strength; must be a positive float. Like in support vector machines, smaller values specify stronger regularization.

**`Default Value`**

`1`

#### Defined in

[generated/linear_model/LogisticRegression.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L589)

___

### class\_weight

• `Optional` **class\_weight**: `any`

Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified.

#### Defined in

[generated/linear_model/LogisticRegression.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L614)

___

### dual

• `Optional` **dual**: `boolean`

Dual or primal formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=`false` when n\_samples > n\_features.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LogisticRegression.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L575)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/LogisticRegression.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L596)

___

### intercept\_scaling

• `Optional` **intercept\_scaling**: `number`

Useful only when the solver ‘liblinear’ is used and self.fit\_intercept is set to `true`. In this case, x becomes \[x, self.intercept\_scaling\], i.e. a “synthetic” feature with constant value equal to intercept\_scaling is appended to the instance vector. The intercept becomes `intercept\_scaling \* synthetic\_feature\_weight`.

Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept\_scaling has to be increased.

**`Default Value`**

`1`

#### Defined in

[generated/linear_model/LogisticRegression.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L605)

___

### l1\_ratio

• `Optional` **l1\_ratio**: `number`

The Elastic-Net mixing parameter, with `0 <= l1\_ratio <= 1`. Only used if `penalty='elasticnet'`. Setting `l1\_ratio=0` is equivalent to using `penalty='l2'`, while setting `l1\_ratio=1` is equivalent to using `penalty='l1'`. For `0 < l1\_ratio <1`, the penalty is a combination of L1 and L2.

#### Defined in

[generated/linear_model/LogisticRegression.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L670)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations taken for the solvers to converge.

**`Default Value`**

`100`

#### Defined in

[generated/linear_model/LogisticRegression.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L639)

___

### multi\_class

• `Optional` **multi\_class**: ``"auto"`` \| ``"ovr"`` \| ``"multinomial"``

If the option chosen is ‘ovr’, then a binary problem is fit for each label. For ‘multinomial’ the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. ‘multinomial’ is unavailable when solver=’liblinear’. ‘auto’ selects ‘ovr’ if the data is binary, or if solver=’liblinear’, and otherwise selects ‘multinomial’.

**`Default Value`**

`'auto'`

#### Defined in

[generated/linear_model/LogisticRegression.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L646)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of CPU cores used when parallelizing over classes if multi\_class=’ovr’”. This parameter is ignored when the `solver` is set to ‘liblinear’ regardless of whether ‘multi\_class’ is specified or not. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/linear_model/LogisticRegression.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L665)

___

### penalty

• `Optional` **penalty**: ``"l1"`` \| ``"l2"`` \| ``"elasticnet"``

Specify the norm of the penalty:

**`Default Value`**

`'l2'`

#### Defined in

[generated/linear_model/LogisticRegression.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L568)

___

### random\_state

• `Optional` **random\_state**: `number`

Used when `solver` == ‘sag’, ‘saga’ or ‘liblinear’ to shuffle the data. See [Glossary](../../glossary.html#term-random_state) for details.

#### Defined in

[generated/linear_model/LogisticRegression.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L619)

___

### solver

• `Optional` **solver**: ``"lbfgs"`` \| ``"newton-cholesky"`` \| ``"liblinear"`` \| ``"newton-cg"`` \| ``"sag"`` \| ``"saga"``

Algorithm to use in the optimization problem. Default is ‘lbfgs’. To choose a solver, you might want to consider the following aspects:

**`Default Value`**

`'lbfgs'`

#### Defined in

[generated/linear_model/LogisticRegression.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L626)

___

### tol

• `Optional` **tol**: `number`

Tolerance for stopping criteria.

**`Default Value`**

`0.0001`

#### Defined in

[generated/linear_model/LogisticRegression.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L582)

___

### verbose

• `Optional` **verbose**: `number`

For the liblinear and lbfgs solvers set verbose to any positive number for verbosity.

**`Default Value`**

`0`

#### Defined in

[generated/linear_model/LogisticRegression.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L653)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. Useless for liblinear solver. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/LogisticRegression.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LogisticRegression.ts#L660)
