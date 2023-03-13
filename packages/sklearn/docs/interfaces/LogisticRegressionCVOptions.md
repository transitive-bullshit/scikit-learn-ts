# LogisticRegressionCVOptions

## Properties

### Cs?

> `number`

Each of the values in Cs describes the inverse of regularization strength. If Cs is as an int, then a grid of Cs values are chosen in a logarithmic scale between 1e-4 and 1e4. Like in support vector machines, smaller values specify stronger regularization.

#### Default Value

`10`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:730](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L730)

### class\_weight?

> `any`

Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified.

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:797](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L797)

### cv?

> `number`

The default cross-validation generator used is Stratified K-Folds. If an integer is provided, then it is the number of folds used. See the module [`sklearn.model\_selection`](../classes.html#module-sklearn.model_selection "sklearn.model_selection") module for the list of possible cross-validation objects.

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:742](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L742)

### dual?

> `boolean`

Dual or primal formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=`false` when n\_samples > n\_features.

#### Default Value

`false`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:749](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L749)

### fit\_intercept?

> `boolean`

Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function.

#### Default Value

`true`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L737)

### intercept\_scaling?

> `number`

Useful only when the solver ‘liblinear’ is used and self.fit\_intercept is set to `true`. In this case, x becomes \[x, self.intercept\_scaling\], i.e. a “synthetic” feature with constant value equal to intercept\_scaling is appended to the instance vector. The intercept becomes `intercept\_scaling \* synthetic\_feature\_weight`.

Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept\_scaling has to be increased.

#### Default Value

`1`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:825](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L825)

### l1\_ratios?

> `any`

The list of Elastic-Net mixing parameter, with `0 <= l1\_ratio <= 1`. Only used if `penalty='elasticnet'`. A value of 0 is equivalent to using `penalty='l2'`, while 1 is equivalent to using `penalty='l1'`. For `0 < l1\_ratio <1`, the penalty is a combination of L1 and L2.

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:842](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L842)

### max\_iter?

> `number`

Maximum number of iterations of the optimization algorithm.

#### Default Value

`100`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:788](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L788)

### multi\_class?

> `"ovr"` \| `"multinomial"`

If the option chosen is ‘ovr’, then a binary problem is fit for each label. For ‘multinomial’ the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. ‘multinomial’ is unavailable when solver=’liblinear’. ‘auto’ selects ‘ovr’ if the data is binary, or if solver=’liblinear’, and otherwise selects ‘multinomial’.

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:832](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L832)

### n\_jobs?

> `number`

Number of CPU cores used during the cross-validation loop. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:802](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L802)

### penalty?

> `"l1"` \| `"l2"` \| `"elasticnet"`

Specify the norm of the penalty:

#### Default Value

`'l2'`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:756](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L756)

### random\_state?

> `number`

Used when `solver='sag'`, ‘saga’ or ‘liblinear’ to shuffle the data. Note that this only applies to the solver and not the cross-validation generator. See [Glossary](../../glossary.html#term-random_state) for details.

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:837](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L837)

### refit?

> `boolean`

If set to `true`, the scores are averaged across all folds, and the coefs and the C that corresponds to the best score is taken, and a final refit is done using these parameters. Otherwise the coefs, intercepts and C that correspond to the best scores across folds are averaged.

#### Default Value

`true`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:816](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L816)

### scoring?

> `string`

A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`. For a list of scoring functions that can be used, look at [`sklearn.metrics`](../classes.html#module-sklearn.metrics "sklearn.metrics"). The default scoring option used is ‘accuracy’.

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:761](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L761)

### solver?

> `"lbfgs"` \| `"newton-cholesky"` \| `"liblinear"` \| `"newton-cg"` \| `"sag"` \| `"saga"`

Algorithm to use in the optimization problem. Default is ‘lbfgs’. To choose a solver, you might want to consider the following aspects:

#### Default Value

`'lbfgs'`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:768](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L768)

### tol?

> `number`

Tolerance for stopping criteria.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:781](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L781)

### verbose?

> `number`

For the ‘liblinear’, ‘sag’ and ‘lbfgs’ solvers set verbose to any positive number for verbosity.

#### Default Value

`0`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:809](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L809)
