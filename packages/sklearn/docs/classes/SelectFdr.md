[**sklearn**](../README.md) • **Docs**

***

Filter: Select the p-values for an estimated false discovery rate.

This uses the Benjamini-Hochberg procedure. `alpha` is an upper bound on the expected false discovery rate.

Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFdr.html)

## Constructors

### new SelectFdr()

> **new SelectFdr**(`opts`?): [`SelectFdr`](SelectFdr.md)

#### Parameters

• **opts?**

• **opts.alpha?**: `number`

The highest uncorrected p-value for features to keep.

**Default Value**

`0.05`

• **opts.score\_func?**: `any`

Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). Default is f\_classif (see below “See Also”). The default function only works with classification tasks.

#### Returns

[`SelectFdr`](SelectFdr.md)

#### Defined in

[generated/feature\_selection/SelectFdr.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/SelectFdr.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature\_selection/SelectFdr.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/feature\_selection/SelectFdr.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/feature\_selection/SelectFdr.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/feature\_selection/SelectFdr.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L19)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L464)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L439)

***

### pvalues\_

#### Get Signature

> **get** **pvalues\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

p-values of feature scores.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L416)

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

[generated/feature\_selection/SelectFdr.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L42)

***

### scores\_

#### Get Signature

> **get** **scores\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Scores of features.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L393)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L93)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Run score function on (X, y) and get the appropriate features.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The training input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The target values (class labels in classification, real numbers in regression). If the selector is unsupervised then `y` can be set to `undefined`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L110)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L149)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Mask feature names according to selected features.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L191)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L227)

***

### get\_support()

> **get\_support**(`opts`): `Promise`\<`any`\>

Get a mask, or integer index, of the features selected.

#### Parameters

• **opts**

• **opts.indices?**: `boolean`

If `true`, the return value will be an array of integers, rather than a boolean mask.

**Default Value**

`false`

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L261)

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

[generated/feature\_selection/SelectFdr.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L55)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Reverse the transformation operation.

#### Parameters

• **opts**

• **opts.X?**: `any`

The input samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L295)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L329)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Reduce X to the selected features.

#### Parameters

• **opts**

• **opts.X?**: `any`

The input samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_selection/SelectFdr.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/feature_selection/SelectFdr.ts#L361)
