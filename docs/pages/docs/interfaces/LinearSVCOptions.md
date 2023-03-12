# LinearSVCOptions

## Properties

### C?

> `number`

Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive.

#### Default Value

`1`

Defined in:  [generated/svm/LinearSVC.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L475)

### class\_weight?

> `any`

Set the parameter C of class i to `class\_weight\[i\]\*C` for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

Defined in:  [generated/svm/LinearSVC.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L501)

### dual?

> `boolean`

Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features.

#### Default Value

`true`

Defined in:  [generated/svm/LinearSVC.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L461)

### fit\_intercept?

> `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be already centered).

#### Default Value

`true`

Defined in:  [generated/svm/LinearSVC.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L489)

### intercept\_scaling?

> `number`

When self.fit\_intercept is `true`, instance vector x becomes `\[x, self.intercept\_scaling\]`, i.e. a “synthetic” feature with constant value equals to intercept\_scaling is appended to the instance vector. The intercept becomes intercept\_scaling \* synthetic feature weight Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept\_scaling has to be increased.

#### Default Value

`1`

Defined in:  [generated/svm/LinearSVC.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L496)

### loss?

> `"hinge"` \| `"squared_hinge"`

Specifies the loss function. ‘hinge’ is the standard SVM loss (used e.g. by the SVC class) while ‘squared\_hinge’ is the square of the hinge loss. The combination of `penalty='l1'` and `loss='hinge'` is not supported.

#### Default Value

`'squared_hinge'`

Defined in:  [generated/svm/LinearSVC.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L454)

### max\_iter?

> `number`

The maximum number of iterations to be run.

#### Default Value

`1000`

Defined in:  [generated/svm/LinearSVC.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L520)

### multi\_class?

> `"ovr"` \| `"crammer_singer"`

Determines the multi-class strategy if `y` contains more than two classes. `"ovr"` trains n\_classes one-vs-rest classifiers, while `"crammer\_singer"` optimizes a joint objective over all classes. While `crammer\_singer` is interesting from a theoretical perspective as it is consistent, it is seldom used in practice as it rarely leads to better accuracy and is more expensive to compute. If `"crammer\_singer"` is chosen, the options loss, penalty and dual will be ignored.

#### Default Value

`'ovr'`

Defined in:  [generated/svm/LinearSVC.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L482)

### penalty?

> `"l1"` \| `"l2"`

Specifies the norm used in the penalization. The ‘l2’ penalty is the standard used in SVC. The ‘l1’ leads to `coef\_` vectors that are sparse.

#### Default Value

`'l2'`

Defined in:  [generated/svm/LinearSVC.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L447)

### random\_state?

> `number`

Controls the pseudo random number generation for shuffling the data for the dual coordinate descent (if `dual=True`). When `dual=False` the underlying implementation of [`LinearSVC`](#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") is not random and `random\_state` has no effect on the results. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/svm/LinearSVC.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L513)

### tol?

> `number`

Tolerance for stopping criteria.

#### Default Value

`0.0001`

Defined in:  [generated/svm/LinearSVC.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L468)

### verbose?

> `number`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.

#### Default Value

`0`

Defined in:  [generated/svm/LinearSVC.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/svm/LinearSVC.ts#L508)
