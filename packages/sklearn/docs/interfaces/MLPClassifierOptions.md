[sklearn](../readme.md) / [Exports](../modules.md) / MLPClassifierOptions

# Interface: MLPClassifierOptions

## Table of contents

### Properties

- [activation](MLPClassifierOptions.md#activation)
- [alpha](MLPClassifierOptions.md#alpha)
- [batch\_size](MLPClassifierOptions.md#batch_size)
- [beta\_1](MLPClassifierOptions.md#beta_1)
- [beta\_2](MLPClassifierOptions.md#beta_2)
- [early\_stopping](MLPClassifierOptions.md#early_stopping)
- [epsilon](MLPClassifierOptions.md#epsilon)
- [hidden\_layer\_sizes](MLPClassifierOptions.md#hidden_layer_sizes)
- [learning\_rate](MLPClassifierOptions.md#learning_rate)
- [learning\_rate\_init](MLPClassifierOptions.md#learning_rate_init)
- [max\_fun](MLPClassifierOptions.md#max_fun)
- [max\_iter](MLPClassifierOptions.md#max_iter)
- [momentum](MLPClassifierOptions.md#momentum)
- [n\_iter\_no\_change](MLPClassifierOptions.md#n_iter_no_change)
- [nesterovs\_momentum](MLPClassifierOptions.md#nesterovs_momentum)
- [power\_t](MLPClassifierOptions.md#power_t)
- [random\_state](MLPClassifierOptions.md#random_state)
- [shuffle](MLPClassifierOptions.md#shuffle)
- [solver](MLPClassifierOptions.md#solver)
- [tol](MLPClassifierOptions.md#tol)
- [validation\_fraction](MLPClassifierOptions.md#validation_fraction)
- [verbose](MLPClassifierOptions.md#verbose)
- [warm\_start](MLPClassifierOptions.md#warm_start)

## Properties

### activation

• `Optional` **activation**: ``"identity"`` \| ``"logistic"`` \| ``"tanh"`` \| ``"relu"``

Activation function for the hidden layer.

**`Default Value`**

`'relu'`

#### Defined in

[generated/neural_network/MLPClassifier.ts:690](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L690)

___

### alpha

• `Optional` **alpha**: `number`

Strength of the L2 regularization term. The L2 regularization term is divided by the sample size when added to the loss.

**`Default Value`**

`0.0001`

#### Defined in

[generated/neural_network/MLPClassifier.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L704)

___

### batch\_size

• `Optional` **batch\_size**: `number`

Size of minibatches for stochastic optimizers. If the solver is ‘lbfgs’, the classifier will not use minibatch. When set to “auto”, `batch\_size=min(200, n\_samples)`.

**`Default Value`**

`'auto'`

#### Defined in

[generated/neural_network/MLPClassifier.ts:711](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L711)

___

### beta\_1

• `Optional` **beta\_1**: `number`

Exponential decay rate for estimates of first moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.

**`Default Value`**

`0.9`

#### Defined in

[generated/neural_network/MLPClassifier.ts:807](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L807)

___

### beta\_2

• `Optional` **beta\_2**: `number`

Exponential decay rate for estimates of second moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.

**`Default Value`**

`0.999`

#### Defined in

[generated/neural_network/MLPClassifier.ts:814](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L814)

___

### early\_stopping

• `Optional` **early\_stopping**: `boolean`

Whether to use early stopping to terminate training when validation score is not improving. If set to true, it will automatically set aside 10% of training data as validation and terminate training when validation score is not improving by at least tol for `n\_iter\_no\_change` consecutive epochs. The split is stratified, except in a multilabel setting. If early stopping is `false`, then the training stops when the training loss does not improve by more than tol for n\_iter\_no\_change consecutive passes over the training set. Only effective when solver=’sgd’ or ‘adam’.

**`Default Value`**

`false`

#### Defined in

[generated/neural_network/MLPClassifier.ts:793](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L793)

___

### epsilon

• `Optional` **epsilon**: `number`

Value for numerical stability in adam. Only used when solver=’adam’.

**`Default Value`**

`1e-8`

#### Defined in

[generated/neural_network/MLPClassifier.ts:821](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L821)

___

### hidden\_layer\_sizes

• `Optional` **hidden\_layer\_sizes**: `any`

The ith element represents the number of neurons in the ith hidden layer.

#### Defined in

[generated/neural_network/MLPClassifier.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L683)

___

### learning\_rate

• `Optional` **learning\_rate**: ``"constant"`` \| ``"invscaling"`` \| ``"adaptive"``

Learning rate schedule for weight updates.

**`Default Value`**

`'constant'`

#### Defined in

[generated/neural_network/MLPClassifier.ts:718](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L718)

___

### learning\_rate\_init

• `Optional` **learning\_rate\_init**: `number`

The initial learning rate used. It controls the step-size in updating the weights. Only used when solver=’sgd’ or ‘adam’.

**`Default Value`**

`0.001`

#### Defined in

[generated/neural_network/MLPClassifier.ts:725](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L725)

___

### max\_fun

• `Optional` **max\_fun**: `number`

Only used when solver=’lbfgs’. Maximum number of loss function calls. The solver iterates until convergence (determined by ‘tol’), number of iterations reaches max\_iter, or this number of loss function calls. Note that number of loss function calls will be greater than or equal to the number of iterations for the `MLPClassifier`.

**`Default Value`**

`15000`

#### Defined in

[generated/neural_network/MLPClassifier.ts:835](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L835)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations. The solver iterates until convergence (determined by ‘tol’) or this number of iterations. For stochastic solvers (‘sgd’, ‘adam’), note that this determines the number of epochs (how many times each data point will be used), not the number of gradient steps.

**`Default Value`**

`200`

#### Defined in

[generated/neural_network/MLPClassifier.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L739)

___

### momentum

• `Optional` **momentum**: `number`

Momentum for gradient descent update. Should be between 0 and 1. Only used when solver=’sgd’.

**`Default Value`**

`0.9`

#### Defined in

[generated/neural_network/MLPClassifier.ts:779](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L779)

___

### n\_iter\_no\_change

• `Optional` **n\_iter\_no\_change**: `number`

Maximum number of epochs to not meet `tol` improvement. Only effective when solver=’sgd’ or ‘adam’.

**`Default Value`**

`10`

#### Defined in

[generated/neural_network/MLPClassifier.ts:828](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L828)

___

### nesterovs\_momentum

• `Optional` **nesterovs\_momentum**: `boolean`

Whether to use Nesterov’s momentum. Only used when solver=’sgd’ and momentum > 0.

**`Default Value`**

`true`

#### Defined in

[generated/neural_network/MLPClassifier.ts:786](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L786)

___

### power\_t

• `Optional` **power\_t**: `number`

The exponent for inverse scaling learning rate. It is used in updating effective learning rate when the learning\_rate is set to ‘invscaling’. Only used when solver=’sgd’.

**`Default Value`**

`0.5`

#### Defined in

[generated/neural_network/MLPClassifier.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L732)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines random number generation for weights and bias initialization, train-test split if early stopping is used, and batch sampling when solver=’sgd’ or ‘adam’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/neural_network/MLPClassifier.ts:751](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L751)

___

### shuffle

• `Optional` **shuffle**: `boolean`

Whether to shuffle samples in each iteration. Only used when solver=’sgd’ or ‘adam’.

**`Default Value`**

`true`

#### Defined in

[generated/neural_network/MLPClassifier.ts:746](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L746)

___

### solver

• `Optional` **solver**: ``"lbfgs"`` \| ``"sgd"`` \| ``"adam"``

The solver for weight optimization.

**`Default Value`**

`'adam'`

#### Defined in

[generated/neural_network/MLPClassifier.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L697)

___

### tol

• `Optional` **tol**: `number`

Tolerance for the optimization. When the loss or score is not improving by at least `tol` for `n\_iter\_no\_change` consecutive iterations, unless `learning\_rate` is set to ‘adaptive’, convergence is considered to be reached and training stops.

**`Default Value`**

`0.0001`

#### Defined in

[generated/neural_network/MLPClassifier.ts:758](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L758)

___

### validation\_fraction

• `Optional` **validation\_fraction**: `number`

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.

**`Default Value`**

`0.1`

#### Defined in

[generated/neural_network/MLPClassifier.ts:800](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L800)

___

### verbose

• `Optional` **verbose**: `boolean`

Whether to print progress messages to stdout.

**`Default Value`**

`false`

#### Defined in

[generated/neural_network/MLPClassifier.ts:765](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L765)

___

### warm\_start

• `Optional` **warm\_start**: `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

**`Default Value`**

`false`

#### Defined in

[generated/neural_network/MLPClassifier.ts:772](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neural_network/MLPClassifier.ts#L772)
