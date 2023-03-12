[sklearn](../readme.md) / [Exports](../modules.md) / LearningCurveDisplayFromEstimatorOptions

# Interface: LearningCurveDisplayFromEstimatorOptions

## Table of contents

### Properties

- [X](LearningCurveDisplayFromEstimatorOptions.md#x)
- [ax](LearningCurveDisplayFromEstimatorOptions.md#ax)
- [cv](LearningCurveDisplayFromEstimatorOptions.md#cv)
- [error\_score](LearningCurveDisplayFromEstimatorOptions.md#error_score)
- [errorbar\_kw](LearningCurveDisplayFromEstimatorOptions.md#errorbar_kw)
- [estimator](LearningCurveDisplayFromEstimatorOptions.md#estimator)
- [exploit\_incremental\_learning](LearningCurveDisplayFromEstimatorOptions.md#exploit_incremental_learning)
- [fill\_between\_kw](LearningCurveDisplayFromEstimatorOptions.md#fill_between_kw)
- [fit\_params](LearningCurveDisplayFromEstimatorOptions.md#fit_params)
- [groups](LearningCurveDisplayFromEstimatorOptions.md#groups)
- [line\_kw](LearningCurveDisplayFromEstimatorOptions.md#line_kw)
- [log\_scale](LearningCurveDisplayFromEstimatorOptions.md#log_scale)
- [n\_jobs](LearningCurveDisplayFromEstimatorOptions.md#n_jobs)
- [negate\_score](LearningCurveDisplayFromEstimatorOptions.md#negate_score)
- [pre\_dispatch](LearningCurveDisplayFromEstimatorOptions.md#pre_dispatch)
- [random\_state](LearningCurveDisplayFromEstimatorOptions.md#random_state)
- [score\_name](LearningCurveDisplayFromEstimatorOptions.md#score_name)
- [score\_type](LearningCurveDisplayFromEstimatorOptions.md#score_type)
- [scoring](LearningCurveDisplayFromEstimatorOptions.md#scoring)
- [shuffle](LearningCurveDisplayFromEstimatorOptions.md#shuffle)
- [std\_display\_style](LearningCurveDisplayFromEstimatorOptions.md#std_display_style)
- [train\_sizes](LearningCurveDisplayFromEstimatorOptions.md#train_sizes)
- [verbose](LearningCurveDisplayFromEstimatorOptions.md#verbose)
- [y](LearningCurveDisplayFromEstimatorOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L380)

___

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L458)

___

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L400)

___

### error\_score

• `Optional` **error\_score**: ``"raise"``

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L448)

___

### errorbar\_kw

• `Optional` **errorbar\_kw**: `any`

Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L506)

___

### estimator

• `Optional` **estimator**: `any`

An object of that type which is cloned for each validation.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L375)

___

### exploit\_incremental\_learning

• `Optional` **exploit\_incremental\_learning**: `boolean`

If the estimator supports incremental learning, this will be used to speed up fitting for different training set sizes.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L412)

___

### fill\_between\_kw

• `Optional` **fill\_between\_kw**: `any`

Additional keyword arguments passed to the `plt.fill\_between` used to draw the score standard deviation.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L501)

___

### fit\_params

• `Optional` **fit\_params**: `any`

Parameters to pass to the fit method of the estimator.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L453)

___

### groups

• `Optional` **groups**: [`ArrayLike`](../modules.md#arraylike)

Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")).

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L390)

___

### line\_kw

• `Optional` **line\_kw**: `any`

Additional keyword arguments passed to the `plt.plot` used to draw the mean score.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L496)

___

### log\_scale

• `Optional` **log\_scale**: `boolean`

Whether or not to use a logarithmic scale for the x-axis.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L484)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of jobs to run in parallel. Training the estimator and computing the score are parallelized over the different training and test sets. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L417)

___

### negate\_score

• `Optional` **negate\_score**: `boolean`

Whether or not to negate the scores obtained through [`learning\_curve`](sklearn.model_selection.learning_curve.html#sklearn.model_selection.learning_curve "sklearn.model_selection.learning_curve"). This is particularly useful when using the error denoted by `neg\_\*` in `scikit-learn`.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L465)

___

### pre\_dispatch

• `Optional` **pre\_dispatch**: `string` \| `number`

Number of predispatched jobs for parallel execution (default is all). The option can reduce the allocated memory. The str can be an expression like ‘2\*n\_jobs’.

**`Default Value`**

`'all'`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L424)

___

### random\_state

• `Optional` **random\_state**: `number`

Used when `shuffle` is `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L443)

___

### score\_name

• `Optional` **score\_name**: `string`

The name of the score used to decorate the y-axis of the plot. If `undefined`, the generic `"Score"` name will be used.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L470)

___

### score\_type

• `Optional` **score\_type**: ``"both"`` \| ``"test"`` \| ``"train"``

The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.

**`Default Value`**

`'test'`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L477)

___

### scoring

• `Optional` **scoring**: `string`

A string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a scorer callable object / function with signature `scorer(estimator, X, y)` (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)).

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L405)

___

### shuffle

• `Optional` **shuffle**: `boolean`

Whether to shuffle training data before taking prefixes of it based on`train\_sizes`.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L438)

___

### std\_display\_style

• `Optional` **std\_display\_style**: ``"errorbar"`` \| ``"fill_between"``

The style used to display the score standard deviation around the mean score. If `undefined`, no representation of the standard deviation is displayed.

**`Default Value`**

`'fill_between'`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L491)

___

### train\_sizes

• `Optional` **train\_sizes**: [`ArrayLike`](../modules.md#arraylike)

Relative or absolute numbers of training examples that will be used to generate the learning curve. If the dtype is float, it is regarded as a fraction of the maximum size of the training set (that is determined by the selected validation method), i.e. it has to be within (0, 1\]. Otherwise it is interpreted as absolute sizes of the training sets. Note that for classification the number of samples usually have to be big enough to contain at least one sample from each class.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L395)

___

### verbose

• `Optional` **verbose**: `number`

Controls the verbosity: the higher, the more messages.

**`Default Value`**

`0`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L431)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target relative to X for classification or regression; `undefined` for unsupervised learning.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L385)
