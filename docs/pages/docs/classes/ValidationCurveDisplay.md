# Class: ValidationCurveDisplay

Validation Curve visualization.

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.model_selection.ValidationCurveDisplay.from_estimator "sklearn.model_selection.ValidationCurveDisplay.from_estimator") to create a [`ValidationCurveDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.model_selection.ValidationCurveDisplay "sklearn.model_selection.ValidationCurveDisplay") instance. All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](https://scikit-learn.org/stable/modules/generated/../learning_curve.html#validation-curve) regarding the validation curve visualization.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ValidationCurveDisplay.html)

## Constructors

### new ValidationCurveDisplay()

> **new ValidationCurveDisplay**(`opts`?): [`ValidationCurveDisplay`](ValidationCurveDisplay.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.param_name`? | `string` | Name of the parameter that has been varied. |
| `opts.param_range`? | `ArrayLike` | The values of the parameter that have been evaluated. |
| `opts.score_name`? | `string` | The name of the score used in `validation_curve`. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `_` by spaces and capitalize the first letter. We remove `neg_` and replace it by `"Negative"` if `negate_score` is `false` or just remove it otherwise. |
| `opts.test_scores`? | `ArrayLike`[] | Scores on test set. |
| `opts.train_scores`? | `ArrayLike`[] | Scores on training sets. |

**Returns** [`ValidationCurveDisplay`](ValidationCurveDisplay.md)

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/model\_selection/ValidationCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/model\_selection/ValidationCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/model\_selection/ValidationCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L21) |
| `id` | `string` | `undefined` | [generated/model\_selection/ValidationCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L18) |
| `opts` | `any` | `undefined` | [generated/model\_selection/ValidationCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L19) |

## Accessors

### ax\_

**Get Signature**

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with the validation curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L351)

***

### errorbar\_

**Get Signature**

> **get** **errorbar\_**(): `Promise`\<`any`\>

When the `std_display_style` is `"errorbar"`, this is a list of `matplotlib.container.ErrorbarContainer` objects. If another style is used, `errorbar_` is `undefined`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L405)

***

### figure\_

**Get Signature**

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the validation curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L378)

***

### fill\_between\_

**Get Signature**

> **get** **fill\_between\_**(): `Promise`\<`any`\>

When the `std_display_style` is `"fill_between"`, this is a list of `matplotlib.collections.PolyCollection` objects. If another style is used, `fill_between_` is `undefined`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L459)

***

### lines\_

**Get Signature**

> **get** **lines\_**(): `Promise`\<`any`\>

When the `std_display_style` is `"fill_between"`, this is a list of `matplotlib.lines.Line2D` objects corresponding to the mean train and test scores. If another style is used, `line_` is `undefined`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L432)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L55)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L111)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Create a validation curve display from an estimator.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](https://scikit-learn.org/stable/modules/generated/../learning_curve.html#validation-curve) regarding the validation curve visualization.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.cv`? | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.error_score`? | `"raise"` | Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. |
| `opts.errorbar_kw`? | `any` | Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score. |
| `opts.estimator`? | `any` | An object of that type which is cloned for each validation. |
| `opts.fill_between_kw`? | `any` | Additional keyword arguments passed to the `plt.fill_between` used to draw the score standard deviation. |
| `opts.fit_params`? | `any` | Parameters to pass to the fit method of the estimator. |
| `opts.groups`? | `ArrayLike` | Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")). |
| `opts.line_kw`? | `any` | Additional keyword arguments passed to the `plt.plot` used to draw the mean score. |
| `opts.n_jobs`? | `number` | Number of jobs to run in parallel. Training the estimator and computing the score are parallelized over the different training and test sets. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.negate_score`? | `boolean` | Whether or not to negate the scores obtained through [`validation_curve`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.validation_curve.html#sklearn.model_selection.validation_curve "sklearn.model_selection.validation_curve"). This is particularly useful when using the error denoted by `neg_\*` in `scikit-learn`. |
| `opts.param_name`? | `string` | Name of the parameter that will be varied. |
| `opts.param_range`? | `ArrayLike` | The values of the parameter that will be evaluated. |
| `opts.pre_dispatch`? | `string` \| `number` | Number of predispatched jobs for parallel execution (default is all). The option can reduce the allocated memory. The str can be an expression like ‘2\*n_jobs’. |
| `opts.score_name`? | `string` | The name of the score used to decorate the y-axis of the plot. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `_` by spaces and capitalize the first letter. We remove `neg_` and replace it by `"Negative"` if `negate_score` is `false` or just remove it otherwise. |
| `opts.score_type`? | `"both"` \| `"test"` \| `"train"` | The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`. |
| `opts.scoring`? | `string` | A string (see [The scoring parameter: defining model evaluation rules](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#scoring-parameter)) or a scorer callable object / function with signature `scorer(estimator, X, y)` (see [Defining your scoring strategy from metric functions](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#scoring)). |
| `opts.std_display_style`? | `"errorbar"` \| `"fill_between"` | The style used to display the score standard deviation around the mean score. If `undefined`, no representation of the standard deviation is displayed. |
| `opts.verbose`? | `number` | Controls the verbosity: the higher, the more messages. |
| `opts.X`? | `ArrayLike`[] | Training data, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `ArrayLike` | Target relative to X for classification or regression; `undefined` for unsupervised learning. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L130)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L68)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.ax`? | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.errorbar_kw`? | `any` | Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score. |
| `opts.fill_between_kw`? | `any` | Additional keyword arguments passed to the `plt.fill_between` used to draw the score standard deviation. |
| `opts.line_kw`? | `any` | Additional keyword arguments passed to the `plt.plot` used to draw the mean score. |
| `opts.negate_score`? | `boolean` | Whether or not to negate the scores obtained through [`validation_curve`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.validation_curve.html#sklearn.model_selection.validation_curve "sklearn.model_selection.validation_curve"). This is particularly useful when using the error denoted by `neg_\*` in `scikit-learn`. |
| `opts.score_name`? | `string` | The name of the score used to decorate the y-axis of the plot. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `_` by spaces and capitalize the first letter. We remove `neg_` and replace it by `"Negative"` if `negate_score` is `false` or just remove it otherwise. |
| `opts.score_type`? | `"both"` \| `"test"` \| `"train"` | The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`. |
| `opts.std_display_style`? | `"errorbar"` \| `"fill_between"` | The style used to display the score standard deviation around the mean score. If `undefined`, no standard deviation representation is displayed. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L276)
