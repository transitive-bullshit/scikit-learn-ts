# Class: ValidationCurveDisplay

Validation Curve visualization.

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.model_selection.ValidationCurveDisplay.from_estimator "sklearn.model_selection.ValidationCurveDisplay.from_estimator") to create a [`ValidationCurveDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.model_selection.ValidationCurveDisplay "sklearn.model_selection.ValidationCurveDisplay") instance. All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](https://scikit-learn.org/stable/modules/generated/../learning_curve.html#validation-curve) regarding the validation curve visualization.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ValidationCurveDisplay.html)

## Constructors

### new ValidationCurveDisplay()

> **new ValidationCurveDisplay**(`opts`?): [`ValidationCurveDisplay`](ValidationCurveDisplay.md)

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.param_name`?

</td>
<td>

`string`

</td>
<td>

Name of the parameter that has been varied.

</td>
</tr>
<tr>
<td>

`opts.param_range`?

</td>
<td>

`ArrayLike`

</td>
<td>

The values of the parameter that have been evaluated.

</td>
</tr>
<tr>
<td>

`opts.score_name`?

</td>
<td>

`string`

</td>
<td>

The name of the score used in `validation_curve`. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `_` by spaces and capitalize the first letter. We remove `neg_` and replace it by `"Negative"` if `negate_score` is `false` or just remove it otherwise.

</td>
</tr>
<tr>
<td>

`opts.test_scores`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Scores on test set.

</td>
</tr>
<tr>
<td>

`opts.train_scores`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Scores on training sets.

</td>
</tr>
</tbody>
</table>

**Returns** [`ValidationCurveDisplay`](ValidationCurveDisplay.md)

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/model\_selection/ValidationCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/model\_selection/ValidationCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/model\_selection/ValidationCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L21) |
| `id` | `string` | `undefined` | [generated/model\_selection/ValidationCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L18) |
| `opts` | `any` | `undefined` | [generated/model\_selection/ValidationCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L19) |

## Accessors

### ax\_

**Get Signature**

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with the validation curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L351)

***

### errorbar\_

**Get Signature**

> **get** **errorbar\_**(): `Promise`\<`any`\>

When the `std_display_style` is `"errorbar"`, this is a list of `matplotlib.container.ErrorbarContainer` objects. If another style is used, `errorbar_` is `undefined`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L405)

***

### figure\_

**Get Signature**

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the validation curve.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L378)

***

### fill\_between\_

**Get Signature**

> **get** **fill\_between\_**(): `Promise`\<`any`\>

When the `std_display_style` is `"fill_between"`, this is a list of `matplotlib.collections.PolyCollection` objects. If another style is used, `fill_between_` is `undefined`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L459)

***

### lines\_

**Get Signature**

> **get** **lines\_**(): `Promise`\<`any`\>

