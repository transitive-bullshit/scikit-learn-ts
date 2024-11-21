**sklearn** • **Docs**

***

Polynomial kernel approximation via Tensor Sketch.

Implements Tensor Sketch, which approximates the feature map of the polynomial kernel:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.PolynomialCountSketch.html)

## Constructors

### new PolynomialCountSketch()

> **new PolynomialCountSketch**(`opts`?): [`PolynomialCountSketch`](PolynomialCountSketch.md)

#### Parameters

• **opts?**

• **opts.coef0?**: `number`

Constant term of the polynomial kernel whose feature map will be approximated.

**Default Value**

`0`

• **opts.degree?**: `number`

Degree of the polynomial kernel whose feature map will be approximated.

**Default Value**

`2`

• **opts.gamma?**: `number`

Parameter of the polynomial kernel whose feature map will be approximated.

**Default Value**

`1`

• **opts.n\_components?**: `number`

Dimensionality of the output feature space. Usually, `n\_components` should be greater than the number of features in input samples in order to achieve good performance. The optimal score / run time balance is typically achieved around `n\_components` = 10 \* `n\_features`, but this depends on the specific dataset being used.

**Default Value**

`100`

• **opts.random\_state?**: `number`

Determines random number generation for indexHash and bitHash initialization. Pass an int for reproducible results across multiple function calls. See Glossary.

#### Returns

[`PolynomialCountSketch`](PolynomialCountSketch.md)

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L17)

## Accessors

### bitHash\_

#### Get Signature

> **get** **bitHash\_**(): `Promise`\<`ArrayLike`[]\>

Array with random entries in {+1, -1}, used to represent the 2-wise independent hash functions for Count Sketch computation.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L400)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L454)

***

### indexHash\_

#### Get Signature

> **get** **indexHash\_**(): `Promise`\<`ArrayLike`[]\>

Array of indexes in range \0, n\_components) used to represent the 2-wise independent hash functions for Count Sketch computation.

##### Returns

`Promise`\<[`ArrayLike`[]\>

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L373)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L427)

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

[generated/kernel\_approximation/PolynomialCountSketch.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L61)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L117)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model with X.

Initializes the internal variables. The method needs no information about the distribution of data, so we only care about n\_features in X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L136)

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

[generated/kernel\_approximation/PolynomialCountSketch.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L177)

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

[generated/kernel\_approximation/PolynomialCountSketch.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L225)

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

[generated/kernel\_approximation/PolynomialCountSketch.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L263)

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

[generated/kernel\_approximation/PolynomialCountSketch.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L74)

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

[generated/kernel\_approximation/PolynomialCountSketch.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L301)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Generate the feature map approximation for X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

New data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/kernel\_approximation/PolynomialCountSketch.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L337)
