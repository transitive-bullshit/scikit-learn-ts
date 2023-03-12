[sklearn](../readme.md) / [Exports](../modules.md) / PerceptronOptions

# Interface: PerceptronOptions

## Table of contents

### Properties

- [alpha](PerceptronOptions.md#alpha)
- [class\_weight](PerceptronOptions.md#class_weight)
- [early\_stopping](PerceptronOptions.md#early_stopping)
- [eta0](PerceptronOptions.md#eta0)
- [fit\_intercept](PerceptronOptions.md#fit_intercept)
- [l1\_ratio](PerceptronOptions.md#l1_ratio)
- [max\_iter](PerceptronOptions.md#max_iter)
- [n\_iter\_no\_change](PerceptronOptions.md#n_iter_no_change)
- [n\_jobs](PerceptronOptions.md#n_jobs)
- [penalty](PerceptronOptions.md#penalty)
- [random\_state](PerceptronOptions.md#random_state)
- [shuffle](PerceptronOptions.md#shuffle)
- [tol](PerceptronOptions.md#tol)
- [validation\_fraction](PerceptronOptions.md#validation_fraction)
- [verbose](PerceptronOptions.md#verbose)
- [warm\_start](PerceptronOptions.md#warm_start)

## Properties

### alpha

• `Optional` **alpha**: `number`

Constant that multiplies the regularization term if regularization is used.

**`Default Value`**

`0.0001`

#### Defined in

[generated/linear_model/Perceptron.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L538)

___

### class\_weight

• `Optional` **class\_weight**: `any`

Preset for the class\_weight fit parameter.

Weights associated with classes. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

#### Defined in

[generated/linear_model/Perceptron.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L629)

___

### early\_stopping

• `Optional` **early\_stopping**: `boolean`

Whether to use early stopping to terminate training when validation. score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least tol for n\_iter\_no\_change consecutive epochs.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/Perceptron.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L606)

___

### eta0

• `Optional` **eta0**: `number`

Constant by which the updates are multiplied.

**`Default Value`**

`1`

#### Defined in

[generated/linear_model/Perceptron.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L587)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/Perceptron.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L552)

___

### l1\_ratio

• `Optional` **l1\_ratio**: `number`

The Elastic Net mixing parameter, with `0 <= l1\_ratio <= 1`. `l1\_ratio=0` corresponds to L2 penalty, `l1\_ratio=1` to L1. Only used if `penalty='elasticnet'`.

**`Default Value`**

`0.15`

#### Defined in

[generated/linear_model/Perceptron.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L545)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.Perceptron.partial_fit "sklearn.linear_model.Perceptron.partial_fit") method.

**`Default Value`**

`1000`

#### Defined in

[generated/linear_model/Perceptron.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L559)

___

### n\_iter\_no\_change

• `Optional` **n\_iter\_no\_change**: `number`

Number of iterations with no improvement to wait before early stopping.

**`Default Value`**

`5`

#### Defined in

[generated/linear_model/Perceptron.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L620)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/linear_model/Perceptron.ts:592](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L592)

___

### penalty

• `Optional` **penalty**: ``"l1"`` \| ``"l2"`` \| ``"elasticnet"``

The penalty (aka regularization term) to be used.

#### Defined in

[generated/linear_model/Perceptron.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L531)

___

### random\_state

• `Optional` **random\_state**: `number`

Used to shuffle the training data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

**`Default Value`**

`0`

#### Defined in

[generated/linear_model/Perceptron.ts:599](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L599)

___

### shuffle

• `Optional` **shuffle**: `boolean`

Whether or not the training data should be shuffled after each epoch.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/Perceptron.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L573)

___

### tol

• `Optional` **tol**: `number`

The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol).

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/Perceptron.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L566)

___

### validation\_fraction

• `Optional` **validation\_fraction**: `number`

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.

**`Default Value`**

`0.1`

#### Defined in

[generated/linear_model/Perceptron.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L613)

___

### verbose

• `Optional` **verbose**: `number`

The verbosity level.

**`Default Value`**

`0`

#### Defined in

[generated/linear_model/Perceptron.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L580)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/Perceptron.ts:636](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Perceptron.ts#L636)
