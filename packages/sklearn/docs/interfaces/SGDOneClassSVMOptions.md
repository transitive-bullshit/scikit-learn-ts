[sklearn](../readme.md) / [Exports](../modules.md) / SGDOneClassSVMOptions

# Interface: SGDOneClassSVMOptions

## Table of contents

### Properties

- [average](SGDOneClassSVMOptions.md#average)
- [eta0](SGDOneClassSVMOptions.md#eta0)
- [fit\_intercept](SGDOneClassSVMOptions.md#fit_intercept)
- [learning\_rate](SGDOneClassSVMOptions.md#learning_rate)
- [max\_iter](SGDOneClassSVMOptions.md#max_iter)
- [nu](SGDOneClassSVMOptions.md#nu)
- [power\_t](SGDOneClassSVMOptions.md#power_t)
- [random\_state](SGDOneClassSVMOptions.md#random_state)
- [shuffle](SGDOneClassSVMOptions.md#shuffle)
- [tol](SGDOneClassSVMOptions.md#tol)
- [verbose](SGDOneClassSVMOptions.md#verbose)
- [warm\_start](SGDOneClassSVMOptions.md#warm_start)

## Properties

### average

• `Optional` **average**: `number` \| `boolean`

When set to `true`, computes the averaged SGD weights and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So `average=10` will begin averaging after seeing 10 samples.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L605)

___

### eta0

• `Optional` **eta0**: `number`

The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.0 as eta0 is not used by the default schedule ‘optimal’.

**`Default Value`**

`0`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L582)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether the intercept should be estimated or not. Defaults to `true`.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L535)

___

### learning\_rate

• `Optional` **learning\_rate**: ``"constant"`` \| ``"optimal"`` \| ``"invscaling"`` \| ``"adaptive"``

The learning rate schedule to use with `fit`. (If using `partial\_fit`, learning rate must be controlled directly).

**`Default Value`**

`'optimal'`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L575)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the `partial\_fit`. Defaults to 1000.

**`Default Value`**

`1000`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L542)

___

### nu

• `Optional` **nu**: `number`

The nu parameter of the One Class SVM: an upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.

**`Default Value`**

`0.5`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L528)

___

### power\_t

• `Optional` **power\_t**: `number`

The exponent for inverse scaling learning rate \[default 0.5\].

**`Default Value`**

`0.5`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L589)

___

### random\_state

• `Optional` **random\_state**: `number`

The seed of the pseudo random number generator to use when shuffling the data. If int, random\_state is the seed used by the random number generator; If RandomState instance, random\_state is the random number generator; If `undefined`, the random number generator is the RandomState instance used by `np.random`.

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L568)

___

### shuffle

• `Optional` **shuffle**: `boolean`

Whether or not the training data should be shuffled after each epoch. Defaults to `true`.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L556)

___

### tol

• `Optional` **tol**: `number`

The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol). Defaults to 1e-3.

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:549](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L549)

___

### verbose

• `Optional` **verbose**: `number`

The verbosity level.

**`Default Value`**

`0`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L563)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L598)
