[sklearn](../readme.md) / [Exports](../modules.md) / PassiveAggressiveClassifierOptions

# Interface: PassiveAggressiveClassifierOptions

## Table of contents

### Properties

- [C](PassiveAggressiveClassifierOptions.md#c)
- [average](PassiveAggressiveClassifierOptions.md#average)
- [class\_weight](PassiveAggressiveClassifierOptions.md#class_weight)
- [early\_stopping](PassiveAggressiveClassifierOptions.md#early_stopping)
- [fit\_intercept](PassiveAggressiveClassifierOptions.md#fit_intercept)
- [loss](PassiveAggressiveClassifierOptions.md#loss)
- [max\_iter](PassiveAggressiveClassifierOptions.md#max_iter)
- [n\_iter\_no\_change](PassiveAggressiveClassifierOptions.md#n_iter_no_change)
- [n\_jobs](PassiveAggressiveClassifierOptions.md#n_jobs)
- [random\_state](PassiveAggressiveClassifierOptions.md#random_state)
- [shuffle](PassiveAggressiveClassifierOptions.md#shuffle)
- [tol](PassiveAggressiveClassifierOptions.md#tol)
- [validation\_fraction](PassiveAggressiveClassifierOptions.md#validation_fraction)
- [verbose](PassiveAggressiveClassifierOptions.md#verbose)
- [warm\_start](PassiveAggressiveClassifierOptions.md#warm_start)

## Properties

### C

• `Optional` **C**: `number`

Maximum step size (regularization). Defaults to 1.0.

**`Default Value`**

`1`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L597)

___

### average

• `Optional` **average**: `number` \| `boolean`

When set to `true`, computes the averaged SGD weights and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So average=10 will begin averaging after seeing 10 samples.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:695](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L695)

___

### class\_weight

• `Optional` **class\_weight**: `any`

Preset for the class\_weight fit parameter.

Weights associated with classes. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:688](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L688)

___

### early\_stopping

• `Optional` **early\_stopping**: `boolean`

Whether to use early stopping to terminate training when validation. score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least tol for n\_iter\_no\_change consecutive epochs.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L625)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L604)

___

### loss

• `Optional` **loss**: `string`

The loss function to be used: hinge: equivalent to PA-I in the reference paper. squared\_hinge: equivalent to PA-II in the reference paper.

**`Default Value`**

`'hinge'`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L660)

___

### max\_iter

• `Optional` **max\_iter**: `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.PassiveAggressiveClassifier.partial_fit "sklearn.linear_model.PassiveAggressiveClassifier.partial_fit") method.

**`Default Value`**

`1000`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L611)

___

### n\_iter\_no\_change

• `Optional` **n\_iter\_no\_change**: `number`

Number of iterations with no improvement to wait before early stopping.

**`Default Value`**

`5`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L639)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L665)

___

### random\_state

• `Optional` **random\_state**: `number`

Used to shuffle the training data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L670)

___

### shuffle

• `Optional` **shuffle**: `boolean`

Whether or not the training data should be shuffled after each epoch.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L646)

___

### tol

• `Optional` **tol**: `number`

The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol).

**`Default Value`**

`0.001`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L618)

___

### validation\_fraction

• `Optional` **validation\_fraction**: `number`

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.

**`Default Value`**

`0.1`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L632)

___

### verbose

• `Optional` **verbose**: `number`

The verbosity level.

**`Default Value`**

`0`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L653)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/PassiveAggressiveClassifier.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PassiveAggressiveClassifier.ts#L679)