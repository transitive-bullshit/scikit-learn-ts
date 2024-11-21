**sklearn** • **Docs**

***

Bernoulli Restricted Boltzmann Machine (RBM).

A Restricted Boltzmann Machine with binary visible units and binary hidden units. Parameters are estimated using Stochastic Maximum Likelihood (SML), also known as Persistent Contrastive Divergence (PCD) \[2\].

The time complexity of this implementation is `O(d \*\* 2)` assuming d ~ n\_features ~ n\_components.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.BernoulliRBM.html)

## Constructors

### new BernoulliRBM()

> **new BernoulliRBM**(`opts`?): [`BernoulliRBM`](BernoulliRBM.md)

#### Parameters

• **opts?**

• **opts.batch\_size?**: `number`

Number of examples per minibatch.

**Default Value**

`10`

• **opts.learning\_rate?**: `number`

The learning rate for weight updates. It is *highly* recommended to tune this hyper-parameter. Reasonable values are in the 10\*\*\[0., -3.\] range.

**Default Value**

`0.1`

• **opts.n\_components?**: `number`

Number of binary hidden units.

**Default Value**

`256`

• **opts.n\_iter?**: `number`

Number of iterations/sweeps over the training dataset to perform during training.

**Default Value**

`10`

• **opts.random\_state?**: `number`

Determines random number generation for:

• **opts.verbose?**: `number`

The verbosity level. The default, zero, means silent mode. Range of values is \[0, inf\].

**Default Value**

`0`

#### Returns

[`BernoulliRBM`](BernoulliRBM.md)

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L21)

## Accessors

### components\_

#### Get Signature

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

Weight matrix, where `n\_features` is the number of visible units and `n\_components` is the number of hidden units.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L511)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L586)

***

### h\_samples\_

#### Get Signature

> **get** **h\_samples\_**(): `Promise`\<`ArrayLike`[]\>

Hidden Activation sampled from the model distribution, where `batch\_size` is the number of examples per minibatch and `n\_components` is the number of hidden units.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L536)

***

### intercept\_hidden\_

#### Get Signature

> **get** **intercept\_hidden\_**(): `Promise`\<`ArrayLike`\>

Biases of the hidden units.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L461)

***

### intercept\_visible\_

#### Get Signature

> **get** **intercept\_visible\_**(): `Promise`\<`ArrayLike`\>

Biases of the visible units.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L486)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L561)

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

[generated/neural\_network/BernoulliRBM.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L72)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L124)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model to the data X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training data.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L141)

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

[generated/neural\_network/BernoulliRBM.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L180)

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

[generated/neural\_network/BernoulliRBM.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L224)

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

[generated/neural\_network/BernoulliRBM.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L260)

***

### gibbs()

> **gibbs**(`opts`): `Promise`\<`ArrayLike`[]\>

Perform one Gibbs sampling step.

#### Parameters

• **opts**

• **opts.v?**: `ArrayLike`[]

Values of the visible layer to start from.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L294)

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

[generated/neural\_network/BernoulliRBM.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L85)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Fit the model to the partial segment of the data X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training data.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L326)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Compute the pseudo-likelihood of X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Values of the visible layer. Must be all-boolean (not checked).

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L363)

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

[generated/neural\_network/BernoulliRBM.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L397)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Compute the hidden layer activation probabilities, P(h=1|v=X).

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The data to be transformed.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/neural\_network/BernoulliRBM.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L429)
