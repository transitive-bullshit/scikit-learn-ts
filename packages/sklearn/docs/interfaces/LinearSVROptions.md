[sklearn](../readme.md) / [Exports](../modules.md) / LinearSVROptions

# Interface: LinearSVROptions

## Table of contents

### Properties

- [C](LinearSVROptions.md#c)
- [dual](LinearSVROptions.md#dual)
- [epsilon](LinearSVROptions.md#epsilon)
- [fit\_intercept](LinearSVROptions.md#fit_intercept)
- [intercept\_scaling](LinearSVROptions.md#intercept_scaling)
- [loss](LinearSVROptions.md#loss)
- [max\_iter](LinearSVROptions.md#max_iter)
- [random\_state](LinearSVROptions.md#random_state)
- [tol](LinearSVROptions.md#tol)
- [verbose](LinearSVROptions.md#verbose)

## Properties

### C

• `Optional` **C**: `number`

Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive.

**`Default Value`**

`1`

#### Defined in

[generated/svm/LinearSVR.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L342)

___

### dual

• `Optional` **dual**: `boolean`

Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features.

**`Default Value`**

`true`

#### Defined in

[generated/svm/LinearSVR.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L370)

___

### epsilon

• `Optional` **epsilon**: `number`

Epsilon parameter in the epsilon-insensitive loss function. Note that the value of this parameter depends on the scale of the target variable y. If unsure, set `epsilon=0`.

**`Default Value`**

`0`

#### Defined in

[generated/svm/LinearSVR.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L328)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be already centered).

**`Default Value`**

`true`

#### Defined in

[generated/svm/LinearSVR.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L356)

___

### intercept\_scaling

• `Optional` **intercept\_scaling**: `number`

When self.fit\_intercept is `true`, instance vector x becomes \[x, self.intercept\_scaling\], i.e. a “synthetic” feature with constant value equals to intercept\_scaling is appended to the instance vector. The intercept becomes intercept\_scaling \* synthetic feature weight Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept\_scaling has to be increased.

**`Default Value`**

`1`

#### Defined in

[generated/svm/LinearSVR.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L363)

___

### loss

• `Optional` **loss**: ``"epsilon_insensitive"`` \| ``"squared_epsilon_insensitive"``

Specifies the loss function. The epsilon-insensitive loss (standard SVR) is the L1 loss, while the squared epsilon-insensitive loss (‘squared\_epsilon\_insensitive’) is the L2 loss.

**`Default Value`**

`'epsilon_insensitive'`

#### Defined in

[generated/svm/LinearSVR.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L349)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of iterations to be run.

**`Default Value`**

`1000`

#### Defined in

[generated/svm/LinearSVR.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L389)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the pseudo random number generation for shuffling the data. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/svm/LinearSVR.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L382)

___

### tol

• `Optional` **tol**: `number`

Tolerance for stopping criteria.

**`Default Value`**

`0.0001`

#### Defined in

[generated/svm/LinearSVR.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L335)

___

### verbose

• `Optional` **verbose**: `number`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.

**`Default Value`**

`0`

#### Defined in

[generated/svm/LinearSVR.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L377)
