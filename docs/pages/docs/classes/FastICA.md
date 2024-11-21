**sklearn** • **Docs**

***

FastICA: a fast algorithm for Independent Component Analysis.

The implementation is based on [\[1\]](#r44c805292efc-1).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FastICA.html)

## Constructors

### new FastICA()

> **new FastICA**(`opts`?): [`FastICA`](FastICA.md)

#### Parameters

• **opts?**

• **opts.algorithm?**: `"parallel"` \| `"deflation"`

Specify which algorithm to use for FastICA.

**Default Value**

`'parallel'`

• **opts.fun?**: `"logcosh"` \| `"exp"` \| `"cube"`

The functional form of the G function used in the approximation to neg-entropy. Could be either ‘logcosh’, ‘exp’, or ‘cube’. You can also provide your own function. It should return a tuple containing the value of the function, and of its derivative, in the point. The derivative should be averaged along its last dimension. Example:

**Default Value**

`'logcosh'`

• **opts.fun\_args?**: `any`

Arguments to send to the functional form. If empty or `undefined` and if fun=’logcosh’, fun\_args will take value {‘alpha’ : 1.0}.

• **opts.max\_iter?**: `number`

Maximum number of iterations during fit.

**Default Value**

`200`

• **opts.n\_components?**: `number`

Number of components to use. If `undefined` is passed, all are used.

• **opts.random\_state?**: `number`

Used to initialize `w\_init` when not specified, with a normal distribution. Pass an int, for reproducible results across multiple function calls. See Glossary.

• **opts.tol?**: `number`

A positive scalar giving the tolerance at which the un-mixing matrix is considered to have converged.

**Default Value**

`0.0001`

• **opts.w\_init?**: `ArrayLike`[]

Initial un-mixing array. If `w\_init=None`, then an array of values drawn from a normal distribution is used.

• **opts.whiten?**: `string` \| `boolean`

Specify the whitening strategy to use.

**Default Value**

`'unit-variance'`

• **opts.whiten\_solver?**: `"svd"` \| `"eigh"`

The solver to use for whitening.

**Default Value**

`'svd'`

#### Returns

[`FastICA`](FastICA.md)

#### Defined in

[generated/decomposition/FastICA.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/decomposition/FastICA.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/decomposition/FastICA.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/decomposition/FastICA.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/decomposition/FastICA.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/decomposition/FastICA.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L19)

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

The linear operator to apply to the data to get the independent sources. This is equal to the unmixing matrix when `whiten` is `false`, and equal to `np.dot(unmixing\_matrix, self.whitening\_)` when `whiten` is `true`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/FastICA.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L488)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/decomposition/FastICA.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L581)

***

### mean\_

#### Get Signature

> **get** **mean\_**(): `Promise`\<`any`\>

The mean over features. Only set if `self.whiten` is `true`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/FastICA.ts:534](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L534)

***

### mixing\_

#### Get Signature

> **get** **mixing\_**(): `Promise`\<`ArrayLike`[]\>

The pseudo-inverse of `components\_`. It is the linear operator that maps independent sources to the data.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/FastICA.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L511)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/FastICA.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L556)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

If the algorithm is “deflation”, n\_iter is the maximum number of iterations run across all components. Else they are just the number of iterations taken to converge.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/decomposition/FastICA.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L606)

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

[generated/decomposition/FastICA.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L92)

***

### whitening\_

#### Get Signature

> **get** **whitening\_**(): `Promise`\<`ArrayLike`[]\>

Only set if whiten is ‘`true`’. This is the pre-whitening matrix that projects data onto the first `n\_components` principal components.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/FastICA.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L629)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/decomposition/FastICA.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L143)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model to X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/FastICA.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L160)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Fit the model and recover the sources from X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/FastICA.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L197)

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

[generated/decomposition/FastICA.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L236)

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

[generated/decomposition/FastICA.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L270)

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

[generated/decomposition/FastICA.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L105)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform the sources back to the mixed data (apply mixing matrix).

#### Parameters

• **opts**

• **opts.copy?**: `boolean`

If `false`, data passed to fit are overwritten. Defaults to `true`.

**Default Value**

`true`

• **opts.X?**: `ArrayLike`[]

Sources, where `n\_samples` is the number of samples and `n\_components` is the number of components.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/FastICA.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L302)

***

### set\_inverse\_transform\_request()

> **set\_inverse\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `inverse\_transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.copy?**: `string` \| `boolean`

Metadata routing for `copy` parameter in `inverse\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/FastICA.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L345)

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

[generated/decomposition/FastICA.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L381)

***

### set\_transform\_request()

> **set\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.copy?**: `string` \| `boolean`

Metadata routing for `copy` parameter in `transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/decomposition/FastICA.ts:417](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L417)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Recover the sources from X (apply the unmixing matrix).

#### Parameters

• **opts**

• **opts.copy?**: `boolean`

If `false`, data passed to fit can be overwritten. Defaults to `true`.

**Default Value**

`true`

• **opts.X?**: `ArrayLike`[]

Data to transform, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/decomposition/FastICA.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/decomposition/FastICA.ts#L449)
