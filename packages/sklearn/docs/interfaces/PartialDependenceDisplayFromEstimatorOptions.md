[sklearn](../readme.md) / [Exports](../modules.md) / PartialDependenceDisplayFromEstimatorOptions

# Interface: PartialDependenceDisplayFromEstimatorOptions

## Table of contents

### Properties

- [X](PartialDependenceDisplayFromEstimatorOptions.md#x)
- [ax](PartialDependenceDisplayFromEstimatorOptions.md#ax)
- [categorical\_features](PartialDependenceDisplayFromEstimatorOptions.md#categorical_features)
- [centered](PartialDependenceDisplayFromEstimatorOptions.md#centered)
- [contour\_kw](PartialDependenceDisplayFromEstimatorOptions.md#contour_kw)
- [estimator](PartialDependenceDisplayFromEstimatorOptions.md#estimator)
- [feature\_names](PartialDependenceDisplayFromEstimatorOptions.md#feature_names)
- [features](PartialDependenceDisplayFromEstimatorOptions.md#features)
- [grid\_resolution](PartialDependenceDisplayFromEstimatorOptions.md#grid_resolution)
- [ice\_lines\_kw](PartialDependenceDisplayFromEstimatorOptions.md#ice_lines_kw)
- [kind](PartialDependenceDisplayFromEstimatorOptions.md#kind)
- [line\_kw](PartialDependenceDisplayFromEstimatorOptions.md#line_kw)
- [method](PartialDependenceDisplayFromEstimatorOptions.md#method)
- [n\_cols](PartialDependenceDisplayFromEstimatorOptions.md#n_cols)
- [n\_jobs](PartialDependenceDisplayFromEstimatorOptions.md#n_jobs)
- [pd\_line\_kw](PartialDependenceDisplayFromEstimatorOptions.md#pd_line_kw)
- [percentiles](PartialDependenceDisplayFromEstimatorOptions.md#percentiles)
- [random\_state](PartialDependenceDisplayFromEstimatorOptions.md#random_state)
- [response\_method](PartialDependenceDisplayFromEstimatorOptions.md#response_method)
- [subsample](PartialDependenceDisplayFromEstimatorOptions.md#subsample)
- [target](PartialDependenceDisplayFromEstimatorOptions.md#target)
- [verbose](PartialDependenceDisplayFromEstimatorOptions.md#verbose)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

`X` is used to generate a grid of values for the target `features` (where the partial dependence will be evaluated), and also to generate values for the complement features when the `method` is `'brute'`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L527)

___

### ax

• `Optional` **ax**: `any`

If a single axis is passed in, it is treated as a bounding axes and a grid of partial dependence plots will be drawn within these bounds. The `n\_cols` parameter controls the number of columns in the grid.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L619)

___

### categorical\_features

• `Optional` **categorical\_features**: `number` \| [`ArrayLike`](../modules.md#arraylike)

Indicates the categorical features.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L537)

___

### centered

• `Optional` **centered**: `boolean`

If `true`, the ICE and PD lines will start at the origin of the y-axis. By default, no centering is done.

**`Default Value`**

`false`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L633)

___

### contour\_kw

• `Optional` **contour\_kw**: `any`

Dict with keywords passed to the `matplotlib.pyplot.contourf` call. For two-way partial dependence plots.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L614)

___

### estimator

• `Optional` **estimator**: `any`

A fitted estimator object implementing [predict](../../glossary.html#term-predict), [predict\_proba](../../glossary.html#term-predict_proba), or [decision\_function](../../glossary.html#term-decision_function). Multioutput-multiclass classifiers are not supported.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L522)

___

### feature\_names

• `Optional` **feature\_names**: [`ArrayLike`](../modules.md#arraylike)

Name of each feature; `feature\_names\[i\]` holds the name of the feature with index `i`. By default, the name of the feature corresponds to their numerical index for NumPy array and their column name for pandas dataframe.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L542)

___

### features

• `Optional` **features**: `string`

The target features for which to create the PDPs. If `features\[i\]` is an integer or a string, a one-way PDP is created; if `features\[i\]` is a tuple, a two-way PDP is created (only supported with `kind='average'`). Each tuple must be of size 2. If any entry is a string, then it must be in `feature\_names`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L532)

___

### grid\_resolution

• `Optional` **grid\_resolution**: `number`

The number of equally spaced points on the axes of the plots, for each target feature.

**`Default Value`**

`100`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L568)

___

### ice\_lines\_kw

• `Optional` **ice\_lines\_kw**: `any`

Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For ICE lines in the one-way partial dependence plots. The key value pairs defined in `ice\_lines\_kw` takes priority over `line\_kw`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L604)

___

### kind

• `Optional` **kind**: ``"average"`` \| ``"individual"`` \| ``"both"``

Whether to plot the partial dependence averaged across all the samples in the dataset or one line per sample or both.

**`Default Value`**

`'average'`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L626)

___

### line\_kw

• `Optional` **line\_kw**: `any`

Dict with keywords passed to the `matplotlib.pyplot.plot` call. For one-way partial dependence plots. It can be used to define common properties for both `ice\_lines\_kw` and `pdp\_line\_kw`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:599](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L599)

___

### method

• `Optional` **method**: `string`

The method used to calculate the averaged predictions:

**`Default Value`**

`'auto'`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L580)

___

### n\_cols

• `Optional` **n\_cols**: `number`

The maximum number of columns in the grid plot. Only active when `ax` is a single axis or `undefined`.

**`Default Value`**

`3`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L561)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of CPUs to use to compute the partial dependences. Computation is parallelized over features specified by the `features` parameter.

`undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L587)

___

### pd\_line\_kw

• `Optional` **pd\_line\_kw**: `any`

Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For partial dependence in one-way partial dependence plots. The key value pairs defined in `pd\_line\_kw` takes priority over `line\_kw`.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L609)

___

### percentiles

• `Optional` **percentiles**: `any`

The lower and upper percentile used to create the extreme values for the PDP axes. Must be in \[0, 1\].

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L573)

___

### random\_state

• `Optional` **random\_state**: `number`

Controls the randomness of the selected samples when subsamples is not `undefined` and `kind` is either `'both'` or `'individual'`. See [Glossary](../../glossary.html#term-random_state) for details.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:647](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L647)

___

### response\_method

• `Optional` **response\_method**: ``"auto"`` \| ``"predict_proba"`` \| ``"decision_function"``

Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. For regressors this parameter is ignored and the response is always the output of [predict](../../glossary.html#term-predict). By default, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and we revert to [decision\_function](../../glossary.html#term-decision_function) if it doesn’t exist. If `method` is `'recursion'`, the response is always the output of [decision\_function](../../glossary.html#term-decision_function).

**`Default Value`**

`'auto'`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L554)

___

### subsample

• `Optional` **subsample**: `number`

Sampling for ICE curves when `kind` is ‘individual’ or ‘both’. If `float`, should be between 0.0 and 1.0 and represent the proportion of the dataset to be used to plot ICE curves. If `int`, represents the absolute number samples to use.

Note that the full dataset is still used to calculate averaged partial dependence when `kind='both'`.

**`Default Value`**

`1000`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L642)

___

### target

• `Optional` **target**: `number`

In a multiclass setting, specifies the class for which the PDPs should be computed. Note that for binary classification, the positive class (index 1) is always used.

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L547)

___

### verbose

• `Optional` **verbose**: `number`

Verbose output during PD computations.

**`Default Value`**

`0`

#### Defined in

[generated/inspection/PartialDependenceDisplay.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L594)