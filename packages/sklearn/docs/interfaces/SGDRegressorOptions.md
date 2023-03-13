# SGDRegressorOptions

## Properties

### alpha?

> `number`

Constant that multiplies the regularization term. The higher the value, the stronger the regularization. Also used to compute the learning rate when set to `learning\_rate` is set to ‘optimal’.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/SGDRegressor.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L478)

### average?

> `number` \| `boolean`

When set to `true`, computes the averaged SGD weights across all updates and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches `average`. So `average=10` will begin averaging after seeing 10 samples.

#### Default Value

`false`

Defined in:  [generated/linear\_model/SGDRegressor.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L590)

### early\_stopping?

> `boolean`

Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside a fraction of training data as validation and terminate training when validation score returned by the `score` method is not improving by at least `tol` for `n\_iter\_no\_change` consecutive epochs.

#### Default Value

`false`

Defined in:  [generated/linear\_model/SGDRegressor.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L560)

### epsilon?

> `number`

Epsilon in the epsilon-insensitive loss functions; only if `loss` is ‘huber’, ‘epsilon\_insensitive’, or ‘squared\_epsilon\_insensitive’. For ‘huber’, determines the threshold at which it becomes less important to get the prediction exactly right. For epsilon-insensitive, any differences between the current prediction and the correct label are ignored if they are less than this threshold.

#### Default Value

`0.1`

Defined in:  [generated/linear\_model/SGDRegressor.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L527)

### eta0?

> `number`

The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.01.

#### Default Value

`0.01`

Defined in:  [generated/linear\_model/SGDRegressor.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L546)

### fit\_intercept?

> `boolean`

Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

#### Default Value

`true`

Defined in:  [generated/linear\_model/SGDRegressor.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L492)

### l1\_ratio?

> `number`

The Elastic Net mixing parameter, with 0 <= l1\_ratio <= 1. l1\_ratio=0 corresponds to L2 penalty, l1\_ratio=1 to L1. Only used if `penalty` is ‘elasticnet’.

#### Default Value

`0.15`

Defined in:  [generated/linear\_model/SGDRegressor.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L485)

### learning\_rate?

> `string`

The learning rate schedule:

#### Default Value

`'invscaling'`

Defined in:  [generated/linear\_model/SGDRegressor.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L539)

### loss?

> `string`

The loss function to be used. The possible values are ‘squared\_error’, ‘huber’, ‘epsilon\_insensitive’, or ‘squared\_epsilon\_insensitive’

The ‘squared\_error’ refers to the ordinary least squares fit. ‘huber’ modifies ‘squared\_error’ to focus less on getting outliers correct by switching from squared to linear loss past a distance of epsilon. ‘epsilon\_insensitive’ ignores errors less than epsilon and is linear past that; this is the loss function used in SVR. ‘squared\_epsilon\_insensitive’ is the same but becomes squared loss past a tolerance of epsilon.

More details about the losses formulas can be found in the [User Guide](../sgd.html#sgd-mathematical-formulation).

#### Default Value

`'squared_error'`

Defined in:  [generated/linear\_model/SGDRegressor.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L464)

### max\_iter?

> `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.SGDRegressor.partial_fit "sklearn.linear_model.SGDRegressor.partial_fit") method.

#### Default Value

`1000`

Defined in:  [generated/linear\_model/SGDRegressor.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L499)

### n\_iter\_no\_change?

> `number`

Number of iterations with no improvement to wait before stopping fitting. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter.

#### Default Value

`5`

Defined in:  [generated/linear\_model/SGDRegressor.ts:574](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L574)

### penalty?

> `"l1"` \| `"l2"` \| `"elasticnet"`

The penalty (aka regularization term) to be used. Defaults to ‘l2’ which is the standard regularizer for linear SVM models. ‘l1’ and ‘elasticnet’ might bring sparsity to the model (feature selection) not achievable with ‘l2’. No penalty is added when set to `undefined`.

#### Default Value

`'l2'`

Defined in:  [generated/linear\_model/SGDRegressor.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L471)

### power\_t?

> `number`

The exponent for inverse scaling learning rate.

#### Default Value

`0.25`

Defined in:  [generated/linear\_model/SGDRegressor.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L553)

### random\_state?

> `number`

Used for shuffling the data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/linear\_model/SGDRegressor.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L532)

### shuffle?

> `boolean`

Whether or not the training data should be shuffled after each epoch.

#### Default Value

`true`

Defined in:  [generated/linear\_model/SGDRegressor.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L513)

### tol?

> `number`

The stopping criterion. If it is not `undefined`, training will stop when (loss > best\_loss - tol) for `n\_iter\_no\_change` consecutive epochs. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/SGDRegressor.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L506)

### validation\_fraction?

> `number`

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if `early\_stopping` is `true`.

#### Default Value

`0.1`

Defined in:  [generated/linear\_model/SGDRegressor.ts:567](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L567)

### verbose?

> `number`

The verbosity level.

#### Default Value

`0`

Defined in:  [generated/linear\_model/SGDRegressor.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L520)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.

#### Default Value

`false`

Defined in:  [generated/linear\_model/SGDRegressor.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/linear_model/SGDRegressor.ts#L583)
