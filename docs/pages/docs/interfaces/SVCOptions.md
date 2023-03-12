# SVCOptions

## Properties

### C?

> `number`

Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive. The penalty is a squared l2 penalty.

#### Default Value

`1`

Defined in:  [generated/svm/SVC.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L555)

### break\_ties?

> `boolean`

If true, `decision\_function\_shape='ovr'`, and number of classes > 2, [predict](../../glossary.html#term-predict) will break ties according to the confidence values of [decision\_function](../../glossary.html#term-decision_function); otherwise the first class among the tied classes is returned. Please note that breaking ties comes at a relatively high computational cost compared to a simple predict.

#### Default Value

`false`

Defined in:  [generated/svm/SVC.ts:644](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L644)

### cache\_size?

> `number`

Specify the size of the kernel cache (in MB).

#### Default Value

`200`

Defined in:  [generated/svm/SVC.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L611)

### class\_weight?

> `any`

Set the parameter C of class i to class\_weight\[i\]\*C for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

Defined in:  [generated/svm/SVC.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L616)

### coef0?

> `number`

Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.

#### Default Value

`0`

Defined in:  [generated/svm/SVC.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L583)

### decision\_function\_shape?

> `"ovr"` \| `"ovo"`

Whether to return a one-vs-rest (‘ovr’) decision function of shape (n\_samples, n\_classes) as all other classifiers, or the original one-vs-one (‘ovo’) decision function of libsvm which has shape (n\_samples, n\_classes \* (n\_classes - 1) / 2). However, note that internally, one-vs-one (‘ovo’) is always used as a multi-class strategy to train models; an ovr matrix is only constructed from the ovo matrix. The parameter is ignored for binary classification.

#### Default Value

`'ovr'`

Defined in:  [generated/svm/SVC.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L637)

### degree?

> `number`

Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.

#### Default Value

`3`

Defined in:  [generated/svm/SVC.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L569)

### gamma?

> `number` \| `"auto"` \| `"scale"`

Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.

#### Default Value

`'scale'`

Defined in:  [generated/svm/SVC.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L576)

### kernel?

> `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"`

Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to pre-compute the kernel matrix from data matrices; that matrix should be an array of shape `(n\_samples, n\_samples)`.

#### Default Value

`'rbf'`

Defined in:  [generated/svm/SVC.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L562)

### max\_iter?

> `number`

Hard limit on iterations within solver, or -1 for no limit.

#### Default Value

`-1`

Defined in:  [generated/svm/SVC.ts:630](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L630)

### probability?

> `boolean`

Whether to enable probability estimates. This must be enabled prior to calling `fit`, will slow down that method as it internally uses 5-fold cross-validation, and `predict\_proba` may be inconsistent with `predict`. Read more in the [User Guide](../svm.html#scores-probabilities).

#### Default Value

`false`

Defined in:  [generated/svm/SVC.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L597)

### random\_state?

> `number`

Controls the pseudo random number generation for shuffling the data for probability estimates. Ignored when `probability` is `false`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/svm/SVC.ts:649](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L649)

### shrinking?

> `boolean`

Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).

#### Default Value

`true`

Defined in:  [generated/svm/SVC.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L590)

### tol?

> `number`

Tolerance for stopping criterion.

#### Default Value

`0.001`

Defined in:  [generated/svm/SVC.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L604)

### verbose?

> `boolean`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.

#### Default Value

`false`

Defined in:  [generated/svm/SVC.ts:623](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/SVC.ts#L623)
