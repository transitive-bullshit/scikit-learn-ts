**sklearn** • **Docs**

***

Generate polynomial and interaction features.

Generate a new feature matrix consisting of all polynomial combinations of the features with degree less than or equal to the specified degree. For example, if an input sample is two dimensional and of the form \[a, b\], the degree-2 polynomial features are \[1, a, b, a^2, ab, b^2\].

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html)

## Constructors

### new PolynomialFeatures()

> **new PolynomialFeatures**(`opts`?): [`PolynomialFeatures`](PolynomialFeatures.md)

#### Parameters

• **opts?**

• **opts.degree?**: `number`

If a single int is given, it specifies the maximal degree of the polynomial features. If a tuple `(min\_degree, max\_degree)` is passed, then `min\_degree` is the minimum and `max\_degree` is the maximum polynomial degree of the generated features. Note that `min\_degree=0` and `min\_degree=1` are equivalent as outputting the degree zero term is determined by `include\_bias`.

**Default Value**

`2`

• **opts.include\_bias?**: `boolean`

If `true` (default), then include a bias column, the feature in which all polynomial powers are zero (i.e. a column of ones - acts as an intercept term in a linear model).

**Default Value**

`true`

• **opts.interaction\_only?**: `boolean`

If `true`, only interaction features are produced: features that are products of at most `degree` *distinct* input features, i.e. terms with power of 2 or higher of the same input feature are excluded:

**Default Value**

`false`

• **opts.order?**: `"C"` \| `"F"`

Order of output array in the dense case. `'F'` order is faster to compute, but may slow down subsequent estimators.

**Default Value**

`'C'`

#### Returns

[`PolynomialFeatures`](PolynomialFeatures.md)

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L19)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L393)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L366)

***

### n\_output\_features\_

#### Get Signature

> **get** **n\_output\_features\_**(): `Promise`\<`number`\>

The total number of polynomial output features. The number of output features is computed by iterating over all suitably sized combinations of input features.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L420)

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

[generated/preprocessing/PolynomialFeatures.ts:58](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L58)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L114)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute number of output features.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The data.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L131)

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

[generated/preprocessing/PolynomialFeatures.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L172)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L218)

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

[generated/preprocessing/PolynomialFeatures.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L256)

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

[generated/preprocessing/PolynomialFeatures.ts:71](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L71)

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

[generated/preprocessing/PolynomialFeatures.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L294)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Transform data to polynomial features.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The data to transform, row by row.

Prefer CSR over CSC for sparse input (for speed), but CSC is required if the degree is 4 or higher. If the degree is less than 4 and the input format is CSC, it will be converted to CSR, have its polynomial features generated, then converted back to CSC.

If the degree is 2 or 3, the method described in “Leveraging Sparsity to Speed Up Polynomial Feature Expansions of CSR Matrices Using K-Simplex Numbers” by Andrew Nystrom and John Hughes is used, which is much faster than the method used on CSC input. For this reason, a CSC input will be converted to CSR, and the output will be converted back to CSC prior to being returned, hence the preference of CSR.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/PolynomialFeatures.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/PolynomialFeatures.ts#L328)
