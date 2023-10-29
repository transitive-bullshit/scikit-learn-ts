# BernoulliRBM

Bernoulli Restricted Boltzmann Machine (RBM).

A Restricted Boltzmann Machine with binary visible units and binary hidden units. Parameters are estimated using Stochastic Maximum Likelihood (SML), also known as Persistent Contrastive Divergence (PCD) \[2\].

The time complexity of this implementation is `O(d \*\* 2)` assuming d ~ n\_features ~ n\_components.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.BernoulliRBM.html)

## Constructors

## constructor()

### Signature

```ts
new BernoulliRBM(opts?: object): BernoulliRBM;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.batch_size?` | `number` | Number of examples per minibatch.  `Default Value`  `10` |
| `opts.learning_rate?` | `number` | The learning rate for weight updates. It is *highly* recommended to tune this hyper-parameter. Reasonable values are in the 10\*\*\[0., -3.\] range.  `Default Value`  `0.1` |
| `opts.n_components?` | `number` | Number of binary hidden units.  `Default Value`  `256` |
| `opts.n_iter?` | `number` | Number of iterations/sweeps over the training dataset to perform during training.  `Default Value`  `10` |
| `opts.random_state?` | `number` | Determines random number generation for: |
| `opts.verbose?` | `number` | The verbosity level. The default, zero, means silent mode. Range of values is \[0, inf\].  `Default Value`  `0` |

### Returns

[`BernoulliRBM`](BernoulliRBM.md)

Defined in:  [generated/neural\_network/BernoulliRBM.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L27)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L131)

### fit()

Fit the model to the data X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training data. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L148)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input samples. |
| `opts.fit_params?` | `any` | Additional fit parameters. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L190)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L239)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L277)

### gibbs()

Perform one Gibbs sampling step.

#### Signature

```ts
gibbs(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.v?` | `ArrayLike`[] | Values of the visible layer to start from. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L312)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L85)

### partial\_fit()

Fit the model to the partial segment of the data X.

#### Signature

```ts
partial_fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data. |
| `opts.y?` | `ArrayLike` | Target values (`undefined` for unsupervised transformations). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L345)

### score\_samples()

Compute the pseudo-likelihood of X.

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Values of the visible layer. Must be all-boolean (not checked). |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L385)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L420)

### transform()

Compute the hidden layer activation probabilities, P(h=1|v=X).

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The data to be transformed. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L453)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L23)

### id

> `string`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L20)

### opts

> `any`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L21)

## Accessors

### components\_

Weight matrix, where `n\_features` is the number of visible units and `n\_components` is the number of hidden units.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/neural\_network/BernoulliRBM.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L536)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neural\_network/BernoulliRBM.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L611)

### h\_samples\_

Hidden Activation sampled from the model distribution, where `batch\_size` is the number of examples per minibatch and `n\_components` is the number of hidden units.

#### Signature

```ts
h_samples_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/neural\_network/BernoulliRBM.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L561)

### intercept\_hidden\_

Biases of the hidden units.

#### Signature

```ts
intercept_hidden_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neural\_network/BernoulliRBM.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L486)

### intercept\_visible\_

Biases of the visible units.

#### Signature

```ts
intercept_visible_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neural\_network/BernoulliRBM.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L511)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neural\_network/BernoulliRBM.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L586)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L72)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/neural\_network/BernoulliRBM.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L76)
