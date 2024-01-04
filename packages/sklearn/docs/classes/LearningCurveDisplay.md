# LearningCurveDisplay

Learning Curve visualization.

It is recommended to use [`from\_estimator`](#sklearn.model_selection.LearningCurveDisplay.from_estimator "sklearn.model_selection.LearningCurveDisplay.from_estimator") to create a [`LearningCurveDisplay`](#sklearn.model_selection.LearningCurveDisplay "sklearn.model_selection.LearningCurveDisplay") instance. All parameters are stored as attributes.

Read more in the [User Guide](../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](../learning_curve.html#learning-curve) regarding the learning curve visualization.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LearningCurveDisplay.html)

## Constructors

## constructor()

### Signature

```ts
new LearningCurveDisplay(opts?: object): LearningCurveDisplay;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.score_name?` | `string` | The name of the score used in `learning\_curve`. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate\_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `\_` by spaces and capitalize the first letter. We remove `neg\_` and replace it by `"Negative"` if `negate\_score` is `false` or just remove it otherwise. |
| `opts.test_scores?` | [`ArrayLike`](../types/ArrayLike.md)[] | Scores on test set. |
| `opts.train_scores?` | [`ArrayLike`](../types/ArrayLike.md)[] | Scores on training sets. |
| `opts.train_sizes?` | [`ArrayLike`](../types/ArrayLike.md) | Numbers of training examples that has been used to generate the learning curve. |

### Returns

[`LearningCurveDisplay`](LearningCurveDisplay.md)

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L117)

### from\_estimator()

Create a learning curve display from an estimator.

Read more in the [User Guide](../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](../learning_curve.html#learning-curve) regarding the learning curve visualization.

#### Signature

```ts
from_estimator(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.cv?` | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.error_score?` | `"raise"` | Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. |
| `opts.errorbar_kw?` | `any` | Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score. |
| `opts.estimator?` | `any` | An object of that type which is cloned for each validation. |
| `opts.exploit_incremental_learning?` | `boolean` | If the estimator supports incremental learning, this will be used to speed up fitting for different training set sizes.  `Default Value`  `false` |
| `opts.fill_between_kw?` | `any` | Additional keyword arguments passed to the `plt.fill\_between` used to draw the score standard deviation. |
| `opts.fit_params?` | `any` | Parameters to pass to the fit method of the estimator. |
| `opts.groups?` | [`ArrayLike`](../types/ArrayLike.md) | Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")). |
| `opts.line_kw?` | `any` | Additional keyword arguments passed to the `plt.plot` used to draw the mean score. |
| `opts.log_scale?` | `boolean` | Whether or not to use a logarithmic scale for the x-axis.  `Default Value`  `'deprecated'` |
| `opts.n_jobs?` | `number` | Number of jobs to run in parallel. Training the estimator and computing the score are parallelized over the different training and test sets. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.negate_score?` | `boolean` | Whether or not to negate the scores obtained through [`learning\_curve`](sklearn.model_selection.learning_curve.html#sklearn.model_selection.learning_curve "sklearn.model_selection.learning_curve"). This is particularly useful when using the error denoted by `neg\_\*` in `scikit-learn`.  `Default Value`  `false` |
| `opts.pre_dispatch?` | `string` \| `number` | Number of predispatched jobs for parallel execution (default is all). The option can reduce the allocated memory. The str can be an expression like ‘2\*n\_jobs’.  `Default Value`  `'all'` |
| `opts.random_state?` | `number` | Used when `shuffle` is `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.score_name?` | `string` | The name of the score used to decorate the y-axis of the plot. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate\_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `\_` by spaces and capitalize the first letter. We remove `neg\_` and replace it by `"Negative"` if `negate\_score` is `false` or just remove it otherwise. |
| `opts.score_type?` | `"both"` \| `"test"` \| `"train"` | The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.  `Default Value`  `'both'` |
| `opts.scoring?` | `string` | A string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a scorer callable object / function with signature `scorer(estimator, X, y)` (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)). |
| `opts.shuffle?` | `boolean` | Whether to shuffle training data before taking prefixes of it based on`train\_sizes`.  `Default Value`  `false` |
| `opts.std_display_style?` | `"errorbar"` \| `"fill_between"` | The style used to display the score standard deviation around the mean score. If `undefined`, no representation of the standard deviation is displayed.  `Default Value`  `'fill_between'` |
| `opts.train_sizes?` | [`ArrayLike`](../types/ArrayLike.md) | Relative or absolute numbers of training examples that will be used to generate the learning curve. If the dtype is float, it is regarded as a fraction of the maximum size of the training set (that is determined by the selected validation method), i.e. it has to be within (0, 1\]. Otherwise it is interpreted as absolute sizes of the training sets. Note that for classification the number of samples usually have to be big enough to contain at least one sample from each class. |
| `opts.verbose?` | `number` | Controls the verbosity: the higher, the more messages.  `Default Value`  `0` |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target relative to X for classification or regression; `undefined` for unsupervised learning. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L136)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L63)

### plot()

Plot visualization.

#### Signature

```ts
plot(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.ax?` | `any` | Axes object to plot on. If `undefined`, a new figure and axes is created. |
| `opts.errorbar_kw?` | `any` | Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score. |
| `opts.fill_between_kw?` | `any` | Additional keyword arguments passed to the `plt.fill\_between` used to draw the score standard deviation. |
| `opts.line_kw?` | `any` | Additional keyword arguments passed to the `plt.plot` used to draw the mean score. |
| `opts.log_scale?` | `boolean` | Whether or not to use a logarithmic scale for the x-axis.  `Default Value`  `'deprecated'` |
| `opts.negate_score?` | `boolean` | Whether or not to negate the scores obtained through [`learning\_curve`](sklearn.model_selection.learning_curve.html#sklearn.model_selection.learning_curve "sklearn.model_selection.learning_curve"). This is particularly useful when using the error denoted by `neg\_\*` in `scikit-learn`.  `Default Value`  `false` |
| `opts.score_name?` | `string` | The name of the score used to decorate the y-axis of the plot. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate\_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `\_` by spaces and capitalize the first letter. We remove `neg\_` and replace it by `"Negative"` if `negate\_score` is `false` or just remove it otherwise. |
| `opts.score_type?` | `"both"` \| `"test"` \| `"train"` | The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.  `Default Value`  `'both'` |
| `opts.std_display_style?` | `"errorbar"` \| `"fill_between"` | The style used to display the score standard deviation around the mean score. If `undefined`, no standard deviation representation is displayed.  `Default Value`  `'fill_between'` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L334)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L21)

### id

> `string`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L18)

### opts

> `any`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L19)

## Accessors

### ax\_

Axes with the learning curve.

#### Signature

```ts
ax_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L425)

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L425)

### errorbar\_

When the `std\_display\_style` is `"errorbar"`, this is a list of `matplotlib.container.ErrorbarContainer` objects. If another style is used, `errorbar\_` is `undefined`.

#### Signature

```ts
errorbar_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L479)

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L479)

### figure\_

Figure containing the learning curve.

#### Signature

```ts
figure_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L452)

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L452)

### fill\_between\_

When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.collections.PolyCollection` objects. If another style is used, `fill\_between\_` is `undefined`.

#### Signature

```ts
fill_between_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L533)

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L533)

### lines\_

When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.lines.Line2D` objects corresponding to the mean train and test scores. If another style is used, `line\_` is `undefined`.

#### Signature

```ts
lines_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L506)

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L506)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L50)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L54)

Defined in:  [generated/model\_selection/LearningCurveDisplay.ts:50](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L50) [generated/model\_selection/LearningCurveDisplay.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L54)
