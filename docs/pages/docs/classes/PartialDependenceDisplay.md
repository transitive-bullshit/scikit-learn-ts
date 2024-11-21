# Class: PartialDependenceDisplay

Partial Dependence Plot (PDP).

This can also display individual partial dependencies which are often referred to as: Individual Condition Expectation (ICE).

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.inspection.PartialDependenceDisplay.from_estimator "sklearn.inspection.PartialDependenceDisplay.from_estimator") to create a [`PartialDependenceDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.inspection.PartialDependenceDisplay "sklearn.inspection.PartialDependenceDisplay"). All parameters are stored as attributes.

Read more in [Advanced Plotting With Partial Dependence](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_partial_dependence_visualization_api.html#sphx-glr-auto-examples-miscellaneous-plot-partial-dependence-visualization-api-py) and the [User Guide](https://scikit-learn.org/stable/modules/generated/../partial_dependence.html#partial-dependence).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.PartialDependenceDisplay.html)

## Constructors

### new PartialDependenceDisplay()

> **new PartialDependenceDisplay**(`opts`?): [`PartialDependenceDisplay`](PartialDependenceDisplay.md)

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

`opts.deciles`?

</td>
<td>

`any`

</td>
<td>

Deciles for feature indices in `features`.

</td>
</tr>
<tr>
<td>

`opts.feature_names`?

</td>
<td>

`any`

</td>
<td>

Feature names corresponding to the indices in `features`.

</td>
</tr>
<tr>
<td>

`opts.features`?

</td>
<td>

`any`

</td>
<td>

Indices of features for a given plot. A tuple of one integer will plot a partial dependence curve of one feature. A tuple of two integers will plot a two-way partial dependence curve as a contour plot.

</td>
</tr>
<tr>
<td>

`opts.is_categorical`?

</td>
<td>

`any`

</td>
<td>

Whether each target feature in `features` is categorical or not. The list should be same size as `features`. If `undefined`, all features are assumed to be continuous.

</td>
</tr>
<tr>
<td>

`opts.kind`?

</td>
<td>

`"average"` \| `"individual"` \| `"both"`

</td>
<td>

Whether to plot the partial dependence averaged across all the samples in the dataset or one line per sample or both.

</td>
</tr>
<tr>
<td>

`opts.pd_results`?

</td>
<td>

`any`

</td>
<td>

Results of [`partial_dependence`](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.partial_dependence.html#sklearn.inspection.partial_dependence "sklearn.inspection.partial_dependence") for `features`.

</td>
</tr>
<tr>
<td>

`opts.random_state`?

</td>
<td>

`number`

</td>
<td>

Controls the randomness of the selected samples when subsamples is not `undefined`. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state) for details.

</td>
</tr>
<tr>
<td>

`opts.subsample`?

</td>
<td>

`number`

</td>
<td>

Sampling for ICE curves when `kind` is ‘individual’ or ‘both’. If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to be used to plot ICE curves. If int, represents the maximum absolute number of samples to use.

Note that the full dataset is still used to calculate partial dependence when `kind='both'`.

</td>
</tr>
<tr>
<td>

`opts.target_idx`?

</td>
<td>

`number`

</td>
<td>

In a multiclass setting, specifies the class for which the PDPs should be computed. Note that for binary classification, the positive class (index 1) is always used.

</td>
</tr>
</tbody>
</table>

**Returns** [`PartialDependenceDisplay`](PartialDependenceDisplay.md)

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/inspection/PartialDependenceDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/inspection/PartialDependenceDisplay.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/inspection/PartialDependenceDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L23) |
| `id` | `string` | `undefined` | [generated/inspection/PartialDependenceDisplay.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L20) |
| `opts` | `any` | `undefined` | [generated/inspection/PartialDependenceDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L21) |

## Accessors

### axes\_

**Get Signature**

> **get** **axes\_**(): `Promise`\<`any`\>

If `ax` is an axes or `undefined`, `axes_\[i, j\]` is the axes on the i-th row and j-th column. If `ax` is a list of axes, `axes_\[i\]` is the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes in that position.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L436)

***

### bars\_

**Get Signature**

> **get** **bars\_**(): `Promise`\<`any`\>

If `ax` is an axes or `undefined`, `bars_\[i, j\]` is the partial dependence bar plot on the i-th row and j-th column (for a categorical feature). If `ax` is a list of axes, `bars_\[i\]` is the partial dependence bar plot corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a bar plot.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L571)

***

### bounding\_ax\_

**Get Signature**

> **get** **bounding\_ax\_**(): `Promise`\<`any`\>

If `ax` is an axes or `undefined`, the `bounding_ax_` is the axes where the grid of partial dependence plots are drawn. If `ax` is a list of axes or a numpy array of axes, `bounding_ax_` is `undefined`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L409)

***

### contours\_

**Get Signature**

> **get** **contours\_**(): `Promise`\<`any`\>

If `ax` is an axes or `undefined`, `contours_\[i, j\]` is the partial dependence plot on the i-th row and j-th column. If `ax` is a list of axes, `contours_\[i\]` is the partial dependence plot corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a contour plot.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L544)

***

### deciles\_hlines\_

**Get Signature**

> **get** **deciles\_hlines\_**(): `Promise`\<`any`\>

If `ax` is an axes or `undefined`, `vlines_\[i, j\]` is the line collection representing the y axis deciles of the i-th row and j-th column. If `ax` is a list of axes, `vlines_\[i\]` corresponds to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a 2-way plot.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L517)

***

### deciles\_vlines\_

**Get Signature**

> **get** **deciles\_vlines\_**(): `Promise`\<`any`\>

If `ax` is an axes or `undefined`, `vlines_\[i, j\]` is the line collection representing the x axis deciles of the i-th row and j-th column. If `ax` is a list of axes, `vlines_\[i\]` corresponds to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a PDP plot.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:490](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L490)

***

### figure\_

**Get Signature**

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing partial dependence plots.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:625](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L625)

***

### heatmaps\_

**Get Signature**

> **get** **heatmaps\_**(): `Promise`\<`any`\>

If `ax` is an axes or `undefined`, `heatmaps_\[i, j\]` is the partial dependence heatmap on the i-th row and j-th column (for a pair of categorical features) . If `ax` is a list of axes, `heatmaps_\[i\]` is the partial dependence heatmap corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a heatmap.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L598)

***

### lines\_

**Get Signature**

> **get** **lines\_**(): `Promise`\<`any`\>

If `ax` is an axes or `undefined`, `lines_\[i, j\]` is the partial dependence curve on the i-th row and j-th column. If `ax` is a list of axes, `lines_\[i\]` is the partial dependence curve corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a line plot.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L463)

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

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L83)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L139)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Partial dependence (PD) and individual conditional expectation (ICE) plots.

Partial dependence plots, individual conditional expectation plots or an overlay of both of them can be plotted by setting the `kind` parameter. The `len(features)` plots are arranged in a grid with `n_cols` columns. Two-way partial dependence plots are plotted as contour plots. The deciles of the feature values will be shown with tick marks on the x-axes for one-way plots, and on both axes for two-way plots.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../partial_dependence.html#partial-dependence).

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

If a single axis is passed in, it is treated as a bounding axes and a grid of partial dependence plots will be drawn within these bounds. The `n_cols` parameter controls the number of columns in the grid.

</td>
</tr>
<tr>
<td>

`opts.categorical_features`?

</td>
<td>

`number` \| `ArrayLike`

</td>
<td>

Indicates the categorical features.

</td>
</tr>
<tr>
<td>

`opts.centered`?

</td>
<td>

`boolean`

</td>
<td>

If `true`, the ICE and PD lines will start at the origin of the y-axis. By default, no centering is done.

</td>
</tr>
<tr>
<td>

`opts.contour_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to the `matplotlib.pyplot.contourf` call. For two-way partial dependence plots.

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

A fitted estimator object implementing [predict](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict), [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba), or [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function). Multioutput-multiclass classifiers are not supported.

</td>
</tr>
<tr>
<td>

`opts.feature_names`?

</td>
<td>

`ArrayLike`

</td>
<td>

Name of each feature; `feature_names\[i\]` holds the name of the feature with index `i`. By default, the name of the feature corresponds to their numerical index for NumPy array and their column name for pandas dataframe.

</td>
</tr>
<tr>
<td>

`opts.features`?

</td>
<td>

`string`

</td>
<td>

The target features for which to create the PDPs. If `features\[i\]` is an integer or a string, a one-way PDP is created; if `features\[i\]` is a tuple, a two-way PDP is created (only supported with `kind='average'`). Each tuple must be of size 2. If any entry is a string, then it must be in `feature_names`.

</td>
</tr>
<tr>
<td>

`opts.grid_resolution`?

</td>
<td>

`number`

</td>
<td>

The number of equally spaced points on the axes of the plots, for each target feature.

</td>
</tr>
<tr>
<td>

`opts.ice_lines_kw`?

</td>
<td>

`any`

</td>
<td>

Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For ICE lines in the one-way partial dependence plots. The key value pairs defined in `ice_lines_kw` takes priority over `line_kw`.

</td>
</tr>
<tr>
<td>

`opts.kind`?

</td>
<td>

`"average"` \| `"individual"` \| `"both"`

</td>
<td>

Whether to plot the partial dependence averaged across all the samples in the dataset or one line per sample or both.

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

Dict with keywords passed to the `matplotlib.pyplot.plot` call. For one-way partial dependence plots. It can be used to define common properties for both `ice_lines_kw` and `pdp_line_kw`.

</td>
</tr>
<tr>
<td>

`opts.method`?

</td>
<td>

`string`

</td>
<td>

The method used to calculate the averaged predictions:

</td>
</tr>
<tr>
<td>

`opts.n_cols`?

</td>
<td>

`number`

</td>
<td>

The maximum number of columns in the grid plot. Only active when `ax` is a single axis or `undefined`.

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

The number of CPUs to use to compute the partial dependences. Computation is parallelized over features specified by the `features` parameter.

`undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.

</td>
</tr>
<tr>
<td>

`opts.pd_line_kw`?

</td>
<td>

`any`

</td>
<td>

Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For partial dependence in one-way partial dependence plots. The key value pairs defined in `pd_line_kw` takes priority over `line_kw`.

</td>
</tr>
<tr>
<td>

`opts.percentiles`?

</td>
<td>

`any`

</td>
<td>

The lower and upper percentile used to create the extreme values for the PDP axes. Must be in \[0, 1\].

</td>
</tr>
<tr>
<td>

`opts.random_state`?

</td>
<td>

`number`

</td>
<td>

Controls the randomness of the selected samples when subsamples is not `undefined` and `kind` is either `'both'` or `'individual'`. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state) for details.

</td>
</tr>
<tr>
<td>

`opts.response_method`?

</td>
<td>

`"auto"` \| `"predict_proba"` \| `"decision_function"`

</td>
<td>

Specifies whether to use [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) or [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) as the target response. For regressors this parameter is ignored and the response is always the output of [predict](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict). By default, [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) is tried first and we revert to [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) if it doesn’t exist. If `method` is `'recursion'`, the response is always the output of [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function).

</td>
</tr>
<tr>
<td>

`opts.sample_weight`?

</td>
<td>

`ArrayLike`

</td>
<td>

Sample weights are used to calculate weighted means when averaging the model output. If `undefined`, then samples are equally weighted. If `sample_weight` is not `undefined`, then `method` will be set to `'brute'`. Note that `sample_weight` is ignored for `kind='individual'`.

</td>
</tr>
<tr>
<td>

`opts.subsample`?

</td>
<td>

`number`

</td>
<td>

Sampling for ICE curves when `kind` is ‘individual’ or ‘both’. If `float`, should be between 0.0 and 1.0 and represent the proportion of the dataset to be used to plot ICE curves. If `int`, represents the absolute number samples to use.

Note that the full dataset is still used to calculate averaged partial dependence when `kind='both'`.

</td>
</tr>
<tr>
<td>

`opts.target`?

</td>
<td>

`number`

</td>
<td>

In a multiclass setting, specifies the class for which the PDPs should be computed. Note that for binary classification, the positive class (index 1) is always used.

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

Verbose output during PD computations.

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

`X` is used to generate a grid of values for the target `features` (where the partial dependence will be evaluated), and also to generate values for the complement features when the `method` is `'brute'`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L160)

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

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L96)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot partial dependence plots.

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

and a grid of partial dependence plots will be drawn within these bounds. The `n_cols` parameter controls the number of columns in the grid.

</td>
</tr>
<tr>
<td>

`opts.bar_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to the `matplotlib.pyplot.bar` call for one-way categorical partial dependence plots.

</td>
</tr>
<tr>
<td>

`opts.centered`?

</td>
<td>

`boolean`

</td>
<td>

If `true`, the ICE and PD lines will start at the origin of the y-axis. By default, no centering is done.

</td>
</tr>
<tr>
<td>

`opts.contour_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to the `matplotlib.pyplot.contourf` call for two-way partial dependence plots.

</td>
</tr>
<tr>
<td>

`opts.heatmap_kw`?

</td>
<td>

`any`

</td>
<td>

Dict with keywords passed to the `matplotlib.pyplot.imshow` call for two-way categorical partial dependence plots.

</td>
</tr>
<tr>
<td>

`opts.ice_lines_kw`?

</td>
<td>

`any`

</td>
<td>

Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For ICE lines in the one-way partial dependence plots. The key value pairs defined in `ice_lines_kw` takes priority over `line_kw`.

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

Dict with keywords passed to the `matplotlib.pyplot.plot` call. For one-way partial dependence plots.

</td>
</tr>
<tr>
<td>

`opts.n_cols`?

</td>
<td>

`number`

</td>
<td>

The maximum number of columns in the grid plot. Only active when `ax` is a single axes or `undefined`.

</td>
</tr>
<tr>
<td>

`opts.pd_line_kw`?

</td>
<td>

`any`

</td>
<td>

Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For partial dependence in one-way partial dependence plots. The key value pairs defined in `pd_line_kw` takes priority over `line_kw`.

</td>
</tr>
<tr>
<td>

`opts.pdp_lim`?

</td>
<td>

`any`

</td>
<td>

Global min and max average predictions, such that all plots will have the same scale and y limits. `pdp_lim\[1\]` is the global min and max for single partial dependence curves. `pdp_lim\[2\]` is the global min and max for two-way partial dependence curves. If `undefined` (default), the limit will be inferred from the global minimum and maximum of all predictions.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/inspection/PartialDependenceDisplay.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/inspection/PartialDependenceDisplay.ts#L326)
