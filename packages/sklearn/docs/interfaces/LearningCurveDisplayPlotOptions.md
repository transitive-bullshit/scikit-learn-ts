[sklearn](../readme.md) / [Exports](../modules.md) / LearningCurveDisplayPlotOptions

# Interface: LearningCurveDisplayPlotOptions

## Table of contents

### Properties

- [ax](LearningCurveDisplayPlotOptions.md#ax)
- [errorbar\_kw](LearningCurveDisplayPlotOptions.md#errorbar_kw)
- [fill\_between\_kw](LearningCurveDisplayPlotOptions.md#fill_between_kw)
- [line\_kw](LearningCurveDisplayPlotOptions.md#line_kw)
- [log\_scale](LearningCurveDisplayPlotOptions.md#log_scale)
- [negate\_score](LearningCurveDisplayPlotOptions.md#negate_score)
- [score\_name](LearningCurveDisplayPlotOptions.md#score_name)
- [score\_type](LearningCurveDisplayPlotOptions.md#score_type)
- [std\_display\_style](LearningCurveDisplayPlotOptions.md#std_display_style)

## Properties

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L513)

___

### errorbar\_kw

• `Optional` **errorbar\_kw**: `any`

Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L561)

___

### fill\_between\_kw

• `Optional` **fill\_between\_kw**: `any`

Additional keyword arguments passed to the `plt.fill\_between` used to draw the score standard deviation.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L556)

___

### line\_kw

• `Optional` **line\_kw**: `any`

Additional keyword arguments passed to the `plt.plot` used to draw the mean score.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L551)

___

### log\_scale

• `Optional` **log\_scale**: `boolean`

Whether or not to use a logarithmic scale for the x-axis.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L539)

___

### negate\_score

• `Optional` **negate\_score**: `boolean`

Whether or not to negate the scores obtained through [`learning\_curve`](sklearn.model_selection.learning_curve.html#sklearn.model_selection.learning_curve "sklearn.model_selection.learning_curve"). This is particularly useful when using the error denoted by `neg\_\*` in `scikit-learn`.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L520)

___

### score\_name

• `Optional` **score\_name**: `string`

The name of the score used to decorate the y-axis of the plot. If `undefined`, the generic name “Score” will be used.

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L525)

___

### score\_type

• `Optional` **score\_type**: ``"both"`` \| ``"test"`` \| ``"train"``

The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.

**`Default Value`**

`'test'`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L532)

___

### std\_display\_style

• `Optional` **std\_display\_style**: ``"errorbar"`` \| ``"fill_between"``

The style used to display the score standard deviation around the mean score. If `undefined`, no standard deviation representation is displayed.

**`Default Value`**

`'fill_between'`

#### Defined in

[generated/model_selection/LearningCurveDisplay.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LearningCurveDisplay.ts#L546)
