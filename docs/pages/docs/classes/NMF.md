**sklearn** • **Docs**

***

Non-Negative Matrix Factorization (NMF).

Find two non-negative matrices, i.e. matrices with all non-negative elements, (W, H) whose product approximates the non-negative matrix X. This factorization can be used for example for dimensionality reduction, source separation or topic extraction.

The objective function is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html)

## Constructors

### new NMF()

> **new NMF**(`opts`?): [`NMF`](NMF.md)

#### Parameters

• **opts?**

• **opts.alpha\_H?**: `number` \| `"same"`

Constant that multiplies the regularization terms of `H`. Set it to zero to have no regularization on `H`. If “same” (default), it takes the same value as `alpha\_W`.

**Default Value**

`'same'`

• **opts.alpha\_W?**: `number`

Constant that multiplies the regularization terms of `W`. Set it to zero (default) to have no regularization on `W`.

**Default Value**

`0`

• **opts.beta\_loss?**: `number` \| `"frobenius"` \| `"kullback-leibler"` \| `"itakura-saito"`

Beta divergence to be minimized, measuring the distance between X and the dot product WH. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for beta\_loss <= 0 (or ‘itakura-saito’), the input matrix X cannot contain zeros. Used only in ‘mu’ solver.

**Default Value**

`'frobenius'`

• **opts.init?**: `"random"` \| `"nndsvd"` \| `"nndsvda"` \| `"nndsvdar"` \| `"custom"`

Method used to initialize the procedure. Valid options:

• **opts.l1\_ratio?**: `number`

The regularization mixing parameter, with 0 <= l1\_ratio <= 1. For l1\_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1\_ratio = 1 it is an elementwise L1 penalty. For 0 < l1\_ratio < 1, the penalty is a combination of L1 and L2.

**Default Value**

`0`

• **opts.max\_iter?**: `number`

Maximum number of iterations before timing out.

**Default Value**

`200`

• **opts.n\_components?**: `number` \| `"auto"`

Number of components, if n\_components is not set all features are kept. If `n\_components='auto'`, the number of components is automatically inferred from W or H shapes.

• **opts.random\_state?**: `number`

Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See Glossary.

• **opts.shuffle?**: `boolean`

If true, randomize the order of coordinates in the CD solver.

**Default Value**

`false`

• **opts.solver?**: `"cd"` \| `"mu"`

Numerical solver to use:

**Default Value**

`'cd'`

• **opts.tol?**: `number`

Tolerance of the stopping condition.

**Default Value**

`0.0001`

• **opts.verbose?**: `number`

Whether to be verbose.

**Default Value**

`0`

#### Returns

[`NMF`](NMF.md)

#### Defined in

[generated/decomposition/NMF.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/NMF.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/NMF.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/NMF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/decomposition/NMF.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/decomposition/NMF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L19)

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

Factorization matrix, sometimes called ‘dictionary’.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/NMF.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L437)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/NMF.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L553)

***

### n\_components\_

#### Get Signature

> **get** **n\_components\_**(): `Promise`\<`number`\>

The number of components. It is same as the `n\_components` parameter if it was given. Otherwise, it will be same as the number of features.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/NMF.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L460)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/NMF.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L530)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Actual number of iterations.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/NMF.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L508)

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

[generated/decomposition/NMF.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L108)

***

### reconstruction\_err\_

#### Get Signature

> **get** **reconstruction\_err\_**(): `Promise`\<`number`\>

Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/NMF.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L483)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/NMF.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L159)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn a NMF model for the data X.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters (keyword arguments) and values passed to the fit\_transform instance.

• **opts.X?**: `ArrayLike`

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/NMF.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L176)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Learn a NMF model for the data X and returns the transformed data.

This is more efficient than calling fit followed by transform.

#### Parameters

• **opts**

• **opts.H?**: `ArrayLike`[]

If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`.

• **opts.W?**: `ArrayLike`[]

If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`.

• **opts.X?**: `ArrayLike`

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/NMF.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L219)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/NMF.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L268)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/NMF.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L302)

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

[generated/decomposition/NMF.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L121)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform data back to its original space.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Transformed data matrix.

• **opts.Xt?**: `ArrayLike`

Transformed data matrix.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/NMF.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L334)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/NMF.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L373)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform the data X according to the fitted NMF model.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/NMF.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/decomposition/NMF.ts#L405)
