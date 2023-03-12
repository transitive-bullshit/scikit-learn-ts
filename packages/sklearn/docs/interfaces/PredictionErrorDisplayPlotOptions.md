[sklearn](../readme.md) / [Exports](../modules.md) / PredictionErrorDisplayPlotOptions

# Interface: PredictionErrorDisplayPlotOptions

## Table of contents

### Properties

- [ax](PredictionErrorDisplayPlotOptions.md#ax)
- [kind](PredictionErrorDisplayPlotOptions.md#kind)
- [line\_kwargs](PredictionErrorDisplayPlotOptions.md#line_kwargs)
- [scatter\_kwargs](PredictionErrorDisplayPlotOptions.md#scatter_kwargs)

## Properties

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L480)

___

### kind

• `Optional` **kind**: ``"actual_vs_predicted"`` \| ``"residual_vs_predicted"``

The type of plot to draw:

**`Default Value`**

`'residual_vs_predicted'`

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L487)

___

### line\_kwargs

• `Optional` **line\_kwargs**: `any`

Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line.

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L497)

___

### scatter\_kwargs

• `Optional` **scatter\_kwargs**: `any`

Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call.

#### Defined in

[generated/metrics/PredictionErrorDisplay.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/metrics/PredictionErrorDisplay.ts#L492)
