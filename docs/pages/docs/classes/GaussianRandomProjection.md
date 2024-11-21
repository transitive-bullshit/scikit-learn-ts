**sklearn** • **Docs**

***

Reduce dimensionality through Gaussian random projection.

The components of the random matrix are drawn from N(0, 1 / n\_components).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.GaussianRandomProjection.html)

## Constructors

### new GaussianRandomProjection()

> **new GaussianRandomProjection**(`opts`?): [`GaussianRandomProjection`](GaussianRandomProjection.md)

#### Parameters

• **opts?**

• **opts.compute\_inverse\_components?**: `boolean`

Learn the inverse transform by computing the pseudo-inverse of the components during fit. Note that computing the pseudo-inverse does not scale well to large matrices.

**Default Value**

`false`

• **opts.eps?**: `number`

Parameter to control the quality of the embedding according to the Johnson-Lindenstrauss lemma when `n\_components` is set to ‘auto’. The value should be strictly positive.

Smaller values lead to better embedding and higher number of dimensions (n\_components) in the target projection space.

**Default Value**

`0.1`

• **opts.n\_components?**: `number` \| `"auto"`

Dimensionality of the target projection space.

n\_components can be automatically adjusted according to the number of samples in the dataset and the bound given by the Johnson-Lindenstrauss lemma. In that case the quality of the embedding is controlled by the `eps` parameter.

It should be noted that Johnson-Lindenstrauss lemma can yield very conservative estimated of the required number of components as it makes no assumption on the structure of the dataset.

**Default Value**

`'auto'`

• **opts.random\_state?**: `number`

Controls the pseudo random number generator used to generate the projection matrix at fit time. Pass an int for reproducible output across multiple function calls. See Glossary.

#### Returns

[`GaussianRandomProjection`](GaussianRandomProjection.md)

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L19)

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

Random matrix used for the projection.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L439)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L520)

***

### inverse\_components\_

#### Get Signature

> **get** **inverse\_components\_**(): `Promise`\<`ArrayLike`[]\>

Pseudo-inverse of the components, only computed if `compute\_inverse\_components` is `true`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L466)

***

### n\_components\_

#### Get Signature

> **get** **n\_components\_**(): `Promise`\<`number`\>

Concrete number of components computed when n\_components=”auto”.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L412)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L493)

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

[generated/random\_projection/GaussianRandomProjection.ts:62](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L62)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L118)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Generate a sparse random projection matrix.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training set: only the shape is used to find optimal random matrix dimensions based on the theory referenced in the afore mentioned papers.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L135)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: `ArrayLike`[]

Input samples.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L176)

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

[generated/random\_projection/GaussianRandomProjection.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L224)

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

[generated/random\_projection/GaussianRandomProjection.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L262)

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

[generated/random\_projection/GaussianRandomProjection.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L75)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Project data back to its original space.

Returns an array X\_original whose transform would be X. Note that even if X is sparse, X\_original is dense: this may use a lot of RAM.

If `compute\_inverse\_components` is `false`, the inverse of the components is computed during each call to `inverse\_transform` which can be costly.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Data to be transformed back.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L302)

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

[generated/random\_projection/GaussianRandomProjection.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L340)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Project the data by using matrix product with the random matrix.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The input data to project into a smaller dimensional space.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/random\_projection/GaussianRandomProjection.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/random_projection/GaussianRandomProjection.ts#L376)
