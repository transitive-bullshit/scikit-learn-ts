# Class: AdditiveChi2Sampler

Approximate feature map for additive chi2 kernel.

Uses sampling the fourier transform of the kernel characteristic at regular intervals.

Since the kernel that is to be approximated is additive, the components of the input vectors can be treated separately. Each entry in the original space is transformed into 2\*sample_steps-1 features, where sample_steps is a parameter of the method. Typical values of sample_steps include 1, 2 and 3.

Optimal choices for the sampling interval for certain data ranges can be computed (see the reference). The default values should be reasonable.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../kernel_approximation.html#additive-chi-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.AdditiveChi2Sampler.html)

## Constructors

### new AdditiveChi2Sampler()

> **new AdditiveChi2Sampler**(`opts`?): [`AdditiveChi2Sampler`](AdditiveChi2Sampler.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.sample_interval`? | `number` | Sampling interval. Must be specified when sample_steps not in {1,2,3}. |
| `opts.sample_steps`? | `number` | Gives the number of (complex) sampling points. |

**Returns** [`AdditiveChi2Sampler`](AdditiveChi2Sampler.md)

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/kernel\_approximation/AdditiveChi2Sampler.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/kernel\_approximation/AdditiveChi2Sampler.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/kernel\_approximation/AdditiveChi2Sampler.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L25) |
| `id` | `string` | `undefined` | [generated/kernel\_approximation/AdditiveChi2Sampler.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L22) |
| `opts` | `any` | `undefined` | [generated/kernel\_approximation/AdditiveChi2Sampler.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L23) |

## Accessors

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L381)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L354)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:46](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L46)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L102)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Only validates estimator’s parameters.

This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | Training data, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L121)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.fit_params`? | `any` | Additional fit parameters. |
| `opts.X`? | `ArrayLike`[] | Input samples. |
| `opts.y`? | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L162)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.kernel_approximation.AdditiveChi2Sampler.fit "sklearn.kernel_approximation.AdditiveChi2Sampler.fit"). |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L208)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L246)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L59)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L284)

***

### transform()

> **transform**(`opts`): `Promise`\<`any`\>

Apply approximate feature map to X.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | Training data, where `n_samples` is the number of samples and `n_features` is the number of features. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/kernel\_approximation/AdditiveChi2Sampler.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/kernel_approximation/AdditiveChi2Sampler.ts#L320)
