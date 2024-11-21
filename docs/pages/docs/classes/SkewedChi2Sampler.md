**sklearn** • **Docs**

***

Approximate feature map for “skewed chi-squared” kernel.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.SkewedChi2Sampler.html)

## Constructors

### new SkewedChi2Sampler()

> **new SkewedChi2Sampler**(`opts`?): [`SkewedChi2Sampler`](SkewedChi2Sampler.md)

#### Parameters

• **opts?**

• **opts.n\_components?**: `number`

Number of Monte Carlo samples per original feature. Equals the dimensionality of the computed feature space.

**Default Value**

`100`

• **opts.random\_state?**: `number`

Pseudo-random number generator to control the generation of the random weights and random offset when fitting the training data. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.skewedness?**: `number`

“skewedness” parameter of the kernel. Needs to be cross-validated.

**Default Value**

`1`

#### Returns

[`SkewedChi2Sampler`](SkewedChi2Sampler.md)

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L17)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L434)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L407)

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

[generated/kernel\_approximation/SkewedChi2Sampler.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L47)

***

### random\_offset\_

#### Get Signature

> **get** **random\_offset\_**(): `Promise`\<`ArrayLike`[]\>

Bias term, which will be added to the data. It is uniformly distributed between 0 and 2\*pi.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L380)

***

### random\_weights\_

#### Get Signature

> **get** **random\_weights\_**(): `Promise`\<`ArrayLike`[]\>

Weight array, sampled from a secant hyperbolic distribution, which will be used to linearly transform the log of the data.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L353)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L101)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model with X.

Samples random projection according to n\_features.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L120)

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

[generated/kernel\_approximation/SkewedChi2Sampler.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L161)

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

[generated/kernel\_approximation/SkewedChi2Sampler.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L209)

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

[generated/kernel\_approximation/SkewedChi2Sampler.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L247)

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

[generated/kernel\_approximation/SkewedChi2Sampler.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L60)

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

[generated/kernel\_approximation/SkewedChi2Sampler.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L285)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Apply the approximate feature map to X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

New data, where `n\_samples` is the number of samples and `n\_features` is the number of features. All values of X must be strictly greater than “-skewedness”.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/kernel\_approximation/SkewedChi2Sampler.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/SkewedChi2Sampler.ts#L319)
