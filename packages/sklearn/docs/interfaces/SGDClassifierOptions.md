# SGDClassifierOptions

## Properties

### alpha?

> `number`

Constant that multiplies the regularization term. The higher the value, the stronger the regularization. Also used to compute the learning rate when `learning\_rate` is set to ‘optimal’. Values must be in the range `\[0.0, inf)`.

#### Default Value

`0.0001`

Defined in:  [generated/linear\_model/SGDClassifier.ts:640](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L640)

### average?

> `number` \| `boolean`

When set to `true`, computes the averaged SGD weights across all updates and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches `average`. So `average=10` will begin averaging after seeing 10 samples. Integer values must be in the range `\[1, n\_samples\]`.

#### Default Value

`false`

Defined in:  [generated/linear\_model/SGDClassifier.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L766)

### class\_weight?

> `any`

Preset for the class\_weight fit parameter.

Weights associated with classes. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

Defined in:  [generated/linear\_model/SGDClassifier.ts:750](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L750)

### early\_stopping?

> `boolean`

Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score returned by the `score` method is not improving by at least tol for n\_iter\_no\_change consecutive epochs.

#### Default Value

`false`

Defined in:  [generated/linear\_model/SGDClassifier.ts:727](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L727)

### epsilon?

> `number`

Epsilon in the epsilon-insensitive loss functions; only if `loss` is ‘huber’, ‘epsilon\_insensitive’, or ‘squared\_epsilon\_insensitive’. For ‘huber’, determines the threshold at which it becomes less important to get the prediction exactly right. For epsilon-insensitive, any differences between the current prediction and the correct label are ignored if they are less than this threshold. Values must be in the range `\[0.0, inf)`.

#### Default Value

`0.1`

Defined in:  [generated/linear\_model/SGDClassifier.ts:689](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L689)

### eta0?

> `number`

The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.0 as eta0 is not used by the default schedule ‘optimal’. Values must be in the range `(0.0, inf)`.

#### Default Value

`0`

Defined in:  [generated/linear\_model/SGDClassifier.ts:713](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L713)

### fit\_intercept?

> `boolean`

Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

#### Default Value

`true`

Defined in:  [generated/linear\_model/SGDClassifier.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L654)

### l1\_ratio?

> `number`

The Elastic Net mixing parameter, with 0 <= l1\_ratio <= 1. l1\_ratio=0 corresponds to L2 penalty, l1\_ratio=1 to L1. Only used if `penalty` is ‘elasticnet’. Values must be in the range `\[0.0, 1.0\]`.

#### Default Value

`0.15`

Defined in:  [generated/linear\_model/SGDClassifier.ts:647](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L647)

### learning\_rate?

> `string`

The learning rate schedule:

#### Default Value

`'optimal'`

Defined in:  [generated/linear\_model/SGDClassifier.ts:706](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L706)

### loss?

> `"log"` \| `"log_loss"` \| `"squared_error"` \| `"huber"` \| `"hinge"` \| `"modified_huber"` \| `"squared_hinge"` \| `"perceptron"` \| `"epsilon_insensitive"` \| `"squared_epsilon_insensitive"`

The loss function to be used.

#### Default Value

`'hinge'`

Defined in:  [generated/linear\_model/SGDClassifier.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L616)

### max\_iter?

> `number`

The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.SGDClassifier.partial_fit "sklearn.linear_model.SGDClassifier.partial_fit") method. Values must be in the range `\[1, inf)`.

#### Default Value

`1000`

Defined in:  [generated/linear\_model/SGDClassifier.ts:661](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L661)

### n\_iter\_no\_change?

> `number`

Number of iterations with no improvement to wait before stopping fitting. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter. Integer values must be in the range `\[1, max\_iter)`.

#### Default Value

`5`

Defined in:  [generated/linear\_model/SGDClassifier.ts:741](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L741)

### n\_jobs?

> `number`

The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/linear\_model/SGDClassifier.ts:694](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L694)

### penalty?

> `"l1"` \| `"l2"` \| `"elasticnet"`

The penalty (aka regularization term) to be used. Defaults to ‘l2’ which is the standard regularizer for linear SVM models. ‘l1’ and ‘elasticnet’ might bring sparsity to the model (feature selection) not achievable with ‘l2’. No penalty is added when set to `undefined`.

#### Default Value

`'l2'`

Defined in:  [generated/linear\_model/SGDClassifier.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L633)

### power\_t?

> `number`

The exponent for inverse scaling learning rate \[default 0.5\]. Values must be in the range `(-inf, inf)`.

#### Default Value

`0.5`

Defined in:  [generated/linear\_model/SGDClassifier.ts:720](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L720)

### random\_state?

> `number`

Used for shuffling the data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). Integer values must be in the range `\[0, 2\*\*32 \- 1\]`.

Defined in:  [generated/linear\_model/SGDClassifier.ts:699](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L699)

### shuffle?

> `boolean`

Whether or not the training data should be shuffled after each epoch.

#### Default Value

`true`

Defined in:  [generated/linear\_model/SGDClassifier.ts:675](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L675)

### tol?

> `number`

The stopping criterion. If it is not `undefined`, training will stop when (loss > best\_loss - tol) for `n\_iter\_no\_change` consecutive epochs. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter. Values must be in the range `\[0.0, inf)`.

#### Default Value

`0.001`

Defined in:  [generated/linear\_model/SGDClassifier.ts:668](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L668)

### validation\_fraction?

> `number`

The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if `early\_stopping` is `true`. Values must be in the range `(0.0, 1.0)`.

#### Default Value

`0.1`

Defined in:  [generated/linear\_model/SGDClassifier.ts:734](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L734)

### verbose?

> `number`

The verbosity level. Values must be in the range `\[0, inf)`.

#### Default Value

`0`

Defined in:  [generated/linear\_model/SGDClassifier.ts:682](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L682)

### warm\_start?

> `boolean`

When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.

#### Default Value

`false`

Defined in:  [generated/linear\_model/SGDClassifier.ts:759](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/linear_model/SGDClassifier.ts#L759)
