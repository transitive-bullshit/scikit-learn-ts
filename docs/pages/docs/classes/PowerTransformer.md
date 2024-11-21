**sklearn** • **Docs**

***

Apply a power transform featurewise to make data more Gaussian-like.

Power transforms are a family of parametric, monotonic transformations that are applied to make data more Gaussian-like. This is useful for modeling issues related to heteroscedasticity (non-constant variance), or other situations where normality is desired.

Currently, PowerTransformer supports the Box-Cox transform and the Yeo-Johnson transform. The optimal parameter for stabilizing variance and minimizing skewness is estimated through maximum likelihood.

Box-Cox requires input data to be strictly positive, while Yeo-Johnson supports both positive or negative data.

By default, zero-mean, unit-variance normalization is applied to the transformed data.

For an example visualization, refer to Compare PowerTransformer with other scalers. To see the effect of Box-Cox and Yeo-Johnson transformations on different distributions, see: Map data to a normal distribution.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PowerTransformer.html)

## Constructors

### new PowerTransformer()

> **new PowerTransformer**(`opts`?): [`PowerTransformer`](PowerTransformer.md)

#### Parameters

• **opts?**

• **opts.copy?**: `boolean`

Set to `false` to perform inplace computation during transformation.

**Default Value**

`true`

• **opts.method?**: `"yeo-johnson"` \| `"box-cox"`

The power transform method. Available methods are:

**Default Value**

`'yeo-johnson'`

• **opts.standardize?**: `boolean`

Set to `true` to apply zero-mean, unit-variance normalization to the transformed output.

**Default Value**

`true`

#### Returns

[`PowerTransformer`](PowerTransformer.md)

#### Defined in

[generated/preprocessing/PowerTransformer.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L33)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L31)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L30)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L29)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L26)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/PowerTransformer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L27)

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L448)

***

### lambdas\_

#### Get Signature

> **get** **lambdas\_**(): `Promise`\<`any`[]\>

The parameters of the power transformation for the selected features.

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L394)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L421)

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

[generated/preprocessing/PowerTransformer.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L59)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L113)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Estimate the optimal parameter lambda for each feature.

The optimal lambda parameter for minimizing skewness is estimated on each feature independently using maximum likelihood.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data used to estimate the optimal transformation parameters.

• **opts.y?**: `any`

Ignored.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L132)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Fit `PowerTransformer` to `X`, then transform `X`.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data used to estimate the optimal transformation parameters and to be transformed using a power transformation.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L171)

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

[generated/preprocessing/PowerTransformer.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L212)

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

[generated/preprocessing/PowerTransformer.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L250)

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

[generated/preprocessing/PowerTransformer.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L72)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Apply the inverse power transformation using the fitted lambdas.

The inverse of the Box-Cox transformation is given by:

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The transformed data.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L288)

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

[generated/preprocessing/PowerTransformer.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L326)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Apply the power transform to each feature using the fitted lambdas.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data to be transformed using a power transformation.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/preprocessing/PowerTransformer.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/PowerTransformer.ts#L360)
