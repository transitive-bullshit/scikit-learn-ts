# RidgeClassifierOptions

## Properties

### alpha?

> `number`

Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC").

#### Default Value

`1`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L365)

### class\_weight?

> `any`

Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

Defined in:  [generated/linear\_model/RidgeClassifier.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L398)

### copy\_X?

> `boolean`

If `true`, X will be copied; else, it may be overwritten.

#### Default Value

`true`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L379)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).

#### Default Value

`true`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L372)

### max\_iter?

> `number`

Maximum number of iterations for conjugate gradient solver. The default value is determined by scipy.sparse.linalg.

Defined in:  [generated/linear\_model/RidgeClassifier.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L384)

### positive?

> `boolean`

When set to `true`, forces the coefficients to be positive. Only ‘lbfgs’ solver is supported in this case.

#### Default Value

`false`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L420)

### random\_state?

> `number`

Used when `solver` == ‘sag’ or ‘saga’ to shuffle the data. See [Glossary](../../glossary.html#term-random_state) for details.

Defined in:  [generated/linear\_model/RidgeClassifier.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L425)

### solver?

> `"auto"` \| `"svd"` \| `"lsqr"` \| `"lbfgs"` \| `"sag"` \| `"saga"` \| `"cholesky"` \| `"sparse_cg"`

Solver to use in the computational routines:

#### Default Value

`'auto'`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L405)

### tol?

> `number`

Precision of the solution. Note that `tol` has no effect for solvers ‘svd’ and ‘cholesky’.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/RidgeClassifier.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L391)
