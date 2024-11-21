[**sklearn**](../README.md) • **Docs**

***

Neighborhood Components Analysis.

Neighborhood Component Analysis (NCA) is a machine learning algorithm for metric learning. It learns a linear transformation in a supervised fashion to improve the classification accuracy of a stochastic nearest neighbors rule in the transformed space.

Read more in the [User Guide](../neighbors.html#nca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html)

## Constructors

### new NeighborhoodComponentsAnalysis()

> **new NeighborhoodComponentsAnalysis**(`opts`?): [`NeighborhoodComponentsAnalysis`](NeighborhoodComponentsAnalysis.md)

#### Parameters

• **opts?**

• **opts.callback?**: `any`

If not `undefined`, this function is called after every iteration of the optimizer, taking as arguments the current solution (flattened transformation matrix) and the number of iterations. This might be useful in case one wants to examine or store the transformation found after each iteration.

• **opts.init?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[] \| `"auto"` \| `"random"` \| `"identity"` \| `"pca"` \| `"lda"`

Initialization of the linear transformation. Possible options are `'auto'`, `'pca'`, `'lda'`, `'identity'`, `'random'`, and a numpy array of shape `(n\_features\_a, n\_features\_b)`.

**Default Value**

`'auto'`

• **opts.max\_iter?**: `number`

Maximum number of iterations in the optimization.

**Default Value**

`50`

• **opts.n\_components?**: `number`

Preferred dimensionality of the projected space. If `undefined` it will be set to `n\_features`.

• **opts.random\_state?**: `number`

A pseudo random number generator object or a seed for it if int. If `init='random'`, `random\_state` is used to initialize the random transformation. If `init='pca'`, `random\_state` is passed as an argument to PCA when initializing the transformation. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.tol?**: `number`

Convergence tolerance for the optimization.

**Default Value**

`0.00001`

• **opts.verbose?**: `number`

If 0, no progress messages will be printed. If 1, progress messages will be printed to stdout. If > 1, progress messages will be printed and the `disp` parameter of [`scipy.optimize.minimize`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html#scipy.optimize.minimize "(in SciPy v1.14.1)") will be set to `verbose \- 2`.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

If `true` and [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit") has been called before, the solution of the previous call to [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit") is used as the initial linear transformation (`n\_components` and `init` will be ignored).

**Default Value**

`false`

#### Returns

[`NeighborhoodComponentsAnalysis`](NeighborhoodComponentsAnalysis.md)

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L19)

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The linear transformation learned during fitting.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L392)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L500)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L419)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Counts the number of iterations performed by the optimizer.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L446)

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

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L80)

***

### random\_state\_

#### Get Signature

> **get** **random\_state\_**(): `Promise`\<`any`\>

Pseudo random number generator object used during initialization.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L473)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L136)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model according to the given training data.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

The training samples.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The corresponding training labels.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L153)

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

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L196)

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

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L244)

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

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L282)

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

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L93)

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

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L320)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Apply the learned transformation to the given data.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Data samples.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/NeighborhoodComponentsAnalysis.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L356)
