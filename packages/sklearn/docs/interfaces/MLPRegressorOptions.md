# MLPRegressorOptions

## Properties

### activation?

> `"identity"` \| `"logistic"` \| `"tanh"` \| `"relu"`

Activation function for the hidden layer.

#### Default Value

`'relu'`

Defined in:  [generated/neural\_network/MLPRegressor.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L601)

### alpha?

> `number`

Strength of the L2 regularization term. The L2 regularization term is divided by the sample size when added to the loss.

#### Default Value

`0.0001`

Defined in:  [generated/neural\_network/MLPRegressor.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L615)

### batch\_size?

> `number`

Size of minibatches for stochastic optimizers. If the solver is ‘lbfgs’, the regressor will not use minibatch. When set to “auto”, `batch\_size=min(200, n\_samples)`.

#### Default Value

`'auto'`

Defined in:  [generated/neural\_network/MLPRegressor.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L622)

### beta\_1?

> `number`

Exponential decay rate for estimates of first moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.

#### Default Value

`0.9`

Defined in:  [generated/neural\_network/MLPRegressor.ts:718](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L718)

### beta\_2?

> `number`

Exponential decay rate for estimates of second moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.

#### Default Value

`0.999`

Defined in:  [generated/neural\_network/MLPRegressor.ts:725](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L725)

### early\_stopping?

> `boolean`

Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside `validation\_fraction` of training data as validation and terminate training when validation score is not improving by at least `tol` for `n\_iter\_no\_change` consecutive epochs. Only effective when solver=’sgd’ or ‘adam’.

#### Default Value

`false`

Defined in:  [generated/neural\_network/MLPRegressor.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L704)

### epsilon?

> `number`

Value for numerical stability in adam. Only used when solver=’adam’.

#### Default Value

`1e-8`

Defined in:  [generated/neural\_network/MLPRegressor.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L732)

### hidden\_layer\_sizes?

> `any`

The ith element represents the number of neurons in the ith hidden layer.

Defined in:  [generated/neural\_network/MLPRegressor.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L594)

### learning\_rate?

> `"constant"` \| `"invscaling"` \| `"adaptive"`

Learning rate schedule for weight updates.

#### Default Value

`'constant'`

Defined in:  [generated/neural\_network/MLPRegressor.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L629)

### learning\_rate\_init?

> `number`

The initial learning rate used. It controls the step-size in updating the weights. Only used when solver=’sgd’ or ‘adam’.

#### Default Value

`0.001`

Defined in:  [generated/neural\_network/MLPRegressor.ts:636](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L636)

### max\_fun?

> `number`

Only used when solver=’lbfgs’. Maximum number of function calls. The solver iterates until convergence (determined by `tol`), number of iterations reaches max\_iter, or this number of function calls. Note that number of function calls will be greater than or equal to the number of iterations for the MLPRegressor.

#### Default Value

`15000`

Defined in:  [generated/neural\_network/MLPRegressor.ts:746](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L746)

### max\_iter?

> `number`

Maximum number of iterations. The solver iterates until convergence (determined by ‘tol’) or this number of iterations. For stochastic solvers (‘sgd’, ‘adam’), note that this determines the number of epochs (how many times each data point will be used), not the number of gradient steps.

#### Default Value

`200`

Defined in:  [generated/neural\_network/MLPRegressor.ts:650](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L650)

### momentum?

> `number`

Momentum for gradient descent update. Should be between 0 and 1. Only used when solver=’sgd’.

#### Default Value

`0.9`

Defined in:  [generated/neural\_network/MLPRegressor.ts:690](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L690)

### n\_iter\_no\_change?

> `number`

Maximum number of epochs to not meet `tol` improvement. Only effective when solver=’sgd’ or ‘adam’.

#### Default Value

`10`

Defined in:  [generated/neural\_network/MLPRegressor.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L739)

### nesterovs\_momentum?

> `boolean`

Whether to use Nesterov’s momentum. Only used when solver=’sgd’ and momentum > 0.

#### Default Value

`true`

Defined in:  [generated/neural\_network/MLPRegressor.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L697)

### power\_t?

> `number`

The exponent for inverse scaling learning rate. It is used in updating effective learning rate when the learning\_rate is set to ‘invscaling’. Only used when solver=’sgd’.

#### Default Value

`0.5`

Defined in:  [generated/neural\_network/MLPRegressor.ts:643](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L643)

### random\_state?

> `number`

Determines random number generation for weights and bias initialization, train-test split if early stopping is used, and batch sampling when solver=’sgd’ or ‘adam’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/neural\_network/MLPRegressor.ts:662](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L662)

### shuffle?

> `boolean`

Whether to shuffle samples in each iteration. Only used when solver=’sgd’ or ‘adam’.

#### Default Value

`true`

Defined in:  [generated/neural\_network/MLPRegressor.ts:657](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L657)

### solver?

> `"lbfgs"` \| `"sgd"` \| `"adam"`

The solver for weight optimization.

#### Default Value

`'adam'`

Defined in:  [generated/neural\_network/MLPRegressor.ts:608](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L608)

### tol?

> `number`

Tolerance for the optimization. When the loss or score is not improving by at least `tol` for `n\_iter\_no\_change` consecutive iterations, unless `learning\_rate` is set to ‘adaptive’, convergence is considered to be reached and training stops.

#### Default Value

`0.0001`

Defined in:  [generated/neural\_network/MLPRegressor.ts:669](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L669)

### validation\_fraction?

> `number`

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.

#### Default Value

`0.1`

Defined in:  [generated/neural\_network/MLPRegressor.ts:711](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L711)

### verbose?

> `boolean`

Whether to print progress messages to stdout.

#### Default Value

`false`

Defined in:  [generated/neural\_network/MLPRegressor.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L676)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

#### Default Value

`false`

Defined in:  [generated/neural\_network/MLPRegressor.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neural_network/MLPRegressor.ts#L683)
