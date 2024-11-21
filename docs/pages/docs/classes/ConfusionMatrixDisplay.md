**sklearn** • **Docs**

***

Confusion Matrix visualization.

It is recommend to use [`from\_estimator`](#sklearn.metrics.ConfusionMatrixDisplay.from_estimator "sklearn.metrics.ConfusionMatrixDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.ConfusionMatrixDisplay.from_predictions "sklearn.metrics.ConfusionMatrixDisplay.from_predictions") to create a [`ConfusionMatrixDisplay`](#sklearn.metrics.ConfusionMatrixDisplay "sklearn.metrics.ConfusionMatrixDisplay"). All parameters are stored as attributes.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.ConfusionMatrixDisplay.html)

## Constructors

### new ConfusionMatrixDisplay()

> **new ConfusionMatrixDisplay**(`opts`?): [`ConfusionMatrixDisplay`](ConfusionMatrixDisplay.md)

#### Parameters

• **opts?**

• **opts.confusion\_matrix?**: `ArrayLike`[]

Confusion matrix.

• **opts.display\_labels?**: `ArrayLike`

Display labels for plot. If `undefined`, display labels are set from 0 to `n\_classes \- 1`.

#### Returns

[`ConfusionMatrixDisplay`](ConfusionMatrixDisplay.md)

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L19)

## Accessors

### ax\_

#### Get Signature

> **get** **ax\_**(): `Promise`\<`any`\>

Axes with confusion matrix.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L471)

***

### figure\_

#### Get Signature

> **get** **figure\_**(): `Promise`\<`any`\>

Figure containing the confusion matrix.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L498)

***

### im\_

#### Get Signature

> **get** **im\_**(): `Promise`\<`any`\>

Image representing the confusion matrix.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L417)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L40)

***

### text\_

#### Get Signature

> **get** **text\_**(): `Promise`\<`ArrayLike`[]\>

Array of matplotlib axes. `undefined` if `include\_values` is false.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L444)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L96)

***

### from\_estimator()

> **from\_estimator**(`opts`): `Promise`\<`any`\>

Plot Confusion Matrix given an estimator and some data.

Read more in the User Guide.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.cmap?**: `string`

Colormap recognized by matplotlib.

**Default Value**

`'viridis'`

• **opts.colorbar?**: `boolean`

Whether or not to add a colorbar to the plot.

**Default Value**

`true`

• **opts.display\_labels?**: `ArrayLike`

Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used.

• **opts.estimator?**: `any`

Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.

• **opts.im\_kw?**: `any`

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

• **opts.include\_values?**: `boolean`

Includes values in confusion matrix.

**Default Value**

`true`

• **opts.labels?**: `ArrayLike`

List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order.

• **opts.normalize?**: `"all"` \| `"true"` \| `"pred"`

Either to normalize the counts display in the matrix:

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.text\_kw?**: `any`

Dict with keywords passed to `matplotlib.pyplot.text` call.

• **opts.values\_format?**: `string`

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

• **opts.X?**: `ArrayLike`

Input values.

• **opts.xticks\_rotation?**: `number` \| `"vertical"` \| `"horizontal"`

Rotation of xtick labels.

**Default Value**

`'horizontal'`

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L115)

***

### from\_predictions()

> **from\_predictions**(`opts`): `Promise`\<`any`\>

Plot Confusion Matrix given true and predicted labels.

Read more in the User Guide.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.cmap?**: `string`

Colormap recognized by matplotlib.

**Default Value**

`'viridis'`

• **opts.colorbar?**: `boolean`

Whether or not to add a colorbar to the plot.

**Default Value**

`true`

• **opts.display\_labels?**: `ArrayLike`

Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used.

• **opts.im\_kw?**: `any`

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

• **opts.include\_values?**: `boolean`

Includes values in confusion matrix.

**Default Value**

`true`

• **opts.labels?**: `ArrayLike`

List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `undefined` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order.

• **opts.normalize?**: `"all"` \| `"true"` \| `"pred"`

Either to normalize the counts display in the matrix:

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.text\_kw?**: `any`

Dict with keywords passed to `matplotlib.pyplot.text` call.

• **opts.values\_format?**: `string`

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

• **opts.xticks\_rotation?**: `number` \| `"vertical"` \| `"horizontal"`

Rotation of xtick labels.

**Default Value**

`'horizontal'`

• **opts.y\_pred?**: `ArrayLike`

The predicted labels given by the method `predict` of an classifier.

• **opts.y\_true?**: `ArrayLike`

True labels.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L231)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L53)

***

### plot()

> **plot**(`opts`): `Promise`\<`any`\>

Plot visualization.

#### Parameters

• **opts**

• **opts.ax?**: `any`

Axes object to plot on. If `undefined`, a new figure and axes is created.

• **opts.cmap?**: `string`

Colormap recognized by matplotlib.

**Default Value**

`'viridis'`

• **opts.colorbar?**: `boolean`

Whether or not to add a colorbar to the plot.

**Default Value**

`true`

• **opts.im\_kw?**: `any`

Dict with keywords passed to `matplotlib.pyplot.imshow` call.

• **opts.include\_values?**: `boolean`

Includes values in confusion matrix.

**Default Value**

`true`

• **opts.text\_kw?**: `any`

Dict with keywords passed to `matplotlib.pyplot.text` call.

• **opts.values\_format?**: `string`

Format specification for values in confusion matrix. If `undefined`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.

• **opts.xticks\_rotation?**: `number` \| `"vertical"` \| `"horizontal"`

Rotation of xtick labels.

**Default Value**

`'horizontal'`

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/metrics/ConfusionMatrixDisplay.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/metrics/ConfusionMatrixDisplay.ts#L340)
