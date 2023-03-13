# NuSVCOptions

## Properties

### break\_ties?

> `boolean`

If true, `decision\_function\_shape='ovr'`, and number of classes > 2, [predict](../../glossary.html#term-predict) will break ties according to the confidence values of [decision\_function](../../glossary.html#term-decision_function); otherwise the first class among the tied classes is returned. Please note that breaking ties comes at a relatively high computational cost compared to a simple predict.

#### Default Value

`false`

Defined in:  [generated/svm/NuSVC.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L652)

### cache\_size?

> `number`

Specify the size of the kernel cache (in MB).

#### Default Value

`200`

Defined in:  [generated/svm/NuSVC.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L619)

### class\_weight?

> `any`

Set the parameter C of class i to class\_weight\[i\]\*C for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies as `n\_samples / (n\_classes \* np.bincount(y))`.

Defined in:  [generated/svm/NuSVC.ts:624](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L624)

### coef0?

> `number`

Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.

#### Default Value

`0`

Defined in:  [generated/svm/NuSVC.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L591)

### decision\_function\_shape?

> `"ovr"` \| `"ovo"`

Whether to return a one-vs-rest (‘ovr’) decision function of shape (n\_samples, n\_classes) as all other classifiers, or the original one-vs-one (‘ovo’) decision function of libsvm which has shape (n\_samples, n\_classes \* (n\_classes - 1) / 2). However, one-vs-one (‘ovo’) is always used as multi-class strategy. The parameter is ignored for binary classification.

#### Default Value

`'ovr'`

Defined in:  [generated/svm/NuSVC.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L645)

### degree?

> `number`

Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.

#### Default Value

`3`

Defined in:  [generated/svm/NuSVC.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L577)

### gamma?

> `number` \| `"auto"` \| `"scale"`

Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.

#### Default Value

`'scale'`

Defined in:  [generated/svm/NuSVC.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L584)

### kernel?

> `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"`

Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix.

#### Default Value

`'rbf'`

Defined in:  [generated/svm/NuSVC.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L570)

### max\_iter?

> `number`

Hard limit on iterations within solver, or -1 for no limit.

#### Default Value

`-1`

Defined in:  [generated/svm/NuSVC.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L638)

### nu?

> `number`

An upper bound on the fraction of margin errors (see [User Guide](../svm.html#nu-svc)) and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\].

#### Default Value

`0.5`

Defined in:  [generated/svm/NuSVC.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L563)

### probability?

> `boolean`

Whether to enable probability estimates. This must be enabled prior to calling `fit`, will slow down that method as it internally uses 5-fold cross-validation, and `predict\_proba` may be inconsistent with `predict`. Read more in the [User Guide](../svm.html#scores-probabilities).

#### Default Value

`false`

Defined in:  [generated/svm/NuSVC.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L605)

### random\_state?

> `number`

Controls the pseudo random number generation for shuffling the data for probability estimates. Ignored when `probability` is `false`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/svm/NuSVC.ts:657](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L657)

### shrinking?

> `boolean`

Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).

#### Default Value

`true`

Defined in:  [generated/svm/NuSVC.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L598)

### tol?

> `number`

Tolerance for stopping criterion.

#### Default Value

`0.001`

Defined in:  [generated/svm/NuSVC.ts:612](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L612)

### verbose?

> `boolean`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.

#### Default Value

`false`

Defined in:  [generated/svm/NuSVC.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/svm/NuSVC.ts#L631)
