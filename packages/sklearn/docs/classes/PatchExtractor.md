[**sklearn**](../README.md) • **Docs**

***

Extracts patches from a collection of images.

Read more in the [User Guide](../feature_extraction.html#image-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.image.PatchExtractor.html)

## Constructors

### new PatchExtractor()

> **new PatchExtractor**(`opts`?): [`PatchExtractor`](PatchExtractor.md)

#### Parameters

• **opts?**

• **opts.max\_patches?**: `number`

The maximum number of patches per image to extract. If `max\_patches` is a float in (0, 1), it is taken to mean a proportion of the total number of patches. If set to `undefined`, extract all possible patches.

• **opts.patch\_size?**: `any`

The dimensions of one patch. If set to `undefined`, the patch size will be automatically set to `(img\_height // 10, img\_width // 10)`, where `img\_height` and `img\_width` are the dimensions of the input images.

• **opts.random\_state?**: `number`

Determines the random number generator used for random sampling when `max\_patches is not None`. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).

#### Returns

[`PatchExtractor`](PatchExtractor.md)

#### Defined in

[generated/feature\_extraction/image/PatchExtractor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/feature\_extraction/image/PatchExtractor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/feature\_extraction/image/PatchExtractor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/feature\_extraction/image/PatchExtractor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/feature\_extraction/image/PatchExtractor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/feature\_extraction/image/PatchExtractor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L17)

## Accessors

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

[generated/feature\_extraction/image/PatchExtractor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L43)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/feature\_extraction/image/PatchExtractor.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L95)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Only validate the parameters of the estimator.

This method allows to: (i) validate the parameters of the estimator and (ii) be consistent with the scikit-learn transformer API.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[][]

Array of images from which to extract patches. For color images, the last dimension specifies the channel: a RGB image would have `n\_channels=3`.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/feature\_extraction/image/PatchExtractor.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L114)

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

[generated/feature\_extraction/image/PatchExtractor.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L153)

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

[generated/feature\_extraction/image/PatchExtractor.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L197)

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

[generated/feature\_extraction/image/PatchExtractor.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L56)

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

[generated/feature\_extraction/image/PatchExtractor.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L233)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`[]\>

Transform the image samples in `X` into a matrix of patch data.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[][]

Array of images from which to extract patches. For color images, the last dimension specifies the channel: a RGB image would have `n\_channels=3`.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/feature\_extraction/image/PatchExtractor.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/feature_extraction/image/PatchExtractor.ts#L265)