When the `std_display_style` is `"fill_between"`, this is a list of `matplotlib.lines.Line2D` objects corresponding to the mean train and test scores. If another style is used, `line_` is `undefined`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L432)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `void`

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L55)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L111)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Create a validation curve display from an estimator.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](https://scikit-learn.org/stable/modules/generated/../learning_curve.html#validation-curve) regarding the validation curve visualization.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.ax`?

</td>
<td>

`any`

</td>
<td>

Axes object to plot on. If `undefined`, a new figure and axes is created.

</td>
</tr>
<tr>
<td>

`opts.cv`?

</td>
<td>

`number`

</td>
<td>

Determines the cross-validation splitting strategy. Possible inputs for cv are:

</td>
</tr>
<tr>
<td>

`opts.error_score`?

</td>
<td>

`"raise"`

</td>
<td>

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised.

</td>
</tr>
<tr>
<td>

`opts.errorbar_kw`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score.

</td>
</tr>
<tr>
<td>

`opts.estimator`?

</td>
<td>

`any`

</td>
<td>

An object of that type which is cloned for each validation.

</td>
</tr>
<tr>
<td>

`opts.fill_between_kw`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments passed to the `plt.fill_between` used to draw the score standard deviation.

</td>
</tr>
<tr>
<td>

`opts.fit_params`?

</td>
<td>

`any`

</td>
<td>

Parameters to pass to the fit method of the estimator.

</td>
</tr>
<tr>
<td>

`opts.groups`?

</td>
<td>

`ArrayLike`

</td>
<td>

Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")).

</td>
</tr>
<tr>
<td>

`opts.line_kw`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments passed to the `plt.plot` used to draw the mean score.

</td>
</tr>
<tr>
<td>

`opts.n_jobs`?

</td>
<td>

`number`

</td>
<td>

Number of jobs to run in parallel. Training the estimator and computing the score are parallelized over the different training and test sets. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.

</td>
</tr>
<tr>
<td>

`opts.negate_score`?

</td>
<td>

`boolean`

</td>
<td>

Whether or not to negate the scores obtained through [`validation_curve`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.validation_curve.html#sklearn.model_selection.validation_curve "sklearn.model_selection.validation_curve"). This is particularly useful when using the error denoted by `neg_\*` in `scikit-learn`.

</td>
</tr>
<tr>
<td>

`opts.param_name`?

</td>
<td>

`string`

</td>
<td>

Name of the parameter that will be varied.

</td>
</tr>
<tr>
<td>

`opts.param_range`?

</td>
<td>

`ArrayLike`

</td>
<td>

The values of the parameter that will be evaluated.

</td>
</tr>
<tr>
<td>

`opts.pre_dispatch`?

</td>
<td>

`string` \| `number`

</td>
<td>

Number of predispatched jobs for parallel execution (default is all). The option can reduce the allocated memory. The str can be an expression like ‘2\*n_jobs’.

</td>
</tr>
<tr>
<td>

`opts.score_name`?

</td>
<td>

`string`

</td>
<td>

The name of the score used to decorate the y-axis of the plot. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `_` by spaces and capitalize the first letter. We remove `neg_` and replace it by `"Negative"` if `negate_score` is `false` or just remove it otherwise.

</td>
</tr>
<tr>
<td>

`opts.score_type`?

</td>
<td>

`"both"` \| `"test"` \| `"train"`

</td>
<td>

The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.

</td>
</tr>
<tr>
<td>

`opts.scoring`?

</td>
<td>

`string`

</td>
<td>

A string (see [The scoring parameter: defining model evaluation rules](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#scoring-parameter)) or a scorer callable object / function with signature `scorer(estimator, X, y)` (see [Defining your scoring strategy from metric functions](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#scoring)).

</td>
</tr>
<tr>
<td>

`opts.std_display_style`?

</td>
<td>

`"errorbar"` \| `"fill_between"`

</td>
<td>

The style used to display the score standard deviation around the mean score. If `undefined`, no representation of the standard deviation is displayed.

</td>
</tr>
<tr>
<td>

`opts.verbose`?

</td>
<td>

`number`

</td>
<td>

Controls the verbosity: the higher, the more messages.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Training data, where `n_samples` is the number of samples and `n_features` is the number of features.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`

</td>
<td>

Target relative to X for classification or regression; `undefined` for unsupervised learning.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L130)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`void`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L68)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.ax`?

</td>
<td>

`any`

</td>
<td>

Axes object to plot on. If `undefined`, a new figure and axes is created.

</td>
</tr>
<tr>
<td>

`opts.errorbar_kw`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score.

</td>
</tr>
<tr>
<td>

`opts.fill_between_kw`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments passed to the `plt.fill_between` used to draw the score standard deviation.

</td>
</tr>
<tr>
<td>

`opts.line_kw`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments passed to the `plt.plot` used to draw the mean score.

</td>
</tr>
<tr>
<td>

`opts.negate_score`?

</td>
<td>

`boolean`

</td>
<td>

Whether or not to negate the scores obtained through [`validation_curve`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.validation_curve.html#sklearn.model_selection.validation_curve "sklearn.model_selection.validation_curve"). This is particularly useful when using the error denoted by `neg_\*` in `scikit-learn`.

</td>
</tr>
<tr>
<td>

`opts.score_name`?

</td>
<td>

`string`

</td>
<td>

The name of the score used to decorate the y-axis of the plot. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `_` by spaces and capitalize the first letter. We remove `neg_` and replace it by `"Negative"` if `negate_score` is `false` or just remove it otherwise.

</td>
</tr>
<tr>
<td>

`opts.score_type`?

</td>
<td>

`"both"` \| `"test"` \| `"train"`

</td>
<td>

The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.

</td>
</tr>
<tr>
<td>

`opts.std_display_style`?

</td>
<td>

`"errorbar"` \| `"fill_between"`

</td>
<td>

The style used to display the score standard deviation around the mean score. If `undefined`, no standard deviation representation is displayed.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/ValidationCurveDisplay.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/ValidationCurveDisplay.ts#L276)
