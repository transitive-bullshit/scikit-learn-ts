[sklearn](../readme.md) / [Exports](../modules.md) / DecisionBoundaryDisplayPlotOptions

# Interface: DecisionBoundaryDisplayPlotOptions

## Table of contents

### Properties

- [ax](DecisionBoundaryDisplayPlotOptions.md#ax)
- [kwargs](DecisionBoundaryDisplayPlotOptions.md#kwargs)
- [plot\_method](DecisionBoundaryDisplayPlotOptions.md#plot_method)
- [xlabel](DecisionBoundaryDisplayPlotOptions.md#xlabel)
- [ylabel](DecisionBoundaryDisplayPlotOptions.md#ylabel)

## Properties

### ax

• `Optional` **ax**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L368)

___

### kwargs

• `Optional` **kwargs**: `any`

Additional keyword arguments to be passed to the `plot\_method`.

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L383)

___

### plot\_method

• `Optional` **plot\_method**: ``"contourf"`` \| ``"contour"`` \| ``"pcolormesh"``

Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.7.1)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.7.1)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.7.1)").

**`Default Value`**

`'contourf'`

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L363)

___

### xlabel

• `Optional` **xlabel**: `string`

Overwrite the x-axis label.

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L373)

___

### ylabel

• `Optional` **ylabel**: `string`

Overwrite the y-axis label.

#### Defined in

[generated/inspection/DecisionBoundaryDisplay.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/inspection/DecisionBoundaryDisplay.ts#L378)
